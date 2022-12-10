import Vue from 'vue'
import './style.css'
import App from './App.vue'
import VitePage from './components/VitePage.vue'
import VuePage from './components/VuePage.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/vite', component: VitePage },
  { path: '/vue', component: VuePage }
]

const router = new VueRouter({
  routes
})

new Vue({
  'el': '#app',
  router,
  render: (h: any) => h(App)
})


export default { main: true }
