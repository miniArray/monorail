import Vue from 'vue'
import App from './App.vue'
import Monorail from '../../src'
import VueRouter from 'vue-router'

import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
]

const router = new VueRouter({
  routes
})

Vue.use(Monorail)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})