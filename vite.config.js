import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/cathleenexus-fansite/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  // 👇 Allow importing .mp4 files
  assetsInclude: ['**/*.mp4'],

  // 👇 Add alias for easy imports like "@/firebase"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
