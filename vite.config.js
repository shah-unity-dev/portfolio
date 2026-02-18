import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://shah-unity-dev.github.io/portfolio/',
  plugins: [react()],
})
