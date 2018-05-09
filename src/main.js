import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

window.axios = require('axios');

require('datatables.net');
require('datatables.net-bs');
require('datatables.net-bs/css/dataTables.bootstrap.css')

import App from './App.vue'

const routes = [
  { path: '/', name: 'customerIndex', component: App.components.CustomerIndex }
]

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
