<template>
  <div>
    <!-- <indexbanner></indexbanner> -->
    <bannerHome></bannerHome>
    <indexsubnav></indexsubnav>
    <indexcontent></indexcontent>
    <cate></cate>
    <indexsubbanner></indexsubbanner>
    <subcate></subcate>
    <goods :goods="goods.goodsList"></goods>
    <blank></blank>
  </div>
</template>

<script>
import footbar from "../components/common/footerbar/footbar";
// import indexbanner from "../components/index/banner";
  import bannerHome from "../components/bannerHome/banner";

import indexsubnav from "../components/index/subnav";
import indexcontent from "../components/index/content";
import indexsubbanner from "../components/index/banner";
import blank from "../components/index/blank";
import cate from "../components/index/cate";
import subcate from "../components/index/subcate";
import goods from "../components/index/goods";

export default {
  name: "home",
  data() {
    return {
      goods: {
        goodsList: [
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/good_4.jpg"),
            price1: "15",
            price2: "10"
          },
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/goods_8.jpg"),
            price1: "15",
            price2: "10"
          },
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/goods_9.jpg"),
            price1: "15",
            price2: "10"
          },
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/goods_10.jpg"),
            price1: "10-15",
            price2: "10"
          },
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/goods_8.jpg"),
            price1: "15",
            price2: "10"
          },
          {
            title: "冰糖心苹果 精品80果无疤无伤无次果",
            pic: require("../../static/index/good_4.jpg"),
            price1: "15",
            price2: "10"
          }
        ]
      }
    };
  },
  components: {
    footbar,
    // indexbanner,
    indexsubnav,
    indexcontent,
    indexsubbanner,
    blank,
    cate,
    subcate,
    goods,
    bannerHome
  }
};
</script>

<style scoped lang="scss">
</style>
