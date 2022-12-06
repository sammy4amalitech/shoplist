<template>
  <aside
      class="  flex md:fixed h-full w-full md:w-1/4 flex-col gap-4 space-y-4 border-r-2 border-gray-200 bg-white p-4"

  >
    <NavBar @onToggleMenu="onToggleMenu"/>

    <div v-if="toggleMenu" class="flex flex-col justify-start gap-8 h-full">
      <div class="border-b-2 flex flex-col gap-8">
        <div class="">
          <SearchInput name="Create shoplist" icon="plus" :route="'/shoplist/create'"/>
        </div>
        <ul class="flex flex-col gap-4 mb-2">
          <NavButton name="Home" icon="home" route="/"/>
          <NavButton name="History" icon="clock" route="/history"/>
        </ul>
        <IconButton name="Create shoplist" icon="plus" route="/shoplist/create"/>

      </div>
      <div class="flex flex-col h-full justify-between ">
        <div>
          <h3 class="font-bold text-xl">My List</h3>
          <ul v-for="item in itemsStore.shoplists" class="flex flex-col my-2">
            <NavButton icon="shopping-bag" :name="item.name" :route=" `/shoplist/list/${item.id}` "
                       customStyle="text-base"/>
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
import NavBar from "~/components/NavBar.vue";
import ListNavs from "~/components/ShopLists.vue";
import Lists from "~/components/ShopLists.vue";
import ShopLists from "~/components/ShopLists.vue";
import {NavButtonProps} from "~/types/ComponentsProps";
import {useItemsStore} from "~/store/ItemsStore";


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