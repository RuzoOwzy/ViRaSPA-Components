# ViRaSPA Extensions release notes

Each component and helper has its own version (in its manifest) and, once released, its own tag, e.g. `vs-card-v0.1.0`. Nothing is released yet: everything is in development alongside the framework's first version.

## In development

- **Helpers forms, data-entry, filter and tooltip 0.1.0:** first versions (see each README).
- **Components vs-popup, vs-input-number, vs-input-date, vs-input-password, vs-input-color, vs-textarea, vs-select, vs-select-search, vs-tabs, vs-tooltip, vs-context-menu, vs-progress and vs-countdown 0.1.0:** first versions (milestone N8; see each README).

- **Repository renamed** from ViRaSPA-Components to ViRaSPA-Extensions: it holds official components and, from now on, official helpers (`helpers/<name>/`, `helper-viraspa.json`).
- **Manifests** may list `dependencies` (`[{ kind, name, version }]`), installed automatically by `install.js`.
- **vs-card, vs-stat-tile, vs-login-form 0.1.0:** framework requirement corrected to 0.1.0 (the framework's first version; "0.2.0" was a working number).

## 2026-11-06

- **vs-card 0.1.0:** first version. Replaces the framework sample's `app-card`, with `heading` instead of `title`.
- **vs-stat-tile 0.1.0:** first version.
- **vs-login-form 0.1.0:** first version, with scoped isolation.
