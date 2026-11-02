// GraphQL query and shaping shared by scripts/fetch-build-log.mjs (build time) and api/contributions.js
// (live). The underscore keeps Vercel from exposing this file as an endpoint.
const LOGIN = 'voskovaanastasia';
const REPO_OWNER = 'voskovaanastasia';
const REPO_NAME = 'web-portfolio';

const QUERY = `
query ($login: String!, $owner: String!, $name: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
  repository(owner: $owner, name: $name) {
    defaultBranchRef { target { ... on Commit { history { totalCount } } } }
  }
}`;

/** Returns { asOf, totalContributions, days: [{date, count}] (non-zero only), repoCommits }. Throws on any failure. */
export async function fetchBuildLog(token) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'portfolio-build-log' },
    body: JSON.stringify({ query: QUERY, variables: { login: LOGIN, owner: REPO_OWNER, name: REPO_NAME } }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
  const { data, errors } = await response.json();
  const calendar = data?.user?.contributionsCollection?.contributionCalendar;
  if (errors?.length && !calendar) throw new Error('GitHub returned errors');
  if (!calendar) throw new Error('No contribution calendar in the response');

  const asOf = new Date().toISOString().slice(0, 10);
  const days = calendar.weeks
    .flatMap((week) => week.contributionDays)
    .filter((day) => day.contributionCount > 0 && day.date <= asOf)
    .map((day) => ({ date: day.date, count: day.contributionCount }));
  const commits = data?.repository?.defaultBranchRef?.target?.history?.totalCount;

  return {
    asOf,
    totalContributions: calendar.totalContributions,
    days,
    repoCommits: Number.isInteger(commits) ? commits : null,
  };
}
