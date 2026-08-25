<template>
  <div class="avatar-group">
    <e-avatar name="Ada" background="#2563eb" />
    <e-avatar name="Lin" background="#0f766e" />
    <e-avatar name="Mia" background="#c2410c" />
    <e-avatar name="+5" background="#475569" />
  </div>
</template>

<style scoped>
.avatar-group {
  display: flex;
  padding-left: 10px;
}

.avatar-group :deep(.elin-avatar) {
  margin-left: -10px;
  border: 2px solid var(--elin-bg-color);
  box-shadow: 0 2px 8px rgb(15 23 42 / 10%);
}
</style>
