<template>


  <!--  <div :id="`${props.id}`" class=" p-2 h-[30rem] flex flex-col  justify-between bg-white p-4 rounded-md">-->
  <!--    <div class="h-60 w-6-">-->
  <!--      <img-->
  <!--          :src="props.image"-->
  <!--          alt=""-->
  <!--          class="h-full rounded-md bg-c"-->
  <!--      >-->
  <!--    </div>-->
  <!--    <div class="h-[8rem]">-->
  <!--      <div>-->
  <!--        <p>{{ props.title }}</p>-->

  <!--      </div>-->
  <!--      <div class="flex justify-between">-->
  <!--        <div>-->
  <!--          <p class="">₵ 109.95</p>-->
  <!--          <p>Avg. Price</p>-->

  <!--        </div>-->
  <!--        <IconButton icon="plus"/>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--  </div>-->


  <div :id="`${props.id}`"
       class="  items-end rounded-md justify-center  p-4 bg-white  shadow-md grid grid-rows-2  ">
    <NuxtLink :to="`/shoplist/item/${props.id}`" class="  h-full ">
      <div class=" h-60 row-span-1 flex   justify-center items-center ">
        <img :src="props.image"
             alt="item"
             class=" h-full  "/>
      </div>
    </NuxtLink>
    <div class=" w-full row-span-1 bg-red flex flex-col justify-between gap-4">
      <div class=" font-bold ">
        {{ props.title }}
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col  justify-between  items-center  ">
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