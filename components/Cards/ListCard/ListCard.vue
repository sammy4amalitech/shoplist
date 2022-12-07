<template>
  <div class="flex gap-8 text-center">
    <div class="flex flex-col gap-4 border-4 border-green-400 rounded-md p-4 ">
      <h2 class="font-bold text-gray-500">{{ title }}</h2>
      <h3 class="text-xl text-green-400 font-extrabold"><span v-if="isMoney">&#8373</span> {{ total }}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {ListCardProps} from "~/types/ComponentsProps";

const {title, total, isMoney} = defineProps<ListCardProps>()

</script>
