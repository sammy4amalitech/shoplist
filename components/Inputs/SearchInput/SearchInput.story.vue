<template>


  <Story>
    <SearchInput :name="name" model-value="searchInput" type=""/>
  </Story>

</template>
<script lang="ts" setup>

import SearchInput from "~/components/Inputs/SearchInput/SearchInput.vue";


const searchInput = ref<string>("")


</script>