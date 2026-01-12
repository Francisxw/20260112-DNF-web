export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: 'NEW' | 'HOT' | 'SALE';
  category: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

export interface NavItem {
  label: string;
  path: string;
  isDropdown?: boolean;
}
