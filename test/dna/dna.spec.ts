// Placed by `gg_dna init` — instantiates and verifies this project's DNA
// on every test run. The logic lives in the @tssuite/gg-dna
// dev-dependency and is updated through normal dependency updates.

import { runDnaTest } from '@tssuite/gg-dna';
import { test } from 'vitest';

test(
  'dna is instantiated and unmodified',
  async () => {
    await runDnaTest();
  },
  120000,
);
