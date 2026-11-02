// Runs in `prebuild`. Fetches the GitHub contribution calendar and the repository commit count and writes
// src/data/buildLog.generated.json (gitignored, so local builds leave no diff). The page falls back to the
// committed seed, src/data/buildLog.seed.json, when this file is missing. This script must never fail the
// build: no token or any error means the existing snapshot is kept and a warning is printed.
// The commit count comes from the GraphQL API, not git: Vercel's build clone can be shallow.
import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchBuildLog } from '../api/_lib/githubContributions.js';
import { buildLogStats } from '../src/lib/buildLogStats.js';

const out = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src/data/buildLog.generated.json');

try {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('fetch-build-log: GITHUB_TOKEN is not set, keeping the existing snapshot.');
  } else {
    const data = await fetchBuildLog(token);
    const stats = buildLogStats(data.days);
    writeFileSync(out, `${JSON.stringify(data, null, 1)}\n`);
    console.log(`fetch-build-log: ${stats.totalContributions} contributions on ${stats.activeDays} days, ${data.repoCommits ?? '?'} commits, as of ${data.asOf}.`);
  }
} catch (error) {
  console.warn(`fetch-build-log: ${error.message}. Keeping the existing snapshot.`);
}
process.exit(0);
