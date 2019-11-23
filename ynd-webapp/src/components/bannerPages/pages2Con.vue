<template>
    <div class="pages2_con">
        <div class="con2" v-for="(mid,i) in pages0" :key="i">
            <p class="title_top"> {{ mid.headline }} </p>
            <div class="box">
                <div class="con2_box" v-for="sid in mid.products">
                    <img :src="sid.pic"/>
                    <p>{{sid.title}}</p>
                    <span>{{sid.price1}}<s>{{sid.price2}}</s></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pages2_con.vue",
    data(){
        return{
            pages0:[
                {
                    'headline':'植物苗',
                    "products":[
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽苗',
                            price1:'￥ 0.35',
                            price2:'0.3225'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒12小盆苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                    ]
                },
                {
                    'headline':'水果苗',
                    "products":[
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽苗',
                            price1:'￥ 0.35',
                            price2:'0.3225'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒12小盆苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                    ]
                },
                {
                    'headline':'蔬菜苗',
                    "products":[
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽苗',
                            price1:'￥ 0.35',
                            price2:'0.3225'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒12小盆苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                    ]
                },
                {
                    'headline':'更多苗',
                    "products":[
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽苗',
                            price1:'￥ 0.35',
                            price2:'0.3225'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒小盆栽种苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                        { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
                            title:'观叶耐寒12小盆苗竹柏苗',
                            price1:'￥ 0.35',
                            price2:'0.35'
                        },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped>
    .con2_box{
        width: 1.1rem;
        display: flex;
        flex-direction: column;
        font-size: 0.14rem;
        background-color: #ffffff;
        margin-top: 0.2rem;
        border-radius: 0.08rem;
    }
    .con2_box img{
        height: 1rem;
        border-radius: 0.08rem;
    }
    .con2_box p{
        margin-left: 0.04rem;
        height: 0.384rem;
    }
    .con2_box span{
        font-weight: bold;
        color: darkred;
        margin-left: 0.03rem;
    }
    .con2_box s{
        color: #000;
        margin-left: 0.1rem;
        font-weight: 500;
    }
    .title_top{
        font-size: 0.17rem;
        font-weight: bold;
        color: #ffffff;
        width: 1.48rem;
        background-image: url("../../assets/bannerPages_imgs/pages2_title.jpg");
        background-position: 0 -0.05rem;
        background-repeat: no-repeat;
        background-size: 1.5rem 0.5rem;
        /*background-color: #ffffff;*/
        /*border-radius: 0.15rem;*/
        margin : 0.22rem auto 0;
        text-align: center;
        padding: 0.08rem 0;
    }
    .box{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>