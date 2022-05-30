import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),
  },
  {
    path: '/over-mij',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
