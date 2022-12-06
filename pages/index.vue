<template>
  <!-- page -->

  <Hero/>

  <SearchInput
      name="search"
      type="text"
      placeholder="Search..."
      icon="magnifying-glass"
      @onUseSearchInput="()=>console.log('input yh')"
  />

  <ItemsLayout>
    <h2 v-if="itemsStore.loading" class="text-center font-bold">
      Loading...
    </h2>
    <div v-else v-for="item in itemsStore.filteredItems">
      <ItemCard
          :title="item?.title"
          :image="item?.image"
          :price="item?.price"
          :id="item?.id"
          icon="plus"
      />
    </div>
  </ItemsLayout>

</template>

<script lang="ts" setup>
import {nextTick, onBeforeMount, onMounted} from "vue";
import ImageCard from "../components/ItemCard.vue";
import {useCounterStore} from "~/store/counter";
import {useItemsStore} from "~/store/ItemsStore";
import {Item} from "~/types/Shoplist";
import {ItemCardProps} from "~/types/ComponentsProps";
import {getItems} from "~/services/ItemsServices";
import ItemsLayout from "~/layouts/ItemsLayout.vue";
import login from "~/pages/account/login.vue";

const itemsStore = useItemsStore();

itemsStore.getAllItems();
</script>
