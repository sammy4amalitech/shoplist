<template>
  <nav class="flex flex-col gap-10 ">
    <div class="flex flex-col justify-start gap-4">
      <div class="flex  justify-between  md:justify-center align-middle ">
        <NuxtLink>
          <h1 class="text-3xl text-green-400 font-extrabold text-center">
            Shoplist
          </h1>
        </NuxtLink>

        <div class="md:hidden" @click="useToggleMenu">
          <nuxt-icon v-if="toggleMenu" class="text-4xl extrabold"
                     name="x-mark"/>
          <nuxt-icon v-else class="text-4xl extrabold"
                     name="menu"/>
        </div>


      </div>


    </div>


  </nav>
</template>
<script lang="ts" setup>

const emits = defineEmits(['onToggleMenu']);

const useToggleMenu = () => {
  emits('onToggleMenu')
}

</script>
