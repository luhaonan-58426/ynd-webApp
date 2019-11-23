<template>
  <div>
      <cateStrictHead></cateStrictHead>
      <cateStrictGoods :data="arr"></cateStrictGoods>
  </div>
</template>

<script>
import cateHallGoods from "../../components/cate_hall/cateHallGoods"
import cateStrictHead from "../../components/cateStrict/cateStrictHead"
import cateStrictGoods from "../../components/cateStrict/cateStrictGoods"
  export default {
    name: "home",
    components:{
      cateStrictHead,
      cateStrictGoods
    },
    data(){
            return{
                arr:[
                    {
                    title:require("../../../static/cateStrict/1.png"),
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
                    title:require("../../../static/cateStrict/3.png"),
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
                ]
            }
        }
  }
</script>

<style scoped lang="scss">
</style>
