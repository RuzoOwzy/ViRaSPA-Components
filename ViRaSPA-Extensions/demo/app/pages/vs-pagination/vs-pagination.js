// vs-pagination demo: show the page chosen.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-pagination") return;
  const page = event.target;
  page.querySelector("#d-pager").addEventListener("vs-page-change", (e) => (page.querySelector("#d-output").textContent = `Page ${e.detail.page}, ${e.detail.pageSize} per page.`));
});
