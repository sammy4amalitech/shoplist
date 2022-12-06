import { defineStore } from "pinia";
import { Item, Shoplist } from "~/types/Shoplist";
import { getItems, getSingleItem } from "~/services/ItemsServices";

const shoplistsArr: Shoplist[] = [
  {
    id: 1,
    name: "Tuesday Shopping ",
    icon: "shopping-bag",
  },
  {
    id: 2,
    name: "Wednesday Shopping ",
    icon: "shopping-bag",
  },
];

interface State {
  items: Item[];
  loading: boolean;
  searchInput: string;

  shoplists: Shoplist[];
  item: object | undefined;
  persist: object;
}

export const useItemsStore = defineStore("items", {
  state: (): State => ({
    items: [],
    item: undefined,
    loading: false,
    searchInput: "",
    shoplists: shoplistsArr,
    persist: {
      storage: persistedState.localStorage,
    },
  }),

  getters: {
    allItems: (state) => state.items,

    filteredItems: (state) => {
      return state.items.filter((item) =>
        item.title.includes(state.searchInput)
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

      try {
        list && this.shoplists.push(list);
      } catch (e) {
        console.error("error creating shoplist", e);
      }

      this.loading = false;
    },
  },
});
