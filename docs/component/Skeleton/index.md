<script setup lang="ts">
import Basic from './basic.vue'
import Rows from './rows.vue'
import Shape from './shape.vue'
import Loading from './loading.vue'
</script>

# Skeleton 骨架屏

数据加载时提供稳定的内容轮廓，减少页面跳动。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 行数与动画

调整段落行数，也可以关闭流光动画。

<Rows />

::: details 查看代码
<<< ./rows.vue
:::

## 头像形状

方形头像适合文章封面、商品或文件列表。

<Shape />

::: details 查看代码
<<< ./shape.vue
:::

## 加载状态

通过 `loading` 在骨架与真实内容之间切换。

<Loading />

::: details 查看代码
<<< ./loading.vue
:::

## API

| 属性         | 说明         | 类型                   | 默认值     |
| ------------ | ------------ | ---------------------- | ---------- |
| loading      | 是否显示骨架 | `boolean`              | `true`     |
| animated     | 启用流光动画 | `boolean`              | `true`     |
| rows         | 段落行数     | `number`               | `3`        |
| title        | 显示标题占位 | `boolean`              | `true`     |
| avatar       | 显示头像占位 | `boolean`              | `false`    |
| avatar-shape | 头像形状     | `'circle' \| 'square'` | `'circle'` |
