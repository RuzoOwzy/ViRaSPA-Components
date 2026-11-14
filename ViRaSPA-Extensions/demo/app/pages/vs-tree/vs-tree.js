// vs-tree demo: a chart of accounts with locked system accounts and a branch
// loaded on demand.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-tree") return;
  const page = event.target;
  const tree = page.querySelector("#d-accounts");
  const out = page.querySelector("#d-output");
  tree.nodes = [
    { id: 1, label: "Assets", locked: true, expanded: true, children: [
      { id: 11, label: "Cash", locked: true },
      { id: 12, label: "Bank accounts", children: [{ id: 121, label: "CRDB" }, { id: 122, label: "NMB" }] },
      { id: 13, label: "Customers (receivable)", hasChildren: true },
    ] },
    { id: 2, label: "Liabilities", locked: true, children: [{ id: 21, label: "Suppliers (payable)" }, { id: 22, label: "VAT payable" }] },
    { id: 3, label: "Income", locked: true, children: [{ id: 31, label: "Sales" }] },
    { id: 4, label: "Expenses", locked: true, children: [{ id: 41, label: "Rent" }, { id: 42, label: "Salaries" }, { id: 43, label: "Transport" }] },
  ];
  let nextId = 500;
  tree.load = async () => {
    await new Promise((r) => setTimeout(r, 400));
    return Viraspa.demo.people.slice(0, 5).map((p) => ({ id: `c${p.id}`, label: p.name }));
  };
  tree.onAdd = async (parent, label) => ({ id: ++nextId, label });
  tree.addEventListener("vs-node-add", (e) => (out.textContent = `Added "${e.detail.node.label}" under "${e.detail.parent.label}".`));
  tree.addEventListener("vs-node-rename", (e) => (out.textContent = `Renamed to "${e.detail.node.label}".`));
  tree.addEventListener("vs-node-move", (e) => (out.textContent = `Moved "${e.detail.node.label}" to "${e.detail.to.label}".`));
  tree.addEventListener("vs-node-delete", (e) => (out.textContent = `Deleted "${e.detail.node.label}".`));
});
