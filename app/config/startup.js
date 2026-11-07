// The demo site's own files. Its components come from components/ (this
// repository): the framework loads each one the first time its tag appears.
window.Viraspa.startup = {
  helpers: [],
  extensions: [],
  groups: [
    { name: "config", scripts: ["app/config/init.js", "app/config/routes.js"], styles: ["app/assets/demo.css"] },
  ],
};
