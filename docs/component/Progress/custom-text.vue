<template>
  <e-progress :percentage="72" status="success">
    <template #default="{ percentage }">已完成 {{ percentage }}%</template>
  </e-progress>
</template>
