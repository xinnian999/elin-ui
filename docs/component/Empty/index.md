<script setup lang="ts">
import Basic from './basic.vue'
import Simple from './simple.vue'
import CustomImage from './custom-image.vue'
import Search from './search.vue'
</script>

# Empty 空状态

列表、搜索或页面暂无内容时的占位提示。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 简洁尺寸

通过 `image-size` 控制空状态在紧凑容器中的占用空间。

<Simple />

::: details 查看代码
<<< ./simple.vue
:::

## 自定义图片

使用 `image` 插槽替换默认插画。

<CustomImage />

::: details 查看代码
<<< ./custom-image.vue
:::

## 自定义描述

默认插槽可以承载更丰富的描述内容。

<Search />

::: details 查看代码
<<< ./search.vue
:::

## API

| 属性        | 说明     | 类型     | 默认值       |
| ----------- | -------- | -------- | ------------ |
| description | 描述文字 | `string` | `'暂无数据'` |
| image-size  | 图片宽度 | `number` | `160`        |

支持 `image`、默认内容和 `action` 三个插槽。
