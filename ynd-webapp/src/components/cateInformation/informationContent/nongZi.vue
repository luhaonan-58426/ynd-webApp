<template>
    <div class="all">
        <p>农资农机</p>
        <ul class="information-list">
            <li v-for="(n,i) in information" :key="i">
                <p>{{n.title}}</p>
                <div v-for="(m,j) in n.imgurl " :key="j" class="imgurl">
                    <img :src="m" alt="">
                </div>
                <span>{{n.category}}.{{n.time}}</span>
                <span>{{n.num}}人阅读</span>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "all",
        data(){
            return{
                information: [
                    {
                        i:0,
                        title:'红小豆产地批发价格多少钱一斤？红小豆行情走势分析',
                        imgurl:[
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-2.jpg",
                            "http://39.107.139.165/cateInformation/carousel-3.jpg"
                        ],
                        category:'粮油米面',
                        time:'1小时前',
                        num:'0'
                    },
                    {
                        i:1,
                        title:'红小豆产地批发价格多少钱一斤？红小豆行情走势分析',
                        imgurl:[
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg"
                        ],
                        category:'水果蔬菜',
                        time:'1小时前',
                        num:'0'
                    },
                    {
                        i:2,
                        title:'红小豆产地批发价格多少钱一斤？红小豆行情走势分析',
                        imgurl:[
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg"
                        ],
                        category:'水果蔬菜',
                        time:'1小时前',
                        num:'0'
                    },
                    {
                        i:3,
                        title:'红小豆产地批发价格多少钱一斤？红小豆行情走势分析',
                        imgurl:[
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg"
                        ],
                        category:'水果蔬菜',
                        time:'1小时前',
                        num:'0'
                    },
                    {
                        i:4,
                        title:'红小豆产地批发价格多少钱一斤？红小豆行情走势分析',
                        imgurl:[
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg",
                            "http://39.107.139.165/cateInformation/carousel-1.jpg"
                        ],
                        category:'水果蔬菜',
                        time:'1小时前',
                        num:'0'
                    },

                ]
            }
        },
    }
</script>

<style scoped>
    .all>p{
        width: 90%;
        padding-left: 0.1rem;
        border-left: 0.02rem solid olivedrab;
        margin: auto;

    }
    .information-list li{
        width: 90%;
        height:1.7rem;
        margin: 0 auto;
        position: relative;
        border-bottom: 0.01rem solid gray;
        padding-top: 0.1rem;
    }
    .information-list li img{
        width: 1.05rem;
        height: 0.88rem;
        float: left;
        padding-right: 0.05rem;
    }
    .information-list li span{
        color: gray;
        font-size: 0.12rem;
        display: inline-block;
        padding-top: 0.1rem;
    }
    .information-list li span:last-child{
        position: absolute;
        right: 0rem;
        top: 1.42rem;
    }

</style>