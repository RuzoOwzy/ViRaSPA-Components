// vs-table-entry demo: a computed amount column.
document.addEventListener("viraspa:pageCreated", async (event) => {
  if (event.detail.route.name !== "vs-table-entry") return;
  const page = event.target;
  // Viraspa.tableCore arrives with the table components: wait for them first.
  await Viraspa.core.components.load("vs-table-entry");
  const lines = page.querySelector("#d-lines");
  lines.columns = Viraspa.tableCore.columnsFromChildren(lines).map((c) =>
    c.field === "amount" ? { ...c, value: (row) => (Number(row.quantity) || 0) * (Number(row.price) || 0) * (1 + (Number(row.vat) || 0) / 100) } : c
  );
  lines.newRow = () => ({ quantity: 1, vat: "18" });
  lines.rows = [{ product: "Rice 5 kg", quantity: 2, price: 18000, vat: "18" }];
});
