import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so the site works on Netlify, Vercel,
// GitHub Pages (including sub-paths) and any static host without extra config.
export default defineConfig({
  base: './',
  plugins: [react()],
})
