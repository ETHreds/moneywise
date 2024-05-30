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

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
