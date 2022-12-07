<template>
  <Story>
    <BasicInput name="name"/>
  </Story>
</template>
<script lang="ts" setup>


import {InputProps} from "~/types/ComponentsProps";
import BasicInput from "~/components/Inputs/BasicInput/BasicInput.vue";

const name = ref('Basic Input')

</script>