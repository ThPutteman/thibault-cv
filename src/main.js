import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import Intro from './components/Intro.vue'
import Experience from './components/Experience.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowDown)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', component: Intro},
        {path: '/experience', component: Experience}
    ]
})

Vue.createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
