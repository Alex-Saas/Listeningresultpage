import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetStub(): Plugin {
  const STUB_ID = '\0figma-asset-stub'
  return {
    name: 'figma-asset-stub',
    resolveId(id) {
      if (id.startsWith('figma:')) return STUB_ID
    },
    load(id) {
      if (id === STUB_ID) return 'export default ""'
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetStub(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
