<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog class="elin-modal" ref="modalRef" @keydown.escape="handleClose">
    <div class="elin-modal-box">
      <h3 class="font-bold text-lg elin-modal-box-title">{{ title }}</h3>
      <slot />
      <form method="dialog" v-if="showClose">
        <e-button ghost circle size="small" class="absolute right-2 top-2" @click="handleClose">
          ✕
        </e-button>
      </form>

      <div class="elin-modal-action">
        <slot name="footer" />
      </div>
    </div>
    <form method="dialog" v-if="showMask" class="elin-modal-backdrop" @click="handleClose">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, defineModel, watch } from 'vue'

withDefaults(defineProps<{ title: string; showClose: boolean; showMask: boolean }>(), {
  title: '',
  showClose: true,
  showMask: true
})

const modalRef = ref<{
  showModal: () => void
  close: () => void
}>()

const visible = defineModel<boolean>()

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

onMounted(() => {})
</script>

<style>
.elin-modal-box-title {
  margin-bottom: 1em;
}
</style>
