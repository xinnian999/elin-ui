<template>
  <e-space direction="vertical" style="width: 100%">
    <e-progress :percentage="42" />
    <e-progress :percentage="68" status="warning" :stroke-width="10" />
    <e-progress :percentage="100" status="success" striped animated />
  </e-space>
</template>
