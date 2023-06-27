import {defineConfig} from 'vitest/config'

const runId = 'latest' //new Date().toISOString().replace(/[T:]/g, '-').replace(/Z/, '') - for now we don't keep reports history

export default defineConfig({
  test: {
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', '**/fixtures/**'],
    testTimeout: 45000,
    coverage: {
      include: ['src'],
      exclude: ['src/__tests__'],
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './reports/' + runId + '/coverage/',
    },
    reporters: ['default', 'json', 'junit'],
    outputFile: {
      json: './reports/' + runId + '/tests/test-results.json',
      junit: './reports/' + runId + '/tests/test-results.xml',
    },
  },
})
