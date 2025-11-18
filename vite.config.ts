import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Agora a variável será usada!

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
    tailwindcss(), // <--- ADICIONE ESTA LINHA!
  ],
})