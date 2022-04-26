import Vue from 'vue'
import Router from 'vue-router'
import Tb from '@/view/Tb.vue'
import Aboutschool from '@/view/aboutSchool.vue'
import People from '@/components/people.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/people', component: People },
    { path: '/', redirect: '/aboutschool' },
    { path: '/sousuo', component: Tb },
    { path: '/aboutschool', component: Aboutschool }
  ]
})

export default router