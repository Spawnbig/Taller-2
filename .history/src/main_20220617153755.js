import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import 'boostrap';
import '../node_modules/bootstrap/dist/css/boostrap.min.css';
const app = createApp(App);
app.use(createPinia())

app.mount('#app')
