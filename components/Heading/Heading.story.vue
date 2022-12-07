<template>
  <Story>
    <Heading :title="title" :subtitle="subtitle"/>

  </Story>

</template>
<script lang="ts" setup>

import {HeadingProps} from "~/types/ComponentsProps";

const title = ref('This is the heading title')
const subtitle = ref('This is the heading subtitle')


</script>
