<template>
  <e-card header="登陆表单" style="width: 450px">
    <e-form :data="formValues">
      <e-form-item label="用户名">
        <e-input v-model="formValues.username" />
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
import { reactive } from 'vue'

const formValues = reactive({
  username: '',
  password: '',
  mode: ''
})

const options = [
  { label: '选项一', value: 'value1' },
  { label: '选项二', value: 'value2' },
  { label: '选项三', value: 'value3' }
]

// watchEffect(() => {
//   console.log(formValues.username)
// })

const handleSubmit = () => {
  console.log(formValues)
}
</script>
