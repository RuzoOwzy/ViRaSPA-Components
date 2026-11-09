// Tables demo: generated orders, a computed column, and the selection.
document.addEventListener("viraspa:pageCreated", async (event) => {
  if (event.detail.route.name !== "tables") return;
  const page = event.target;
  const $ = (s) => page.querySelector(s);
  const out = $("#tables-output");

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

  // Viraspa.tableCore arrives with the table components: wait for them first.
  await Viraspa.core.components.load("vs-table-entry");
  const lines = $("#d-lines");
  lines.columns = Viraspa.tableCore.columnsFromChildren(lines).map((c) =>
    c.field === "amount" ? { ...c, value: (row) => (Number(row.quantity) || 0) * (Number(row.price) || 0) * (1 + (Number(row.vat) || 0) / 100) } : c
  );
  lines.newRow = () => ({ quantity: 1, vat: "18" });
  lines.rows = [{ product: "Rice 5 kg", quantity: 2, price: 18000, vat: "18" }];

  $("#d-pager").addEventListener("vs-page-change", (e) => (out.textContent = `Page ${e.detail.page}, ${e.detail.pageSize} per page.`));
});
