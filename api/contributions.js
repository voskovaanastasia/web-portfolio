import { fetchBuildLog } from './_lib/githubContributions.js';

// Live data for the "Build log" block. Cached at the edge for 5 minutes (GitHub's own calendar lags
// behind commits, so this is "recent", not instant). The token stays server-side; errors reveal nothing.
export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    res.status(405).end();
    return;
  }
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error('missing token');
    const { asOf, totalContributions, days, repoCommits } = await fetchBuildLog(token);
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
    res.status(200).json({ asOf, totalContributions, days, repoCommits });
  } catch {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).end();
  }
}
