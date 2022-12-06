<template>
  <div class=" absolute min-h-screen w-full bg-gray-100  text-gray-600">
    <div class="flex flex-col md:flex-row">
      <!-- aside -->
      <SideBar/>

      <!-- main content page -->
      <div class=" w-full relative top-20 md:top-0 md:left-1/4 md:w-3/4 p-8  ">
        <div class="flex flex-col gap-8">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>


</script>

<style>

</style>

