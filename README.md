# dna-ts

The DNA for all of our TypeScript projects. Builds on
[base_dna](https://github.com/ggsuite/base_dna) and adds the
TypeScript-specific layer, inherited via
[gg_dna](https://github.com/ggsuite/gg_dna):

- `dna/.vscode/settings.overrides.json` — TS/ESLint editor settings
  merged into the base settings
- `dna/.vscode/extensions.overrides.json` — TS extension
  recommendations (array join)
- `dna/.vscode/typescript.code-snippets` — workspace snippets (license
  header, test skeleton)
- `dna/doc/develop.overrides.md` — pnpm commands for the ticket
  workflow
- `dna/test/dna/dna.spec.ts` — the DNA wrapper spec shipped to TS
  consumers (instantiated as `test/dna/dna.spec.ts`)

## Usage

```bash
pnpm add -D dna-ts @tssuite/gg-dna
gg_dna init
```

The placed spec instantiates and verifies the DNA on every test run
(base_dna is pulled in transitively). The engine runs via
`@tssuite/gg-dna` — the gg_dna engine compiled to WebAssembly.

## Development

`role: "dna"`: the `dna/` folder is authored by hand. The repo
instantiates its own DNA — run `pnpm test` after changes; commit first
(a file the DNA would overwrite must not carry uncommitted work). The
workspace override in `.gg/dna.json` points at the local base_dna
checkout during development.
