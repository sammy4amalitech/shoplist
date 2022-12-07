import { defineStore } from "pinia";
import { Item, Shoplist } from "~/types/Shoplist";
import { getItems, getSingleItem } from "~/services/ItemsServices";

const shoplistsArr: Shoplist[] = [
  {
    id: 20,
    name: "Tuesday Shopping ",
    icon: "shopping-bag",
  },
  {
    id: 30,
    name: "Wednesday Shopping ",
    icon: "shopping-bag",
  },
];

interface State {
  items: Item[];
  loading: boolean;
  searchInput: string;

  shoplists: Shoplist[];
  item: Item | undefined;
}

export const useItemsStore = defineStore("items", {
  state: (): State => ({
    items: [],
    item: {
      id: 0,
      title: "",
      price: 0,
      category: "",
      image: "",
      rating: {},
    },
    loading: false,
    searchInput: "",
    shoplists: shoplistsArr,
  }),

  getters: {
    allItems: (state) => state.items,

    filteredItems: (state) => {
      return state.items.filter((item) =>
        item.title.includes(state.searchInput)
      );
    },
    categoryItems: (state) => {
      return state.items.filter(
        (item) => item.category === state?.item?.category
      );
    },
  },
  actions: {
    async getAllItems() {
      this.loading = true;
      try {
        this.items = await Promise.resolve(getItems());
        //this.items = arr;
      } catch (e) {
        console.error("error getting all Items", e);
      }
      this.loading = false;
    },
    async getSingleItem(id: string | string[]) {
      this.loading = true;
      try {
        this.item = await Promise.resolve(getSingleItem(id));
        //this.items = arr;
      } catch (e) {
        console.error("error getting all Items", e);
      }
      this.loading = false;
    },
    async createList(list: Shoplist) {
      this.loading = true;

      console.log("shoplist created", list);
      try {
        list && this.shoplists.push(list);
      } catch (e) {
        console.error("error creating shoplist", e);
      }

      this.loading = false;

      console.log("get localStorage", await localStorage.getItem("list"));
    },
  },
});
