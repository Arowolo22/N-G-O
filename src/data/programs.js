import { Ambulance, Home, Scale, HeartPulse } from "lucide-react";

export const PROGRAMS = [
  {
    slug: "mobile-xray",
    title: "Mobile X-Ray & Screening",
    desc: "We bring geneXpert testing and digital X-ray units directly to rural communities to detect TB cases early and prevent transmission.",
    icon: Ambulance,
    image: "/gen-machine.jpg", // Using an existing image as placeholder
    about: "Our Mobile X-Ray & Screening program is at the forefront of early TB detection. By eliminating the distance between patients and diagnostic tools, we ensure that even the most remote communities have access to life-saving technology. Our units are equipped with state-of-the-art digital X-ray and GeneXpert machines, providing rapid and accurate results on the spot. \n\nThis early intervention is crucial because TB is highly contagious but treatable if caught early. By going directly to high-risk areas—such as informal settlements and rural villages—we bypass the barriers of transport costs and long hospital wait times that often prevent people from seeking care."
  },
  {
    slug: "dots-treatment",
    title: "Directly Observed Treatment (DOTS)",
    desc: "Our community health workers supervise medication intake (Directly Observed Treatment) to ensure every patient completes their 6-month course.",
    icon: HeartPulse,
    image: "/tuber-hero.jpg", // Placeholder
    about: "DOTS is a globally recognized strategy for TB control. Our implementation focuses on community integration, where health workers visit patients in their homes. This personalized approach not only ensures medical compliance but also provides psychological support, helping patients overcome the challenges of a long-term treatment regimen. \n\nPreventing drug-resistant TB is our main goal here. When a patient stops taking their medication halfway through because they feel better, the bacteria can adapt and become much harder to kill. Our DOTS providers form strong bonds with their patients, becoming a source of motivation and accountability throughout the grueling six-month recovery process."
  },
  {
    slug: "nutrition-support",
    title: "Nutrition & Food Security",
    desc: "TB medication requires a strong immune system. We provide weekly protein-rich food parcels to patients who cannot afford proper meals.",
    icon: Home,
    image: "/nigeria-women-ngo.jpg", // Placeholder
    about: "Successful TB treatment is nearly impossible without adequate nutrition. Many of our patients face extreme poverty, making it hard to maintain the strength needed for recovery. Our Nutrition Support program provides high-protein food baskets tailored to the needs of TB patients, ensuring their bodies can effectively process the medication and heal. \n\nA typical parcel includes beans, rice, fortified vegetable oil, eggs, and seasonal vegetables. For many of our beneficiaries, this is their only reliable source of protein. We've seen that patients who receive nutritional support have significantly higher recovery rates and fewer complications compared to those who struggle with food insecurity while on treatment."
  },
  {
    slug: "community-advocacy",
    title: "Community Advocacy",
    desc: "We train local volunteers to combat stigma, educate families on prevention, and encourage those with symptoms to get tested without fear.",
    icon: Scale,
    image: "/makoko.jpg", // Placeholder
    about: "Stigma remains one of the greatest barriers to TB eradication. Through Community Advocacy, we empower local leaders and volunteers to spread awareness and counteract misinformation. By normalizing conversations around TB and promoting early testing, we create a supportive environment where patients feel safe seeking the care they need. \n\nOur advocates are often former TB patients themselves. Their lived experience allows them to speak with authority and empathy, breaking down the myths that TB is a 'curse' or a 'death sentence.' By educating the community, we reduce the fear associated with the disease and encourage people to get tested at the first sign of a persistent cough."
  }
];
