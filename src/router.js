import Vue from 'vue'
import Router from 'vue-router'
import detail from './pages/detail.vue'
import show from './pages/show.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:show
    },
    {
      path:'/detail',
      component:detail
    }
  ]
})
