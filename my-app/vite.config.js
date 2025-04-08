import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Экспортируем конфигурацию
export default defineConfig({
  plugins: [react()], // Подключаем плагин React
  server: {
    proxy: {
      '/api': {
        target: 'https://kudago.com', // Целевой сервер
        changeOrigin: true, // Изменяем заголовок Origin
        rewrite: (path) => path.replace(/^\/api/, '/public-api/v1.4'), // Переписываем путь
      },
    },
  },
});