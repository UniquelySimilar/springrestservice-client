import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

window.axios = require('axios');
window.axios.defaults.headers.post['Content-Type'] = 'application/json';
window.axios.defaults.headers.put['Content-Type'] = 'application/json';

require('datatables.net');
require('datatables.net-bs');
require('datatables.net-bs/css/dataTables.bootstrap.css')

import App from './App.vue'

const routes = [
  { path: '/', name: 'customerIndex', component: App.components.CustomerIndex },
  { path: '/create', name: 'customerCreate', component: App.components.CustomerCreateEdit },
  { path: '/:id/edit', name: 'customerEdit', component: App.components.CustomerCreateEdit, props: true }
]

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
