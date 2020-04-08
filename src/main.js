import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/assets/fontawesome/css/all.min.css';
import '@/assets/css/app.css';
import '@/assets/mock';
import request from '@/assets/http';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$request = request;

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const token = localStorage.getItem('LOGIN_TOKEN');
  if (token) {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // todo
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    // token is not found and the to route is in the whitelist
    next();
  } else {
    // token is not found and also the to route is not in the whitelist
    next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
  }
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  Request,
  render: (h) => h(App),
}).$mount('#app');
