import { createApp } from 'vue'
import App from './App.jsx'
import router from "./route";
import './assets/style/index.scss'
import './assets/style/var.scss'


const app = createApp(App)
app
.use(router)
.mount('#app')
