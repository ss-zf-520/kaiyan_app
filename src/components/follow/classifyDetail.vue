<template>
    <div class="oneClass">
      <van-nav-bar
      :title="classItem.title"
      left-text=""
      right-text=""
      left-arrow
      fixed
      @click-left="onClickLeft"
      />
      <div class="Classlist">
        <h1>{{classItem.subTitle}}</h1>
        <router-link 
        v-for="item in classItem.itemList"
        :key="item.data.id"
        :to="`/playVideo/${item.data.id}`"
        >
        <img :src="item.data.cover.detail" alt srcset class='Index_img'/>
        </router-link>
    </div>
    </div>
</template>

<script>
import{mapState} from "vuex"
export default {
    data(){
        return{
            classItem:[],
            aaa:[],
        }
    },
    created(){
        console.log('one',this.ClassList)
        console.log(this.$route.params.id)
        
        this.classItem=this.ClassList.find(item=>{
            return item.id==this.$route.params.id
        })
        // console.log(this.ClassList.forEach(res=>{
        //         console.log(res.itemList.forEach(res=>{
        //             console.log(res.data.id)
        //         }))
        // }))
        this.ClassList.forEach(res=>{
               res.itemList.forEach(res=>{
                    //console.log(res.data)
                    this.aaa.push({
                        data:res.data
                    })
                   
                })
        })
                console.log(this.aaa)
        console.log(this.classItem)
        
    },
    computed:{
        ...mapState(['ClassList'])
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.Classlist{
    margin-top:60px
}
.Index_img{
    width:100%
}
.oneClass{
    margin-bottom: 60px
}
.van-nav-bar__left{
    line-height: 50px;
}
.van-nav-bar__arrow{
    font-size: 30px
}
</style>
