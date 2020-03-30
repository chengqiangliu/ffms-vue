import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/homepage/Dashboard.vue';
import SystemSetting from '@/views/system/SystemSetting.vue';
import SecurityManagement from '@/views/system/SecurityManagement.vue';
import ConsumeRegister from '@/views/consume/ConsumeRegister.vue';
import ConsumeList from '@/views/consume/ConsumeList.vue';
import UserList from '@/views/user/UserList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/consume/register',
    name: 'ConsumeRegister',
    component: ConsumeRegister,
  },
  {
    path: '/consume/list',
    name: 'ConsumeList',
    component: ConsumeList,
  },
  {
    path: '/user/list',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/system/setting',
    name: 'SystemSetting',
    component: SystemSetting,
  },
  {
    path: '/system/securitymanagement',
    name: 'SecurityManagement',
    component: SecurityManagement,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
