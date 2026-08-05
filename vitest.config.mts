// Vitest configuration of the dna-ts DNA package. The dna/ folder holds
// the authored DNA sources — the spec shipped inside it must only run in
// consumers (as test/dna/dna.spec.ts), not from the source tree.

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.spec.ts'],
    exclude: ['dna/**', 'node_modules/**'],
  },
});
