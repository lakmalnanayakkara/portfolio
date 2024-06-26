import { Tag } from '../utils/Tag';

export interface ProjectDetails {
  id: number;
  name: string;
  summary: string;
  description: string;
  projectLink: string;
  images: string[];
  technologies: Tag[];
}
