# 使用

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import ElinDesign from 'elin-ui'
import 'elin-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElinDesign)
app.mount('#app')
```

## TypeScript类型支持

组件库完整导入后，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["elin-ui/global"]
  }
}
```
