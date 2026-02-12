export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  companyUrl?: string;
}