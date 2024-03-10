<template>
  <button :class="classNames" v-bind="$attrs">点我把</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  outline: boolean
}>()

const classNames = computed(() => ({
  btn: true,
  'btn-outline': props.outline
}))
</script>

<style></style>
