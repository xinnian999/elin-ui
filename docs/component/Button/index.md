
<script setup lang="ts">
import Basic from './basic.vue'
import Plain from './plain.vue'

</script>

# Button

常用的操作按钮。

## 基础按钮

<Basic/>

::: details 查看代码

<<< ./basic.vue

:::

## 朴素按钮

<Plain/>


::: details 查看代码

<<< ./plain.vue

:::

## 文字按钮

通过text属性设置

<e-space>
  <e-button text>Default</e-button>
  <e-button type="primary" text>Primary</e-button>
  <e-button type="success" text>Success</e-button>
  <e-button type="info" text>Info</e-button>
  <e-button type="warning" text>Warning</e-button>
  <e-button type="danger" text>danger</e-button>
</e-space>

::: details 查看代码

```html
<e-space>
  <e-button text>Default</e-button>
  <e-button type="primary" text>Primary</e-button>
  <e-button type="success" text>Success</e-button>
  <e-button type="info" text>Info</e-button>
  <e-button type="warning" text>Warning</e-button>
  <e-button type="danger" text>danger</e-button>
</e-space>
```

:::

## 圆形按钮

 <e-space>
      <e-button circle><e-icon name="delete" /></e-button>
      <e-button type="primary" circle><e-icon name="delete" /></e-button>
      <e-button type="success" circle><e-icon name="delete" /></e-button>
      <e-button type="info" circle><e-icon name="delete" /></e-button>
      <e-button type="warning" circle><e-icon name="delete" /></e-button>
      <e-button type="danger" circle><e-icon name="delete" /></e-button>
 </e-space>

::: details 查看代码

```html
<e-space>
  <e-button circle><e-icon name="delete" /></e-button>
  <e-button type="primary" circle><e-icon name="delete" /></e-button>
  <e-button type="success" circle><e-icon name="delete" /></e-button>
  <e-button type="info" circle><e-icon name="delete" /></e-button>
  <e-button type="warning" circle><e-icon name="delete" /></e-button>
  <e-button type="danger" circle><e-icon name="delete" /></e-button>
</e-space>
```

:::

## 图标按钮

直接将图标插入到文字的前面或者后面即可

<e-space>
<e-button type="primary"><IconDelete />新建</e-button>
<e-button type="danger">删除<IconDelete /></e-button>
</e-space>


::: details 查看代码

```html
<e-space>
  <e-button type="danger"><e-icon name="delete" />删除</e-button>
  <e-button type="danger">删除<e-icon name="delete" /></e-button>
</e-space>
```

:::

## 不同大小

  <e-space>
      <e-button size="large">Large</e-button>
      <e-button size="default">Default</e-button>
      <e-button size="small">Small</e-button>
  </e-space>

::: details 查看代码

```html
<e-space>
  <e-button size="large">Large</e-button>
  <e-button size="default">Default</e-button>
  <e-button size="small">Small</e-button>
  <e-button size="tiny">Tiny</e-button>
</e-space>
```

:::

## 禁用状态

<e-button disabled>Default</e-button>

::: details 查看代码

```html
<e-button disabled>Default</e-button>
```

:::
