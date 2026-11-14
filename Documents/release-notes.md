# ViRaSPA Extensions release notes

Each component and helper has its own version (in its manifest) and, once released, its own tag, e.g. `vs-card-v0.1.0`. Nothing is released yet: everything is in development alongside the framework's first version.

## In development

- **Helpers forms, data-entry, filter and tooltip 0.1.0:** first versions (see each README).
- **Components vs-popup, vs-input-number, vs-input-date, vs-input-password, vs-input-color, vs-textarea, vs-select, vs-select-search, vs-tabs, vs-tooltip, vs-context-menu, vs-progress and vs-countdown 0.1.0:** first versions (milestone N8; see each README).
- **Components vs-pagination, vs-table, vs-table-entry, vs-tree and vs-select-tree, and helper table-core 0.1.0:** first versions (milestone N9). vs-table needs table-core, vs-pagination and vs-progress; vs-table-entry needs table-core; vs-select-tree needs vs-tree - installed automatically.
- **Components vs-media-viewer, vs-image-cropper and vs-rich-text-editor 0.1.0:** first versions (milestone N10), all three written entirely in our own code. The editor's output always goes through its own sanitizer (`VsRichTextEditor.sanitize`, an allow-list of tags and safe link and image addresses).

- **vs-table and table-core 0.1.0 (milestone N11):** on phones, `phone-layout="scroll"` keeps the first column fixed, and a column with `phone="hide"` is left out on narrow screens.
- **Demo site (milestone N11):** pages for every component and helper (Inputs, Selects, Tables, Tree, Popups & menus, Progress, Media, Editor, Helpers), with made-up data; the framework is pinned to its latest commit.

- **Demo in its own folder, one page per package:** `ViRaSPA-Extensions/demo/` (the workflow publishes it with `components/` and `helpers/` beside it). A searchable side menu lists the packages by group (it hides completely with the burger), and the top bar has Overview, Get started and a Links drop-down. New theme "Ink & Amber" and no flash at start-up (framework).
- **vs-textarea 0.1.0:** grows one line ahead while focused (as `bindTextAreaAutosize` did); `rows` is the minimum in every browser; `rest-rows` for `overlap`, which now opens in the top layer so a scrolling table doesn't cut it off; `insertText()`; may be written self-closing.
- **vs-table-entry 0.1.0:** `editor="textarea"`: comment cells rest at one line and open over the rows below while typing (Alt+Enter is a new line), as in EliteWeb's Journal.aspx. It installs vs-textarea with it.
- **Self-closing tags:** vs-input-number, vs-input-date, vs-input-password, vs-input-color, vs-textarea, vs-select-search, vs-select-tree, vs-tree, vs-pagination, vs-progress, vs-countdown, vs-stat-tile and vs-image-cropper have no content of their own (`static content = "none"`) and may be written `<vs-… />` in page and component templates.
- **Colours:** the components' fallback colours follow the framework's new theme.
- **Repository layout like the framework's:** the packages and the demo site moved into `ViRaSPA-Extensions/` (`ViRaSPA-Extensions/components/<tag>/`, `ViRaSPA-Extensions/helpers/<name>/`); `Documents/`, the README and the git files stay at the top. GitHub Pages publishes the inner folder through `.github/workflows/pages.yml`. The `official` download source reads `…ViRaSPA-Extensions@<name>-v<version>/ViRaSPA-Extensions/<kind>/<name>`.
- **Repository renamed** from ViRaSPA-Components to ViRaSPA-Extensions: it holds official components and, from now on, official helpers (`helpers/<name>/`, `helper-viraspa.json`).
- **Manifests** may list `dependencies` (`[{ kind, name, version }]`), installed automatically by `install.js`.
- **vs-card, vs-stat-tile, vs-login-form 0.1.0:** framework requirement corrected to 0.1.0 (the framework's first version; "0.2.0" was a working number).

## 2026-11-06

- **vs-card 0.1.0:** first version. Replaces the framework sample's `app-card`, with `heading` instead of `title`.
- **vs-stat-tile 0.1.0:** first version.
- **vs-login-form 0.1.0:** first version, with scoped isolation.
