<template>


  <div
      class="  grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 justify-between p-10  gap-8 h-1/3 gap-4 bg-white ">
    <div class=" row-span-1 lg:col-span-1 h-50   flex justify-center items-center ">
      <img alt="item"
           class="h-96 rounded-t-md"
           src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
    </div>
    <div class="flex flex-col gap-8 justify-between row-span-2 lg:col-span-2">


      <Heading subtitle=" men's clothing"
               title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"/>

      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-gray-500 ">Description</h2>
        <p class="font-semibold text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
          aliquam, autem
          cum deleniti
          exercitationem fugiat fugit impedit in incidunt itaque molestiae numquam provident quam quis suscipit
          voluptatem voluptatibus, voluptatum.</p>
      </div>

      <div class="flex gap-8">
        <ListCard title="Item Rating" total="3.6"/>
        <ListCard isMoney="true" title="Avg. Price" total="500"/>
      </div>
      <div class="w-full lg:w-2/6 flex flex-col justify-end">
        <IconButton icon="plus" name="Add to shoplist" @onButtonClick="onAddClick"/>
      </div>

    </div>

  </div>

  <div>

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

const {id} = useRoute().params

const showModal = ref(false)
console.log('id', id)
const itemsStore = useItemsStore()

itemsStore.getSingleItem(id)
const item = itemsStore.item
const onAddClick = () => {

  showModal.value = !showModal.value
  console.log("on add click")
}

</script>

<style scoped>

</style>