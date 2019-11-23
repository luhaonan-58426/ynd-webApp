<template>
    <div class="top_page_a">
     <Topa></Topa>
     <br>
      <Topb></Topb>
    </div>
</template>
<script>
import Topa from "../../components/common/top/topa";
import Topb from "../../components/common/top/topb";
export default{
    nmae:"top_page",
    components:{
         Topa,
         Topb
       }
}
</script>
<style scoped>
 .top_page_a{
     background-color:whitesmoke;
 }
</style>