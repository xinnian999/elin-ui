<template>
  <e-space direction="vertical">
    <e-card v-for="i in 3" class="vp-raw" style="width: 250px" header="标题">
      <e-list>
        <e-list-item> Item 1 </e-list-item>
        <e-list-item> Item 2 </e-list-item>
        <e-list-item> Item 3 </e-list-item>
      </e-list>
    </e-card>
  </e-space>
</template>
