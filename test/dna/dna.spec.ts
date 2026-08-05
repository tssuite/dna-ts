// Placed by the dna-ts DNA — instantiates and verifies this project's
// DNA on every test run.

import { runDnaTest } from '@tssuite/gg-dna';
import { test } from 'vitest';

test(
  'dna is instantiated and unmodified',
  async () => {
    await runDnaTest();
  },
  120000,
);
