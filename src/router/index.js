import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
  },
  // {
  //   path: '/list/edit',
  //   name: 'ListEdit',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ListEdit.vue'),
  // },
  // {
  //   path: '/list/add',
  //   name: 'ListAdd',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ListAdd.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
