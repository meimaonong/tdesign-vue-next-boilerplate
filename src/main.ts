import { createApp } from 'vue'
import TDesign from 'tdesign-mobile-vue'

import App from './App.vue'

// 引入组件库的少量全局样式变量
import 'tdesign-mobile-vue/es/style/index.css'
// 自定义样式
import '@/styles/style.scss'

const app = createApp(App)
app.use(TDesign)
app.mount('#app')
