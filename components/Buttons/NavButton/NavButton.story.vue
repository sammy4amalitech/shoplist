<template>
  <Story>
    <NavButton :name="name"/>
  </Story>
</template>
<script lang="ts" setup>


import {NavButtonProps} from "~/types/ComponentsProps";
import NavButton from "~/components/Buttons/NavButton/NavButton.vue";

const name = ref('Nav Button')
</script>