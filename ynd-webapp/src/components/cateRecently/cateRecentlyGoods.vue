<template>
    <div>
        <div class="right">
            <div class="con" v-for="(v,i) in data" :key="i">
                <img :src="v.imgurl" alt="">
                <p>{{v.title}}</p>
                <span>{{v.span}}</span>
            </div>
        </div>    
    </div>
</template>
<script>
     export default {
         props: ["data"]
    }
</script>

<style scoped>
  .right{
      width: 2.75rem;
      position: relative;
  }
  .con{
      width:2.62rem;
      height: 0.9rem;
      background: #f6f6f6;
      margin-left:0.07rem;
      display: flex;
      margin-top: 0.1rem;
      border-bottom: 0.01rem solid #e4dfdf;
      border-radius: 0.1rem;
  }
  .con img{
      width: 0.7rem;
      height: 0.7rem;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
  }
  .con p{
      width: 65%;
      margin-left: 0.1rem;
      margin-top: 0.12rem;
  }
   .con span{
      margin-top: 0.6rem;
      margin-left: -1.7rem;
      font-size: 0.14rem;
  }

</style>
