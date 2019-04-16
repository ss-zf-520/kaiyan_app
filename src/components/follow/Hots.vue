<template>
    <div class="hot">
    <div class="imgBox">
      <router-link 
        v-for='item in hotList' 
        :key="item.id" 
        :to="`/playVideo/${item.id}`"
      >
  <el-row>
    <el-card :body-style="{ padding: '0px' }" >
      <div class="imgBoxes">
        <img :src="item.detail" alt srcset class='item_img'/>
      <div class='info'>
        <p>{{(parseInt(item.time/60)>9 ? parseInt(item.time/60) : '0'+parseInt(item.time/60))
          +':'+(parseInt(item.time%60)>9 ? parseInt(item.time%60) : "0"+parseInt(item.time%60))}}
        </p>
      </div>
      </div>
      <div style="padding: 14px;">
        <span class="desc">{{item.desc}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate.toLocaleDateString() }}</time>
          <van-icon class="button" name="arrow" />
        </div>
      </div>
    </el-card>
</el-row>
      </router-link>
    </div>
    </div>
</template>

<script>
import { hotMovies } from '../../services/comingMovies'
import {mapActions,mapMutations,mapState} from "vuex"

export default {
  data() {
    return {
      currentDate: new Date(),
      // hotList:[]
    };
  },
  computed: {
    ...mapState(["hotList"])
  },
  created(){
    // hotMovies().then(res=>{
    //   console.log(res.data)
    //   this.itemlist = res.data;
    //   res.data.itemList.forEach(hotMovies => {
    //     if(hotMovies.type == 'video'){
    //       this.list.push({
    //         id:hotMovies.data.id,
    //         detail:hotMovies.data.cover.detail,
    //         desc:hotMovies.data.description,
    //         category:hotMovies.data.category,
    //         author:hotMovies.data.author.description,
    //         videoNum:hotMovies.data.author.videoNum,
    //         title:hotMovies.data.title,
    //       })
    //     }
    //   });
      console.log(this.hotList)
    // })
  },
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
    width: 100%
  }
  .imgBox{
    margin: 0px 0 58px 0;
  
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
    .imgBoxes{
    position: relative;
  }
.info{
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0.1rem;
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
.desc{
  color: #333;
}
</style>
