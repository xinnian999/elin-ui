<script setup lang="ts">
import Basic from './basic.vue'
import Disabled from './disabled.vue'

const type=`'text' | 'password' | 'textarea'`
</script>

# Input 输入框

通过键盘输入字符，录入信息

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## 禁用

<Disabled />

::: details 查看代码

<<< ./disabled.vue

:::

## API

### defineProps

| 属性名         | 说明    | 类型                        | 默认值     |
|-------------|-------|---------------------------| ---------- |
| v-model     | 值     | `string`                  | --         |
| placeholder | 占位文本  | `string`                  | `'请输入'` |
| disabled    | 禁用    | `boolean`                 | false      |
| readonly    | 只读    | `boolean`                 | false      |
| type        | 输入框类型 | <e-enum>{{type}}</e-enum> | false      |
