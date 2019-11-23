<template>
  <div>
    <div class="box">
    <div class="topuse">
      <router-link tag="div" to="/advhometo1"><div class="shezhi"></div></router-link>
      <router-link tag="div" to="/advmymes"><div class="touxiang">姓</div></router-link>
      <div class="topusetext">
        <p class="topusetextp1">用户</p>
        <p class="topusetextp2">3123123413651243126534</p>
      </div>


    </div>
    </div>
    <!-- 我的订单栏目 -->
    <div class="mydingdan">
      <!-- 顶部打字部分 -->
      <div class="mydingdan-font1">
        <p class="mydingdan-font1p">我的订单</p> 
      </div>
      <!-- 下册导航栏 -->
       <div class="mydingdanbottomborder">
         <!-- 边框栏目 -->
         <div class="mydingdanflexbox">
         <div :key="pid" v-for="(data,pid) in  dataimg1" class="mydingdanforbox">
           <!-- 循环体 -->
           <div v-if='data.img' :style="{backgroundImage: 'url('+ data.img +')'}" class="mydingdanforboxpic"></div>
    
           <p class="mydingdanforboxp">{{data.font}}</p>
         </div>
         </div>
       </div>
    </div>
    
     <!-- money管理栏目 -->
    <div class="mydingdan">
      <!-- 顶部打字部分 -->
      <div class="mydingdan-font1">
        <p class="mydingdan-font1p">money管理</p> 
      </div>
      <!-- 下册导航栏 -->
       <div class="mydingdanbottomborder">
         <!-- 边框栏目 -->
         <div class="mydingdanflexbox">
         <div :key="pid" v-for="(data,pid) in  dataimg2" class="mydingdanforbox">
           <!-- 循环体 -->
           <div v-if='data.img' :style="{backgroundImage: 'url('+ data.img +')'}" class="mydingdanforboxpic2"></div>
           <p class="mydingdanforboxp">{{data.font}}</p>
         </div>
         </div>
       </div>
    </div>

    <!-- 帮助中心 -->
    <div class="mydingdan">
      <!-- 顶部打字部分 -->
      <div class="mydingdan-font1">
        <p class="mydingdan-font1p">帮助中心</p> 
      </div>
      <!-- 下册导航栏 -->
       <div class="mydingdanbottomborder">
         <!-- 边框栏目 -->
         <div class="mydingdanflexbox">
         <div :key="pid" v-for="(data,pid) in  dataimg3" class="mydingdanforbox">
           <!-- 循环体 -->
           <div v-if='data.img' :style="{backgroundImage: 'url('+ data.img +')'}" class="mydingdanforboxpic2"></div>
           <p class="mydingdanforboxp">{{data.font}}</p>
         </div>
         </div>
       </div>
    </div>


    <div class="body">
     <div>
       <router-link to="/advgoodscars">点我到购物车界面</router-link>
        <router-link to="/advgoodsshow">点我到页面展示页面</router-link>
     </div>
    <van-swipe vertical class="vantbobo1" :autoplay="2500">
      
      <van-swipe-item><router-link to="/advhometo1" tag="div"  class="bo1"></router-link></van-swipe-item>
      
      <van-swipe-item><router-link to="/advhometo2" tag="div"  class="bo2"></router-link></van-swipe-item>
      <!-- <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
      <div class="custom-indicator" slot="indicator">
    <!-- {{ current + 1 }}/4 -->
    </div>
    </van-swipe>

    <van-swipe vertical class="vantbobo2" :autoplay="2500">
      <van-swipe-item><router-link class="bo3" to="/advhometo3" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo4" to="/advhometo4" tag="div"></router-link></van-swipe-item>
      <!-- <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
      <div class="custom-indicator" slot="indicator">
    <!-- {{ current + 1 }}/4 -->
    </div>
    </van-swipe>


    </div>
    <footbar class="footer"></footbar>
  </div>
</template>

<script>
// import vantbobo from "../components/vantbobo"
import footbar from "../components/common/footerbar/footbar"
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  name: "home",
  data(){
    return {
    dataimg1:[
    {img:"./imgmy/tubiao1.png",font:"待付款"},
    {img:"./imgmy/tubiao2.png",font:"代发货"},
    {img:"./imgmy/tubiao3.png",font:"代收货"},
    {img:"./imgmy/tubiao4.png",font:"代评价"},
    {img:"./imgmy/tubiao5.png",font:"退款/收货"}
    ],
    dataimg2:[
    {img:"./imgmy/tubiao6.png",font:"我的余额"},
    {img:"./imgmy/tubiao7.png",font:"我的账单"},
    {img:"./imgmy/tubiao8.png",font:"我的评价"},
    {img:"./imgmy/tubiao9.png",font:"银行账户"},
    {img:"./imgmy/tubiao10.png",font:"收货地址"}
     ],
   dataimg3:[
    {img:"./imgmy/tubiao11.png",font:"常见问题"},
    {img:"./imgmy/tubiao12.png",font:"客服电话"},
    {img:"./imgmy/tubiao13.png",font:"意见反馈"},
    {img:"",font:""},
    {img:"",font:""}]
    }
    },
  components: {
    // vantbobo,
    footbar
  }
}
</script>

<style scoped>
.mydingdan{
  margin-top: .2rem;
  width: 100%;
  background-color: white;
}
.mydingdan-font1{
  width: 100%;
  height: .4rem;

}
.mydingdanbottomborder{
  width: 100%;
  height: .7rem;
  box-sizing: border-box;
  border-left: .12rem solid white;
  border-right: .12rem solid white;
}
.mydingdanflexbox{
  width:100%;
  height:.7rem;
  display: flex;
  justify-content: space-between;
  
}
.mydingdanforbox{
  width:19%;
  height:.7rem; 
}
.mydingdanforboxpic{
  width:100%;
  height:.4rem;
  
  background-repeat: no-repeat;
  background-size: 50% 58%;
  background-position: .16rem .17rem;
  
}
.mydingdanforboxpic2{
  width:100%;
  height:.4rem;
  
  background-repeat: no-repeat;
  background-size: 40% 47%;
  background-position: .17rem .18rem;
  
}
.mydingdanforboxp{
  width:100%;
  height:.3rem;
  text-align: center;
  line-height: .3rem;
  font-size: .12rem;
  
  font-weight: 300;
}
.mydingdan-font1p{
  width: 100%;
  height: .4rem;
  font-size: .14rem;
  text-indent: .1rem;
  line-height: .4rem;
  text-align: left;
  font-weight: 400;
  color: dimgrey;
}
.body{
  width: 100%;
  border-right: .1rem solid white;
  border-left: .1rem solid white;
  box-sizing: border-box;
  margin-top: 2rem;
}
.box{ 
  width: 100%;
  overflow: hidden; 
}
.topuse{
  box-sizing: border-box;
  width: 100%;
  height: 1.5rem;
  /* background-color: rgb(63, 236, 130); */
  position: relative;
  /* border-bottom-left-radius:40%;
  border-bottom-right-radius:40%; */
}
.topuse:after { width: 140%; height: 1.5rem; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient( rgb(63, 236, 130), rgb(63, 236, 130)); }
.shezhi{
  width: .3rem;
  height:.3rem;
  position: absolute;
  top: .2rem;
  right:.15rem;
  z-index: 5;
  background-color: rgb(63, 236, 130);
  background-image: url("../assets/shezhi.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.touxiang{
  position: absolute;
  top: .5rem;
  left:.3rem;
  text-align: center;
  line-height: .6rem;
  border-radius: 50%;
  background-color: rgb(163, 145, 160);
  width: .6rem;
  height:.6rem;
  font-size: .2rem;
  font-weight: 600;
  color:white;
  z-index: 5;
}
.topusetext{
  width: 100%;
  height:100%;
  z-index: 1;
  flex-shrink: .14rem;
}
.topusetextp1{
  padding-top: .56rem;
  text-indent: 1rem;
  color: white;
  font-size: .2rem;
}
.topusetextp2{
  padding-top: .04rem;
  text-indent: 1rem;
  color: white;
  font-size: .16rem;
}
.footer{
  width: 100%;
}
.vantbobo1{
    width: 100%;
    height: 2rem;
    background-color: aqua;
    border-radius: .08rem;
    
}
.vantbobo2{
    width: 100%;
    height: 2rem;
    background-color: aqua;
    border-radius: .08rem;
    margin-top: .14rem;
    margin-bottom: 1rem;
}
.bo1{
  width: 100%;
  height:100%;
  background-image: url("../assets/hotguoguo.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.bo2{
  width: 100%;
  height:100%;
  background-image: url("../assets/hotguo2.jpg");
  background-repeat: no-repeat;
  background-position: contain;
}
.bo3{
  width: 100%;
  height:100%;
  background-image: url("../assets/feiguo.jpg");
  background-repeat: no-repeat;
  background-position: contain;
}
.bo4{
  width: 100%;
  height:100%;
  background-image: url("../assets/feiguo3.jpg");
  background-repeat: no-repeat;
  background-position: contain;
}
</style>
