import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from 'fs';

const isLocalDev = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: isLocalDev
    ? {
        https: {
          key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem')),
        },
      }
    : {},
});
