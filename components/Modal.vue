<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show"
         class="fixed z-50 top-0 left-0 h-full w-full bg-gray-600 opacity-80 table transition duration-700 ease-in-out ">
      <div class="table-cell align-middle">
        <div
            class="w-4/5 md:w-2/5 m-auto my-0 mx-auto py-6 px-10   bg-white  rounded-md shadow-md transition duration-700 ease-in-ou ">
          <div class="mt-0 ">
            <slot name="header">default header</slot>
          </div>

          <div class="my-4 mx-0">
            <slot name="body">default body</slot>
          </div>

          <div class="pb-2">
            <slot name="footer">

              <div class="flex justify-end items-center">
                <button
                    class=""
                    @click="$emit('close')"
                >OK
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>


.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>