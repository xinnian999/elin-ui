import { createApp } from 'vue'
import App from './App.vue'
import UI from './release'
import './assets/global.css'
import './style/index.scss'

createApp(App).use(UI).mount('#app')
