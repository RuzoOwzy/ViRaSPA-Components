// Every package page gets the same header under its <h1>: the summary from
// the catalog, the documentation link and the install command.
document.addEventListener("viraspa:pageCreated", (event) => {
  const entry = (Viraspa.app.catalog || []).find((e) => e.name === event.detail.route.name);
  const heading = entry && event.target.querySelector("h1");
  if (!heading) return;
  const escape = Viraspa.utility.dom.escapeHtml;
  const folder = entry.kind === "helper" ? "helpers" : "components";
  const docs = `https://github.com/RuzoOwzy/ViRaSPA-Extensions/blob/main/ViRaSPA-Extensions/${folder}/${entry.name}/README.md`;
  heading.insertAdjacentHTML(
    "afterend",
    `<div class="pkg-head"><p class="pkg-summary">${escape(entry.summary)}</p>` +
      `<p class="pkg-links"><span class="pkg-kind">${entry.kind}</span> <span class="pkg-group">${escape(entry.group.replace("/", " › "))}</span> ` +
      `<a href="${docs}" rel="external">Documentation</a> ` +
      `<code>node node-tools/install.js add ${entry.kind} ${escape(entry.name)}@0.1.0</code></p></div>`
  );
});
