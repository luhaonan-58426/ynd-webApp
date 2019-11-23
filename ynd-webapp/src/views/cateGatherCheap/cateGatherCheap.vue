<template>
  <div>
      <cateCheapHead></cateCheapHead>
      <cateCheapClass :data="Cheap"></cateCheapClass>
      <cateCheapMustBuy :data="mustBuy"></cateCheapMustBuy>
  </div>
</template>

<script>
import cateCheapHead from "../../components/cateGatherCheap/cateCheapHead"
import cateCheapClass from "../../components/cateGatherCheap/cateCheapClass"
import cateCheapMustBuy from "../../components/cateGatherCheap/cateCheapMustBuy"
  export default {
    name: "home",
    components:{
        cateCheapHead,
        cateCheapClass,
        cateCheapMustBuy
    },
    data(){
          return {
              Cheap:[
                  {title:"水果",imgurl:require("../../../static/cateGatherCheap/2.jpg")},
                  {title:"蔬菜",imgurl:require("../../../static/cateGatherCheap/3.jpg")},
                  {title:"禽畜肉蛋",imgurl:require("../../../static/cateGatherCheap/4.jpg")},
                  {title:"粮食",imgurl:require("../../../static/cateGatherCheap/5.jpg")},
                  {title:"疯卖榜",imgurl:require("../../../static/cateGatherCheap/6.jpg")},
                  {title:"水产",imgurl:require("../../../static/cateGatherCheap/7.jpg")},
                  {title:"坚果干果",imgurl:require("../../../static/cateGatherCheap/8.jpg")},
                  {title:"农副食品",imgurl:require("../../../static/cateGatherCheap/9.jpg")},
                  {title:"中药材",imgurl:require("../../../static/cateGatherCheap/10.jpg")},
                  {title:"口碑好货",imgurl:require("../../../static/cateGatherCheap/11.jpg")}
                ],
                mustBuy:[
                      {
                        mustBuy:require("../../../static/cateGatherCheap/13.png"),
                        buySpan:"查看>",
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
                  },
                     {
                        mustBuy:require("../../../static/cateGatherCheap/12.png"),
                        buySpan:"查看>",
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
                  },
                ]
            }
        }
  }
</script>

<style scoped lang="scss">
</style>
