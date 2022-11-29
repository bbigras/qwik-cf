import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { join } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  clearScreen: false,
  plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  server: {
    // Refer to https://vitejs.dev/config/server-options.html#server-proxy.
    proxy: {
      "/callback": "http://127.0.0.1:3001",
    },
  },
}));
