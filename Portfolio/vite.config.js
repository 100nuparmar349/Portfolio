import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",  // Make sure assets load from the correct path
  build: {
    outDir: "dist",
  },
})
