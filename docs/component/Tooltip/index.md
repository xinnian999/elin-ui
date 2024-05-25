<script setup lang="ts">
import Basic from './basic.vue'

const placement=` | 'top'| 'top-start'| 'top-end'| 'bottom' | 'bottom-start' | 'bottom-end' | 'left'| 'left-start' | 'left-end' | 'right'| 'right-start'| 'right-end'`
</script>

# Tooltip 文字提示

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## Tooltip API

### Props

| 属性名    | 说明                       | 类型                           | 默认值     |
| --------- | -------------------------- | ------------------------------ | ---------- |
| v-model   | 显示状态，用于主动控制显隐 | `boolean`                      | false      |
| placement | 出现位置                   | <e-enum>{{placement}}</e-enum> | `'请选择'` |
| content   | 提示内容                   | `string`                       | --         |
| disabled  | 禁用                       | `boolean`                      | false      |
| trigger   | 触发方式                   | `'hover' \| 'click'`           | `'hover'`  |
