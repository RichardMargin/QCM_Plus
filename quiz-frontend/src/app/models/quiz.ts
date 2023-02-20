export interface Quiz {
  id: number;
  name: string;
  description: string;
  isShared: boolean;
  isActive: boolean;
  nbOfQuestions: number;
}

export interface PageQuiz {
  products: Quiz[];
  page: number;
  size: number;
  totalPages: number;
}
