import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import exam1View from '../views/exam1View.vue'
import exam2View from '../views/exam2View.vue'
import exam3View from '../views/exam3View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exam1',
    name: 'exam1View',
    component: exam1View
  },
  {
    path: '/exam2',
    name: 'exam2View',
    component: exam2View
  },
  {
    path: '/exam3',
    name: 'exam3View',
    component: exam3View
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
