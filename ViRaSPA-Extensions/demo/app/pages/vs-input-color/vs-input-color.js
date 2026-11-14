// vs-input-color demo: show the chosen colour.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-input-color") return;
  const page = event.target;
  const input = page.querySelector("#d-color");
  input.addEventListener("change", () => (page.querySelector("#d-output").textContent = input.value));
});
