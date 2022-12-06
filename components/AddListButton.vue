<template>
  <li
      :class=" `${customStyle} text-xl  font-semibold hover:shadow-md hover:bg-gray-100 cursor-pointer rounded-md transition p-2 ease-in-out duration-300`">

    <div class="flex  justify-start gap-4 itemsStore-center">
      <nuxt-icon :name="`${icon}`" class="mt-1"/>
      <div>{{ name }}</div>
    </div>

  </li>
</template>

<script>

</script>

<style scoped>

</style>