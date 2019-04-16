<template>
    <div class="Classify">
       <router-link v-for="item in ClassList" 
       :key="item.id"
       :to="`/classifyDetail/${item.id}`">
           <van-button type="info" >{{item.title}}</van-button>
       </router-link>
       
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed:{
        ...mapState(['ClassList'])
    },
    created(){
        console.log(this.ClassList)
    }
}
</script>

<style scoped>
.Classify{
    margin-top: 60px
}
</style>
