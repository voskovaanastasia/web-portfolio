import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite still emits an imported asset after tree-shaking has dropped its only importer. While the
// "Built with Claude" case is hidden (production, see src/config/publishedCases.js) its images would
// be left in dist/assets unreferenced. Drop those assets, and only those that no chunk references.
const dropUnusedBuiltWithClaudeAssets = () => ({
  name: 'drop-unused-built-with-claude-assets',
  apply: 'build',
  generateBundle(_, bundle) {
    const code = Object.values(bundle)
      .map((file) => (file.type === 'chunk' ? file.code : typeof file.source === 'string' ? file.source : ''))
      .join('\n')
    for (const [key, file] of Object.entries(bundle)) {
      if (file.type === 'asset' && /(^|\/)case-built-with-claude-[^/]*$/.test(key) && !code.includes(key)) {
        delete bundle[key]
      }
    }
  },
})

export default defineConfig({
  // Never inline small assets as base64: the tool icons (~20 KB base64, barely compressible) were making the entry
  // bundle and the pre-rendered home HTML bigger, and those are on the critical path. As files they load on demand.
  build: { assetsInlineLimit: 0 },
  plugins: [react(), dropUnusedBuiltWithClaudeAssets()],
  define: {
    // True only for the Vercel production deploy. Local builds, `vite dev` and previews are false.
    __IS_PRODUCTION__: JSON.stringify(process.env.VERCEL_ENV === 'production'),
  },
})
