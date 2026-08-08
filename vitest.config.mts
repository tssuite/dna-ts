// @license
// Copyright (c) ggsuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

/// <reference types="vitest" />

import { defineConfig } from 'vite';

// This package ships DNA content, not TypeScript source: the `dna/`
// folder is the payload and is instantiated into consumers. Only the
// repo's own specs run here — the specs inside `dna/` belong to the
// consumers that receive them.
export default defineConfig(({ mode }) => {
  return {
    test: {
      globals: true,
      environment: 'node',
      include: ['test/**/*.spec.ts', 'package-json.spec.ts'],
      exclude: ['dna/**', 'node_modules/**'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
