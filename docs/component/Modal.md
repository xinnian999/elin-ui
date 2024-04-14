# Modal

对话框操作。

## 基础用法

::: raw
<e-modal v-model="visible" />
<e-button @click="visible = true">打开modal</e-button>
:::

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

::: details 查看代码

```html
<template>
  <e-modal v-model="visible" />
  <e-button @click="visible = true">打开modal</e-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
</script>
```

:::
