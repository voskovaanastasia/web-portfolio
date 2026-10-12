// Files that may hold raw colour values, and why. Shared by check-tokens.cjs and count-tokens.cjs.
module.exports = [
  [/^src\/styles\/globals\.css$/, 'the tokens file'],
  [/^src\/pages\/\w+Case\.jsx$/, 'client product palettes in the case pages'],
  [/^src\/components\/ContactSection\.jsx$/, 'third-party brand logo colours (Google, Upwork, LinkedIn, GitHub) and the sticky-note illustration'],
  [/^src\/components\/IATree\.jsx$/, 'information-architecture diagram palette'],
];
