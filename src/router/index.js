import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../components/Splash.vue'
import ScoreView from '../components/ScoreView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/splash',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/score',
      name: 'ScoreView',
      component: ScoreView
    }
  ]
})
