<template>
  <div class="detailShow">
    <router-link v-for="item in videoList" 
       :key="item.id" to="">
    <div >
      <van-nav-bar fixed :title="item.title" left-text="" left-arrow  @click-left="onClickLeft">
        <van-icon class="titles"  name="ellipsis" slot="right"  @click-right="onClickRight" />
      </van-nav-bar>
    </div>

    <video-player  class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>

    <van-panel class="descs" :title="item.title"  :status='item.category'>
      <img class="author_img" :src="item.author_icon" alt="" />
      <div>
        <h3 class='author'>作者：{{item.name}}</h3>
        <p class="intro">简介：{{item.author}}</p>
      </div>
      <div class="desc">
        <span>影片描述：</span>
        <p>{{item.desc}}</p>
      </div>
    </van-panel> 
  </router-link>
  </div>
</template>

<script>
import {itemMovies} from '../services/comingMovies'
import { mapActions,mapMutations,mapState } from 'vuex'
export default {
  data(){
    return{
      AllClassList:[],
      item:'',
      playerOptions : {
        playbackRates: [0.7, 1.0,1.25, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src:''//url地址
        }],
        poster: "https://s2.ax1x.com/2019/04/15/AX4klQ.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '缓冲中，请稍后...', //允许覆盖Video.js无法播放媒体源时显示的默认信息。ss
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
    videoList:[]
    }
  },
  computed: {
    ...mapState(["list","nextPage","hotList","ClassList"])
  },
  created(){
    console.log(this.$route.params.id)
    this.ClassList.forEach(res=>{
      res.itemList.forEach(res=>{
        this.AllClassList.push({
          data:res.data
        })
      })
    })
    const id = this.$route.params.id
    if(this.list.find(item=>item.id==id)){// home 页面
      this.list.forEach(item => {
        if(item.id == id){
          console.log(this.list)
          this.videoList.push({
            id:item.id,
            name:item.name,
            detail:item.detail,
            desc:item.desc,
            category:item.category,
            author:item.author,
            videoNum:item.videoNum,
            playUrl:item.playUrl,
            title:item.title,
            author_icon:item.author_img,
          })
        }
       });

      return this.playerOptions.sources[0].src=this.list.find(item=>item.id==id).playUrl
     }
    else if(this.hotList.find(item=>item.id==id)){//Hots 页面
      this.hotList.forEach(item => {
        if(item.id == id){
          this.videoList.push({
            id:item.id,
            name:item.name,
            detail:item.detail,
            desc:item.desc,
            category:item.category,
            author:item.author,
            videoNum:item.videoNum,
            playUrl:item.playUrl,
            title:item.title,
            author_icon:item.author_img,
          })
        }
       });
             console.log(this.hotList)
      return  this.playerOptions.sources[0].src=this.hotList.find(item=>item.id==id).playUrl
     }
     else{//oneClass 页面
     this.AllClassList.forEach(item => {
        if(item.id == id){
          this.videoList.push({
            id:item.id,
            name:item.name,
            detail:item.detail,
            desc:item.desc,
            category:item.category,
            author:item.author,
            videoNum:item.videoNum,
            playUrl:item.playUrl,
            title:item.title,
            author_icon:item.author_img,
          })
        }
       });
      return  this.playerOptions.sources[0].src=this.AllClassList.find(item=>item.data.id==id).data.playUrl
     }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    }
  },
}
</script>


<style scoped>
  /* *{
    margin: 0;
    padding: 0;
  } */
  .title,.van-nav-bar .van-icon {
    color: #000;
  }
  .video-player{
    padding: 0.75rem 0;
  }
  .descs{
    padding: 1rem 0.15rem;
  }
  .author{
    text-indent: 1em;
    font-weight: normal;
    color:#888;

  }
  .intro{
    padding-left: 5.75em;
    font-size: 14px;
    color: #000;
  }
  .desc{
    padding-left: 1em;
    font-size: 14px;
  }
  .desc span{
    color:#00f;
  }
  .desc p{
    color:#888;
    text-indent: 2em;
  }
  .van-panel__content{
    margin-bottom:50px;
  }
  .author_img{
    width: 60px;
    height: 60px;
    display: block;
    float: left;
  }
</style>
