# Elin UI

一个清爽、轻量的 Vue 3 + TypeScript 组件库，包含 18 个常用界面组件。

[前往在线文档](https://xinnian999.github.io/elin-ui/)

## 使用方法

```xml
npm install elin-ui
```

```ts
//main.ts

import { createApp } from 'vue'
import App from './App.vue'
import ElinUI from 'elin-ui'
import 'elin-ui/dist/style.css'

createApp(App).use(ElinUI).mount('#app')
```

## 本地开发

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

运行 `pnpm check` 可依次验证类型、测试、文档构建和组件库打包。


