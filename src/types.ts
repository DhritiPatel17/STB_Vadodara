export type Page = "home" | "catalog" | "about" | "testimonials" | "contact" | "admin";

export interface Enquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  corporateEmail: string;
  productRequirement: string;
  detailedMessage: string;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  role: string;
  meta?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: string;
  category: "All" | "TMT Bars" | "Structural Steel" | "Pipes & Tubes" | "Sheets";
}
