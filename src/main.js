import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import {getRequest, postRequest} from '@/lib/axios'
//import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios'

Vue.config.devtools = true;
Vue.config.productionTip = false
Vue.use(iView, {
  //i18n: (key, value) => i18n.t(key, value)
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;