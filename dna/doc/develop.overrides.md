## [@updateDependencies] Update dependencies

```bash
pnpm update --latest
```

## [@increaseVersion] Increase version

```bash
pnpm version patch --no-git-tag-version
git commit -am"Increase version"
```

## [@runTestsAndBuild] Run tests and build

```bash
pnpm run build
pnpm test
```

## [@publish] Publish

```bash
node scripts/publish-to-npm.js
```
