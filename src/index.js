import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'

import 'styles/base.scss'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
