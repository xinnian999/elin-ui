<template>
  <e-empty description="灵感正在路上" :image-size="132">
    <template #image>
      <svg class="custom-illustration" viewBox="0 0 132 108" aria-hidden="true">
        <circle cx="66" cy="46" r="31" />
        <path d="M51 47c7-15 23-15 30 0M57 61h18M66 15V5M35 25l-8-7M97 25l8-7" />
        <path d="M49 78h34l-5 17H54z" />
      </svg>
    </template>
    <template #action><e-button type="primary" plain>去探索</e-button></template>
  </e-empty>
</template>

<style scoped>
.custom-illustration {
  display: block;
  width: 100%;
  fill: color-mix(in srgb, var(--elin-primary-color) 12%, transparent);
  stroke: var(--elin-primary-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.5;
}
</style>
