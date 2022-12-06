<template>
  <!-- page -->

  <Hero/>

  <SearchInput
      icon="magnifying-glass"
      name="search"
      placeholder="Search..."
      type="text"
      @onUseSearchInput="()=>console.log('input yh')"
  />

  <ItemsLayout>
    <h2 v-if="itemsStore.loading" class="text-center font-bold">
      Loading...
    </h2>
    <div v-for="item in itemsStore.filteredItems" v-else>
      <ItemCard
          :id="item?.id"
          :image="item?.image"
          :price="item?.price"
          :title="item?.title"
          icon="plus"
      />
    </div>
  </ItemsLayout>

</template>

<script lang="ts" setup>
import {useItemsStore} from "~/store/ItemsStore";
import ItemsLayout from "~/layouts/ItemsLayout.vue";

const itemsStore = useItemsStore();

itemsStore.getAllItems();
</script>
