import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Discovery from './components/discovery.vue'
import UserCenter from './components/userCenter.vue'
import Play from './components/playVideo.vue'
import Author from './components/follow/Author.vue'
import Classifies from './components/follow/Classify.vue'
import Hots from './components/follow/Hots.vue'
import ClassifyDetail from './components/follow/classifyDetail.vue'
// import PlayHot from './components/playHot'



Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
      },{
        path: '/discovery',
        name: 'Discovery',
        component: Discovery,
        children:[
          {
            path:'hots',
            name:'hots',
            component:Hots
          },
          {
            path:'classify',
            name:'classify',
            component:Classifies,
          },
          {
              path:'author',
              name:'author',
              component:Author
          },
      ]
      },{
        path: '/userCenter',
        name: 'UserCenter',
        component: UserCenter
      },{
        path: '/playVideo/:id',
        name: 'Play',
        component: Play
      },
      {
        path:'/classifyDetail/:id',
        name:'ClassifyDetail',
        component:ClassifyDetail
      }
    ]
  })


export default router;