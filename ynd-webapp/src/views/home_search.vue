<template>
  <div>
   
    <div class="box">
        
      <i class="logo_box">
          
        <img src="../../static/index/icon_4.png" @click="back"/>
        
      </i>
      
     
      <router-link to="/search">
           <input type="text" class="search" />
      </router-link>

      <i class="logo_box2">
        <img src="../../static/index/icon_3.png" />
      </i>
     
    </div>
    <div class="hot">
      <p class="title">热门搜索</p>
      <span>汉中邯橘</span>
      <span>洛川县苹果</span>
      <span>陕西苹果</span>
      <span>汉中邯橘</span>
      <span>汉中邯橘</span>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
  
  import footbar from "../components/common/footerbar/footbar";
  export default {
    name: "",
    components:{
      footbar,
     
    },
    date:{
      
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
.search {
  width: 2.5rem;
  height: 0.26rem;
  background-color: #eaebed;
  border-radius: 0.1rem;
  margin-top: 0.15rem;
  border: none;
  background-image: url(../../static/index/icon_2.png);
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  padding-left: 0.3rem;
  border: 0.01rem solid green
}
.box {
  width: 100%;
  font-size: 0px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
}
.logo_box {
     width: 0.3rem;
    height: 0.2rem;
    margin-top: 0.2rem;

}
.logo_box2 img {
  width: 100%;
  height: 100%;
}
.logo_box img {
  width: 100%;
  height: 100%;
}
.logo_box2 {
  width: 0.27rem;
  height: 0.27rem;
  margin-top: 0.15rem;
}
.title{
  margin: 0.1rem 0.1rem;
  color: gray;
  font-size: 0.16rem
}
.hot{
  width: 90%;
}
.hot span{
  border: 0.01rem solid rgb(155, 175, 155);
  padding: 0.01rem 0.05rem;
  background-color: rgb(133, 160, 133);
  margin: 0.1rem 0.1rem;
  display: inline-block;
  color: white;
  border-radius: 10%
}
</style>
