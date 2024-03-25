<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog class="funny-modal" ref="modalRef">
    <div class="funny-modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <form method="dialog">
        <f-button ghost circle size="small" class="absolute right-2 top-2" @click="handleClose">
          ✕
        </f-button>
      </form>
      <div class="funny-modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <!-- <button class="funny-btn">Close</button> -->
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, defineModel, watch } from 'vue'

type modalRefType = {
  showModal: () => void
  close: () => void
}

const modalRef = ref<modalRefType>()

const visible = defineModel()

watch(visible, (newVal) => {
  if (newVal) {
    modalRef.value?.showModal()
  } else {
    modalRef.value?.close()
  }
})

const handleClose = () => {
  visible.value = false
}
</script>

<style></style>
