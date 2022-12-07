<template>
  <aside
      class="  flex md:fixed h-full w-full md:w-1/4 flex-col gap-4 space-y-4 border-r-2 border-gray-200 bg-white p-4"

  >
    <NavBar @onToggleMenu="onToggleMenu"/>

    <div v-if="toggleMenu" class="flex flex-col justify-start gap-8 h-full">
      <div class="border-b-2 flex flex-col gap-8">
        <div class="">
          <SearchInput :route="'/shoplist/create'" icon="plus" name="Create shoplist"/>
        </div>
        <ul class="flex flex-col gap-4 mb-2">
          <NavButton icon="home" name="Home" route="/"/>
          <NavButton icon="clock" name="History" route="/history"/>
        </ul>
        <IconButton icon="plus" name="Create shoplist" route="/shoplist/create"/>

      </div>
      <div class="flex flex-col h-full justify-between ">
        <div>
          <h3 class="font-bold text-xl">My List</h3>
          <ul v-for="item in itemsStore.shoplists" class="flex flex-col my-2">
            <NavButton :name="item.name" :route=" `/shoplist/list/${item.id}` " customStyle="text-base"
                       icon="shopping-bag"/>
          </ul>
        </div>

        <ul class="mt-10">
          <NavButton icon="user" name="John Doe" route="/account/update"/>
        </ul>
      </div>
    </div>


  </aside>
</template>
<script lang="ts" setup>

import {ref} from "#imports";
import NavBar from "~/components/NavBar/NavBar.vue";
import {useItemsStore} from "~/store/ItemsStore";
import NavButton from "~/components/Buttons/NavButton/NavButton.vue";
import IconButton from "~/components/Buttons/IconButton/IconButton.vue";
import SearchInput from "~/components/Inputs/SearchInput/SearchInput.vue";


const itemsStore = useItemsStore()


const toggleMenu = ref<boolean>(true)
console.log("toggle", toggleMenu.value)

const onToggleMenu = () => {
  toggleMenu.value = !toggleMenu.value
}


</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>