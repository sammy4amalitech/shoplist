interface Item {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;

  rating: object;
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
