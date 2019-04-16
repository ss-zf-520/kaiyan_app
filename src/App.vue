<template>
  <div>
    <router-view />
    <div class="nav-bar">
      <!-- active表示当前tabbar选中的索引 -->
      <van-tabbar v-model="active" active-color="deeppink" @change="navChangeHandle">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="video-o">分类</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0
    }
  },
  methods:{
    navChangeHandle() {
      // alert(this.active)
      switch(this.active) {
        case 0:
          this.$router.push({
            name: 'Home'
          })
        break;
        case 1:
          this.$router.push({
            name: 'Discovery'
          })
        break;
        case 2:
          this.$router.push({
            name: 'UserCenter'
          })
        break;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
