// The demo site's own files. Its components and helpers come from this
// repository (components/, helpers/): the framework loads each component the
// first time its tag appears. The four helpers are loaded at startup so that
// they work on every page; vs-popup is loaded at startup for Viraspa.popup.
window.Viraspa.startup = {
  helpers: ["forms", "data-entry", "filter", "tooltip"],
  components: ["vs-popup"],
  extensions: [],
  groups: [
    { name: "config", scripts: ["app/config/init.js", "app/config/routes.js"], styles: ["app/assets/demo.css"] },
  ],
};
