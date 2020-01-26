import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://test-c9706.firebaseio.com/vue-auth/qGectrc96k6d1odvJWvC'
axios.defaults.headers.common['Authorization']='token here'
axios.defaults.headers.get['Accept']='application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor',config);
  return config;
})

axios.interceptors.response.use(res => {
  console.log('Response Interceptor',res);
  return res;
})

axios.interceptors.request.eject(reqInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
