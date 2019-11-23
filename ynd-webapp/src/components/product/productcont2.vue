<template>
    <div class="productcont2">
        <p class="specification">详情:</p>
        <div class="specificationlist">
            <p>{{details.explain}}</p>
            <div><img :src=details.pic class="detailsimg"></div>
        </div>
       </div>
</template>

<script>
    export default {
        name: "productcont2",
        data(){
            return{
             details:{
                 explain:"【联系我时，请说是在一亩田上看到的】多仓发货，支持一件代发，价格美丽！",
                 pic:require("../../assets/info_product/my_p1.jpg"),
             }


            }
        },
    }
</script>

<style scoped>
    .productcont2{
        border-top: 0.15rem solid #EFEFEF;
        width: 100%;
        margin-top: 0.25rem;
    }
    .specification{
        margin-left: 0.2rem;
        padding-top: 0.2rem;
    }
    .specificationlist{
        width: 3rem;
        margin-left: 0.2rem;
    }
    .specificationlist p{
        font-size: 0.13rem;
    }
    .specificationlist span{
        margin-left: 1.5rem;
    }
    .specificationlist li{
        list-style: none;
        margin-top: 0.1rem;
    }
    .detailsimg{
        width: 3rem;
        margin-top: 0.2rem;
    }
</style>