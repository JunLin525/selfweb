import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleOne from '../views/Articles/ArticleOne.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutMe',
    component: AboutMe
  },
  {
    path: '/ArticleList',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/ArticleListOne',
    name: 'ArticleOne',
    component: ArticleOne
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
