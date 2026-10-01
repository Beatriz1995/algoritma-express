export interface Blog {

  id: number;

  title: string;

  slug: string;

  content: string;

  image: string;

  gallery?: string[];

  categoryId: string;

  author: string;

  tags: string[];

  readTime: number;

  views: number;

  seoTitle?: string;

  seoDescription?: string;

  publishedAt: string;

  featured: boolean;

  active: boolean;

  createdAt?: string;

  updatedAt?: string;
  
  summary?: string;

}