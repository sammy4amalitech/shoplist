<template>
  <Story>
    <AddListButton :name="name" :icon="icon" :customStyle="customStyle"/>
  </Story>
</template>

<script lang="ts" setup>

import AddListButton from "~/components/Buttons/AddListButton/AddListButton.vue";

const customStyle = ref('')
const icon = ref('plus')
const name = ref('AddListButton')

</script>

<style scoped>

</style>