<script setup>
const props = defineProps({
  title: 'Modal Header',
  body: 'Modal Body',
  showModal: false
})
</script>

<template>

  <Story>
    <modal>
      <template #header :show="showModal" @close="showModal = false">
        <div class="flex flex-col gap-4 ">
          <h3 class=" "><span class=" text-xl font-bold">Add item :</span> <span
              class="text-base font-semibold ">{{
              title
            }}</span></h3>
          <h2 class=""><span class="  text-xl font-bold">To shoplist :</span></h2>
        </div>
      </template>
      <template #body>

        {{ body }}

      </template>
    </modal>
  </Story>

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