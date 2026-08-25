---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Elin UI'
  text: '让 Vue 3 界面，轻一点。'
  tagline: 18 个开箱即用的基础、表单、数据与反馈组件，一套清爽克制的交互语言。
  actions:
    - theme: brand
      text: 5 分钟上手
      link: /guide/install
    - theme: alt
      text: 浏览组件
      link: /component/Button
    - theme: alt
      text: GitHub ↗
      link: https://github.com/xinnian999/elin-ui

features:
  - icon: '18'
    title: 覆盖常用场景
    details: 从 Button、Form、Select 到 Table、Dialog 与 Message，组合出完整业务界面。
  - icon: 'TS'
    title: Vue 3 + TypeScript
    details: 基于 Composition API 构建，提供组件声明与全局组件类型支持。
  - icon: '≈'
    title: 轻量而有反馈
    details: 清晰的状态、自然的动效与一致的交互细节，不喧宾夺主。
---

<div class="elin-showcase">
  <div class="elin-showcase__copy">
    <span class="elin-eyebrow">LIVE COMPONENTS · 01</span>
    <h2>不是静态效果图，<br><em>现在就试一试。</em></h2>
    <p>悬停、点击、切换。文档中的示例都由 Elin UI 自身渲染。</p>
  </div>
  <div class="elin-showcase__stage">
    <div class="elin-showcase__row">
      <e-button type="primary">Primary</e-button>
      <e-button round>Round</e-button>
      <e-button text>Text action</e-button>
    </div>
    <div class="elin-showcase__row">
      <e-tag type="success">Stable</e-tag>
      <e-tag type="warning">In review</e-tag>
      <e-switch />
    </div>
  </div>
</div>

<p class="elin-footnote">Designed and built by <a href="https://github.com/xinnian999">Hyl</a> · First released in 2024 · Revived in 2026</p>
