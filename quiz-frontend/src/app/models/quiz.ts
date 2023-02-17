export interface Quiz {
  id: string;
  name: string;
  description: string;
  isShared: boolean;
  isActive: boolean;
}

export interface PageQuiz {
  products: Quiz[];
  page: number;
  size: number;
  totalPages: number;
}
