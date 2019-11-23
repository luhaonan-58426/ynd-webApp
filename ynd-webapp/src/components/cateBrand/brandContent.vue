<template>
    <div>
        <div v-for="(m,sid) in shops" :key="sid"  :sid="sid">
            <div class="nav">
                <div><span>{{m.title}}</span></div>
            </div>
            <div class="product-ul">
                <ul>
                    <li  v-for="(val,sid) in m.products" :key="sid" :sid="sid">
                        <a href="">
                            <img :src="val.imgurl" alt="">
                            <p>{{val.name}}</p>
                            <span>{{val.price}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="advert">
            <img src="http://39.107.139.165/cateBrandImg/advert.jpg" alt="">
        </div>
<!--        商品列表类-->
        <div class="product-list">
            <ul v-for="(data,sid) in list" :key="sid" :sid="sid">
                <li>
                    <img :src="data.imgurl" alt="">
                    <div>
                        <span>{{data.name}}</span>
                        <p class="product-list-price">
                            <span>￥<span>{{data.price}}</span></span>
                            <s>{{data.costPrice}}</s>
                            <button>马上抢</button>
                        </p>
                    </div>


                </li>
            </ul>
        </div>

    </div>


</template>

<script>
    export default {
        name: "brandContent",
        data:function () {
            return{
                // 品牌馆数据结构
               shops:[{
                   'title': '地标精选',   //每个模块的标题
                   'products': [

                       {
                           id:'1',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发', //每件商品的名称
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif', //每件商品的图片
                           price:"26.00" ,//每件商品的定价
                           costPrice:"8"//每件商品原价
                       },
                       {
                           id:'2',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_02.gif',
                           price:"￥26.00"
                       },
                       {
                           id:'3',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_03.gif',
                           price:"26.00",
                            costPrice:"8"
                       },
                       {
                           id:'4',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_04.gif',
                           price:"￥26.00"
                       },
                       {
                           id:'5',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_05.gif',
                           price:"26.00"
                       },
                       {
                           id:'6',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_06.gif',
                           price:"26.00"
                       }
                   ]
               },
               {
                   'title': '品牌新贵',
                   'products': [
                       {
                           id:'1',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'2',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'3',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'4',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'5',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'6',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       }
                   ]
               },
               {
                   'title':'农副杂粮',
                   'products': [
                       {
                           id:'1',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00",
                           costPrice:"8"
                       },
                       {
                           id:'2',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00",
                           costPrice:"8"
                       },
                       {
                           id:'3',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00",
                           costPrice:"8"
                       },
                       {
                           id:'4',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00",
                           costPrice:"8"
                       },
                       {
                           id:'5',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00",
                           costPrice:"8"
                       },
                       {
                           id:'6',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       }
                   ]
               },
               {
                   'title': '品牌坚果',
                   'products': [
                       {
                           id:'1',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'2',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'3',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'4',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'5',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       },
                       {
                           id:'6',
                           name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                           imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                           price:"26.00"
                       }
                   ]
               },
                   {
                       'title': '热销水果',
                       'products': [
                           {
                               id:'1',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           },
                           {
                               id:'2',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           },
                           {
                               id:'3',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           },
                           {
                               id:'4',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           },
                           {
                               id:'5',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           },
                           {
                               id:'6',
                               name: '山西精选冰糖心红富士苹果【即丑苹果糖心苹果】一件代发',
                               imgurl: 'http://39.107.139.165/cateBrandImg/product1_01.gif',
                               price:"26.00"
                           }
                       ]
                   },

               ],
                list:[ //品牌馆最下边的商品列表
                    {
                        'imgurl':'http://39.107.139.165/cateBrandImg/product1_01.gif',
                        'name':'红富士苹果5斤装 包邮价、19.9膜袋现摘现卖、产地',
                        'price':'31.9'
                    },
                    {
                        'imgurl':'http://39.107.139.165/cateBrandImg/product1_01.gif',
                        'name':'红富士苹果5斤装 包邮价、19.9膜袋现摘现卖、产地',
                        'price':'31.9'
                    },
                    {
                        'imgurl':'http://39.107.139.165/cateBrandImg/product1_01.gif',
                        'name':'红富士苹果5斤装 包邮价、19.9膜袋现摘现卖、产地',
                        'price':'31.9'
                    },
                    {
                        'imgurl':'http://39.107.139.165/cateBrandImg/product1_01.gif',
                        'name':'红富士苹果5斤装 包邮价、19.9膜袋现摘现卖、产地',
                        'price':'31.9'
                    },
                    {
                        'imgurl':'http://39.107.139.165/cateBrandImg/product1_01.gif',
                        'name':'红富士苹果5斤装 包邮价、19.9膜袋现摘现卖、产地',
                        'price':'31.9'
                    }

                        ]

            }
        }
    }
</script>

<style scoped>
.nav{
    height: 0.37rem;
    width: 100%;
    background-color: #b7e583;
    text-align: center;
}
.nav>div:first-child{
    width: 1.7rem;
    height: 0.38rem;
    background-color: #a1e485;
    position: relative;
    top: -0.08rem;
    margin: auto;
    border-radius:0.1rem ;
    color:white;
    font-size: 0.20rem;
    border-top-width:1.4rem

}
.nav>div:first-child>span{
    display: inline-block;
    margin-top: 0.05rem;
}
.product-ul ul li{
    width: 30%;
    height: 1.58rem;
    background-color: #f6f6f6;
    margin:0.12rem 0rem;
    border-radius: 0.06rem;
}
.product-ul ul li a{
    display: inline-block;
    color: black;
}
.product-ul ul li a p{
    color: gray;
    font-size: 0.12rem;
    height: 0.32rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:0rem 0.05rem;
}
.product-ul ul li a span{
    color: red;
    font-size: 0.12rem;
    padding:0rem 0.05rem;
}
img{
    width: 100%;
    height: 0.9rem;
}
.product-ul{
    background-color: #94c260;
    width: 100%;
    /*text-align: center;*/
}
.product-ul ul{
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
.advert{
    width: 100%;
    background-color: #94c260;
    text-align: center;
}
    .advert img{
        width: 3.43rem;
        height: 1.90rem;
    }
.product-list{
    width: 100%;
    /*height: 1.35rem;*/
    /*text-align: center;*/
}
    .product-list ul{
        width: 90%;
        height: 1.35rem;
        margin: auto;
        padding-top: 0.25rem;
    }
.product-list ul li{
    display: flex;
}
.product-list ul li img{
    width: 1rem;
    height: 1rem;
}
.product-list ul li>div{
    padding-left: 0.2rem;
}
.product-list ul li>div>span{
    padding-bottom: 0.3rem;
    display: inline-block;
}
    .product-list-price span{
        color: red;
        font-size: 0.18rem;
        font-weight: 600;


    }
.product-list-price s{
    display: inline-block;
    padding:0rem 0.3rem 0rem 0.2rem;
    font-size: 0.12rem;
    color: gray;
}
.product-list-price button{
    background-color: red;
    border-radius: 0.5rem;
    color: white;
    width: 0.6rem;
    height: 0.3rem;
    border: none;
}
</style>