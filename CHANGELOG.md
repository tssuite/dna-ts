# Changelog

## Unreleased

### Changed

- Migrated to the gg_dna 5.0 format: the DNA config moved from
  `.gg/dna.json` to `dna/_dna.json`, the engine's bookkeeping to
  `dna/_generated.json`, and dotfiles below `dna/` carry the `dot-`
  prefix (`dna/.vscode/` → `dna/dot-vscode/`).
- The parent is declared as `@tssuite/base-dna` — the name it is actually
  published under. It read `base_dna` before, which resolves to nothing
  on npm.
- The engine is `@tssuite/gg_dna-js`, matching the published package. The
  wrapper spec imported `@tssuite/gg-dna`, which does not exist.

### Removed

- The `init`, `new-project` and `new-ticket` skills were byte-identical
  copies of base_dna's. As the higher layer they shadowed the originals,
  so every base_dna update to them would have been silently discarded.
- `dna/doc/develop.overrides.md` (already gone since "Work in progress").
  base_dna's `develop.md` no longer carries `[@tag]` anchors, so the
  override could not apply to anything.

### Fixed

- The `review` skill pointed at `codeConventions.md` and friends. A
  TypeScript project instantiates kebab-case names, so those files never
  existed — the references now read `code-conventions.md`.

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
