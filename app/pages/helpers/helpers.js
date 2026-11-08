// Helpers demo: forms + data-entry, filter and tooltip (all loaded at startup).
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "helpers") return;
  const page = event.target;
  const form = page.querySelector("#d-form");
  const out = page.querySelector("#d-form-output");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!Viraspa.forms.validate(form).valid) return;
    out.textContent = `Saved: ${JSON.stringify(Viraspa.forms.values(form))}`;
  });
  let readOnly = false;
  page.querySelector("#d-readonly").addEventListener("click", (e) => {
    readOnly = !readOnly;
    Viraspa.forms.setReadOnly(form, readOnly);
    e.target.textContent = readOnly ? "Editable" : "Read-only";
  });

  page.querySelector("#d-people").innerHTML = Viraspa.demo.people
    .map((p) => `<li>${Viraspa.utility.dom.escapeHtml(p.name)} · ${Viraspa.utility.dom.escapeHtml(p.city)}</li>`)
    .join("");
});
