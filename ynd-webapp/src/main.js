import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'vue-swipe' 
import { AddressEdit } from 'vant';
// import Vuex from 'vuex';
import Axios from 'axios';
Vue.prototype.HOST='http://39.98.112.201:8888'
Vue.prototype.$axios=Axios

let event=new Vue();
Vue.prototype.$event=event;
// Vue.use(Vuex);



Vue.use(AddressEdit);

Vue.component('swipe', Swipe)  // 加这里
Vue.component('swipe-item', SwipeItem) // 加这里
Vue.config.productionTip = false

new Vue({
  router,
 
   

  render: h => h(App)



}).$mount('#app')


