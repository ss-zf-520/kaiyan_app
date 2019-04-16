<template>
    <div class="indexClass" > 
    <div class="disTop">
      <van-tabs v-model="ac" class="disNav" 
      @click="ClickHandle" 
      background='#ccc'
      color=""
      >
      <van-tab v-for='index in NavTab' :title="index.name" :key="index.ac" ></van-tab>
      </van-tabs>
    </div>
    <div class="disBottom">
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      ac: 0,
      NavTab:[
        {
          name:'热门'
        },
        {
          name:'分类'
        },
        {
          name:"作者"
        }
      ]
    };
    },
    created(){
       switch(this.ac){
          case 0 :
          this.$router.push({
            name:'hots'
          })
          break;
          case 1:
          this.$router.push({
            name:'classify'
          })
          break;
        
        }
    },
    methods:{
      ClickHandle(){
        switch(this.ac){
          case 0 :
          this.$router.push({
            name:'hots'
          })
          break;
          case 1:
          this.$router.push({
            name:'classify'
          })
          break;
          case 2:
          this.$router.push({
            name:'author'
          })
          break;
        }
      }
    }
}
</script>

<style>
  .indexClass{
    position: relative;
    margin-top: 2.8rem;
  }
  .disTop{
    height: 3rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .disNav{
    background:#ff0
  }
  .van-tabs{
    background:#ff0
  }

</style>