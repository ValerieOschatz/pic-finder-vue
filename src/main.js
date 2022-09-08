import { createApp } from 'vue'
import App from './App.vue'
import router from './utils/router'
import './assets/index.scss'

createApp(App).use(router).mount('#app')
