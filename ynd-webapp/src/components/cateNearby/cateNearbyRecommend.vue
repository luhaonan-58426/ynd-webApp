<template>
    <div class="rec">
        <p>附近最新推荐</p>
        <div class="mend">
            <div v-for="(v,i) in data" :key="i" class="con">
                <img :src="v.imgurl" alt="">
                <p>{{v.title}}</p>
                <p class="money">{{v.p}}<span>{{v.span}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
       props: ["data"],
    }
</script>

<style scoped>
  .mend{
      width: 92%;
      display: flex;
      overflow-x: auto;
      margin-left: 0.12rem;
  }
  .con{
      width: 30%;
      margin-top: 0.1rem;
      margin-left: 0.03rem;
      flex-shrink: 0;
  }
  .rec>p{
      margin-left: 0.2rem;
      margin-top: 0.25rem;
      font-weight:700;
  }
  .con img{
      width: 1rem;
      height: 1rem;
      display: block;
      margin: 0 auto;
      border-radius: 0.1rem;
  }
  .money{
      font-size: 0.2rem;
      font-weight:700;
      color: #e97b39;
  }
  .money span{
      font-size: 0.12rem;
  }
</style>
