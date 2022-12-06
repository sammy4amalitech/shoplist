<template>

  <Heading :title="`Shoppinglist name with ID : ${id}`" icon="pencil-square"
           subtitle="The description of the shopping list gevin by the user"/>

  <div class="flex gap-8">
    <ListCard title="NO. ITEMS ON LIST" total="100"/>
    <ListCard title="TOTAL AMOUNT OF LIST ITEMS" total="2347" isMoney="true"/>
    <ListCard title="AVERAGE PRICE" total="500" isMoney="true"/>
  </div>

  <ItemsLayout>
    <h2 v-if="itemsStore.loading" class="text-center font-bold">
      Loading...
    </h2>
    <div v-else v-for="item in itemsStore.allItems">
      <ItemCard
          :title="item?.title"
          :image="item?.image"
          :price="item?.price"
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

