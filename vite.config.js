import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(
      {
        config: {
          content: ['./src/**/*.{js,jsx,ts,tsx}'],
          theme: {
            extend: {
              colors: {
                colors1: '#e4ab2e',
                colors2: '#5db98d',
                colors3: '#eb6683',
                colors4: '#3ea4d9',
                colors5: '#95cd4e',
                colors6: '#d876e5',
              },
            },
          },
        },
      }
    ),
  ],
})
