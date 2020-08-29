import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import('views/recommend/Recommend')
const Rank = () => import('views/rank/Rank')
const Search = () => import('views/search/Search')
const Singer = () => import('views/singer/Singer')

Vue.use(VueRouter)

const routes = [
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  }

]

const router = new VueRouter({
  routes
})

export default router
