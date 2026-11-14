// vs-select-search demo: a list, and a pretend server with a delay.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-select-search") return;
  const page = event.target;
  const $ = (s) => page.querySelector(s);
  $("#d-product").items = [
    { value: "R5", label: "Rice 5 kg", price: "TZS 18,000" },
    { value: "O3", label: "Cooking oil 3 L", price: "TZS 21,500" },
    { value: "S2", label: "Sugar 2 kg", price: "TZS 7,000" },
    { value: "M2", label: "Maize flour 2 kg", price: "TZS 5,600" },
  ];
  const people = Viraspa.demo.people;
  $("#d-customer").source = async ({ text, signal }) => {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 300);
      signal.addEventListener("abort", () => (clearTimeout(timer), reject(new DOMException("Aborted", "AbortError"))));
    });
    return people.filter((p) => Viraspa.filter.plain(p.name).includes(Viraspa.filter.plain(text))).map((p) => ({ value: p.id, label: p.name, city: p.city }));
  };
  page.addEventListener("change", (e) => {
    if (e.target.name) $("#d-output").textContent = `${e.target.name}: ${JSON.stringify(e.target.value)}`;
  });
});
