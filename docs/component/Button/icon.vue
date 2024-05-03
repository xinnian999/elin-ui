<template>
  <e-button type="primary"><IconPlus />新建</e-button>
  <e-button type="warning"><IconEdit />编辑</e-button>
  <e-button type="danger"><IconDelete />删除</e-button>
  <br />
  <br />
  <e-button type="primary">新建<IconPlus /></e-button>
  <e-button type="warning">编辑<IconEdit /></e-button>
  <e-button type="danger">删除<IconDelete /></e-button>
</template>

<script setup lang="ts">
import { IconPlus, IconDelete, IconEdit } from 'elin-ui'
</script>
