import { createApp } from 'vue'
import App from './App.jsx'
import router from "./route";
import LcUi from 'lc-ui'

const app = createApp(App)
app
.use(router)
.use(LcUi)
.mount('#app')