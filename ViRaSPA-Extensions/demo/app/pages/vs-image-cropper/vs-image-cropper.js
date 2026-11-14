// vs-image-cropper demo: show the cropped result.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-image-cropper") return;
  const page = event.target;
  const cropper = page.querySelector("#d-cropper");
  page.querySelector("#d-crop").addEventListener("click", () => {
    const img = page.querySelector("#d-crop-result");
    img.src = cropper.toDataURL();
    img.hidden = false;
    const c = cropper.crop;
    page.querySelector("#d-output").textContent = `From ${c.x},${c.y}, ${c.width} × ${c.height} pixels of the original.`;
  });
});
