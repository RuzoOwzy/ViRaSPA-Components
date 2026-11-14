// vs-context-menu demo: show the chosen item.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-context-menu") return;
  const page = event.target;
  page.addEventListener("vs-menu-select", (e) => (page.querySelector("#d-output").textContent = `menu: ${e.detail.value}`));
});
