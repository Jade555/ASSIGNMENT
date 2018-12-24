 import Vue from 'vue'
 import App from './App.vue'
 import BootstrapVue from 'bootstrap-vue'
 import 'bootstrap/dist/css/bootstrap.css'
 import 'bootstrap-vue/dist/bootstrap-vue.css'
 import axios from 'axios'

 Vue.use(BootstrapVue);

 Vue.prototype.$http = axios;
 Vue.config.productionTip = false

 new Vue({
   render: h => h(App),
 }).$mount('#app')