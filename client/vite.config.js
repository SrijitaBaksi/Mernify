import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allow external access
    port: 5173,
    strictPort: true,
    // allowedHosts: ['all'], // <--- must be array with string 'all'
    // origin: ['https://71877679a140.ngrok-free.app/','https://960abb00815d.ngrok-free.app/'] // <--- ngrok domain
  },
})
