<script setup lang="ts">
import Basic from './basic.vue'
import Simple from './simple.vue'
import Center from './center.vue'
import Closable from './closable.vue'
</script>

# Alert 警告提示

在页面中持续展示需要关注的反馈信息。

## 基础用法

<Basic />

::: details 查看代码
<<< ./basic.vue
:::

## 简洁提示

隐藏图标和关闭按钮，展示持续存在的轻量信息。

<Simple />

::: details 查看代码
<<< ./simple.vue
:::

## 居中提示

使用 `center` 让短提示在容器中居中展示。

<Center />

::: details 查看代码
<<< ./center.vue
:::

## 关闭事件

监听 `close` 事件处理提示关闭后的业务逻辑。

<Closable />

::: details 查看代码
<<< ./closable.vue
:::

## API

| 属性        | 说明         | 类型                                           | 默认值   |
| ----------- | ------------ | ---------------------------------------------- | -------- |
| title       | 标题         | `string`                                       | —        |
| description | 辅助说明     | `string`                                       | —        |
| type        | 类型         | `'success' \| 'info' \| 'warning' \| 'danger'` | `'info'` |
| closable    | 是否可关闭   | `boolean`                                      | `true`   |
| show-icon   | 是否显示图标 | `boolean`                                      | `true`   |
| center      | 内容居中     | `boolean`                                      | `false`  |
