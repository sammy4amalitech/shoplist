<template>
  <div class="flex justify-center gap-72  ">
    <Heading :iconStyle="`${ !shouldEdit && 'text-green-400'}`" icon="pencil-square"
             subtitle="Feel free to update your account"
             title="Hello John Doe" @onIconClick="onEditClick"/>
    <div class="flex flex-col justify-start">
      <UnderlinedButton name="Log out"/>
    </div>
  </div>
  <div class="flex justify-center mt-8">
    <form action="" class="flex flex-col  gap-8 w-3/6">
      <div class="flex flex-col gap-4">
        <div class="">
          <img alt="" class="rounded-md "
               src="https://grist.org/grist-50/wp-content/uploads/sites/2/2017/03/seanawatkins.jpg">
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="font-semibold" for="username">Name</label>
        <BasicInput v-model="username" :disabled="shouldEdit" customStyle="border-gray-200 border-2 p-4" name="username"
                    placeholder="eg: Monday shopping "
                    type="text"/>
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-semibold" for="email">Email</label>
        <BasicInput v-model="email" :disabled="shouldEdit" customStyle="border-gray-200  border-2 p-4" name="email"
                    placeholder="john@example.com "
                    type="text"/>
      </div>
      <div class="flex flex-col gap-2">
        <label class="font-semibold" for="password">Password</label>
        <BasicInput v-model="password" :disabled="shouldEdit" customStyle="border-gray-200 border-2 p-4" name="password"
                    placeholder="  *********"
                    type="password"/>
      </div>


      <div class="flex items-center w-2/5">
        <IconButton :icon=" `${!shouldEdit ? 'pencil-square' : ''}` " customStyle=" px-10  text-base "
                    name="Update account"
                    type="submit"/>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "#imports";
import IconButton from "~/components/Buttons/IconButton/IconButton.vue";

const username = ref<string>("John Doe")
const password = ref<string>("123456789")
const email = ref<string>("johndoe@example.com")

const shouldEdit = ref<boolean>(false)


const onEditClick = () => {
  shouldEdit.value = !shouldEdit.value
}

</script>

<style scoped>

</style>