<template>
    <div>
        <div class="goods">
       
            <div  v-for="(v,i) in data" :key="i" class="a">
                <img class="g" :src="v.goodsImg" alt="">
                <p>{{v.goodsName}}</p>
                <p class="money"><span>{{v.fh}}</span>{{v.money}}</p>
                <p>{{v.yx}}</p>
                <img class="chat" :src="v.chat" alt="">
            </div>
        </div>
    </div>
        
</template>
<script>
    export default {
        props: ["data"],
        data(){
            return{
               
            }
        }
    }
</script>
<style scoped>
    .goods{
        display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       background-color: #f3f3f3;
    }
  .goods div{
      width: 47%;
      margin-top: 0.15rem;
      margin-left: 2%;
      
  }
  .a{
      background-color: white;
  }
  .g{
      width: 100%;
      
  }
  .money{
      font-size: 0.2rem;
  }
  .money span{
      font-size: 0.14rem;
  }
  .chat{
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: middle;
      margin-left: 1.2rem;
      margin-top: -0.6rem;
  }
</style>