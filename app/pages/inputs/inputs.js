// Inputs demo: no Sundays for the due date, and the form's values on submit.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "inputs") return;
  const page = event.target;
  const form = page.querySelector("#inputs-form");
  page.querySelector("#d-due").isDateDisabled = (iso) => new Date(iso).getDay() === 0;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!Viraspa.forms.validate(form).valid) return;
    page.querySelector("#inputs-output").textContent = JSON.stringify(Viraspa.forms.values(form), null, 2);
  });
});
