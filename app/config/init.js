// Icon libraries from the jsDelivr CDN (the demo installs no libraries).
Viraspa.icons.configure("lucide", { folder: "https://cdn.jsdelivr.net/npm/lucide-static@1.70.0/icons" });
Viraspa.icons.configure("fontawesome", { stylesheet: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.3.1/css/all.min.css" });

// The demo has no backend: the sign-in demo accepts demo@example.com / demo.
Viraspa.demo = {
  async signIn({ username, password }) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (String(username).toLowerCase() !== "demo@example.com" || password !== "demo") {
      throw new Error("Wrong email or password. Try demo@example.com / demo.");
    }
  },
};
