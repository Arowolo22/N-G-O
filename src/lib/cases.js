export const CASES = [
  {
    id: "tb-treatment-adult",
    name: "Emeka Okonkwo",
    age: 34,
    // title: "Complete 6-month DOTS medication course",
    tbType: "Pulmonary TB",
    stage: "Active Phase (Month 2)",
    story: `Emeka is a 34-year-old father of three who works as a mechanic. He began experiencing a persistent cough and severe weight loss three months ago but delayed testing due to financial constraints.

When he finally collapsed at work, he was rushed to our partner clinic where he tested positive for Pulmonary Tuberculosis. The diagnosis was devastating for his family, as he is the sole breadwinner and could no longer work due to fatigue and the risk of infecting his children.


Your donation will cover his transport to the clinic, essential food packs for his family, and the supplementary medications needed to manage side effects, ensuring he completes the full course and returns to health.`,
    problem:
      "Patients need strictly adhered medication for 6 months to be cured. This fund covers the full course of antibiotics and monitoring to prevent drug resistance.",
    goalAmount: 85000, 
    image:"/emeka.jpg",
    tags: ["Medication", "Cure", "Health"],
  },
  {
    id: "nutritional-support",
    name: "Fatima Yusuf",
    age: 51,
    // title: "High-protein diet for fast recovery",
    tbType: "Extrapulmonary TB (Lymph Node)",
    stage: "Recovery Phase",
    story: `Fatima, a 51-year-old seamstress, was diagnosed with TB of the lymph nodes after noticing painful swellings in her neck. While the medication is free, the toll it takes on the body is immense.

TB medication requires a strong immune system and a full stomach to be effective. Malnutrition is one of the biggest reasons treatment fails, leading to relapse or drug resistance. Fatima lives in a rural community where access to protein-rich food is limited and expensive.`,




    problem:
      "TB causes severe weight loss and weakens the immune system. We provide high-protein food packs (beans, eggs, milk) to help patients rebuild strength while on medication.",
    goalAmount: 120000,
    image:"/fatoma.jpg",
    tags: ["Food", "Nutrition", "Strength"],
  },
  {
    id: "community-screening",
    name: " Lakoto Community",
    age: null,
    // title: "Early detection saves lives",
    tbType: "Prevention & Case Finding",
    stage: "Active Screening Drive",
    story: `Tuberculosis thrives in crowded, poorly ventilated areas. The Lakoto community, with its high population density, is a hotspot for undetected TB cases.

Many residents have had a cough for weeks but assume it is just a common cold or "smoker's cough." By the time they seek help, they may have already infected 10-15 other people, including their own children.`,




    problem:
      "Undetected TB spreads fast. We run mobile screening camps in crowded communities using chest X-rays and GeneXpert tests to find and treat cases early.",
    goalAmount: 450000,
    image:"/makoko.jpg",
    tags: ["Prevention", "X-Ray", "Testing"],
  },
  {
    id: "pediatric-tb",
    name: "Baby Chinedu",
    age: 5,
    // title: "Specialized care for children with TB",
    tbType: "Primary Complex",
    stage: "Diagnosis & Initiation",
    story: `Chinedu is only 5 years old. He contracted TB from a neighbor who was unaware of their status. Pediatric TB is notoriously difficult to diagnose because children cannot produce sputum samples easily.

After weeks of unexplained fever and weight loss, Chinedu was finally diagnosed using advanced stool testing methods. He is weak but fighting hard.`,



    problem:
      "Children with TB need child-friendly formulations and extra care. Your donation ensures they get the gentle, consistent treatment they need to grow up healthy.",
    goalAmount: 150000,
    image:"/baby.jpg",
    tags: ["Children", "Future", "Hope"],
  },
  {
    id: "tb-isolation-support",
    name: "Grace Adebayo",
    age: 24,
    // title: "Safe isolation for infectious patients",
    tbType: "Drug-Resistant TB (Presumptive)",
    stage: "Isolation Pending Confirmation",
    story: `Grace is a teacher who loves her students. Recently, she was flagged for potential Drug-Resistant TB (DR-TB), a more severe form of the disease that does not respond to standard drugs.

While waiting for confirmation and treatment initiation, Grace must isolate to protect her husband and three children in their small one-bedroom apartment. This is physically impossible without external help.`,



    problem:
      "Patients with highly infectious TB need a safe, separate space to recover without infecting family members. We provide temporary shelter and hygiene kits.",
    goalAmount: 200000,
    image:"/grace.png",
    tags: ["Shelter", "Safety", "Hygiene"],
  },
  {
    id: "ngo-general",
    name: "Stop TB Fund",
    age: null,
    // title: "End Tuberculosis in our lifetime",
    tbType: "Global Mission",
    stage: "Ongoing",
    story: `Tuberculosis is the world's deadliest infectious killer, yet it is partially preventable and treatable. The **Stop TB Fund** is the heartbeat of Arowolo Health Foundation.

It allows us to be agile and responsive. When a community reports an outbreak, this fund mobilizes our team. When a patient needs an emergency CT scan that isn't covered by grants, this fund pays for it.

**What this fund covers:**
- **Training:** Equipping local health workers with knowledge to spot TB early.
- **Advocacy:** Fighting for policy changes and lower drug prices.
- **Stigma Reduction:** Educational radio jingles and community theater to stop the shaming of TB patients.
- **Emergency Gaps:** Filling the cracks where government aid stops.

Donating here means you are trusting us to use your money where it is needed most urgently to save lives today.`,
    problem:
      "The General Fund supports our entire mission: awareness campaigns, staff training, patient advocacy, and emergency medical intervention.",
    goalAmount: 5000000,
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80",
    tags: ["Eradication", "Awareness", "Advocacy"],
  },
];

export function getCaseById(id) {
  return CASES.find((c) => c.id === id) ?? null;
}
