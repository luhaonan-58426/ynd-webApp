<template>
  <div>
      <cateNearbyHead></cateNearbyHead>
      <cateNearbyClass :data="arr"></cateNearbyClass>
      <cateNearbyRecommend :data="arr1"></cateNearbyRecommend>
      <cateNearbyHigh :data="buy"></cateNearbyHigh>
  </div>
</template>

<script>
import cateNearbyHead  from "../../components/cateNearby/cateNearbyHead"
import cateNearbyClass  from "../../components/cateNearby/cateNearbyClass"
import cateNearbyRecommend  from "../../components/cateNearby/cateNearbyRecommend"
import cateNearbyHigh  from "../../components/cateNearby/cateNearbyHigh"
  export default {
    name: "home",
    components:{
        cateNearbyHead,
        cateNearbyClass,
        cateNearbyRecommend,
        cateNearbyHigh
    },
    data(){
      return{
        arr:[
          {title:"蔬菜",imgurl:require("../../../static/cateNearby/4.png")},
          {title:"粮副",imgurl:require("../../../static/cateNearby/5.png")},
          {title:"果树苗",imgurl:require("../../../static/cateNearby/6.png")},
          {title:"农机设备",imgurl:require("../../../static/cateNearby/7.png")},
          {title:"种子种苗",imgurl:require("../../../static/cateNearby/6.png")}
        ],
        arr1:[
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"},
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"},
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"},
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"},
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"},
          {imgurl:require("../../../static/cateNearby/4.jpg"),title:"哈哈哈哈哈哈啊哈哈哈",p:"13.98",span:"元/箱"}
        ],   
        buy:[
              {
              goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
              goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
              fh:"￥",
              money:"10.00",
              button:"立马抢"
              },
              {
              goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
              goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
              fh:"￥",
              money:"10.00",
              button:"立马抢"
              },
              {
              goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
              goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
              fh:"￥",
              money:"10.00",
              button:"立马抢"
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>