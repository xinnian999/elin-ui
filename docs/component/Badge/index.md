<script setup lang="ts">
import Basic from './basic.vue'
import Types from './types.vue'
import Standalone from './standalone.vue'
import Hidden from './hidden.vue'
</script>

# Badge 徽标

展示数量、状态或待处理提醒。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 状态类型

使用不同类型表达提醒的语义和优先级。

<Types />

::: details 查看代码
<<< ./types.vue
:::

## 独立使用

没有包裹内容时，徽标也可以作为独立状态标签使用。

<Standalone />

::: details 查看代码
<<< ./standalone.vue
:::

## 动态隐藏

通过 `hidden` 控制徽标是否显示。

<Hidden />

::: details 查看代码
<<< ./hidden.vue
:::

## API

| 属性   | 说明       | 类型               | 默认值     |
| ------ | ---------- | ------------------ | ---------- |
| value  | 显示内容   | `string \| number` | —          |
| max    | 数值上限   | `number`           | `99`       |
| dot    | 显示为圆点 | `boolean`          | `false`    |
| hidden | 隐藏徽标   | `boolean`          | `false`    |
| type   | 状态类型   | `StatusType`       | `'danger'` |
