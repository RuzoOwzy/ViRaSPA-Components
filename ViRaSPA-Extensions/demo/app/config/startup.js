// The demo site's own files. Its components and helpers come from this
// repository (components/ and helpers/, served beside the demo): the framework loads each component the
// first time its tag appears. The four helpers are loaded at startup so that
// they work on every page; vs-popup is loaded at startup for Viraspa.popup.
window.Viraspa.startup = {
  helpers: ["forms", "data-entry", "filter", "tooltip"],
  components: ["vs-popup"],
  extensions: [],
  groups: [
    { name: "config", scripts: ["app/config/init.js", "app/config/routes.js", "app/config/package-pages.js"], styles: ["app/assets/demo.css"] },
  ],
};
