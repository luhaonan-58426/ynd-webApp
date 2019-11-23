<template>
    <div class="MarketQuotations">
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="fn">
            <span>全国行情</span>
        </div>
        <div class="Detailcontent">
            <div class="MarketQuotationsContent" v-for="(n,i) in list" :key="i">
                <p class="address">{{n.address}}</p>
                <p class="detail">{{n.detail}}</p>
                <div class="list">
                    <p class="product">{{n.product}}</p>
                    <p class="price">{{n.price}}</p>
                    <p class="time">{{n.time}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MarketQuotations",
        data() {
            return {
                //全国行情
                list:[
                    {
                    id: 0,
                    address: '广西桂林市灵山县', //地址
                    detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                    // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                    product:'恭城月柿饼',//商品
                    price:'5.2元/斤',//价格
                    time: '2019-11-20',
                },
                    {
                        id:1,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 2,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死或者后端随意改改 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 3,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 4,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 5,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 6,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },
                    {
                        id: 7,
                        address: '广西桂林市灵山县',
                        detail:'今天晴，客商积极性低，走货稳，货源增多，货源几种为陆地货，存货为主',
                        // (detail详情可以直接按前端的写死 不用后端增加 前期沟通 后端无此数据)
                        product:'恭城月柿饼',
                        price:'5.2元/斤',
                        time: '2019-11-20',
                    },

                ]

            }
        },
        methods: {
            fn() {
                this.$router.push("./home")
            }
        }
    }
</script>

<style scoped>
    .MarketQuotations{
        width: 100%;
    }
    .header{
        height: 0.47rem;
        width: 3.75rem;
        background-color: #9AC767;
        position:fixed;
        z-index: 998;
    }
    .header img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .header span{
        color: white;
        font-size: 0.24rem;
        position: absolute;
        left: 1.5rem;
        margin: 0.07rem;
    }
    .Detailcontent{
        width: 90%;
        padding-top: 0.5rem;
        color: black;
        margin: auto;
    }
    .list{
        display: flex;
        justify-content: space-between;
        padding: 0.05rem;
    }
    .address{
        padding: 0.03rem 0.1rem;
        border-left: 0.02rem darkgreen solid;
        font-size: 0.18rem;
        margin: 0.06rem 0rem;
    }
    .detail{
        color:#626262;
        font-size: 0.14rem;
    }

    .list{
        background-color:#F5F5F5;

        margin: 0.2rem 0rem
    }
    .price{
        color: orangered;

    }
    .time{
        color:#626262;
    }
</style>