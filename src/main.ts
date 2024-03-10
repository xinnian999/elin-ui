import './assets/main.css'
import './assets/full.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'

createApp(App).use(components).mount('#app')
