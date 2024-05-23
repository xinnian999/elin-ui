<template>
  <e-card header="登陆表单" style="width: 450px">
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
      <e-form-item label="模式" name="mode">
        <e-select v-model="formValues.mode" :options />
      </e-form-item>
      <e-form-item>
        <e-button @click="handleSubmit" type="primary">提交</e-button>
      </e-form-item>
    </e-form>
  </e-card>
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

const options = [
  { label: '记住密码', value: 'yes' },
  { label: '不记住', value: 'no' }
]

const handleSubmit = async () => {
  await formRef.value.validate()

  EMessage.success('校验通过')
}
</script>
