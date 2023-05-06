// vite.config.ts
import { defineConfig } from "vite"
import ViteCSSExportPlugin from "vite-plugin-css-export"

export default defineConfig({
  plugins: [ViteCSSExportPlugin()],
})
