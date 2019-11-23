<template>
    <div class="module">
        <div>

        </div>
        <div class="null">
            <p @click="tomanagement"><img src="../../../static/order/titleh.png" alt="">如何查看和管理我的订单？</p>
            <img src="../../../static/order/bkg.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "pending",
        methods:{
            tomanagement(){
                this.$router.push("./management")
            }
        }
    }
</script>

<style scoped lang="scss">
    .null{
        >p{
            width: 100%;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            padding: 0.1rem 0;
            img{
                display: inline-block;
                height: 0.2rem;
                vertical-align: middle;
            }
        }
        >img{
            width: 100%;
            padding-bottom: 61.5%;
        }
    }
    .module{
        width: 100%;
        height: 100%;
        background-color: #F2F2F2;
    }
</style>