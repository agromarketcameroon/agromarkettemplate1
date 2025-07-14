export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  stock: number;
  rating: number;
  reviews: number;
  specifications: Record<string, string>;
  features: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
  subcategories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  region: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
  paymentMethod: string;
  shippingAddress: Address;
  createdAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  phone: string;
  region: string;
  city: string;
  address: string;
  postalCode?: string;
}

export interface FilterOptions {
  category?: string;
  subcategory?: string;
  priceRange?: [number, number];
  minRating?: number;
  inStock?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}