import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/utils/**/*.{ts,tsx}', 'src/slices/**/*.{ts,tsx}'],
      thresholds: {
        lines: 80,
      },
    },
  },
})
