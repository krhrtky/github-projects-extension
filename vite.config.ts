import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import solidPlugin from "vite-plugin-solid";

const manifest = defineManifest({
  manifest_version: 3,
  name: "GitHub projects extension",
  version: "0.0.1",
  permissions: [],
  content_scripts: [
    {
      js: ["src/main.tsx"],
      matches: ["https://github.com/*/*/projects/*"],
    }
  ]
});

export default defineConfig({
  plugins: [solidPlugin(), crx({ manifest })],
});
