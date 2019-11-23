<template>
    <div class="HotSale">
        <div class="HotSale-classify">
            <a href="">
                <img src="http://39.107.139.165/hot/热门好货_03.gif" alt="">
                <p>水果</p>
            </a>
            <a href="">
                <img src="http://39.107.139.165/hot/热门好货_05.gif" alt="">
                <p>农副加工</p>
            </a>
            <a href="">
                <img src="http://39.107.139.165/hot/热门好货_07.gif" alt="">
                <p>禽畜肉蛋</p>
            </a>
            <a href="">
                <img src="http://39.107.139.165/hot/热门好货_09.gif" alt="">
                <p>农资农机</p>
            </a>
        </div>
        <div class="HotSale-content">
            <img src="http://39.107.139.165/hot/recommend.gif" alt="">
            <div class="HotSale-content-product">
                <div v-for="(m,sid) in hotsale" :key="sid"  :sid="sid">
                    <img :src="m.imgurl" alt="">
                    <p>红香蕉5.0斤/箱</p>
                    <p><span>{{m.price}}</span><span>元/斤</span>  <s>{{m.CostPrice}}</s></p>
                </div>
            </div>
            <img src="http://39.107.139.165/hot/zuixin.gif" alt="">
            <div class="HotSale-content-product">
                <div v-for="(m,sid) in NewSale" :key="sid"  :sid="sid">
                    <img :src="m.imgurl" alt="">
                    <p>红香蕉5.0斤/箱</p>
                    <p><span>{{m.price}}</span><span>元/斤</span>  <s>{{m.CostPrice}}</s></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HotSaleContent",
        data: function () {
            return {
                //热卖好货
                    'hotsale': [

                        {
                            id: '0',
                            name: '红香蕉5.0斤/箱',//商品名称
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',//商品图
                            price: "26.00",//定价
                            CostPrice:"3.8" //原价
                        },
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                            price: "19",
                            CostPrice:"19.5"
                        }

                    ],
                //最新上线
                    NewSale:[
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                            price: "19",
                            CostPrice:"19.5",
                            address:"重庆江津",//地址
                            time:'刚刚' //时间
                        },
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                            price: "19",
                            CostPrice:"19.5",
                            address:"重庆江津",
                            time:'刚刚'
                        },
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_03.gif',
                            price: "19",
                            CostPrice:"19.5",
                            address:"重庆江津",
                            time:'刚刚'
                        },
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_02.gif',
                            price: "19",
                            CostPrice:"19.5",
                            address:"重庆江津",
                            time:'刚刚'
                        },
                        {
                            id: '1',
                            name: '黄心猕猴桃',
                            imgurl: 'http://39.107.139.165/cateBrandImg/product1_02.gif',
                            price: "19",
                            CostPrice:"19.5",
                            address:"重庆江津",
                            time:'刚刚'
                        }

                    ]
            }
        }
    }
</script>

<style scoped>
    .HotSale{
        background-color:#f5f5f6 ;
    }
 .HotSale-classify{
    width: 90%;
    height: 1rem;
     margin: auto;
     display:flex;
     justify-content: space-between;
     text-align: center;
     background-color: #f5f5f5;
     border-left: #B8A398 0.02rem solid;

}
.HotSale-classify a{
display: inline-block;
    width: 23%;
    color: black;
    margin: 0.05rem;

}
 .HotSale-classify a img{
     height:0.48rem;
     width: 0.40rem;
 }
    /*内容部分*/
    .HotSale-content{
        width: 90%;
        margin: auto;

    }
 .HotSale-content>img{
    height: 0.35rem;


 }
 .HotSale-content>div{
     border-radius: 0.1rem;
     background-color: white;
 }
 .HotSale-content>div img{
     width: 1.6rem;
     height: 1.4rem;
 }
    .HotSale-content-product{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.05rem;
    }

</style>