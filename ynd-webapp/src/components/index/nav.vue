<template>
  <div class="head_nav">
    <ul class="nav_ul">
      <router-link v-for="(item,index) in nav" :key="index" :to='item.url'>
           <li class="head_li" >
        <a
          class="li_nav"
          @click="styleItem(item,index)"
          :class="{head_lii:i===index}"
        >{{item.title}}</a>
      </li>
      <!-- <router-view /> -->
      </router-link>
     
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      nav: [
        { title: "首页", url: "/home/index" },
        { title: "水果", url: "/home/top_page" },
        { title: "蔬菜", url: "/home/top_page" },
        { title: "养殖", url: "/home/top_page" },
        { title: "粮副", url: "/home/top_page" },
        { title: "苗木", url: "/home/top_page" },
        { title: "黑树苗", url: "/home/top_page" },
        { title: "中药材", url: "/home/top_page" },
        { title: "农机设配", url: "/home/top_page" },
        { title: "农资设备", url: "/home/top_page" },
        { title: "种子种苗", url: "/home/top_page" }
      ],

      i: 0,
      show: true
    };
  },
  methods: {
    styleItem(item, index) {
      this.i = index;
      this.show = true;
      // this.$emit("flag",this.flag)
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.head_nav {
  white-space: nowrap;
  overflow-x: auto;
  width: 3.5rem;
}
.head_li {
  display: inline-block;
  margin: 0rem 0.1rem;
}
.nav_ul {
  padding: 0 0.12rem;
}
.head_lii {
  border-bottom: 0.04rem green solid;
  display: inline-block;
}
</style>
