// One page per package (or per family of packages), plus an overview. Pages
// are native (plain HTML, CSS and a small JS file), like the README examples.
(function () {
  const page = (path, label, order, title) => ({
    path: `/${path}`,
    name: path,
    page: `app/pages/${path}`,
    native: true,
    title: `${title || label} · ViRaSPA Extensions`,
    nav: { label, order },
  });
  window.Viraspa.routes = [
    { path: "/", name: "home", page: "app/pages/home", native: true, title: "ViRaSPA Extensions", nav: { label: "Overview", icon: "lucide:layout-grid", order: 1 } },
    page("inputs", "Inputs", 2),
    page("selects", "Selects", 3),
    page("tables", "Tables", 4),
    page("tree", "Tree", 5, "vs-tree"),
    page("overlays", "Popups & menus", 6),
    page("progress", "Progress", 7),
    page("media", "Media", 8),
    page("editor", "Editor", 9, "vs-rich-text-editor"),
    page("helpers", "Helpers", 10),
    page("vs-card", "vs-card", 11),
    page("vs-stat-tile", "vs-stat-tile", 12),
    page("vs-login-form", "vs-login-form", 13),
  ];
  window.Viraspa.notFoundRoute = { name: "not-found", page: "app/pages/not-found", native: true, title: "Not found · ViRaSPA Extensions" };
})();
