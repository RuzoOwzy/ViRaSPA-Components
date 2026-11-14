// vs-table demo: generated orders, overdue rows, and the selection.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-table") return;
  const page = event.target;
  const $ = (s) => page.querySelector(s);
  const out = $("#d-output");
  const orders = $("#d-orders");
  orders.rows = Viraspa.demo.orders;
  orders.rowClass = (row) => (row.status === "overdue" ? "overdue" : "");
  orders.addEventListener("vs-row-open", (e) => (out.textContent = `Opened order ${e.detail.row.number} (${e.detail.row.customer}).`));
  orders.addEventListener("vs-selection-change", () => {
    const n = orders.selectedRows.length;
    $("#d-delete").disabled = !n;
    $("#d-delete").textContent = n ? `Delete selected (${n})` : "Delete selected";
  });
  $("#d-delete").addEventListener("click", () => (out.textContent = `Would delete ${orders.selectedRows.map((r) => r.number).join(", ")}.`));
});
