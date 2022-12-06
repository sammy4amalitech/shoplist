<template>


  <div :id="`${props.id}`"
       class=" items-end rounded-md justify-end p-4 bg-white h-full shadow-md grid grid-rows-2 gap-8">
    <NuxtLink :to="`/shoplist/item/${props.id}`">
      <div class="h-52 row-span-1 flex justify-center items-center ">
        <img :src="props.image"
             alt="item"
             class="h-full rounded-t-md"/>
      </div>
    </NuxtLink>
    <div class=" row-span-1 bg-red flex flex-col justify-between gap-4">
      <div class=" font-bold ">
        {{ props.title }}
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col  justify-between align-middle items-center  ">
          <div class="font-bold"><span>&#8373</span> {{ props.price }}</div>

          <div class="text-xs font-bold text-gray-500">Avg. Price</div>

        </div>
        <div class=" flex flex-col mt-3.5  ">
          <IconButton :icon="props.icon" @onButtonClick="onAddClick"/>


          <!--          <IconButton @onButtonClick="onAddClick" name="" :icon="props.icon"/>-->
        </div>
      </div>

    </div>


  </div>


  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <div class="flex flex-col gap-4 ">
          <h3 class=" "><span class=" text-xl font-bold">Add item :</span> <span
              class="text-base font-semibold ">{{
              props.title
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


import {ItemCardProps} from "~/types/ComponentsProps";
import {useItemsStore} from "~/store/ItemsStore";

const itemsStore = useItemsStore()

const props = defineProps<ItemCardProps>()
const showModal = ref(false)
const showLists = ref(false)

const onAddClick = () => {
  showModal.value = !showModal.value
  console.log("on add click")
}


</script>

<style scoped>

</style>