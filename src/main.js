import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

const app = createApp(App).use(router).use(VueViewer).use(VueAxios, axios).mount('#app')