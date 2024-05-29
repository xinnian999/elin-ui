<script setup lang="ts">
import Basic from './basic.vue'
import Vaildate from './validate.vue'

</script>

# Form 表单

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::

## 表单校验

<Vaildate />

::: details 查看代码

<<< ./validate.vue

:::

## Form API

###  defineProps

| 属性名   | 说明     | 类型        | 默认值 |
| -------- |--------| ----------- | ------ |
| data     | 表单值    | `object`    | --     |
| disabled | 禁用整个表单 | `boolean`   | false  |
| rules    | 校验规则   | `FormRules` | --     |

###  defineExpose

| 属性名        | 说明         | 类型                | 默认值 |
| ------------- | ------------ |-------------------| ------ |
| validate      | 校验表单     | `()=>Promise`     | --     |
| validateField | 校验某个字段 | `(name)=>Promise` | --     |

## FormItem API 

###  Props

| 属性名   | 说明     | 类型         | 默认值 |
|-------|--------|------------|-----|
| label | 字段标签   | `string`   | --  |
| name  | 字段表示   | `string`   | --  |
| rules | 字段校验规则 | `FormRule` | --  |


### Expose

| 属性名   | 说明     | 类型                      |
|-------|--------|-------------------------|
| validate | 校验整个表单 | `()=>Promise<void>`     |
| validateField  | 校验某个字段 | `(name)=>Promise<void>` |