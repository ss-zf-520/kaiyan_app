<template>
  <div class="detailShow">
    <div >
      <van-nav-bar fixed :title='videoList.data.title' left-text="" left-arrow  @click-left="onClickLeft">
        <van-icon class="title"  name="ellipsis" slot="right"  @click-right="onClickRight" />
      </van-nav-bar>
    </div>

    <video-player  class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>

    <van-panel class="descs" :title='videoList.data.slogan'  :status='videoList.data.category'>
      <div>
        <h3 class='author'>作者：{{videoList.data.author.name}}</h3>
        <p class="intro">简介：{{videoList.data.author.description}}</p>
      </div>
      <div class="desc">
        <span>影片描述：</span>
        <p>{{videoList.data.description}}</p>
      </div>
    </van-panel>

  </div>
</template>

<script>
import { hotMovies } from '../services/comingMovies'
export default {
  data(){
    return{
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
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '缓冲中，请稍后...', //允许覆盖Video.js无法播放媒体源时显示的默认信息。ss
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
    videoList:{},
    }
  },
  created(){
      hotMovies().then(res=>{
        console.log(res.data.itemList)
        const videoDetail = res.data.itemList.find(item=>{
          return (item.data.id==this.$route.params.id)
        })
        this.videoList = videoDetail;

        console.log(this.videoList)
        this.playerOptions.sources[0].src=videoDetail.data.playUrl
      })
      .catch(err =>{
        
      })
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
    padding-left: 1em;
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
</style>
