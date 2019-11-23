<template>
  <div class="topdzong_a">
      <div><router-link to="/top_aspx/topzonghe">综合</router-link></div>
       <div><router-link to="/top_aspx/topfujin">附近货源</router-link></div> 
       <div><router-link to="/top_aspx/topzuixin">最新货源</router-link></div>
       <div><router-link to="/top_aspx/topzuigao">价格最高</router-link></div>
       <div><router-link to="/top_aspx/topzuidi">价格最低</router-link></div>                         
  </div>     
</template>
<script>
export default {
    name:"topdzong",
     methods:{
          
     },
       
  }
</script>
<style scoped>
    .topdzong_a{
      display: flex;
      width:100%;
       flex-direction: row;
       font-size: 0.14rem;
       padding: 0.02rem;
       text-align: center;  
       color: black    
    }
    .topdzong_a :hover{
      color: red;
    }
    .topdzong_a div{
      width: 20%;
    }
</style>