# Modal

对话框操作。

## 基础用法

::: raw
<en-modal v-model="visible" />
<en-button @click="visible = true">打开modal</en-button>
:::

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

::: details 查看代码

```html
<template>
  <en-modal v-model="visible" />
  <en-button @click="visible = true">打开modal</en-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
</script>
```

:::
