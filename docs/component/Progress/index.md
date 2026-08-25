<script setup lang="ts">
import Basic from './basic.vue'
import Stroke from './stroke.vue'
import CustomText from './custom-text.vue'
import Dynamic from './dynamic.vue'
</script>

# Progress 进度条

展示任务或流程的当前进度。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 线条粗细

通过 `stroke-width` 调整进度条的视觉权重。

<Stroke />

::: details 查看代码
<<< ./stroke.vue
:::

## 自定义文字

默认插槽会接收规范化后的 `percentage`。

<CustomText />

::: details 查看代码
<<< ./custom-text.vue
:::

## 动态进度

结合响应式数据实时更新任务进度。

<Dynamic />

::: details 查看代码
<<< ./dynamic.vue
:::

## API

| 属性         | 说明                     | 类型                                 | 默认值  |
| ------------ | ------------------------ | ------------------------------------ | ------- |
| percentage   | 百分比，自动限制在 0–100 | `number`                             | —       |
| status       | 状态                     | `'success' \| 'warning' \| 'danger'` | —       |
| stroke-width | 线条宽度                 | `number`                             | `8`     |
| show-text    | 显示进度文字             | `boolean`                            | `true`  |
| striped      | 条纹效果                 | `boolean`                            | `false` |
| animated     | 动态条纹                 | `boolean`                            | `false` |
