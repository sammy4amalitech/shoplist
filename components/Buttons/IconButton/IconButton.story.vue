<template>
  <Story>
    <IconButton @onButtonClick="logEvent('onButtonClick', $event)" :name="name" :icon="plus"
    />
  </Story>
</template>

<script lang="ts" setup>
import {logEvent} from 'histoire/client'
import {IconButtonProps} from "~/types/ComponentsProps";
import IconButton from "~/components/Buttons/IconButton/IconButton.vue";

const icon = ref<string>('plus')
const name = ref<string>('Icon Button')

// const emit = defineEmits(["onButtonClick"])
//
// const useOnButtonClick = () => {
//   console.log('clicked')
//   emit("onButtonClick")
// }

</script>

<style scoped>

</style>