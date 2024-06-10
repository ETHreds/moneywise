import { useUserStore } from 'src/stores/user.store';

const routes = [
  {
    path: '/',
    component: () => import('layouts/AppWelcome.vue'),
    children: [
      { path: '', component: () => import('pages/WelcomePage.vue') },
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/AppInterface.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') },
      { path: 'accounts', component: () => import('/src/pages/AccountsPage.vue') },
      {
        path: '/accounts/:accountId',
        name: 'AccountBreakdown',
        component: () => import('/src/pages/AccBreakdownPage.vue'),
        props: true
      }
    ],
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore();
      if (!userStore.isAuthenticated) {
        next('/');
      } else {
        next();
      }
    }
  },
  // Always leave this as the last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];


export default routes;
