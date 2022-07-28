import { createRouter, createWebHistory } from "vue-router";

import Index from '@/views/index/index.vue';
import Login from '@/views/login/index.vue';

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})