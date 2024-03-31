# Modal

对话框操作。

## 基础用法

::: raw
<ev-modal v-model="visible" />
<ev-button @click="visible = true">打开modal</ev-button>
:::

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

::: details 查看代码

```html
<template>
  <ev-modal v-model="visible" />
  <ev-button @click="visible = true">打开modal</ev-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
</script>
```

:::
