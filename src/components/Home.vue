<template>
  <div class="indexNav">
    <form action="/">
      <van-search
        class="search"
        placeholder="请输入搜索关键词"
        show-action
      />
    </form>
    <div class="imgBox">
      <router-link 
        v-for='item in list' 
        :key="item.id" 
        :to="`playVideo/${item.id}`"
      >
  <el-row>
    <el-card :body-style="{ padding: '0px' }" class="imgBoxes">
      <img :src="item.detail" alt srcset class='item_img'/>
      <div style="padding: 14px;">
        <span class="desc">{{item.desc}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate.toLocaleDateString() }}</time>
          <van-icon class="button" name="arrow" />
        </div>
      </div>
      <div class='info'>
        <p>{{(parseInt(item.time/60)>9 ? parseInt(item.time/60) : '0'+parseInt(item.time/60))
          +':'+(parseInt(item.time%60)>9 ? parseInt(item.time%60) : "0"+parseInt(item.time%60))}}
        </p>
      </div>
    </el-card>
</el-row>
      </router-link>
    </div>
    <van-button size="large"  class="more" @click='loadMore'>点击查看更多</van-button></div>
  </div>
</template>

<script>
import {itemMovies} from '../services/comingMovies'
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      currentDate: new Date(),
      itemlist:[],
      // list:[]
    };
  },
  computed:{
    ...mapState(["list"])
  },
  created(){
    // itemMovies().then(res=>{
    //   console.log(res.data)
    //   this.itemlist = res.data;
    //   res.data.itemList.forEach(itemMovies => {
        // if(itemMovies.type == 'video'){
        //   this.list.push({
        //     id:itemMovies.data.id,
        //     detail:itemMovies.data.cover.detail,
        //     desc:itemMovies.data.description,
        //     category:itemMovies.data.category,
        //     name:itemMovies.data.author.name,
        //     author:itemMovies.data.author.description,
        //     videoNum:itemMovies.data.author.videoNum,
        //     title:itemMovies.data.title,
        //   })
    //     }
    //   });
      console.log(this.list)
    // })
  },
  methods:{
    ...mapMutations(['getList']),
    ...mapActions(['save']),
    
    loadMore(){
      
    }
  }
}
</script>

<style scoped>
  .item_img{
    width: 100%;
    display: block;
  }
  .search{
    position: fixed;
    top:0;
    width: 100%;
    z-index:999;
  }
  .imgBox{
    margin:58px 0 0 0;
  
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    color: #000;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .desc{
    width: 100%;
    display:inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#444;
  }
  .more{
    border: 0;
    color:#999;
    margin-bottom: 60px;
  }
  .imgBoxes{
    position: relative;
  }
.info{
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 4.6rem;
  right:0.4rem;
  width: 100%;
}
.info p{
  display: block;
  color: aliceblue;
  font-size: 0.8rem;
  background: #000;
  opacity: 0.7;
  border-radius: 0.3rem;
}
</style>
