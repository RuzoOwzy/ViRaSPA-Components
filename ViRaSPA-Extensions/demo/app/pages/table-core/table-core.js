// table-core demo: the columns of a small table, as table-core reads them.
document.addEventListener("viraspa:pageCreated", async (event) => {
  if (event.detail.route.name !== "table-core") return;
  const page = event.target;
  await Viraspa.core.components.loadHelper("table-core");
  const holder = document.createElement("div");
  holder.innerHTML = '<column field="number" label="Order" width="100"></column><column field="amount" label="Amount" format="currency:\'TZS\'" total="sum"></column>';
  page.querySelector("#d-output").textContent = JSON.stringify(Viraspa.tableCore.columnsFromChildren(holder), null, 2);
});
