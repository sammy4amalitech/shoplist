<template>
  <Story>
    <UnderlinedButton :name="name"/>
  </Story>
</template>
<script lang="ts" setup>

import {UnderlinedButtonProps} from "~/types/ComponentsProps";
import {logEvent} from 'histoire/client'
import UnderlinedButton from "~/components/Buttons/UnderlinedButton/UnderlinedButton.vue";

const name = ref<string>('Underlined button')
</script>
