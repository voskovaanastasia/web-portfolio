// Portfolio card for the locked "Built with Claude" case. Projects.jsx only includes it while
// BUILT_WITH_CLAUDE_PUBLISHED is true, so the cover images stay out of the build when locked.
import caseBuiltWithClaude480 from '../assets/case-built-with-claude-480w.webp';
import caseBuiltWithClaude960 from '../assets/case-built-with-claude-960w.webp';

const builtWithClaudeProject = {
  id: 'built-with-claude',
  category: 'Built with Claude',
  image480: caseBuiltWithClaude480,
  image960: caseBuiltWithClaude960,
  tags: ['Claude Code', 'Figma MCP', 'Design System', 'Lighthouse 95'],
  title: 'This Portfolio: Designed and Shipped with Claude Code',
  description:
    'A portfolio treated as a real product: researched against other designers’ sites, designed in Figma, built with Claude Code, and measured. A case study on directing AI without giving up design judgement, including the mistakes I caught along the way.',
};

export default builtWithClaudeProject;
