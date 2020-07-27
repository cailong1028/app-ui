import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios'
import { setStore, getStore } from '@/libs/storage'
import util from "./libs/util";
import i18n from '@/locale'

Vue.config.devtools = true;
Vue.config.productionTip = false
Vue.use(ViewUI, {
  //i18n: (key, value) => i18n.t(key, value)
});
new Vue({
  router,
  store,
  i18n,
  data:{},
  render: h => h(App),
  mounted(){
    util.initRouter(this);
    //todo 初始化路由
  }
}).$mount('#app')

// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.setStore = setStore;