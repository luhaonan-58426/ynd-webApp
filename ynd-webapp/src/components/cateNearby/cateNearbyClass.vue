<template>
    <div class="classApp">
        <div v-for="(v,i) in data" :key="i">
            <img :src="v.imgurl" alt=""/>
            <br>
            <span>{{v.title}}</span>
        </div>
    </div>
        
</template>
<script>
    export default {
        props: ["data"],
    }
</script>
<style scoped>
   .classApp{
       width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       text-align: center;
       }
   .classApp img{
       width: 0.5rem;
       height: 0.5rem;
       border-radius: 50%;
       margin-top: 0.15rem;
   }
   .classApp span{
       font-size: 0.1rem;
   }
   .classApp>div{
       width: 20%;
       font-size: 0rem;
       border-radius: 50%;
   }
</style>