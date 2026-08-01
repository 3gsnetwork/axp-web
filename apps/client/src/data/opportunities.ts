export type Opportunity = {
  slug: string;
  title: string;
  headline: string;
  location: string;
  price: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  tags: string[];
  image: string;
  overview: string;
};

export const opportunityData: Opportunity[] = [
  { slug: "lekki-modern-terrace", title: "Own a Home in Lekki – From ₦85m.", headline: "Modern 3-Bedroom Terrace", location: "Lekki, Lagos", price: "From ₦85,000,000", type: "Terrace", bedrooms: "3 Bedrooms", bathrooms: "2 Bathrooms", parking: "2 Parking Spaces", tags: ["Mortgage Available", "Flexible Payment", "Ready to Move"], image: "https://res.cloudinary.com/gxhmv4fu/image/upload/w_800,c_limit,f_auto,q_auto/v1785536364/bedroom-terrace_catqzl.jpg", overview: "A representative modern terrace concept for buyers exploring accessible ownership pathways in a well-connected Lagos neighbourhood." },
  { slug: "abuja-family-living", title: "Family Living in Abuja – Mortgage Available.", headline: "Family Living Residence", location: "Abuja", price: "Mortgage pathway available", type: "Family Home", bedrooms: "3 Bedrooms", bathrooms: "2 Bathrooms", parking: "2 Parking Spaces", tags: ["Mortgage Available", "Flexible Payment", "Ready to Move"], image: "https://res.cloudinary.com/gxhmv4fu/image/upload/w_800,c_limit,f_auto,q_auto/v1785536366/family-residence_q3gcl0.jpg", overview: "A representative family-living concept for buyers seeking a considered homeownership route in Abuja." },
  { slug: "ibadan-modern-apartments", title: "Modern Apartments in Ibadan – Flexible Payment.", headline: "Modern Apartment Collection", location: "Ibadan, Oyo", price: "Flexible payment concept", type: "Apartment", bedrooms: "2 Bedrooms", bathrooms: "2 Bathrooms", parking: "1 Parking Space", tags: ["Flexible Payment", "Off-Plan", "Mortgage Available"], image: "https://res.cloudinary.com/gxhmv4fu/image/upload/w_800,c_limit,f_auto,q_auto/v1785536365/mordern-apartment-collection_bbphcm.jpg", overview: "A representative apartment concept that illustrates how phased payment and guidance could support an ownership journey." },
  { slug: "upcoming-opportunity", title: "Upcoming Opportunity – Register Interest.", headline: "Future Urban Living Opportunity", location: "Nigeria", price: "Details to be confirmed", type: "Upcoming", bedrooms: "To be confirmed", bathrooms: "To be confirmed", parking: "To be confirmed", tags: ["Upcoming", "Flexible Payment", "Off-Plan"], image: "https://res.cloudinary.com/gxhmv4fu/image/upload/w_800,c_limit,f_auto,q_auto/v1785536365/future-living-opportunities_e4dpmo.jpg", overview: "A placeholder for a future curated opportunity. No developer, property, price or availability has been confirmed." },
];
