import { defineStore } from "pinia";
import { Item, Shoplist } from "~/types/Shoplist";
import { getItems, getSingleItem } from "~/services/ItemsServices";
import axios, { AxiosResponse } from "axios";
import { loading } from "@nuxt/ui-templates";
import JsonSearch from "search-array";
import { NavButtonProps } from "~/types/ComponentsProps";
import { StorageLike } from "pinia-plugin-persistedstate";

const arr: Item[] = [
  {
    id: 1,
    title: "Biscuit",
    price: 70,
    image:
      "https://animeshka.org/uploads/posts/2022-02/1645081309_62-animeshka-org-p-altai-and-sayan-mountains-priroda-foto-69.jpg",
  },
  {
    id: 1,
    title: "Milk",
    price: 100,
    image:
      "https://animeshka.org/uploads/posts/2022-02/1645081309_62-animeshka-org-p-altai-and-sayan-mountains-priroda-foto-69.jpg",
  },
  {
    id: 1,
    title: "Coke",
    price: 10,
    image:
      "https://animeshka.org/uploads/posts/2022-02/1645081309_62-animeshka-org-p-altai-and-sayan-mountains-priroda-foto-69.jpg",
  },
];

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
