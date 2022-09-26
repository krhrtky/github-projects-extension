import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import solidPlugin from "vite-plugin-solid";
import info from "./package.json";

const manifest = defineManifest({
  manifest_version: 3,
  name: "GitHub projects extension",
  version: info.version,
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
  // @ts-ignore
  test: {
    globals: true,
    setupFiles: "./test/setup.ts",
    environment: "happy-dom",
    include: [
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
    ],
    deps: {
      inline: [/solid-testing-library/],
    },
    transformMode: {
      web: [/\.([cm]?[jt]sx?|json)$/],
    }
  },
});
