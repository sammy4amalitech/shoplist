interface Item {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating: object;
}

interface Shoplist {
  name: string;
  icon: string;
  id: number;
  description?: string;
}

export { Item, Shoplist };
