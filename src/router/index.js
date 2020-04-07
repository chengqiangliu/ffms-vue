import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/homepage/Dashboard.vue';
import Home from '@/views/homepage/Home.vue';
import SystemSetting from '@/views/setting/SystemSetting.vue';
import SecurityManagement from '@/views/setting/SecurityManagement.vue';
import BankcardList from '@/views/bankcard/BankcardList.vue';
import AccesscardList from '@/views/accesscard/AccesscardList.vue';
import TransferList from '@/views/transfer/TransferList.vue';
import DebtList from '@/views/debt/DebtList.vue';
import PresentList from '@/views/present/PresentList.vue';
import SalaryList from '@/views/salary/SalaryList.vue';
import ConsumeRegister from '@/views/consume/ConsumeRegister.vue';
import ConsumeList from '@/views/consume/ConsumeList.vue';
import SalesList from '@/views/sales/SalesList.vue';
import SalesRegister from '@/views/sales/SalesRegister.vue';
import UserList from '@/views/user/UserList.vue';
import EditProfile from '@/views/profile/EditProfile.vue';
import Profile from '@/views/profile/Profile.vue';
import Login from '@/views/login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'bankcard/list',
        name: 'BankcardList',
        component: BankcardList,
      },
      {
        path: 'accesscard/list',
        name: 'AccesscardList',
        component: AccesscardList,
      },
      {
        path: 'transfer/list',
        name: 'TransferList',
        component: TransferList,
      },
      {
        path: 'debt/list',
        name: 'DebtList',
        component: DebtList,
      },
      {
        path: 'present/list',
        name: 'PresentList',
        component: PresentList,
      },
      {
        path: 'salary/list',
        name: 'SalaryList',
        component: SalaryList,
      },
      {
        path: 'consume/register',
        name: 'ConsumeRegister',
        component: ConsumeRegister,
      },
      {
        path: 'consume/list',
        name: 'ConsumeList',
        component: ConsumeList,
      },
      {
        path: 'sales/register',
        name: 'SalesRegister',
        component: SalesRegister,
      },
      {
        path: 'sales/list',
        name: 'SalesList',
        component: SalesList,
      },
      {
        path: 'user/list',
        name: 'UserList',
        component: UserList,
      },
      {
        path: 'system/setting',
        name: 'SystemSetting',
        component: SystemSetting,
      },
      {
        path: 'system/securitymanagement',
        name: 'SecurityManagement',
        component: SecurityManagement,
      },
      {
        path: 'profile/baseinfo',
        name: 'Profile',
        component: Profile,
        components: {
          default: Home,
          main: Profile,
        },
      },
      {
        path: 'profile/edit',
        name: 'EditProfile',
        component: EditProfile,
      },
      {
        path: 'system/help',
        name: 'SystemUsage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/help/SystemUsage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
