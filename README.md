# ViRaSPA Extensions

The official, optional extensions for [ViRaSPA](https://github.com/RuzoOwzy/ViRaSPA), the no-build SPA framework in plain HTML, CSS and JavaScript. There are two kinds:

- **Components:** custom elements such as `vs-card` or `vs-table`, loaded the first time their tag appears on a page.
- **Helpers:** behaviour and APIs without an element of their own, such as `Viraspa.forms`, loaded at startup or by a component that needs them.

The framework keeps only what it needs itself (the shell components `vs-header`, `vs-menu`, `vs-icon`…, signals, bindings, formats, i18n). Everything here is optional. A project installs only what it uses, one package at a time.

> **Status:** in development, alongside the framework's first version (0.1.0). Nothing is released or tagged yet.

**Live demo:** <https://ruzoowzy.github.io/ViRaSPA-Extensions/> (GitHub Pages, published from the `ViRaSPA-Extensions/` folder by the workflow in `.github/workflows/pages.yml`: `index.html`, `404.html` and `app/`, with the framework from jsDelivr).

## Components

| Component | What it is | Isolation | Version |
| --- | --- | --- | --- |
| [vs-card](ViRaSPA-Extensions/components/vs-card/README.md) | A content card: heading, icon, body, footer. | full | 0.1.0 |
| [vs-stat-tile](ViRaSPA-Extensions/components/vs-stat-tile/README.md) | A key figure for dashboards, with a trend. | full | 0.1.0 |
| [vs-login-form](ViRaSPA-Extensions/components/vs-login-form/README.md) | A configurable sign-in form that works with password managers. | scoped | 0.1.0 |
| [vs-popup](ViRaSPA-Extensions/components/vs-popup/README.md) | A modal popup on the native dialog, plus `Viraspa.popup` alert/confirm/prompt/flash/drop/open. | full | 0.1.0 |
| [vs-input-number](ViRaSPA-Extensions/components/vs-input-number/README.md) | Numbers in the user's format: filtered typing, steps, min/max. | full | 0.1.0 |
| [vs-input-date](ViRaSPA-Extensions/components/vs-input-date/README.md) | Typed dates in the user's order plus a calendar; date, month or datetime. | full | 0.1.0 |
| [vs-input-password](ViRaSPA-Extensions/components/vs-input-password/README.md) | Show/hide, Caps Lock warning, strength meter; password managers find it. | scoped | 0.1.0 |
| [vs-input-color](ViRaSPA-Extensions/components/vs-input-color/README.md) | Swatches, recent colours, hex, full picker, eyedropper. | full | 0.1.0 |
| [vs-textarea](ViRaSPA-Extensions/components/vs-textarea/README.md) | Grows with its text; max rows, overlap mode, count, optional submit key. | full | 0.1.0 |
| [vs-select](ViRaSPA-Extensions/components/vs-select/README.md) | A fixed list: filter box, multiple choice, groups, type-ahead. | full | 0.1.0 |
| [vs-select-search](ViRaSPA-Extensions/components/vs-select-search/README.md) | Type to search a list, a table or the server, then choose. | full | 0.1.0 |
| [vs-tabs](ViRaSPA-Extensions/components/vs-tabs/README.md) | Tabs from labelled panels: keyboard, remembered tab, lazy panels. | full | 0.1.0 |
| [vs-tooltip](ViRaSPA-Extensions/components/vs-tooltip/README.md) | A tooltip with rich content for another element. | full | 0.1.0 |
| [vs-context-menu](ViRaSPA-Extensions/components/vs-context-menu/README.md) | A right-click menu: long press and Menu key too, full keyboard. | full | 0.1.0 |
| [vs-progress](ViRaSPA-Extensions/components/vs-progress/README.md) | A bar, ring or dots, with a value or indeterminate. | full | 0.1.0 |
| [vs-countdown](ViRaSPA-Extensions/components/vs-countdown/README.md) | A countdown to a moment or for some seconds. | full | 0.1.0 |
| [vs-pagination](ViRaSPA-Extensions/components/vs-pagination/README.md) | Page navigation: first/previous/next/last, page box, page size. | full | 0.1.0 |
| [vs-table](ViRaSPA-Extensions/components/vs-table/README.md) | Data table: sort, search, filters, client or server paging, selection, row menu, columns, export, totals, phone cards. | full | 0.1.0 |
| [vs-table-entry](ViRaSPA-Extensions/components/vs-table-entry/README.md) | Typing rows with the keyboard: Enter cell to cell, a new row at the end, computed columns, totals. | full | 0.1.0 |
| [vs-tree](ViRaSPA-Extensions/components/vs-tree/README.md) | A tree: on-demand children, selection, filter, keyboard, add/rename/delete/move with locked nodes. | full | 0.1.0 |
| [vs-select-tree](ViRaSPA-Extensions/components/vs-select-tree/README.md) | A select whose choices are a tree. | full | 0.1.0 |
| [vs-media-viewer](ViRaSPA-Extensions/components/vs-media-viewer/README.md) | Full-screen viewer for images, PDF, video and documents: zoom, pan, rotate, gallery. | full | 0.1.0 |
| [vs-image-cropper](ViRaSPA-Extensions/components/vs-image-cropper/README.md) | Crop an image: fixed or free shape, zoom, rotate, output size and type, upload. | full | 0.1.0 |
| [vs-rich-text-editor](ViRaSPA-Extensions/components/vs-rich-text-editor/README.md) | A rich text editor in our own code, with clean and safe HTML out. | scoped | 0.1.0 |

Every component works with the keyboard alone (its keys can be changed per app, page or element), translates its own labels, and the input components take part in forms like native inputs (`name`, value, `required`, validity, reset).

## Helpers

| Helper | What it is | API | Version |
| --- | --- | --- | --- |
| [forms](ViRaSPA-Extensions/helpers/forms/README.md) | Required marks, validation messages, read-only mode, snapshots and values. | `Viraspa.forms` | 0.1.0 |
| [data-entry](ViRaSPA-Extensions/helpers/data-entry/README.md) | Enter to the next field, Shift+Enter back, the last field adds a row or submits. Every key overridable. | `Viraspa.dataEntry` | 0.1.0 |
| [filter](ViRaSPA-Extensions/helpers/filter/README.md) | Type to filter a list, table or select (case- and accent-insensitive), with highlighting. | `Viraspa.filter` | 0.1.0 |
| [tooltip](ViRaSPA-Extensions/helpers/tooltip/README.md) | Tooltips from `data-tooltip`: hover, keyboard focus, long press. | `Viraspa.tooltip` | 0.1.0 |
| [table-core](ViRaSPA-Extensions/helpers/table-core/README.md) | Shared logic of the two tables (installed with them). | `Viraspa.tableCore` | 0.1.0 |

They need framework features from milestone N7 (the keyboard rules); the framework's sample uses all four on its `/data-entry` page.

## Using a package in a project

From your project's repository root:

```bash
node node-tools/install.js add component vs-card@0.1.0
```

```bash
node node-tools/install.js add helper forms@0.1.0
```

- **Where it goes:** `components/<name>/` or `helpers/<name>/`, pinned with a checksum in `app/project-viraspa.json`.
- **Dependencies:** when a package needs another one (its manifest's `dependencies`), `install.js` installs and pins that one too.
- **Loading a component:** nothing else is needed. The framework loads a `vs-*` component the first time its tag appears on a page, together with the helpers it depends on.
- **Loading a helper for your own code:** add its name to `helpers` in `app/config/startup.js`.
- **Version check:** each manifest declares which framework versions it supports, and the framework refuses an incompatible one with a clear console message.

## Repository layout

```
.github/workflows/pages.yml    publishes ViRaSPA-Extensions/ to GitHub Pages on every push to main
Documents/
  component-doc-template.md    the structure every package README follows
  release-notes.md
README.md
ViRaSPA-Extensions/            everything that is installed or served
  components/
    <tag>/
      component-viraspa.json   name, tag, version, release date, framework versions, dependencies, file checksums
      <tag>.js, .html, .css, .model.json
      README.md                the component's documentation
  helpers/
    <name>/
      helper-viraspa.json      name, version, release date, framework versions, namespace, scripts, styles, dependencies, file checksums
      <name>.js (.css)
      README.md
  index.html, 404.html, app/   the live demo site (GitHub Pages)
```

The layout matches the framework repository: repository files at the top, the real content in a folder of the same name.

## Naming

- **Components:** `vs-<family>-<variant>`, where the plain family name is the most common variant, so related components sort together: `vs-select`, `vs-select-search`, `vs-select-tree`; `vs-input-number`, `vs-input-date`; `vs-table`, `vs-table-entry`.
- **Helpers:** a short lowercase name (`forms`, `data-entry`), with its API under one `Viraspa.<namespace>` (`Viraspa.forms`).

## Publishing a version (maintainers)

1. Change the files, bump `version` and `releaseDate` in the manifest, and add a line to the README's version history.
2. Write the file list and checksums with the framework's tool:
   ```bash
   node ../ViRaSPA/node-tools/stamp.js ViRaSPA-Extensions/components/vs-card
   ```
3. Commit, then tag `<name>-v<version>`, e.g. `vs-card-v0.1.0`. The official download source reads `https://cdn.jsdelivr.net/gh/RuzoOwzy/ViRaSPA-Extensions@vs-card-v0.1.0/ViRaSPA-Extensions/components/vs-card/`.

## Third-party packages

Third parties don't add to this repository. They publish their own **extension bundle** with their own tag prefix (`owzy-…`), described by `extension-viraspa.json`, and installed with `install.js add extension …`; see the framework's README. The `vs-` prefix and the `Viraspa` namespace are reserved for the framework and this repository.
