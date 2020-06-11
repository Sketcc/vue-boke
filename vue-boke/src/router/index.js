import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [ 
    {
      path:'/',
      redirect:'/home',
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // alias:'/'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/learn',
    name:'Learn',
    component:() => import('../views/Learn.vue')
  },
  {
    path:'/community',
    name:'Community',
    component:() => import('../views/Community.vue')
  },
  {
    path:'/mygit',
    name:'Mygit',
    component:() => import('../views/Mygit.vue')
  },
  {
    path: '/NotFound',
    component: () => { '../views/NotFound.vue' }
  },
  {
    path: '/*',
    redirect(to) {
      if (to.path === '/') {
        return '/home'
      } else {
        return '/NotFound'
      }
    }
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'link-active',
  // mode: 'history', 
})

export default router
