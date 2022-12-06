<template>

  <Heading :title="`Shoppinglist name with ID : ${id}`" icon="pencil-square"
           subtitle="The description of the shopping list gevin by the user"/>

  <div class="flex gap-8">
    <ListCard title="NO. ITEMS ON LIST" total="100"/>
    <ListCard isMoney="true" title="TOTAL AMOUNT OF LIST ITEMS" total="2347"/>
    <ListCard isMoney="true" title="AVERAGE PRICE" total="500"/>
  </div>

  <ItemsLayout>
    <h2 v-if="itemsStore.loading" class="text-center font-bold">
      Loading...
    </h2>
    <div v-for="item in itemsStore.allItems" v-else>
      <ItemCard
          :image="item?.image"
          :price="item?.price"
          :title="item?.title"
          :id="item?.id"
          icon="check"
      />
    </div>
  </ItemsLayout>


</template>

<script lang="ts" setup>

import ListCard from "~/components/ListCard.vue";
import ItemsLayout from "~/layouts/ItemsLayout.vue";
import {useItemsStore} from "~/store/ItemsStore";

const {id} = useRoute().params

const itemsStore = useItemsStore();
itemsStore.getAllItems();


const items = itemsStore.allItems;

</script>

