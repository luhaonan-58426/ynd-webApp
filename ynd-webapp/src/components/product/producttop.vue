<template>
    <div class="product">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img :src="product.pic"></div>
                <div class="swiper-slide"><img :src="product.pic"></div>
                <div class="swiper-slide"><img :src="product.pic"></div>
            </div>
        </div>
        <div class="cont">
            <div class="productall">
                <img class="back" src="../../assets/info_product/back.png" @click="back">
                <p class="price">￥{{product.price}}/件<span>{{product.num}}件起</span></p>
                <p class="title">{{product.title}}</p> <img class="my_share" src="../../assets/info_product/my_share.png" >
                <p class="site">这是定位地址</p>
                <p class="order"> <span>{{product.browse}}</span> 万人看过  /订单：<span>{{product.order}}</span>  <span class="ll">成交{{product.deal}}元</span></p>
            </div>
        </div>
        <div class="last">

        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "product",
        data() {
            return {
                product:{
                    pic: require("../../assets/info_product/my_p1.jpg"),
                    num: "15",
                    price: "9.90",
                    title: "红薯意见代发包邮六鳌沙地红蜜薯西瓜红品种适合微商电商",
                    browse: "14.96",
                    order: "10000",
                    deal: "739"
                }
            }
        },
                mounted() {
                    new Swiper('.swiper-container', {
                        loop: true,
                        // 如果需要分页器
                        pagination: '.swiper-pagination',
                        // 如果需要前进后退按钮
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        // 如果需要滚动条
                        scrollbar: '.swiper-scrollbar',
                    })
                },
                methods:{
                    back(){
                        this.$router.go(-1);
                    }
                }
            }


</script>

<style scoped>
    .swiper-wrapper img{
        width: 3.75rem;
    }
    .cont{
        position: relative;
        width: 100%;
        height: 1rem;
        background-color: white;
    }
    .price{
        color: #FE531D;
        font-size: 0.18rem;
    }
    .title{
        width: 2.6rem;
    }
    .productall{
        margin-left: 0.15rem;
    }
    .productall p{
        margin-top: 0.05rem;
    }
    .my_share{
        position: absolute;
        right: 0.2rem;
        top: 0.3rem;
        width: 0.2rem;
    }
    .site{
        font-size: 0.13rem;
        color: #9E9E9E;
    }
    .order{
        font-size: 0.13rem;
        color: #9E9E9E;
    }
    .price span{
        font-size: 0.1rem;
        display: inline-block;
        color: white;
        background-color:#FE531D ;
        margin-left: 0.1rem;
        width: 0.35rem;
        height: 0.15rem;
        text-align: center ;
    }
    .order .ll{
        margin-left: 2.7rem;
        font-size: 0.15rem;
    }
    .title{
        width: 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.15rem;
    }
    .back{
        position: absolute;
        top: -2.9rem;
        z-index: 999;
        left: 0.05rem;
        opacity: 0.5;
    }
</style>