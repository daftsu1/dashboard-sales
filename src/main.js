import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

createApp(App).use(VueAxios, axios).use(VueViewer).mount('#app')
