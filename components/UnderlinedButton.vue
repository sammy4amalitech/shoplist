<template>
  <button class="text-green-400 underline hover:text-green-500">{{ name }}</button>
</template>
<script lang="ts" setup>

import {UnderlinedButtonProps} from "~/types/ComponentsProps";

const {name} = defineProps<UnderlinedButtonProps>()

</script>
