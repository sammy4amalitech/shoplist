<template>


  <div
      class=" relative  text-gray-600 focus-within:text-gray-400 border border-gray-200 focus:border-green-400 border-2 rounded-md"
      @input="useSearchInput">
              <span class="absolute inset-y-0 left-0 flex itemsStore-center pl-2 mt-2.5">
                <nuxt-icon name="magnifying-glass" class="text-gray-400"/>

              </span>
    <BasicInput v-model="searchInput" customStyle="pl-10" name="search" placeholder="Search..." type="text"/>

  </div>

</template>
<script lang="ts" setup>
import {IconInputProps} from "~/types/ComponentsProps";
import BasicInput from "~/components/Inputs/BasicInput/BasicInput.vue";
import {useItemsStore} from "~/store/ItemsStore";

const {name, icon, type,} = defineProps<IconInputProps>()

const itemsStore = useItemsStore();

const searchInput = ref<string>("")

watch(searchInput, () => {
  itemsStore.searchInput = searchInput.value
})


const emit = defineEmits(["onUseSearchInput"])

const useSearchInput = () => {
  console.log('searchInput')
  emit('onUseSearchInput')
}

</script>