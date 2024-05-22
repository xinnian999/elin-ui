<script setup lang="ts">
import Basic from './basic.vue'
import Disabled from './disabled.vue'

</script>

# Form 表单

通过键盘输入字符，录入信息

## 基础用法

<Basic />

::: details 查看代码

<<< ./basic.vue

:::



## API

### defineProps

| 属性名      | 说明  | 类型        | 默认值     |
|----------|-----|-----------| ---------- |
| data     | 表单值 | `object`  | --         |
| disabled | 禁用  | `boolean` | false      |

