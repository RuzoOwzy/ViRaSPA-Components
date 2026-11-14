// vs-textarea demo: journal lines with a comment column.
document.addEventListener("viraspa:pageCreated", async (event) => {
  if (event.detail.route.name !== "vs-textarea") return;
  const page = event.target;
  await Viraspa.core.components.load("vs-table-entry");
  const journal = page.querySelector("#d-journal");
  journal.rows = [
    { account: "Cash", debit: 250000, credit: "", comment: "Deposit from the Arusha branch, counted twice and confirmed by the branch manager before banking." },
    { account: "Sales", debit: "", credit: 250000, comment: "Invoice 1042" },
    { account: "Transport", debit: 15000, credit: "", comment: "" },
    { account: "Bank: CRDB", debit: "", credit: 15000, comment: "Fuel for the delivery van" },
  ];
});
