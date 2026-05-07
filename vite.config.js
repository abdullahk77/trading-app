import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ONLY strictly necessary if using GitHub Pages. 
  // Vercel ignores this and routes perfectly without it.
  base: '/trading-app/', 
})
