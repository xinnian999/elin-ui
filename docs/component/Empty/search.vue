<template>
  <e-empty :image-size="116">
    <div class="search-empty">
      <strong>没有找到“Vue 2”</strong>
      <span>试试减少筛选条件，或搜索其他关键词</span>
    </div>
    <template #action><e-button>清除筛选</e-button></template>
  </e-empty>
</template>

<style scoped>
.search-empty {
  display: grid;
  gap: 4px;
}

.search-empty strong {
  color: var(--elin-text-color);
  font-weight: 600;
}

.search-empty span {
  color: var(--elin-text-color-placeholder);
  font-size: 13px;
}
</style>
