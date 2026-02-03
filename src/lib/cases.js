export const CASES = [
  {
    id: "adeola-medical",
    name: "Adeola",
    age: 62,
    title: "Urgent medical care after prolonged neglect",
    problem:
      "Adeola has lived through severe neglect and needs urgent medical support, medication, and follow‑up care to stabilize her health.",
    goalAmount: 250000, // NGN
    image:
      "/adeola.png",
    tags: ["Medical", "Recovery", "Urgent"],
  },
  {
    id: "musa-shelter",
    name: "Musa",
    age: 58,
    title: "Safe shelter after eviction and exploitation",
    problem:
      "Musa was evicted and exploited. He needs immediate shelter, food, basic supplies, and case management to rebuild stability.",
    goalAmount: 180000,
    image:
      "/musa.jpg",
    tags: ["Shelter", "Food", "Safety"],
  },
  {
    id: "chioma-legal",
    name: "Chioma",
    age: 47,
    title: "Legal protection from ongoing abuse",
    problem:
      "Chioma is experiencing ongoing abuse and needs legal support, safe transport, and advocacy to protect her rights and safety.",
    goalAmount: 320000,
    image:
      "/chioma.jpg",
    tags: ["Legal", "Protection", "Advocacy"],
  },
  {
    id: "orphans-rehab",
    name: "Orphans",
    // age: ,
    title: "Motherless and Fatherless orphans",
    problem:
      "Orphans are motherless and fatherless orphans. They need food, clothing, shelter, and education.",
    goalAmount: 210000,
    image:
      "/babatunde.jpg",
    tags: ["Rehab", "Mobility", "Dignity"],
  },
  {
    id: "hassan-food",
    name: "Hassan",
    age: 55,
    title: "Accidental injury",
    problem:
      "Hassan is in the hospital after an accidental injury. Your support provides medical care, rehabilitation, and follow‑ups.",
    goalAmount: 90000,
    image:
      "/hassan.jpg",
    tags: ["Food", "Essentials", "Relief"],
  },
  {
    id: "ngo-general",
    name: "General Fund",
    age: null,
    title: "Keep our emergency response ready",
    problem:
      "General donations help us respond fast: transport, short‑term shelter, hotline operations, and urgent supplies when minutes matter.",
    goalAmount: 1000000,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80",
    tags: ["Emergency", "Response", "Hotline"],
  },
];

export function getCaseById(id) {
  return CASES.find((c) => c.id === id) ?? null;
}


