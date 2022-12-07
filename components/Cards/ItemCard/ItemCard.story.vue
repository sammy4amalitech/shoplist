<template>


  <!--  <Story>-->
  <!--    <ItemCard :title="title" :image="image" :price="price" icon="plus" id="1"/>-->
  <!--  </Story>-->

</template>

<script lang="ts" setup>


import ItemCard from "~/components/Cards/ItemCard/ItemCard.vue";

const title = ref<string>('Card Title')
const image = ref<string>('https://i.insider.com/55a95c962acae711008b7b73?width=1136&format=jpeg')
const price = ref<string>('100')


</script>

<style scoped>

</style>