import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/Optimizer.tsx", "src/components/SliderRangeDemo.tsx"],
      thresholds: {
        lines: 80,
      },
    },
  },
});
