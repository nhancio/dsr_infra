export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  features: string[];
  completionDate?: string;
  area?: string;
}