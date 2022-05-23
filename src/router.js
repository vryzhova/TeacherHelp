import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/catalogs',
      name: 'catalogs',
      meta: {layout: 'main'},
      component: () => import('./views/Catalogs.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('./views/Profile.vue')
    }
    ,
    {
      path: '/admin/teachers',
      name: 'addTeacher',
      meta: {layout: 'main'},
      component: () => import('./views/AddTeacher.vue')
    },
    {
      path: '/createSubject',
      name: 'createSubject',
      meta: {layout: 'main'},
      component: () => import('./views/CreateSubject.vue')
    },
    {
      path: '/createPDF',
      name: 'createPDF',
      meta: {layout: 'main'},
      component: () => import('./views/PDF.vue')
    },
    ,
    {
      path: '/createTest',
      name: 'createTest',
      meta: {layout: 'main'},
      component: () => import('./views/CreateTest.vue')
    }
  ]
})
