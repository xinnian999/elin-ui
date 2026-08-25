<script setup lang="ts">
import Basic from './basic.vue'
import IconStyle from './style.vue'
</script>

# Icon 图标

Elin UI 提供 **300+** 个开箱即用的 SVG 图标，覆盖操作、导航、账号、文件、媒体、数据、状态、商业、天气和文本编辑等常见场景。

## 使用方法

每个图标都是独立的 Vue 组件，统一使用 `IconXxx` 命名，可按需导入。

```vue
<template>
  <IconHome />
</template>

<script setup lang="ts">
import { IconHome } from 'elin-ui'
</script>
```

## 尺寸与颜色

线性图标支持 `size`、`color` 和 `stroke-width` 属性，也可以继承父元素的 `color`。

<IconStyle />

::: details 查看代码
<<< ./style.vue
:::

## 图标集合

输入名称可以即时筛选。点击任意图标即可复制组件代码。

<Basic />

新增的线性图标来自 [Lucide](https://lucide.dev)，使用 ISC License。
