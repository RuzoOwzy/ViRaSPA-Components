// forms demo: validation, values and read-only mode.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "forms") return;
  const page = event.target;
  const form = page.querySelector("#d-form");
  const out = page.querySelector("#d-output");
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
});
