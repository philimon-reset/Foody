import { createRouter, createWebHashHistory } from 'vue-router';
import { createAuthGuard } from '@auth0/auth0-vue';
import { app } from 'vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import ExternalApi from '../views/ExternalApi.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: createAuthGuard(app),
    },
    {
      path: '/external-api',
      name: 'external-api',
      component: ExternalApi,
      beforeEnter: createAuthGuard(app),
    },
  ],
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
