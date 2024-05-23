<template>
  <div style="width: 450px">
    <e-form :data="formValues" ref="formRef">
      <e-form-item
        label="用户名"
        name="username"
        :rules="[
          {
            type: 'string',
            required: true,
            message: '该字段是必填字段！'
          } as RuleItem
        ]"
      >
        <e-input v-model="formValues.username" />
      </e-form-item>
      <e-form-item label="密码" name="password">
        <e-input v-model="formValues.password" />
      </e-form-item>
      <e-form-item>
        <e-button @click="handleSubmit" type="primary">提交</e-button>
      </e-form-item>
    </e-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { RuleItem } from 'async-validator'
import { EMessage } from '@/components'

const formRef = ref()

const formValues = reactive({
  username: '',
  password: '',
  mode: ''
})

const handleSubmit = async () => {
  await formRef.value.validate()

  EMessage.success('校验通过')
}
</script>
