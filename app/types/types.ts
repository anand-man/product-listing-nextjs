export interface ProductCardTypes {
  id: number;
  title: string;
  price?: number;
  description: string;
  image: string;
  altText?: string;
  category?: string;
  rating?: { rate?: number; count?: number };
}
