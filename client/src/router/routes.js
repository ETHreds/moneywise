const routes = [
  {
    path: '/welcome',
    component: () => import('layouts/AppWelcome.vue'),
    children: [
      { path: '', component: () => import('src/pages/WelcomePage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AppInterface.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') }
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
