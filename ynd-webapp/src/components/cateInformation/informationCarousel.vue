<template>
    <div class="carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(n,i) in carousel" :key="i">
                    <router-link :to="{path:'/cateInformationDetail'}"> <img :src="n.pic"></router-link>
<!--                    <img :src="n.pic"  @click="go(i)">-->
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-banner"></div>
        </div>
    </div>
</template>

<script>
    import '../../../node_modules/swiper/css/swiper.css'
    import Swiper from 'swiper'
    export default {
        name: "informationCarousel",
        data(){
            return{
                //资讯轮播
                carousel: [
                    { i:0,pic:"http://39.107.139.165/cateInformation/carousel-1.jpg" },
                    { i:1,pic:"http://39.107.139.165/cateInformation/carousel-2.jpg" },
                    { i:2,pic:"http://39.107.139.165/cateInformation/carousel-3.jpg" },
                    { i:3,pic:"http://39.107.139.165/cateInformation/carousel-4.jpg" },
                    { i:4,pic:"http://39.107.139.165/cateInformation/carousel-5.jpg" },
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
                // effect : 'coverflow',
                // slidesPerView: 3,
                // centeredSlides: true,
                // 轮播图的方向
                direction:'horizontal',
                // //播放速度
                loop: true,
                // 自动播放时间
                autoplay:true,
                // 播放的速度
                speed:1000,
                // 如果需要分页器，即下面的小圆点
                pagination: {
                    el: '.swiper-pagination-banner',
                    clickable: true,
                },
                // 即使滑动之后 定时器也不会被清除
                autoplayDisableOnInteraction : false,
            });
        },
        // methods:{
            // go(i){
            //     this.$router.push({path:'/carouselPage'+i})
            // }
        // }
    }
</script>

<style scoped lang="scss">
    .carousel{
        height: 1.85rem;
        width: 100%;
        padding-top: 0.48rem;
    }
    .swiper-slide img{
        height: 1.85rem;
        width: 100%;
    }
</style>
