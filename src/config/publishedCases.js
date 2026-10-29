// Visibility of the "Built with Claude" case study ("This Portfolio: Designed and Shipped
// with Claude Code"): the portfolio card, the "Built with Claude" tab and /project/built-with-claude.
//
// BUILT_WITH_CLAUDE_PUBLISHED is the production switch. Keep it false until the case is meant to go
// live on the production site; merging a branch into main must never publish the case by accident.
// SHOW_BUILT_WITH_CLAUDE is what the app reads: it is also true on every non-production build
// (local, Vercel previews), so the case can be reviewed on a test branch. __IS_PRODUCTION__ is
// defined in vite.config.js from VERCEL_ENV. While SHOW_BUILT_WITH_CLAUDE is false the case is
// "coming soon": the card and the tab stay in the lists with a lock, a "Coming soon" tag and a blurred
// cover but are not links, the route renders the 404 page, and the case chunk stays out of the build.
// The case stays noindex and out of sitemap.xml and llms.txt in every environment.
export const BUILT_WITH_CLAUDE_PUBLISHED = false;
export const SHOW_BUILT_WITH_CLAUDE = BUILT_WITH_CLAUDE_PUBLISHED || !__IS_PRODUCTION__;
export const BUILT_WITH_CLAUDE_COMING_SOON = !SHOW_BUILT_WITH_CLAUDE;
