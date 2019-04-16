<template>
  <div class="detail">
    
  </div>
</template>

<script>
import {itemMovies} from '../services/comingMovies'
import {getVideo} from '../services/getVideo.js'
export default {
  data() {
    return {
      items:{},
    };
  },
  created(){
    getVideo(this.$route.params.id)
      .then(res=>{
          this.items = res.data;
      })
      .catch(err=>{

      })
      console.log(res.data)
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
