<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue',$event.target.value)"
      :type="type"
      :name="name"
      :class="`${customStyle} py-2 text-sm w-full  rounded-md focus:border-green-400  bg-gray-50 text-gray-700 font-semibold focus:outline-none focus:bg-white`"
      :placeholder="placeholder"
      autocomplete="off"
  />
</template>
<script lang="ts" setup>

import {InputProps} from "~/types/ComponentsProps";

const {name, type, placeholder, customStyle, modelValue} = defineProps<InputProps>()


</script>