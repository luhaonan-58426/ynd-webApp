<template>
  <div>
    <indexSearch></indexSearch>
    <footbar></footbar>
    <indexnav></indexnav>
    <router-view />
  </div>
</template>

<script>
  import indexSearch from "../components/index/search"
  import footbar from "../components/common/footerbar/footbar";
  import indexnav from '../components/index/nav';
  import indexbanner from '../components/index/banner';
  import indexsubnav from '../components/index/subnav';
  import indexcontent from '../components/index/content'
  import indexsubbanner from '../components/index/banner';
  import blank from '../components/index/blank';
  import cate from '../components/index/cate';
  import subcate from '../components/index/subcate';
  import goods from '../components/index/goods';
  
  
  export default {
    name: "home",
    data(){
      return {
      }
    },
    components:{
      footbar,
      indexSearch,
      indexnav,
      indexbanner,
      indexsubnav,
      indexcontent,
      indexsubbanner,
      blank,
      cate,
      subcate,
      goods
    },

  }
</script>

<style scoped lang="scss">

</style>
