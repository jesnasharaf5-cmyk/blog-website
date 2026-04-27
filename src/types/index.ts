export interface User {
  id: string;
  email: string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SupportMessage {
  id?: string;
  email: string;
  subject: string;
  message?: string;
  created_at?: string;
}

