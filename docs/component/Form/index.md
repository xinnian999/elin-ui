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



## API

### defineProps

| 属性名      | 说明  | 类型        | 默认值     |
|----------|-----|-----------| ---------- |
| data     | 表单值 | `object`  | --         |
| disabled | 禁用  | `boolean` | false      |

