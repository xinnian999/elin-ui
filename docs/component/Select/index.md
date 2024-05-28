<script setup lang="ts">
import Basic from './basic.vue'
import Multiple from './multiple.vue'
import Clearable from './clearable.vue'
import Disabled from './disabled.vue'
import filterable from './filterable.vue'

</script>

# Select 选择框

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## 多选

<Multiple />

::: details 查看代码

<<< ./multiple.vue

:::

## 一键清除

<Clearable />

::: details 查看代码

<<< ./clearable.vue

:::

## 禁用

<Disabled />

::: details 查看代码

<<< ./disabled.vue

:::

## 筛选

<filterable />

::: details 查看代码

<<< ./filterable.vue

:::

## Select API

### defineProps

| 属性名         | 说明           | 类型                   | 默认值       |
|-------------|--------------|----------------------|-----------|
| v-model     | 值            | `string \| string[]` | --        |
| placeholder | 占位文本         | `string`             | `'请选择'`   |
| disabled    | 禁用           | `boolean`            | false     |
| clearable   | 一键清除，多选模式下无效 | `boolean`            | false     |
| options     | 选项配置         | `option[]`           | []        |
| labelKey    | 标签key        | `string`             | `'label'` |
| valueKey    | 值key         | `string`             | `'value'` |
| filterable  | 支持筛选         | `boolean`            | false     |
