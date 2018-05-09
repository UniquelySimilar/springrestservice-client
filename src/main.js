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

new Vue({
  el: '#app',
  render: h => h(App)
})
