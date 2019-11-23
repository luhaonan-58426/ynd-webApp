<template>
  <div>
      <cateHallHead></cateHallHead>
      <cateHallClass :data="arr"></cateHallClass>
      <cateHallFindLike :data="like"></cateHallFindLike>
      <cateHallGoods :data="goods"></cateHallGoods>
  </div>
</template>

<script>
import cateHallClass from "../../components/cate_hall/cateHallClass"
import cateHallHead from "../../components/cate_hall/cateHallHead"
import cateHallFindLike from "../../components/cate_hall/cateHallFindLike"
import cateHallGoods from "../../components/cate_hall/cateHallGoods"
  export default {
    name: "home",
    components:{
      cateHallHead,
      cateHallClass,
      cateHallFindLike,
      cateHallGoods
    },
    data(){
            return{
              arr:[
                  {title:"水果",imgurl:require("../../../static/cateHall/3.jpg")},
                  {title:"养殖",imgurl:require("../../../static/cateHall/7.jpg")},
                  {title:"苗木",imgurl:require("../../../static/cateHall/4.jpg")},
                  {title:"中药材",imgurl:require("../../../static/cateHall/5.jpg")},
                  {title:"农资设施",imgurl:require("../../../static/cateHall/6.jpg")},
                  {title:"蔬菜",imgurl:require("../../../static/cateHall/8.jpg")},
                  {title:"粮副",imgurl:require("../../../static/cateHall/9.jpg")},
                  {title:"果树苗",imgurl:require("../../../static/cateHall/10.jpg")},
                  {title:"农机设备",imgurl:require("../../../static/cateHall/11.jpg")},
                  {title:"种子种苗",imgurl:require("../../../static/cateHall/12.jpg")}
                ],
                like:[
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"},
                     {likeclass:"绿色产品"}
                ],
                goods:[
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")}
                ]
            }
        }
  }
</script>

<style scoped lang="scss">
</style>
