// Icon libraries from the jsDelivr CDN (the demo installs no libraries).
Viraspa.icons.configure("lucide", { folder: "https://cdn.jsdelivr.net/npm/lucide-static@1.70.0/icons" });
Viraspa.icons.configure("fontawesome", { stylesheet: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.3.1/css/all.min.css" });

// The demo has no backend: made-up people and orders, and a sign-in that
// accepts demo@example.com / demo.
const DEMO_NAMES = ["Amina Juma", "Élodie Mushi", "Baraka Mwita", "Neema Shirima", "John Okello", "Zawadi Kimaro", "Hassan Ali", "Grace Mbwana", "Peter Laizer", "Fatuma Said", "Joseph Massawe", "Rehema Njau", "David Mollel", "Halima Bakari", "Emmanuel Temu", "Asha Mfinanga", "Daniel Swai", "Mariam Kombo", "Frank Urio", "Esther Lyimo"];
const DEMO_CITIES = ["Dar es Salaam", "Arusha", "Dodoma", "Mwanza", "Mbeya", "Tanga"];
const DEMO_PEOPLE = DEMO_NAMES.map((name, i) => ({ id: i + 1, name, city: DEMO_CITIES[(i * 7) % DEMO_CITIES.length] }));
const DEMO_ORDERS = Array.from({ length: 120 }, (_, i) => {
  const person = DEMO_PEOPLE[(i * 13) % DEMO_PEOPLE.length];
  const day = new Date(Date.UTC(2026, 10, 8) - i * 86400000 * 1.5);
  return {
    number: 1200 - i,
    customer: person.name,
    city: person.city,
    date: day.toISOString().slice(0, 10),
    status: i % 9 === 4 ? "overdue" : i % 3 === 0 ? "open" : "paid",
    amount: 5000 + ((i * 7919) % 230) * 1000,
  };
});

Viraspa.demo = {
  people: DEMO_PEOPLE,
  orders: DEMO_ORDERS,
  async signIn({ username, password }) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (String(username).toLowerCase() !== "demo@example.com" || password !== "demo") {
      throw new Error("Wrong email or password. Try demo@example.com / demo.");
    }
  },
};
