export interface Category {
  id: number;
  name: string;
  typeImg: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}
