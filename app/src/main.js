import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import PostCard from './components/PostCard.vue';

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.component('PostCard', PostCard);


app.use(router)

app.mount('#app')
