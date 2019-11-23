<template>
  <div>
    <div class="head">
      <router-link to="/">
        <div class="back"></div>
      </router-link>
      <span>最近浏览</span>
    </div>
    <div class="c">
      <div class="left">
        <div @click="msg=0" class="whole" v-on:click="Goods" :style="color">货品</div>
        <div @click="msg=1" class="whole" v-on:click="Bought" :style="color1">买过</div>
        <div @click="msg=2" class="whole" v-on:click="Seen" :style="color2">看过</div>
        <div @click="msg=3" class="whole" v-on:click="Carefor" :style="color3">关心</div>
        <div @click="msg=4" class="whole" v-on:click="shop" :style="color4">店铺</div>
        <div @click="msg=5" class="whole" v-on:click="Chatted" :style="color5">聊过</div>
      </div>
      <div>
        <div v-show="msg===0">
          <cateRecentlyGoods :data="arr"></cateRecentlyGoods>
        </div>
        <div v-show="msg===1">
          <cateRecentlyNothing></cateRecentlyNothing>
        </div>
        <div v-show="msg===2"></div>
        <div v-show="msg===3"></div>
        <div v-show="msg===4"></div>
        <div v-show="msg===5"></div>
      </div>
    </div>
  </div>
</template>
<script>
import cateRecentlyGoods from "../../components/cateRecently/cateRecentlyGoods";
import cateRecentlyNothing from "../../components/cateRecently/cateRecentlyNothing";
export default {
  components: {
    cateRecentlyGoods,
    cateRecentlyNothing
  },
  data() {
    return {
      msg: 0,
      color: "color:#00b593;border-left:0.03rem solid #00b593",
      color1: "color:none",
      color2: "color:none",
      color3: "color:none",
      color4: "color:none",
      color5: "color:none",
      arr: [
        {
          title: "水果水果水果水果水果水果水果水果水果",
          imgurl: require("../../../static/cateHall/3.jpg"),
          span: "11.50"
        },
        {
          title: "水果水果水果水果水果水果水果水果水果",
          imgurl: require("../../../static/cateHall/7.jpg"),
          span: "11.50"
        },
        {
          title: "水果水果水果水果水果水果水果水果水果",
          imgurl: require("../../../static/cateHall/4.jpg"),
          span: "11.50"
        }
      ]
    };
  },
  methods: {
    Goods() {
      this.color = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color1 = "border:none";
      this.color2 = "border:none";
      this.color3 = "border:none";
      this.color4 = "border:none";
      this.color5 = "border:none";
    },
    Bought() {
      this.color1 = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color = "border:none";
      this.color2 = "border:none";
      this.color3 = "border:none";
      this.color4 = "border:none";
      this.color5 = "border:none";
    },
    Seen() {
      this.color2 = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color = "border:none";
      this.color1 = "border:none";
      this.color3 = "border:none";
      this.color4 = "border:none";
      this.color5 = "border:none";
    },
    Carefor() {
      this.color3 = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color1 = "border:none";
      this.color2 = "border:none";
      this.color = "border:none";
      this.color4 = "border:none";
      this.color5 = "border:none";
    },
    shop() {
      this.color4 = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color = "border:none";
      this.color2 = "border:none";
      this.color3 = "border:none";
      this.color1 = "border:none";
      this.color5 = "border:none";
    },
    Chatted() {
      this.color5 = "color:#00b593;border-left:0.03rem solid #00b593";
      this.color = "border:none";
      this.color2 = "border:none";
      this.color3 = "border:none";
      this.color1 = "border:none";
      this.color4 = "border:none";
    }
  }
};
</script>

<style scoped lang="scss">
.head {
  height: 0.4rem;
  width: 100%;
  background: white;
  position: fixed;
  background-image: url(../../../static/cateRecently/1.png);
  background-position: 0.1rem;
  background-size: 0.25rem 0.25rem;
  background-repeat: no-repeat;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.18rem;
  z-index: 3;
}
.c {
  display: flex;
  padding-top: 0.4rem;
}
.left {
  width: 1rem;
  height: auto;
  background: #f6f6f6;
}
.left div {
  text-align: center;
  line-height: 0.6rem;
}
.back {
  width: 0.5rem;
  height: 0.3rem;
  position: absolute;
  top: 0.1rem;
}
</style>
