import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/list',
    name: 'Redirect',
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/list/add',
    name: 'ListAdd',
    component: () => import('../views/ListAdd.vue'),
  },
  {
    path: '/list/edit/:id',
    name: 'ListEdit`',
    component: () => import('../views/ListEdit.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
