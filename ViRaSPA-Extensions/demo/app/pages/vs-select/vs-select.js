// vs-select demo: show the values.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-select") return;
  const page = event.target;
  page.addEventListener("change", (e) => {
    if (e.target.name) page.querySelector("#d-output").textContent = `${e.target.name}: ${JSON.stringify(e.target.value)}`;
  });
});
