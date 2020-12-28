import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/http'
import getd from './axios/api';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$enasd = getd;
new Vue({
    router,
    store,
    axios,
    getd,
    render: h => h(App)
}).$mount('#app')
