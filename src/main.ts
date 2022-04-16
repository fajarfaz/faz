import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'
import './css/index.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMetaManager())
app.mount('#app');
