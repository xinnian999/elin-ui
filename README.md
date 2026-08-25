# Elin UI

一个清爽、轻量的 Vue 3 + TypeScript 组件库，包含 18 个常用界面组件。

[前往在线文档](https://ui.elin521.cn/)

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

## 发布

生产环境由 GitHub Actions 发布到 Cloudflare Workers。只有推送 `v*` Tag 才会触发：

```bash
git tag v1.1.0
git push origin v1.1.0
```

