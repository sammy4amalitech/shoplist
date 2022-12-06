<template>

  <div class="flex justify-end ">
    <UnderlinedButton name="Clear history"/>
  </div>
  <ItemsLayout>
    <h2 v-if="itemsStore.loading" class="text-center font-bold">Loading...</h2>
    <div v-for="item in itemsStore.allItems" v-else>
      <!--          <h1>{{ item.images[0] }}}</h1>-->
      <ItemCard :image="item.image" :price="item?.price" :title="item?.title" icon="plus"/>

    </div>
  </ItemsLayout>

</template>

<script lang="ts" setup>
import {useItemsStore} from "~/store/ItemsStore";
import ItemsLayout from "~/layouts/ItemsLayout.vue";
import UnderlinedButton from "~/components/UnderlinedButton.vue";


const itemsStore = useItemsStore()

const items = itemsStore.allItems


console.log("axios res", itemsStore.getAllItems())


itemsStore.getAllItems()


</script>

