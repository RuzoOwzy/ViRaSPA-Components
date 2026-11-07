// One page per package, plus an overview. Pages are native (plain HTML, CSS
// and a small JS file), like the README examples.
window.Viraspa.routes = [
  { path: "/", name: "home", page: "app/pages/home", native: true, title: "ViRaSPA Extensions", nav: { label: "Overview", icon: "lucide:layout-grid", order: 1 } },
  { path: "/vs-card", name: "vs-card", page: "app/pages/vs-card", native: true, title: "vs-card · ViRaSPA Extensions", nav: { label: "vs-card", order: 2 } },
  { path: "/vs-stat-tile", name: "vs-stat-tile", page: "app/pages/vs-stat-tile", native: true, title: "vs-stat-tile · ViRaSPA Extensions", nav: { label: "vs-stat-tile", order: 3 } },
  { path: "/vs-login-form", name: "vs-login-form", page: "app/pages/vs-login-form", native: true, title: "vs-login-form · ViRaSPA Extensions", nav: { label: "vs-login-form", order: 4 } },
];

window.Viraspa.notFoundRoute = { name: "not-found", page: "app/pages/not-found", native: true, title: "Not found · ViRaSPA Extensions" };
