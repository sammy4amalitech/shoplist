<template>


  <div
      @input="useSearchInput"
      class=" relative  text-gray-600 focus-within:text-gray-400 border border-gray-200 focus:border-green-400 border-2 rounded-md">
              <span class="absolute inset-y-0 left-0 flex itemsStore-center pl-2 mt-2">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 "/>
              </span>
    <BasicInput name="search" placeholder="Search..." type="text" customStyle="pl-10" v-model="searchInput"/>

  </div>

</template>
<script lang="ts" setup>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/solid'
import {IconInputProps} from "~/types/ComponentsProps";
import BasicInput from "~/components/BasicInput.vue";
import {useItemsStore} from "~/store/ItemsStore";

const {name, icon, type, placeholder} = defineProps<IconInputProps>()

const itemsStore = useItemsStore();

const searchInput = ref<string>("")

watch(searchInput, () => {
  itemsStore.searchInput = searchInput.value
})


const emit = defineEmits(["onUseSearchInput"])

const useSearchInput = (input: string) => {
  console.log('searchInput')
  emit('onUseSearchInput')
}

</script>