<script setup lang="ts">
import Basic from './basic.vue'
import Image from './image.vue'
import Group from './group.vue'
import Custom from './custom.vue'
</script>

# Avatar 头像

用于展示用户或事物的缩略标识。图片加载失败时会自动回退到名称首字。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 图片头像

设置 `src` 和 `alt` 展示图片头像。

<Image />

::: details 查看代码
<<< ./image.vue
:::

## 头像组合

通过少量样式组合头像，适合成员列表和协作者场景。

<Group />

::: details 查看代码
<<< ./group.vue
:::

## 自定义内容

默认插槽可以放置图标、Emoji 或其他自定义内容。

<Custom />

::: details 查看代码
<<< ./custom.vue
:::

## API

| 属性       | 说明                   | 类型                                        | 默认值      |
| ---------- | ---------------------- | ------------------------------------------- | ----------- |
| src        | 图片地址               | `string`                                    | —           |
| name       | 无图片时显示的名称缩写 | `string`                                    | —           |
| size       | 头像尺寸               | `'small' \| 'default' \| 'large' \| number` | `'default'` |
| shape      | 头像形状               | `'circle' \| 'square'`                      | `'circle'`  |
| background | 自定义背景色           | `string`                                    | —           |
