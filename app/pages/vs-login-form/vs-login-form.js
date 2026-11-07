// vs-login-form demo: a handler instead of a backend, and a message on success.
document.addEventListener("viraspa:pageCreated", (event) => {
  if (event.detail.route.name !== "vs-login-form") return;
  const page = event.target;
  const form = page.querySelector("vs-login-form");
  form.providers = [
    { id: "google", label: "Google", icon: "fontawesome:google:brands" },
    { id: "microsoft", label: "Microsoft", icon: "fontawesome:microsoft:brands" },
  ];
  form.loginHandler = (credentials) => Viraspa.demo.signIn(credentials);
  form.providerHandler = async (provider) => {
    throw new Error(`${provider.label} sign-in is not connected in this demo.`);
  };
  form.addEventListener("vs-login-success", () => {
    page.querySelector("#login-result").textContent = "Signed in. (A real app would now open its first private page.)";
  });
});