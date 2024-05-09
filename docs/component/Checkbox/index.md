<script setup lang="ts">
import Basic from './basic.vue'
import Label from './label.vue'

</script>

# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

默认在布尔值之间切换

<Basic />


::: details 查看代码

<<< ./basic.vue

:::

## 指定【标签】和【选中状态的值】

value参数，初始值必须是数组时才会生效

<Label />


::: details 查看代码

<<< ./label.vue

:::
