<template>
  <div class="flex justify-center gap-72  ">
    <Heading title="Hello John Doe" subtitle="Feel free to update your account" icon="pencil-square"
             @onIconClick="onEditClick" :iconStyle="`${ !shouldEdit && 'text-green-400'}`"/>
    <div class="flex flex-col justify-start">
      <UnderlinedButton name="Log out"/>
    </div>
  </div>
  <div class="flex justify-center mt-8">
    <form action="" class="flex flex-col  gap-8 w-3/6">
      <div class="flex flex-col gap-4">
        <div class="">
          <img src="https://grist.org/grist-50/wp-content/uploads/sites/2/2017/03/seanawatkins.jpg" alt=""
               class="rounded-md ">
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="username" class="font-semibold">Name</label>
        <BasicInput :disabled="shouldEdit" v-model="username" name="username" type="text"
                    placeholder="eg: Monday shopping "
                    customStyle="border-gray-200 border-2 p-4"/>
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="font-semibold">Email</label>
        <BasicInput :disabled="shouldEdit" v-model="email" name="email" type="text" placeholder="john@example.com "
                    customStyle="border-gray-200  border-2 p-4"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="font-semibold">Password</label>
        <BasicInput :disabled="shouldEdit" v-model="password" name="password" type="password" placeholder="  *********"
                    customStyle="border-gray-200 border-2 p-4"/>
      </div>


      <div class="flex items-center w-2/5">
        <IconButton name="Update account" type="submit" :icon=" `${!shouldEdit ? 'pencil-square' : ''}` "
                    customStyle=" px-10  text-base "/>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "#imports";
import {lineBreakG} from "acorn";
import edit from "~/pages/shoplist/edit.vue";

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