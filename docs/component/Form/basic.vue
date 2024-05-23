<template>
  <e-card header="登陆表单" style="width: 450px">
    <e-form :data="formValues" :rules ref="formRef">
      <e-form-item label="用户名">
        <e-input v-model="formValues.username" />
      </e-form-item>
      <e-form-item label="密码">
        <e-input v-model="formValues.password" />
      </e-form-item>
      <e-form-item label="模式">
        <e-select v-model="formValues.mode" :options />
      </e-form-item>
      <e-form-item>
        <e-button @click="handleSubmit" type="primary">submit</e-button>
      </e-form-item>
    </e-form>
  </e-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Rules } from 'async-validator'
import { EMessage } from '@/components'

const formRef = ref()

const formValues = reactive({
  username: '',
  password: '',
  mode: ''
})

const rules: Rules = {
  username: {
    type: 'string',
    required: true
    // validator: (rule, value) => value === 'muji'
  }
}

const options = [
  { label: '记住密码', value: 'yes' },
  { label: '不记住', value: 'no' }
]

// watchEffect(() => {
//   console.log(formValues.username)
// })

const handleSubmit = async () => {
  // console.log(formValues)
  await formRef.value.validate()

  EMessage.success('校验通过')
}
</script>
