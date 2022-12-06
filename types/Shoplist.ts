import { NavButtonProps } from "~/types/ComponentsProps";

interface Item {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: Category;
  image: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Shoplist {
  name: string;
  icon: string;
  id: number;
  description?: string;
}

export { Item, Shoplist };
