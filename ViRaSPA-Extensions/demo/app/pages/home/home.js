// Overview: one table per group, from the catalog in app/config/routes.js.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "home") return;
  const escape = Viraspa.utility.dom.escapeHtml;
  const groups = [];
  for (const entry of Viraspa.app.catalog) {
    const top = entry.group.split("/")[0];
    let group = groups.find((g) => g.name === top);
    if (!group) groups.push((group = { name: top, entries: [] }));
    group.entries.push(entry);
  }
  event.target.querySelector("#d-catalog").innerHTML = groups
    .map(
      (g) =>
        `<h2>${escape(g.name)}</h2><table class="demo-table"><tbody>` +
        g.entries.map((e) => `<tr><td class="demo-name"><a href="${escape(e.name)}">${escape(e.name)}</a></td><td>${escape(e.summary)}</td></tr>`).join("") +
        "</tbody></table>"
    )
    .join("");
});
