// vs-progress demo: a button moves the bar.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-progress") return;
  const page = event.target;
  const bar = page.querySelector("#d-bar");
  page.querySelector("#d-step").addEventListener("click", () => {
    const next = (Number(bar.getAttribute("value")) + 10) % 110;
    bar.setAttribute("value", String(next));
  });
});
