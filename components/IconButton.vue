<template>
  <div
      :class="`${customStyle}text-xl mb-2 h-full font-semibold text-gray-100 bg-green-400 hover:shadow-md hover:bg-green-500 cursor-pointer p-2 rounded-md transition ease-in-out duration-300`">
    <NuxtLink :to="route">
      <div @click="useOnButtonClick" class="flex  justify-center gap-2 itemsStore-center">

        <nuxt-icon v-if="icon" :name="icon" class="mt-1"/>

        <div v-if="name">{{ name }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

import {IconButtonProps} from "~/types/ComponentsProps";

const {name, icon, customStyle, route} = defineProps<IconButtonProps>()

const emit = defineEmits(["onButtonClick"])

const useOnButtonClick = () => {
  console.log('clicked')
  emit("onButtonClick")
}

</script>

<style scoped>

</style>