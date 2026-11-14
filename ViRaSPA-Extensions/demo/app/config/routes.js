// The catalog of packages and the demo's routes, built from it: one page per
// package, listed in the side menu by group (nested groups with "/", nested
// items with `parent`). The overview page and each page's header read the
// catalog too (Viraspa.app.catalog).
(function () {
  const catalog = [
    { group: "Inputs", items: [
      ["vs-input-number", "Numbers in the user's format: filtered typing, steps, min/max."],
      ["vs-input-date", "Typed dates in the user's order plus a calendar; date, month or datetime."],
      ["vs-input-password", "Show/hide, Caps Lock warning, strength meter; password managers find it."],
      ["vs-input-color", "Swatches, recent colours, hex, full picker, eyedropper."],
      ["vs-textarea", "Grows with its text; overlap mode over what is below, also in table rows."],
    ] },
    { group: "Selects", items: [
      ["vs-select", "A fixed list: filter box, multiple choice, groups, type-ahead."],
      ["vs-select-search", "Type to search a list, a table or the server, then choose."],
      ["vs-select-tree", "A select whose choices are a tree."],
    ] },
    { group: "Data/Tables", items: [
      ["vs-table", "Data table: sort, search, filters, paging, selection, export, totals, phone cards."],
      ["vs-pagination", "Page navigation: first/previous/next/last, page box, page size.", { parent: "vs-table" }],
      ["vs-table-entry", "Typing rows with the keyboard: Enter cell to cell, computed columns, totals."],
    ] },
    { group: "Data/Trees", items: [
      ["vs-tree", "On-demand children, selection, filter, keyboard, editing with locked nodes."],
    ] },
    { group: "Popups & menus", items: [
      ["vs-popup", "A modal popup, plus Viraspa.popup alert/confirm/prompt/flash/drop."],
      ["vs-tabs", "Tabs from labelled panels: keyboard, remembered tab, lazy panels."],
      ["vs-tooltip", "A tooltip with rich content for another element."],
      ["vs-context-menu", "A right-click menu: long press and Menu key too, full keyboard."],
    ] },
    { group: "Feedback", items: [
      ["vs-progress", "A bar, ring or dots, with a value or indeterminate."],
      ["vs-countdown", "A countdown to a moment or for some seconds."],
    ] },
    { group: "Media & text", items: [
      ["vs-media-viewer", "Full-screen viewer for images, PDF, video and documents: zoom, pan, rotate, gallery."],
      ["vs-image-cropper", "Crop an image: fixed or free shape, zoom, rotate, output size and type."],
      ["vs-rich-text-editor", "A rich text editor in our own code, with clean and safe HTML out."],
    ] },
    { group: "Content", items: [
      ["vs-card", "A content card: heading, icon, body, footer."],
      ["vs-stat-tile", "A key figure for dashboards, with a trend."],
      ["vs-login-form", "A configurable sign-in form that works with password managers."],
    ] },
    { group: "Helpers", kind: "helper", items: [
      ["forms", "Required marks, validation messages, read-only mode, values. Viraspa.forms"],
      ["data-entry", "Enter to the next field, Shift+Enter back; every key overridable. Viraspa.dataEntry"],
      ["filter", "Type to filter lists, tables and selects, accents ignored. Viraspa.filter"],
      ["tooltip", "Tooltips from data-tooltip: hover, focus, long press. Viraspa.tooltip"],
      ["table-core", "Shared logic of the two tables (installed with them). Viraspa.tableCore"],
    ] },
  ];

  window.Viraspa.app.catalog = catalog.flatMap(({ group, kind = "component", items }) =>
    items.map(([name, summary, extra = {}]) => ({ name, summary, group, kind, ...extra }))
  );

  const page = (name, label, nav, title) => ({
    path: `/${name}`,
    name,
    page: `app/pages/${name}`,
    native: true,
    title: `${title || label} · ViRaSPA Extensions`,
    nav,
  });
  let order = 10;
  window.Viraspa.routes = [
    { path: "/", name: "home", page: "app/pages/home", native: true, title: "ViRaSPA Extensions", nav: { label: "Overview", menus: ["side"], order: 1 } },
    page("get-started", "Get started", { label: "Get started", menus: ["side"], order: 2 }),
    ...window.Viraspa.app.catalog.map((entry) =>
      page(entry.name, entry.name, { label: entry.name, menus: ["side"], group: entry.group, parent: entry.parent, keywords: entry.summary, order: order++ })
    ),
  ];
  window.Viraspa.notFoundRoute = { name: "not-found", page: "app/pages/not-found", native: true, title: "Not found · ViRaSPA Extensions" };
})();
