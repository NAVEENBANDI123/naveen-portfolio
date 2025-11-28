import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: "/naveen-portfolio/",
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 🔥 forces IP binding
    port: 5173
  }
})
