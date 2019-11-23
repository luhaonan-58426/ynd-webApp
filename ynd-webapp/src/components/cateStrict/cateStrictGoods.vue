<template>
    <div>
        <div class="mustBuy" v-for="(v,i) in data" :key="i">
            <div class="buy">
                <img :src="v.title" alt="">
            </div>
            <div class="goods" v-for="(val,i) in v.buy" :key="i">
                <img :src="val.goodsImg" alt="">
                <p class="goods-p">{{val.goodsName}}</p>
                <p class="money"><span>{{val.fh}}</span>{{val.money}}</p>
                <button>{{val.button}}</button>
            </div>
        </div>
    </div>
</template>
<script scoped>
    export default {
        props: ["data"],
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .mustBuy{
        width: 100%;
        background-color: #f4f4f4;
    }
    .buy{
        background: white;
         width: 100%;
         /* margin-left: 3%; */
    }
   .buy img{
       width: 100%;
       vertical-align: middle;
       /* margin-left: 0.9rem; */
       margin-top: 0.1rem;
   }
   .goods{
       width: 94%;
       background: white;
       margin: 0 auto;
       border-bottom: 0.01rem solid #d8d8d8;
   }
   .goods img{
       width: 1rem;
       height: 1rem;
       margin-top: 0.15rem;
       margin-left: 0.05rem;
     
   }
   .goods-p{
       width: 60%;
       margin-left: 1.15rem;
        margin-top: -1rem;
        font-size: 0.14rem;
   }
   .money{
       margin-left: 1.15rem;
       margin-top: 0.3rem;
       font-size: 0.2rem;
   }
    .money span{
        font-size: 0.14rem;
    }
    button{
        margin-left: 2.5rem;
        position: relative;
        top: -0.3rem;
        width: 0.8rem;
        height: 0.3rem;
        border-radius: 0.3rem;
        background: red;
        color: white;
        border: none;
        font-size: 0.16rem;
    }
</style>