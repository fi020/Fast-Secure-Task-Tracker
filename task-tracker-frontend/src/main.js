import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333';  // Make sure this matches your backend server URL
axios.defaults.headers.common['Content-Type'] = 'application/json';
