export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  filters: string[];
  size?: string;
}

export interface Filter {
  name: string;
  value: string;
  active: boolean;
}

export enum SectionType {
  Simple = 1,
  Annotated = 2,
}

export enum Language {
  PT = "PT",
  IT = "IT",
  ES = "ES",
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface FilterState {
  filters: Filter[];
}
