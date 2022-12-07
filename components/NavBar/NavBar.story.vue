<template>

  <Story>
    <NavBar @click="logEvent('navbarClick', useToggleMenu)"/>
  </Story>
</template>
<script lang="ts" setup>
import {logEvent} from 'histoire/client'

const emits = defineEmits(['onToggleMenu']);

const useToggleMenu = () => {
  console.log('menu clicked')
}

</script>
