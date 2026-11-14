// filter demo: a list of people to filter.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "filter") return;
  const page = event.target;
  const escape = Viraspa.utility.dom.escapeHtml;
  page.querySelector("#d-people").innerHTML = Viraspa.demo.people.map((p) => `<li>${escape(p.name)} · ${escape(p.city)}</li>`).join("");
});
