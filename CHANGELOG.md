# Changelog

## 1.0.0 - 2026-08-05

### Added

- TypeScript layer on top of base_dna (gg_dna 5.0 replica layout)
- `.vscode/settings.overrides.json` + `extensions.overrides.json`
  (TS/ESLint keys and extensions merged into the base files)
- `.vscode/typescript.code-snippets` workspace snippets
- `doc/develop.overrides.md` — pnpm flavor of the ticket workflow
- `test/dna/dna.spec.ts` — the DNA wrapper spec shipped to consumers
- npm packaging `dna-ts`; `role: "dna"` with self-instantiation via
  `@tssuite/gg-dna`
