<template>
  <div>
    <div class="header">
      <router-link to='/my'>
           <i>
        <img src="../../static/index/icon_6.png" alt />
      </i>
      </router-link>
     
      <span class="money">编辑地址</span>
      <router-link to="/addAdr">
        <span class="add">添加新地址</span>
      </router-link>
    </div>
    <div class="list">
      <div class="con" v-for="(item,index) in personal.address" :key="index">
        <i>
          <img src="../../static/index/icon_3.png" alt />
        </i>
        <span class="msg">
          <span class="name">{{item.name}}</span>
          <span class="phone">{{item.phone}}</span>
          <p class="address">{{item.address}}</p>
        </span>
        <router-link to="/editAds">
          <span class="ps">编辑</span>
        </router-link>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import footbar from "../components/common/footerbar/footbar";
export default {
  name: "classify",
  components: {
    footbar
  },
  data() {
    return {
      personal: {
        address: [
          {
            name: "李佳豪",
            phone: "1531994623",
            address: "陕西省 西安市 雁塔区 南窑头"
          },
          {
            name: "李佳豪",
            phone: "1531994623",
            address: "陕西省 西安市 雁塔区 南窑头"
          },
          {
            name: "李佳豪",
            phone: "1531994623",
            address: "陕西省 西安市 雁塔区 南窑头 "
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.5rem;
  background-color: #f8f8f8;
  display: flex;
}
.header i {
  width: 0.5rem;
  height: 0.4rem;
  display: inline-block;
  position: relative;
  top: 0.05rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.phone {
  margin-left: 0.1rem;
}
.money {
  width: 70%;
  text-align: center;
  line-height: 0.5rem;
  display: inline-block;
}
.add {
  width: 0.7rem;
  position: absolute;
  right: 0.1rem;
  top: 0.17rem;
  font-size: 0.14rem;
  color: gray;
}
.con i {
  width: 0.4rem;
  height: 0.4rem;
  display: inline-block;
  position: relative;
  top: 0.05rem;
}
.con {
  padding: 0.1rem;
  display: flex;
}
.con img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.msg {
  margin-left: 0.2rem;
  border-right: 0.01rem gainsboro solid;
  padding-right: 0.5rem;
}
.address {
  margin-top: 0.1rem;
  width: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ps {
  text-align: center;
  display: inline-block;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
}
</style>
