import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const workspaceRoot = fileURLToPath(new URL("../", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/overwatch_tool/",
  plugins: [react()],
  server: {
    fs: {
      allow: [workspaceRoot],
    },
  },
});
