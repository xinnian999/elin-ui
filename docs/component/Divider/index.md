<script setup lang="ts">
import Basic from './basic.vue'
import Position from './position.vue'
import Vertical from './vertical.vue'
import Dashed from './dashed.vue'
</script>

# Divider 分割线

区隔内容与信息层级。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 文案位置

通过 `content-position` 调整分割线文案的位置。

<Position />

::: details 查看代码
<<< ./position.vue
:::

## 垂直分割

垂直分割线适合分隔行内文字、按钮或操作项。

<Vertical />

::: details 查看代码
<<< ./vertical.vue
:::

## 虚线样式

使用 `dashed` 展示更轻量的内容边界。

<Dashed />

::: details 查看代码
<<< ./dashed.vue
:::

## API

| 属性             | 说明     | 类型                            | 默认值         |
| ---------------- | -------- | ------------------------------- | -------------- |
| direction        | 方向     | `'horizontal' \| 'vertical'`    | `'horizontal'` |
| content-position | 文案位置 | `'left' \| 'center' \| 'right'` | `'center'`     |
| dashed           | 使用虚线 | `boolean`                       | `false`        |
