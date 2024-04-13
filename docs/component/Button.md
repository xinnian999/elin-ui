# Button

常用的操作按钮。

## 基础按钮

<en-space>
  <en-button>Default</en-button>
  <en-button type="primary">Primary</en-button>
  <en-button type="success">Success</en-button>
  <en-button type="info">Info</en-button>
  <en-button type="warning">Warning</en-button>
  <en-button type="danger">danger</en-button>
</en-space>

::: details 查看代码

```html
<en-space>
  <en-button>Default</en-button>
  <en-button type="primary">Primary</en-button>
  <en-button type="success">Success</en-button>
  <en-button type="info">Info</en-button>
  <en-button type="warning">Warning</en-button>
  <en-button type="danger">danger</en-button>
</en-space>
```

:::

## 朴素按钮

<en-space>
  <en-button plain>Default</en-button>
  <en-button type="primary" plain>Primary</en-button>
  <en-button type="success" plain>Success</en-button>
  <en-button type="info" plain>Info</en-button>
  <en-button type="warning" plain>Warning</en-button>
  <en-button type="danger" plain>danger</en-button>
</en-space>

::: details 查看代码

```html
<en-space>
  <en-button plain>Default</en-button>
  <en-button type="primary" plain>Primary</en-button>
  <en-button type="success" plain>Success</en-button>
  <en-button type="info" plain>Info</en-button>
  <en-button type="warning" plain>Warning</en-button>
  <en-button type="danger" plain>danger</en-button>
</en-space>
```

:::

## 文字按钮

通过text属性设置

<en-space>
  <en-button text>Default</en-button>
  <en-button type="primary" text>Primary</en-button>
  <en-button type="success" text>Success</en-button>
  <en-button type="info" text>Info</en-button>
  <en-button type="warning" text>Warning</en-button>
  <en-button type="danger" text>danger</en-button>
</en-space>

::: details 查看代码

```html
<en-space>
  <en-button text>Default</en-button>
  <en-button type="primary" text>Primary</en-button>
  <en-button type="success" text>Success</en-button>
  <en-button type="info" text>Info</en-button>
  <en-button type="warning" text>Warning</en-button>
  <en-button type="danger" text>danger</en-button>
</en-space>
```

:::

## 圆形按钮

 <en-space>
      <en-button circle><en-icon name="delete" /></en-button>
      <en-button type="primary" circle><en-icon name="delete" /></en-button>
      <en-button type="success" circle><en-icon name="delete" /></en-button>
      <en-button type="info" circle><en-icon name="delete" /></en-button>
      <en-button type="warning" circle><en-icon name="delete" /></en-button>
      <en-button type="danger" circle><en-icon name="delete" /></en-button>
 </en-space>

::: details 查看代码

```html
<en-space>
  <en-button circle><en-icon name="delete" /></en-button>
  <en-button type="primary" circle><en-icon name="delete" /></en-button>
  <en-button type="success" circle><en-icon name="delete" /></en-button>
  <en-button type="info" circle><en-icon name="delete" /></en-button>
  <en-button type="warning" circle><en-icon name="delete" /></en-button>
  <en-button type="danger" circle><en-icon name="delete" /></en-button>
</en-space>
```

:::

## 图标按钮

直接将图标插入到文字的前面或者后面即可

<en-space>
<en-button type="primary"><IconDelete />新建</en-button>
<en-button type="danger">删除<IconDelete /></en-button>
</en-space>

<script setup lang="ts">
import { IconDelete } from '../../dist/elin-design'


</script>

::: details 查看代码

```html
<en-space>
  <en-button type="danger"><en-icon name="delete" />删除</en-button>
  <en-button type="danger">删除<en-icon name="delete" /></en-button>
</en-space>
```

:::

## 不同大小

  <en-space>
      <en-button size="large">Large</en-button>
      <en-button size="default">Default</en-button>
      <en-button size="small">Small</en-button>
  </en-space>

::: details 查看代码

```html
<en-space>
  <en-button size="large">Large</en-button>
  <en-button size="default">Default</en-button>
  <en-button size="small">Small</en-button>
  <en-button size="tiny">Tiny</en-button>
</en-space>
```

:::

## 禁用状态

<en-button disabled>Default</en-button>

::: details 查看代码

```html
<en-button disabled>Default</en-button>
```

:::
