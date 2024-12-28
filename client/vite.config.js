import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import "dotenv/config";
export default defineConfig({
  plugins: [
    // laravel({
    //   input: ["./src/App.jsx"], // Adjusted path
    //   refresh: true,
    // }),
    react(),
  ],
  // server: {
  //   hmr: {
  //     host: "127.0.0.1:8000",
  //   },
  // },
});
