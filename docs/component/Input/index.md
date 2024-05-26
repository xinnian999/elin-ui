<script setup lang="ts">
import Basic from './basic.vue'
import Disabled from './disabled.vue'
import Clearable from './clearable.vue'
import Password from './password.vue'
import Textarea from './textarea.vue'
import Icon from './icon.vue'

const type=`'text' | 'password' | 'textarea'`
</script>

# Input 输入框

通过键盘输入字符，录入信息

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

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

## 密码输入框

<Password />

::: details 查看代码

<<< ./password.vue

:::

## 文本域

<Textarea />

::: details 查看代码

<<< ./textarea.vue

:::

## 前缀or后缀图标

<Icon />

::: details 查看代码

<<< ./icon.vue

:::

## Input API

### Props

| 属性名         | 说明            | 类型                        | 默认值     |
|-------------|---------------|---------------------------|---------|
| v-model     | 值             | `string`                  | --      |
| type        | 输入框类型         | <e-enum>{{type}}</e-enum> | false   |
| placeholder | 占位文本          | `string`                  | `'请输入'` |
| disabled    | 禁用            | `boolean`                 | false   |
| readonly    | 只读            | `boolean`                 | false   |
| clearable   | 一键清除，文本域模式下无效 | `boolean`                 | false   |
| prefixIcon   | 前缀图标          | `VNode`                   | --      |
| suffixIcon   | 后缀图标          | `VNode`                   | --      |
