<script setup lang="ts">
import Basic from './basic.vue'
import Direction from './direction.vue'

</script>

# Space 间距

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## 垂直排列

<Direction />

::: details 查看代码

<<< ./direction.vue

:::

## API

### defineProps

| 属性名       | 说明   | 类型                           | 默认值            |
|-----------|------|------------------------------|----------------|
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| wrap      | 自动换行 | `boolean`                    | false          |
| gap       | 间距大小 | `number`                     | 20             |
