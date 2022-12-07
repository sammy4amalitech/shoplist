<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-8 items-center">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <button v-if="icon" class=" hover:text-green-400 transition p-2 ease-in-out duration-300 mt-1"
              @click="useOnIconClick">
        <nuxt-icon v-if="icon" :class="`${iconStyle} text-2xl`" :name="icon"/>
      </button>
    </div>
    <p v-if="subtitle" class="font-semibold text-gray-500 capitalize ">
      {{ subtitle }}
    </p>
  </div>
</template>
<script lang="ts" setup>

import {HeadingProps} from "~/types/ComponentsProps";

const {title, icon, subtitle, iconStyle} = defineProps<HeadingProps>()

const emit = defineEmits(['onIconClick'])

const useOnIconClick = () => {
  console.log('heading emit')
  emit('onIconClick')
}

</script>
