import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo name for assets to resolve correctly
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
