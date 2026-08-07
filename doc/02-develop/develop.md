<!--
@license
Copyright (c) ggsuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Develop

## Prepare

[Install required software](../01-install/)

[Prepare a gg workspace](../01-install/09-gg-workspace.md)

## Create a ticket

```bash
cd ~/dev/ # workspace
gg do create ticket gGS-145 -m"Fix issue abc"
cd tickets/gGS-145
```

## Add git repositories

```bash
gg do add repo1 repo2
```

## Open workspace

```bash
gg do code
```

## Implement

Implement your features

## Commit

```bash
gg do commit
```

## Push

```bash
gg do push
```

## Review

```bash
gg do review
```

gg creates pull requests for each repo and print the URLS to the terminal.

## Publish

```bash
gg do publish
```

gg will trigger a pull request merge, publish the changes to the registry.
Finally the version tag will be added and pushed.
