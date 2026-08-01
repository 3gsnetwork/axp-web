export type KnowledgeItem = {
  type: string;
  title: string;
  date: string;
  read: string;
  featured: boolean;
};

export const knowledgeItems: KnowledgeItem[] = [
  { type: "Housing guides", title: "The readiness gap: why affordable supply alone is not enough", date: "Perspective concept", read: "8 min", featured: true },
  { type: "Market intelligence", title: "Housing finance pathways for Africa’s next urban generation", date: "Research concept", read: "12 min", featured: false },
  { type: "Policy insights", title: "What aspiring homeowners should know about changing urban markets", date: "Policy concept", read: "10 min", featured: false },
  { type: "ReadyIQ™", title: "Five signals that shape household mortgage readiness", date: "Insight concept", read: "6 min", featured: false },
  { type: "Mortgage education", title: "Understanding the journey from income to affordability", date: "Guide concept", read: "7 min", featured: false },
  { type: "Urban Living Reports", title: "What sustainable urban living can mean for everyday households", date: "Report concept", read: "9 min", featured: false },
  { type: "Research publications", title: "A practical case for homeownership guidance", date: "Publication concept", read: "11 min", featured: false },
  { type: "Videos", title: "How to approach a more confident ownership journey", date: "Video concept", read: "5 min", featured: false },
  { type: "Downloads", title: "Homeownership pathway worksheet", date: "Download concept", read: "4 min", featured: false },
];
