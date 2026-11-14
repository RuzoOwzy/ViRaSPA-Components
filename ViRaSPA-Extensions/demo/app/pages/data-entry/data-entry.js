// data-entry demo: show what was submitted with the keyboard.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "data-entry") return;
  const page = event.target;
  const form = page.querySelector("#d-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!Viraspa.forms.validate(form).valid) return;
    page.querySelector("#d-output").textContent = `Added: ${JSON.stringify(Viraspa.forms.values(form))}`;
  });
});
