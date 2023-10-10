import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-tailwind-ts-boilerplate/',
  resolve: { alias: { '@': '/src' } }
})
