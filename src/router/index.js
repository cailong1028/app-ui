import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import {routes} from './router'
import ViewUI from 'view-design'
import util from '../libs/util'
import cookie from 'js-cookie'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(`beforeEach: to: ${JSON.stringify(to)}, from: ${JSON.stringify(from)}`)
  ViewUI.LoadingBar.start();
  util.title(to.meta.title);
  var name = to.name;
  // 白名单
  var whiteList = name !== 'login';
  console.log(`white list ${name} ${whiteList}`)
  if ((!cookie.get('userInfo') || !localStorage.getItem('accessToken')) && whiteList) {
    // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    });
  } else if (cookie.get('userInfo') && name == 'login') {
    // 判断是否已经登录且前往的是登录页
    util.title();
    next({
      name: 'home_index'
    });
  } else {
    util.toDefaultPage([...routes], name, router, next);
  }
});

router.afterEach((to) => {
  //util.openNewPage(router.app, to.name, to.params, to.query);
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router
