// Editor demo: show the editor's clean HTML.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "editor") return;
  const page = event.target;
  page.querySelector("#d-editor").value =
    '<h2>Delivery note</h2><p>Hello <strong>Amina</strong>, your order <a href="https://example.com/orders/1042">1042</a> is ready:</p><ul><li>Rice 5 kg × 2</li><li>Cooking oil 3 L</li></ul><p style="text-align: center;"><em>Asante!</em></p>';
  page.querySelector("#d-html").addEventListener("click", () => {
    page.querySelector("#d-editor-output").textContent = page.querySelector("#d-editor").value || "(empty)";
  });
});
