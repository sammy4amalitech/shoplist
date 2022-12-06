<template>

  <Heading title="Create a new Shoplist"
           subtitle="Create a custom shoplist to help you organize your shopping items"/>
  <form action="" class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <label for="name" class="font-semibold">Name</label>
      <BasicInput v-model="name" name="name" type="text" placeholder="eg: Monday shopping "
                  customStyle="border-gray-200 border-2 p-4"/>
    </div>
    <div class="flex flex-col gap-2">
      <label for="name" class="font-semibold">Description</label>
      <textarea v-model="description" name="name" type="text" placeholder="eg: Shipping to be done on Monday... "
                rows="10"
                class="border-gray-200 border-2 p-4 rounded-md"/>

    </div>

    <div class=" flex justify-center items-center w-full lg:w-1/3 lg:justify-start">
      <IconButton @onButtonClick="createList" name="Create shoplist" type="submit" customStyle=" px-10 text-base "
                  icon="plus"/>
    </div>

  </form>

</template>

<script lang="ts" setup>
import BasicInput from "~/components/BasicInput.vue";
import Heading from "~/components/Heading.vue";
import {ref} from "#imports";
import {useItemsStore} from "~/store/ItemsStore";
import {Shoplist} from "~/types/Shoplist";

const name = ref<string>("")
const description = ref<string>("")

const itemsStore = useItemsStore()


const createList = () => {
  console.log('createlist clicked')
  itemsStore.createList({name: name.value, description: description.value} as Shoplist)
}


</script>

