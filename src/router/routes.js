
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/LoginPage.vue') },
      { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/EmailConfirmationPage.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/ForgotPasswordPage.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/ResetPasswordPage.vue') },
      // { path: 'product-public/:id', name: 'product-public', component: () => import('pages/product/Public.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'me', name: 'me', component: () => import('pages/MePage.vue') },
      { path: 'category', name: 'category', component: () => import('pages/category/ListPage.vue') },
      // { path: 'form-category/:id?', name: 'form-category', component: () => import('pages/category/Form.vue') },
      // { path: 'product', name: 'product', component: () => import('pages/product/List.vue') },
      // { path: 'form-product/:id?', name: 'form-product', component: () => import('pages/product/Form.vue') },
      // { path: 'form-config/:id?', name: 'form-config', component: () => import('pages/config/Form.vue') }
      // { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
