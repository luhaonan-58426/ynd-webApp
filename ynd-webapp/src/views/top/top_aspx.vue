<template>
    <div class="top_aspx_a">
    <indexsearch></indexsearch>   
    <Toptou></Toptou> 
    <div id="top_aspx_ti">
    <Topdzong></Topdzong>
     <br>
    
    
   <router-view></router-view>
    </div>
    <comonfooter></comonfooter>
    </div>
</template>
<script>
import Topdzong from "../../components/common/top/topdzong";
import Toptou from "../../components/common/top/toptou";
import indexsearch from '../../components/index/backSearch';
import comonfooter from '../../components/common/footerbar/footbar'
export default{
    name:"top_aspx",
    components:{
          Topdzong,
          Toptou,
          indexsearch,
          comonfooter  
       },
        data:function(){
           return{
               cource:"综合",
       
		}                     
     }       
}

</script>
<style scoped>
.top_aspx_a{
     position: relative;
    
 }
 #top_aspx_ti{
     position: relative;
     top:-1rem;
     z-index: 3
 }
</style>