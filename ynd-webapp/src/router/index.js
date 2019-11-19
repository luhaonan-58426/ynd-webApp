import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import My from '../views/my'
import Community from '../views/community'
import Publish from '../views/publish'
Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
    {
    path: '/',
    redirect:"/home"
  }
  ]
})
export default router

