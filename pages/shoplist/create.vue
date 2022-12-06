<template>

  <Heading subtitle="Create a custom shoplist to help you organize your shopping items"
           title="Create a new Shoplist"/>
  <form action="" class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <label class="font-semibold" for="name">Name</label>
      <BasicInput v-model="name" customStyle="border-gray-200 border-2 p-4" name="name"
                  placeholder="eg: Monday shopping "
                  type="text"/>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-semibold" for="name">Description</label>
      <textarea v-model="description" class="border-gray-200 border-2 p-4 rounded-md" name="name"
                placeholder="eg: Shipping to be done on Monday... "
                rows="10"
                type="text"/>

    </div>

    <div class=" flex justify-center items-center w-full lg:w-1/3 lg:justify-start">
      <IconButton customStyle=" px-10 text-base " icon="plus" name="Create shoplist" type="submit"
                  @onButtonClick="createList"/>
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
  itemsStore.createList({
    name: name.value,
    description: description.value,
    id: itemsStore.shoplists.length + 1
  } as Shoplist)
}


</script>

