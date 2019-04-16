import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vant from 'vant'
import ElementUI from 'element-ui'
import VideoPlayer from 'vue-video-player'
import { Lazyload } from 'vant';
import router from './router'
import 'vant/lib/index.css'
import { Icon } from 'vant';
import { itemMovies } from './services/comingMovies'


Vue.config.productionTip = false
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer,Lazyload)
Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(Icon)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    list:[],
    hotList:[],
    ClassList:[],
    HotsnextPage:[],
    nextPage:[],
    ClassNextPage:[],
  },

  mutations: {
    save(state,payload){

      // 首页
      if(payload.style=='getList'){
        state.nextPage.push({
        url:payload.payload.nextPageUrl
      })

      payload.payload.itemList.forEach(item => {
        if(item.type == 'video'){
          state.list.push({
            id:item.data.id,
            detail:item.data.cover.detail,
            desc:item.data.description,
            category:item.data.category,
            name:item.data.author.name,
            author:item.data.author.description,
            videoNum:item.data.author.videoNum,
            playUrl:item.data.playUrl,
            title:item.data.title,
            time:item.data.duration,
            author_img:item.data.author.icon,

          })
        }
      })
      }
    // 热门
    if(payload.style=='getHots'){
      state.HotsnextPage.push({//热点 页面
      url:payload.payload.nextPageUrl
    })
    payload.payload.itemList.forEach(item => {
      if(item.type == 'video'){
        state.hotList.push({
          id:item.data.id,
          detail:item.data.cover.detail,
          desc:item.data.description,
          category:item.data.category,
          name:item.data.author.name,
          author:item.data.author.description,
          videoNum:item.data.author.videoNum,
          playUrl:item.data.playUrl,
          title:item.data.title,
          time:item.data.duration,
          author_img:item.data.author.icon,


        })
      }
    })
  }
  if(payload.style=='getClass'){
    payload.payload.itemList.forEach(item=>{
    //console.log('AA',item)
    //if(item.type=='video'){
      state.ClassList.push({
        id:item.data.header.id,
        subTitle:item.data.header.subTitle,
        title:item.data.header.title,
        itemList:item.data.itemList
        // detail:item.data.cover.detail,
        // playUrl:item.data.playUrl,
      })
    //}
  })
  store.dispatch({//页面 分类
    type: 'getList',//派发事件，首次调用getlist函数，将第一页的 URL作为payload参数传递过去
    payload: {
      url:payload.payload.nextPageUrl,
      style:'getClass'
    }
  })
}
}
  },
actions: {
  getList({commit},payload){
    itemMovies(payload.payload.url)
      .then(res => {
        commit({
          type:'save',
          payload: res.data,
          style:payload.payload.style
        })
      })
  }
}
})




store.dispatch({//index页面
  type: 'getList',//派发事件，首次调用getlist函数，将第一页的 URL作为payload参数传递过去
  payload: {
    url:"http://baobab.kaiyanapp.com/api/v4/tabs/selected",
    style:'getList'
  }
})

store.dispatch({//hots页面 热门
  type: 'getList',//派发事件，首次调用getlist函数，将第一页的 URL作为payload参数传递过去
  payload: {
    url:"http://baobab.kaiyanapp.com/api/v4/discovery/hot",
    style:'getHots'
  }
})
store.dispatch({//页面 分类
  type: 'getList',//派发事件，首次调用getlist函数，将第一页的 URL作为payload参数传递过去
  payload: {
    url:"http://baobab.kaiyanapp.com/api/v4/discovery/category",
    style:'getClass'
  }

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
