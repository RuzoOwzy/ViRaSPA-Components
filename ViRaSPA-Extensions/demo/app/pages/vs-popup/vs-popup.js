// vs-popup demo. (Viraspa.popup comes from vs-popup, loaded at startup:
// startup.js components: ["vs-popup"].)
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-popup") return;
  const page = event.target;
  const out = page.querySelector("#d-output");
  const demos = {
    alert: async () => {
      await Viraspa.popup.alert("The invoice was saved.");
      out.textContent = "alert closed";
    },
    confirm: async () => (out.textContent = `confirm: ${await Viraspa.popup.confirm("Delete invoice 1042?", { okLabel: "Delete", danger: true })}`),
    prompt: async () => (out.textContent = `prompt: ${JSON.stringify(await Viraspa.popup.prompt("New customer name", { value: "Amina Juma", required: true }))}`),
    flash: () => Viraspa.popup.flash("Copied"),
    drop: () => Viraspa.popup.drop("Connection restored."),
    custom: async () => (out.textContent = `custom: ${JSON.stringify(await page.querySelector("#d-popup").open())}`),
  };
  page.addEventListener("click", (e) => {
    const button = e.target.closest("[data-demo]");
    if (button) demos[button.dataset.demo]();
  });
});
