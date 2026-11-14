// vs-input-number demo: show the form's values as they change.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-input-number") return;
  const page = event.target;
  const form = page.querySelector("#d-form");
  form.addEventListener("change", () => (page.querySelector("#d-output").textContent = JSON.stringify(Viraspa.forms.values(form))));
});
