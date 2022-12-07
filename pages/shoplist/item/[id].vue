<template>

  <h2 v-if="itemsStore.loading" class="text-center font-bold">Loading...</h2>
  <div
      v-else
      class="  grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 justify-between p-10  gap-8 h-1/3 gap-4 bg-white ">
    <div class=" row-span-1 lg:col-span-1 h-50   flex justify-center items-center ">
      <img alt="item"
           class="h-96 rounded-t-md"
           :src="itemsStore?.item?.image"/>
    </div>
    <div class="flex flex-col gap-8 justify-between row-span-2 lg:col-span-2">


      <Heading
          :title="itemsStore.item?.title"/>

      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-gray-500 ">Description</h2>
        <p class="font-semibold text-gray-500">{{ itemsStore.item?.description }}</p>
      </div>

      <div class="flex gap-8">
        <ListCard title="Item Rating" :total="itemsStore.item?.rating.rate"/>
        <ListCard isMoney="true" title="Avg. Price" :total="itemsStore?.item?.price"/>
      </div>
      <div class="w-full lg:w-2/6 flex flex-col justify-end">
        <IconButton icon="plus" name="Add to shoplist" @onButtonClick="onAddClick"/>
      </div>

    </div>

  </div>

  <div class="flex flex-col gap-8 ">
    <div class="flex justify-start ">
      <h3 class="text-gray-600 text-xl font-bold capitalize">Items in {{ itemsStore.item?.category }} Category</h3>
    </div>
    <ItemsLayout>
      <h2 v-if="itemsStore.loading" class="text-center font-bold">Loading...</h2>
      <div v-for="item in itemsStore.categoryItems" v-else>
        <!--          <h1>{{ item.images[0] }}}</h1>-->
        <ItemCard :image="item.image" :price="item?.price" :title="item?.title" icon="plus" :id="item?.id"/>

      </div>
    </ItemsLayout>

  </div>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <div class="flex flex-col gap-4 ">
          <h3 class=" "><span class=" text-xl font-bold">Add item :</span> <span
              class="text-base font-semibold ">{{
              'This is a title'
            }}</span></h3>
          <h2 class=""><span class="  text-xl font-bold">To shoplist :</span></h2>
        </div>
      </template>
      <template #body>

        <ul v-for="item in itemsStore.shoplists" class="flex flex-col my-2">
          <NavButton :icon="item.icon" :name="item.name" customStyle="text-base"/>
        </ul>

      </template>
    </modal>
  </Teleport>
</template>

<script lang="ts" setup>


import {useItemsStore} from "~/store/ItemsStore";
import ItemsLayout from "~/layouts/ItemsLayout.vue";
import {Item} from "~/types/Shoplist";
import ItemCard from "~/components/Cards/ItemCard/ItemCard.vue";
import IconButton from "~/components/Buttons/IconButton/IconButton.vue";
import ListCard from "~/components/Cards/ListCard/ListCard.vue";

const {id} = useRoute().params

const showModal = ref(false)
console.log('id', id)
const itemsStore = useItemsStore()
itemsStore.getSingleItem(id)

itemsStore.getAllItems()


const item = itemsStore.item

const onAddClick = () => {

  showModal.value = !showModal.value
  console.log("on add click")
}

</script>

<style scoped>

</style>