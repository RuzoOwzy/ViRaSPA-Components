// vs-input-date demo: no Sundays for the due date.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-input-date") return;
  const page = event.target;
  const form = page.querySelector("#d-form");
  page.querySelector("#d-due").isDateDisabled = (iso) => new Date(iso).getDay() === 0;
  form.addEventListener("change", () => (page.querySelector("#d-output").textContent = JSON.stringify(Viraspa.forms.values(form))));
});
