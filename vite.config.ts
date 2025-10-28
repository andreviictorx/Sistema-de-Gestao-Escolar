/// <reference types="vitest/config" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import type { ViteUserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface["test"] = {
  globals: true,
  environment: "jsdom",
  css: true,
  setupFiles: ["./src/setupTests.ts"],
};

export default defineConfig({
  plugins: [react()],
  test: vitestConfig,
})
