<template>
  <div>
    <e-card class="content-card">
      <e-skeleton :loading="loading" avatar :rows="2">
        <div class="profile">
          <e-avatar name="Elin" background="#0f766e" />
          <div>
            <strong>Elin Design</strong>
            <p>专注清晰、轻量的 Vue 3 组件体验。</p>
          </div>
        </div>
      </e-skeleton>
    </e-card>
    <e-button class="loading-button" type="primary" plain @click="loading = !loading">
      {{ loading ? '完成加载' : '重新加载' }}
    </e-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
</script>

<style scoped>
.content-card {
  max-width: 560px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 14px;
}

.profile strong {
  color: var(--elin-text-color);
}

.profile p {
  margin: 4px 0 0;
  color: var(--elin-text-color-regular);
}

.loading-button {
  margin-top: 14px;
}
</style>
