// vs-select-tree demo: a flat list with parents, and nested nodes.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-select-tree") return;
  const page = event.target;
  const $ = (s) => page.querySelector(s);
  $("#d-category").items = [
    { id: "food", label: "Food" },
    { id: "rice", label: "Rice", parent: "food" },
    { id: "oil", label: "Cooking oil", parent: "food" },
    { id: "drinks", label: "Drinks" },
    { id: "soda", label: "Soda", parent: "drinks" },
    { id: "water", label: "Water", parent: "drinks" },
  ];
  $("#d-regions").nodes = [
    { id: "north", label: "North", children: [{ id: "aru", label: "Arusha" }, { id: "kil", label: "Kilimanjaro" }] },
    { id: "coast", label: "Coast", children: [{ id: "dar", label: "Dar es Salaam" }, { id: "tan", label: "Tanga" }] },
  ];
  page.addEventListener("change", (e) => {
    if (e.target.name) $("#d-output").textContent = `${e.target.name}: ${JSON.stringify(e.target.value)}`;
  });
});
