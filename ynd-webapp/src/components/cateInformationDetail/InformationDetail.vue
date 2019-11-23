<template>
    <div class="informationDetail">
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="fn">
            <span>资讯详情</span>
        </div>
        <div class="Detailcontent">
            <p class="title">{{title}}</p>
            <p class="time">{{time}} <span>行情资讯</span></p>
            <p class="author">作者:{{author}}&nbsp;&nbsp;来源:{{source}}&nbsp;&nbsp;阅读数:{{num}}</p>
            <div class="guide">{{guide}}</div>
            <p>{{content}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cateInformationDetail",
        data() {
            //全国行情
            return {
                id: 0,
                title: '红小豆产地批发价格多少钱一斤？红小豆行情走势分析',//主题
                imgurl: [
                    "http://39.107.139.165/cateInformation/carousel-3.jpg"
                ],

                time: '1小时前',
                num: '0',
                author: "潘潘",//作者
                source: "惠农网",
                guide: "自十月中旬以来，2019年秋粮收购工作已纷纷启动。" +
                    "今年秋季主产区大部分地区以晴好天气为主，气温较高，降水也比较少，" +
                    "气象条件对农作物籽粒脱水晾干一级大田机械收获十分有利。" +
                    "稻谷供给比较充足，对整个市场构成压力，…",
                content: "\n" +
                    "\t自十月中旬以来，2019年秋粮收购工作已纷纷启动。今年秋季主产区大部分地区以晴好天气为主，气温较高，降水也比较少，气象条件对农作物籽粒脱水晾干一级大田机械收获十分有利。稻谷供给比较充足，对整个市场构成压力，" +
                    "水稻价格不及往年同期，后期价格仍有下调空间。那么水稻价格多少钱一斤?最新行情走势如何?" +
                    "下面就和惠农网小编一起来看看吧。",
                is_collect: "是"
            }
        },
        methods: {
            fn() {
                this.$router.push("./cateInformation")
            }
        }
    }
</script>

<style scoped>
    .informationDetail{
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
    .title{
        font-size: 0.22rem;
        color: #000;
        padding: 0.2rem 0rem;
    }
    .time{
        color: grey;
        font-size: 0.12rem;
    }
    .author{
        color: grey;
        font-size: 0.12rem;
    }
    .guide{
        background-color:#F5F5F5;
        color:#626262;
        margin: 0.2rem 0rem
    }
</style>