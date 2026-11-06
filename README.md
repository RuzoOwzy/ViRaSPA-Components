# ViRaSPA Components

Official optional components for [ViRaSPA](https://github.com/RuzoOwzy/ViRaSPA), the no-build SPA framework in plain HTML, CSS and JavaScript.

The framework itself keeps only the basic shell components (`vs-header`, `vs-menu`, `vs-icon`…). Everything else lives here, so a project downloads only the components it uses, one at a time.

| Component | What it is | Isolation | Version |
| --- | --- | --- | --- |
| [vs-card](components/vs-card/README.md) | A content card: heading, icon, body, footer. | full | 0.1.0 |
| [vs-stat-tile](components/vs-stat-tile/README.md) | A key figure for dashboards, with a trend. | full | 0.1.0 |
| [vs-login-form](components/vs-login-form/README.md) | A configurable sign-in form that works with password managers. | scoped | 0.1.0 |

## Using a component in a project

From your project's repository root:

```bash
node node-tools/install.js add component vs-card@0.1.0
```

- **Where it goes:** it lands in `components/vs-card/` and is pinned, with a checksum, in `app/project-viraspa.json`.
- **Loading:** nothing else is needed. The framework loads a `vs-*` component the first time its tag appears on a page.
- **Version check:** each component's `component-viraspa.json` declares which framework versions it supports, and the framework refuses an incompatible one with a clear console message.

## Repository layout

```
components/
  <tag>/
    component-viraspa.json   name, tag, version, release date, framework versions, file checksums
    <tag>.js, .html, .css, .model.json
    README.md                the component's documentation
Documents/
  component-doc-template.md  the structure every component README follows
  release-notes.md
```

## Publishing a component version (maintainers)

1. Change the files, bump `version` and `releaseDate` in `component-viraspa.json`, and add a line to the README's version history.
2. Write the file list and checksums with the framework's tool:
   ```bash
   node ../ViRaSPA/node-tools/stamp.js components/vs-card
   ```
3. Commit, then tag `vs-card-v0.1.0`. The official download source reads `https://cdn.jsdelivr.net/gh/RuzoOwzy/ViRaSPA-Components@vs-card-v0.1.0/components/vs-card/`.

## Writing your own components

Third parties don't add to this repository. They publish an **extension** with their own tag prefix (`owzy-…`), described by `extension-viraspa.json`; see the framework's README.
