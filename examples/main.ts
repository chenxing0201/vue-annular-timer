import { createApp } from 'vue'
import App from './App.vue'
import AnnularTimer from '~/index'  // 这里 ~ 就是在 tsconfig.json 以及 vue.config.js 配置的 packages 路径

const app = createApp(App)
app.use(AnnularTimer)
app.mount('#app')