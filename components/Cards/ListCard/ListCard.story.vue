<template>
  <Story>
    <ListCard :title="title" :total="total"/>
  </Story>

</template>
<script lang="ts" setup>

import {ListCardProps} from "~/types/ComponentsProps";
import ListCard from "~/components/Cards/ListCard/ListCard.vue";

const title = ref<string>('Card Title')
const total = ref<string>('100')

</script>
