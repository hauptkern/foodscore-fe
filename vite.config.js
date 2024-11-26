import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import routify from "@roxi/routify/vite-plugin"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),routify()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $assets: path.resolve("./src/assets"),
      $utils: path.resolve("./src/utils"),
    },
  },
});
