<script setup lang="ts">
import Basic from './basic.vue'
import Text from './text.vue'

</script>

# Switch 开关

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## 文字描述

<Text />

::: details 查看代码

<<< ./text.vue

:::

## Input API

### Props

| 属性名      | 说明             | 类型                          | 默认值     |
| ----------- | ---------------- | ----------------------------- | ---------- |
| v-model     | 值               | `boolean \| string \| number` | --         |
| onText      | 开启时文字描述   | `string`                      | --         |
| offText     | 关闭时文字描述   | `string`                      | --         |
| inlineText  | 文字描述是否内嵌 | `boolean`                     | false      |
| onValue     | 开启时的值       | `boolean \| string \| number` | true       |
| offValue    | 关闭时的值       | `boolean \| string \| number` | false      |
| disabled    | 禁用            | `boolean`                 | false   |
