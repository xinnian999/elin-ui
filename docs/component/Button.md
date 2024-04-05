# Button

常用的操作按钮。

## 基础按钮

<ev-space>
  <ev-button>Default</ev-button>
  <ev-button type="primary">Primary</ev-button>
  <ev-button type="success">Success</ev-button>
  <ev-button type="info">Info</ev-button>
  <ev-button type="warning">Warning</ev-button>
  <ev-button type="error">Error</ev-button>
</ev-space>

::: details 查看代码

```html
<ev-space>
  <ev-button>Default</ev-button>
  <ev-button type="primary">Primary</ev-button>
  <ev-button type="success">Success</ev-button>
  <ev-button type="info">Info</ev-button>
  <ev-button type="warning">Warning</ev-button>
  <ev-button type="error">Error</ev-button>
</ev-space>
```

:::

## 朴素按钮

<ev-space>
  <ev-button plain>Default</ev-button>
  <ev-button type="primary" plain>Primary</ev-button>
  <ev-button type="success" plain>Success</ev-button>
  <ev-button type="info" plain>Info</ev-button>
  <ev-button type="warning" plain>Warning</ev-button>
  <ev-button type="error" plain>Error</ev-button>
</ev-space>

::: details 查看代码

```html
<ev-space>
  <ev-button plain>Default</ev-button>
  <ev-button type="primary" plain>Primary</ev-button>
  <ev-button type="success" plain>Success</ev-button>
  <ev-button type="info" plain>Info</ev-button>
  <ev-button type="warning" plain>Warning</ev-button>
  <ev-button type="error" plain>Error</ev-button>
</ev-space>
```

:::

## 文字按钮

通过text属性设置

<ev-space>
  <ev-button text>Default</ev-button>
  <ev-button type="primary" text>Primary</ev-button>
  <ev-button type="success" text>Success</ev-button>
  <ev-button type="info" text>Info</ev-button>
  <ev-button type="warning" text>Warning</ev-button>
  <ev-button type="error" text>Error</ev-button>
</ev-space>

::: details 查看代码

```html
<ev-space>
  <ev-button text>Default</ev-button>
  <ev-button type="primary" text>Primary</ev-button>
  <ev-button type="success" text>Success</ev-button>
  <ev-button type="info" text>Info</ev-button>
  <ev-button type="warning" text>Warning</ev-button>
  <ev-button type="error" text>Error</ev-button>
</ev-space>
```

:::

## 圆形按钮

 <ev-space>
      <ev-button circle><ev-icon name="delete" /></ev-button>
      <ev-button type="primary" circle><ev-icon name="delete" /></ev-button>
      <ev-button type="success" circle><ev-icon name="delete" /></ev-button>
      <ev-button type="info" circle><ev-icon name="delete" /></ev-button>
      <ev-button type="warning" circle><ev-icon name="delete" /></ev-button>
      <ev-button type="error" circle><ev-icon name="delete" /></ev-button>
 </ev-space>

::: details 查看代码

```html
<ev-space>
  <ev-button circle><ev-icon name="delete" /></ev-button>
  <ev-button type="primary" circle><ev-icon name="delete" /></ev-button>
  <ev-button type="success" circle><ev-icon name="delete" /></ev-button>
  <ev-button type="info" circle><ev-icon name="delete" /></ev-button>
  <ev-button type="warning" circle><ev-icon name="delete" /></ev-button>
  <ev-button type="error" circle><ev-icon name="delete" /></ev-button>
</ev-space>
```

:::

## 图标按钮

直接将图标插入到文字的前面或者后面即可

<ev-space>
<ev-button type="primary"><IconDelete />新建</ev-button>
<ev-button type="error">删除<IconDelete /></ev-button>
</ev-space>

<script setup lang="ts">
import { IconDelete } from '../../dist/elin-design'


</script>

::: details 查看代码

```html
<ev-space>
  <ev-button type="error"><ev-icon name="delete" />删除</ev-button>
  <ev-button type="error">删除<ev-icon name="delete" /></ev-button>
</ev-space>
```

:::

## 不同大小

  <ev-space>
      <ev-button size="large">Large</ev-button>
      <ev-button size="default">Default</ev-button>
      <ev-button size="small">Small</ev-button>
      <ev-button size="tiny">Tiny</ev-button>
  </ev-space>

::: details 查看代码

```html
<ev-space>
  <ev-button size="large">Large</ev-button>
  <ev-button size="default">Default</ev-button>
  <ev-button size="small">Small</ev-button>
  <ev-button size="tiny">Tiny</ev-button>
</ev-space>
```

:::

## 禁用状态

<ev-button disabled>Default</ev-button>

::: details 查看代码

```html
<ev-button disabled>Default</ev-button>
```

:::
