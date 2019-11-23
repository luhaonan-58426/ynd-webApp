<template>
  
    <div class="box">
     <router-link v-for="(item,index) in goods" :key="index" to="/goodsInfo" class="route">
        <div class="goods" >
            <i><img  :src="item.pic" alt=""></i>
            <p class="goods_title">{{item.title}}</p>
            <span class="goods_price">￥{{item.price2}}</span>
            <s class="old_price">￥{{item.price1}}</s><br>
            <span class="ps1">自营</span><span class="ps2">特价</span>
        </div>
     </router-link>
        
    </div>
 
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  props:["goods"],
  methods: {
  },
  components:{
    
  }
};
</script>

<style scoped lang="scss">
.box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
.route{
    width: 48%;
  padding: 0.1rem;
  box-sizing: border-box;
}
// .goods{
//   width: 48%;
//   padding: 0.1rem;
//   box-sizing: border-box
// }
.goods i{
      display: inline-block;
    width: 90%;
    height: 1.5rem;

}
.goods img{
  width: 100%;
  height: 100%
}
.ps1{
  background-color: orange;
  padding: 0.01rem 0.05rem;
  margin-left: 0.1rem;
  display: inline-block;
  border-radius: 10%;
}
.ps2{
  background-color: brown;
  color: white;
  padding: 0.01rem 0.05rem;
  display: inline-block;
  margin-left: 0.05rem;
  border-radius: 10%

}
.old_price{
  font-size: 0.14rem;
  color: gray;
  margin-left: 0.1rem
}
</style>
