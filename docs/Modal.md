# Modal

对话框操作。

## 基础用法

::: raw
<f-modal v-model="visible" />
<f-button @click="visible = true">打开modal</f-button>
:::

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

::: details 查看代码

```html
<template>
  <f-modal v-model="visible" />
  <f-button @click="visible = true">打开modal</f-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
</script>
```

:::
