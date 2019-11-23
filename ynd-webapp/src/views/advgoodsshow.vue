<template>
    <div>
        <div class="catg-nav">
            <a href="" class="catg-back">
                <span></span>
            </a>
            <div class="catg-nav-title">分类</div>
            <div class="catg-nav-operation">
                <a href="">
                    <i></i>
                </a>
            </div>
        </div>
        
        <div class="catg-list-box" v-if="categoryInfo">
            <div class="catg-list-con">
                <!--左侧开始-->
                <div class="catg-list-left">
                    <ul>
                        <li class="catg-list-nav-cur" v-for="(item, index) in categoryInfo.goodlist" :key="index" @click="jump(index)"
                            :class="index==0?'catgCurrent':''">
                            <a href="">
                                <span>{{item.title}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--右边开始-->
                <div class="catg-list-right" >
                    <div class="catg-right-item">
                        <div v-for="(item,call) in categoryInfo.goodlist" class="catg-item-main"  :key="call" >
                            <!--图片-->
                            <div  class="catg-item-pic" v-if="item.pic">
                                <a href="">
                                    我是跳转界面
                                    <!-- <img :src="item.pic" alt=""> -->
                                </a>
                            </div>
                            <div :key="pindex" v-for="(good,pindex) in item.goods">
                                <div class="category_title"  >
                                    <span>{{good.name}}</span>
                                </div>
                                <!--内容-->
                                <div class="category_group">
                                    <div class="category_group_box">
                                        <div class="category_group_product" v-for="(pro,pindex) in good.products" :key="pindex">
                                            <a href="">
                                                <div class="img">
                                                    内容展示界面的图片代替
                                                    <!-- <img :src="pro.pic" alt=""> -->
                                                </div>
                                                <div class="name">{{pro.title}}</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cate-empty"></div>
                    </div>
                </div>
            </div>
        </div>
        <footerbar></footerbar>
    </div>
</template>

<script >
    import $ from 'jquery';
    import footerbar from '../components/common/footerbar/footbar.vue';

    export default {
        name: "advhometo5",
        components:{
            footerbar
        },
        data() {
            return {
                scroll: "null",
                categoryInfo:{
           "goodlist": [
               {
                    "title": "新品",
                    "pic": "assets/images/categroy-img/new1.jpg",
                    "goods": [
                        {
                            "name": "手机",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/phone1.png"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/phone2.png"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/phone3.png"
                                },
                                {
                                    "title": "小米9 Pro",
                                    "pic": "assets/images/categroy-img/phone4.png"
                                },
                                {
                                    "title": "小米MIX Alpha",
                                    "pic": "assets/images/categroy-img/phone5.png"
                                },
                                {
                                    "title": "K20 Pro尊享版",
                                    "pic": "assets/images/categroy-img/phone6.png"
                                },
                                {
                                    "title": "Redmi Note 8 Pro",
                                    "pic": "assets/images/categroy-img/phone7.gif"
                                },
                                {
                                    "title": "Redmi Note 8",
                                    "pic": "assets/images/categroy-img/phone8.gif"
                                },
                                {
                                    "title": "小米CC9",
                                    "pic": "assets/images/categroy-img/phone9.png"
                                },
                                {
                                    "title": "小米CC9e",
                                    "pic": "assets/images/categroy-img/phone10.png"
                                },
                                {
                                    "title": "小米CC9 完美版",
                                    "pic": "assets/images/categroy-img/phone11.png"
                                }
                            ]

                        },
                        {
                            "name": "家电",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/phone1.png"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/phone2.png"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/phone3.png"
                                },
                                {
                                    "title": "小米9 Pro 5G",
                                    "pic": "assets/images/categroy-img/phone4.png"
                                },
                                {
                                    "title": "小米MIX Alpha",
                                    "pic": "assets/images/categroy-img/phone5.png"
                                },
                                {
                                    "title": "K20 Pro尊享版",
                                    "pic": "assets/images/categroy-img/phone6.png"
                                }
                            ]

                        },
                        {
                            "name": "电脑",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/comp1.jpg"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/comp2.jpg"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/comp3.jpg"
                                }
                            ]

                        }
                    ]
                },
               {
                   "title": "众筹",
                   "pic": "assets/images/categroy-img/zhong1.png",
                   "goods": [
                       {
                           "name": "众筹好物",
                           "products": [
                               {
                                   "title": "湿温度计",
                                   "pic": "assets/images/categroy-img/phone1.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/xiaoai3.jpg"
                               },
                               {
                                   "title": "Redmi 8A",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米9 Pro 5G",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "小米MIX Alpha",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "K20 Pro尊享版",
                                   "pic": "assets/images/categroy-img/xiaoai7.jpg"
                               },
                               {
                                   "title": "Redmi Note 8 Pro",
                                   "pic": "assets/images/categroy-img/xiaoai6.jpg"
                               },
                               {
                                   "title": "Redmi Note 8",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               },
                               {
                                   "title": "小米CC9",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "小米CC9e",
                                   "pic": "assets/images/categroy-img/phone10.png"
                               },
                               {
                                   "title": "小米CC9 完美版",
                                   "pic": "assets/images/categroy-img/phone11.png"
                               }
                           ]

                       }
                   ]
               },
               {
                   "title": "小米手机",
                   "pic": "assets/images/categroy-img/mi.jpg",
                   "goods": [
                       {
                           "name": "小米数字系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/mi1.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "Redmi 8A",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               },
                               {
                                   "title": "小米9 Pro 5G",
                                   "pic": "assets/images/categroy-img/phone4.png"
                               }
                           ]
                       },
                       {
                           "name": "小米MIX系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone10.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/phone11.png"
                               }
                           ]

                       },
                       {
                           "name": "小米Max系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone6.png"
                               }
                           ]
                       },
                       {
                           "name": "小米手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone7.gif"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               }

                           ]
                       }
                   ]
               },
               {
                   "title": "Redmin手机",
                   "goods": [
                       {
                           "name": "Redmin红米 数字系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone2.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone7.gif"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone6.png"
                               }

                           ]
                       },
                       {
                           "name": "Redmin红米 Note系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone2.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone1.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone5.png"
                               }
                           ]
                       },
                       {
                           "name": "Redmin红米 K系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               }
                           ]
                       },
                       {
                           "name": "Redmin红米 手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone4.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone5.png"
                               }
                           ]
                       }
                   ]
               },
               {
                   "title": "黑鲨游戏",
                   "goods": [
                       {
                           "name": "黑鲨游戏手机",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/hei1.png"
                               }
                           ]
                       },
                       {
                           "name": "黑鲨 手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/hei2.png"
                               }
                           ]
                       }
                   ]
               },
               {
                   "title": "电视",
                   "goods":[
                       {
                           "name": "电视",
                           "products": [
                               {
                                   "title": "32.4英寸",
                                   "pic": "assets/images/categroy-img/tv1.png"
                               },
                               {
                                   "title": "43英寸",
                                   "pic": "assets/images/categroy-img/tv2.jpg"
                               },
                               {
                                   "title": "49-50英寸",
                                   "pic": "assets/images/categroy-img/tv3.jpg"
                               },
                               {
                                   "title": "55-58英寸",
                                   "pic": "assets/images/categroy-img/tv4.jpg"
                               },
                               {
                                   "title": "65-75英寸",
                                   "pic": "assets/images/categroy-img/tv5.jpg"
                               },
                               {
                                   "title": "投光摄影电视",
                                   "pic": "assets/images/categroy-img/tv6.jpg"
                               }

                           ]
                       },
                   ]
               },
               {
                   "title": "大家电",
                   "goods": [
                       {
                           "name": "大家电",
                           "products": [
                               {
                                   "title": "冰箱",
                                   "pic": "assets/images/categroy-img/da1.png"
                               },
                               {
                                   "title": "壁挂空间",
                                   "pic": "assets/images/categroy-img/da2.png"
                               },
                               {
                                   "title": "立式空调",
                                   "pic": "assets/images/categroy-img/da3.jpg"
                               },
                               {
                                   "title": "滚筒洗衣机",
                                   "pic": "assets/images/categroy-img/da4.png"
                               },
                               {
                                   "title": "波轮洗衣机",
                                   "pic": "assets/images/categroy-img/da5.png"
                               }

                           ]
                       }]
               },
               {
                   "title": "电脑",
                   "goods": [
                       {
                           "name": "电脑",
                           "products": [
                               {
                                   "title": "显示器",
                                   "pic": "assets/images/categroy-img/comp1.jpg"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/comp2.jpg"
                               },
                               {
                                   "title": "Pro 15.6",
                                   "pic": "assets/images/categroy-img/comp3.jpg"
                               },
                               {
                                   "title": "Air 13.3",
                                   "pic": "assets/images/categroy-img/comp6.jpg"
                               },
                               {
                                   "title": "Air 12.5",
                                   "pic": "assets/images/categroy-img/comp5.jpg"
                               },
                               {
                                   "title": "游戏本",
                                   "pic": "assets/images/categroy-img/comp6.png"
                               }

                           ]
                       },
                   ]
               },
               {
                   "title": "小爱智能",
                   "goods": [
                       {
                           "name": "小爱智能",
                           "products": [
                               {
                                   "title": "小爱音箱",
                                   "pic": "assets/images/categroy-img/xiaoai2.png"
                               },
                               {
                                   "title": "小爱音箱 pro",
                                   "pic": "assets/images/categroy-img/xiaoai1.jpg"
                               },
                               {
                                   "title": "小爱老师",
                                   "pic": "assets/images/categroy-img/xiaoai3.jpg"
                               },
                               {
                                   "title": "小爱音箱Play",
                                   "pic": "assets/images/categroy-img/xiaoai4.jpg"
                               },
                               {
                                   "title": "小爱触屏",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "小爱AI音箱",
                                   "pic": "assets/images/categroy-img/xiaoai6.jpg"
                               },
                               {
                                   "title": "小爱HD",
                                   "pic": "assets/images/categroy-img/xiaoai7.jpg"
                               },
                               {
                                   "title": "小爱超级通话版",
                                   "pic": "assets/images/categroy-img/xiaoai8.png"
                               }

                           ]
                       }
                       ]
               },
               {
                   "title": "路由器",
                   "goods": [
                         {
                               "name": "路由器",
                               "products": [
                                    {
                                        "title": "路由器AC2100",
                                        "pic": "assets/images/categroy-img/lu1.jpg"
                                    },
                                    {
                                        "title": "路由4A",
                                        "pic": "assets/images/categroy-img/lu2.jpg"
                                    },
                                    {
                                        "title": "路由Mesh",
                                        "pic": "assets/images/categroy-img/lu3.jpg"
                                    },
                                    {
                                        "title": "路由4C 300M",
                                        "pic": "assets/images/categroy-img/lu4.jpg"
                                    },
                                    {
                                        "title": "路由4A 干兆版",
                                        "pic": "assets/images/categroy-img/lu5.jpg"
                                    },
                                    {
                                        "title": "路由4 全干兆",
                                        "pic": "assets/images/categroy-img/lu6.jpg"
                                    },
                               ]
                           },
                   ]
               },
               {
                   "title": "生活电器",
                   "goods": [
                       {
                           "name": "生活电器",
                           "products": [
                               {
                                   "title": "空气净化器",
                                   "pic": "assets/images/categroy-img/life.png"
                               },
                               {
                                   "title": "新风机",
                                   "pic": "assets/images/categroy-img/life2.jpg"
                               },
                               {
                                   "title": "扫地机",
                                   "pic": "assets/images/categroy-img/life3.jpg"
                               },
                               {
                                   "title": "除螨仪",
                                   "pic": "assets/images/categroy-img/life5.png"
                               },
                               {
                                   "title": "擦地机",
                                   "pic": "assets/images/categroy-img/life2.jpg"
                               }

                           ]
                       }

                   ]
               },
               {
                   "title": "厨房电器",
                   "goods": [
                       {
                           "name": "厨房电器",
                           "products": [
                               {
                                   "title": "净水器",
                                   "pic": "assets/images/categroy-img/chu1.jpg"
                               },
                               {
                                   "title": "电饭煲",
                                   "pic": "assets/images/categroy-img/chu2.jpg"
                               },
                               {
                                   "title": "烟机灶具",
                                   "pic": "assets/images/categroy-img/chu3.png"
                               },
                               {
                                   "title": "电磁炉",
                                   "pic": "assets/images/categroy-img/chu4.jpg"
                               },
                               {
                                   "title": "电压力锅",
                                   "pic": "assets/images/categroy-img/chu3.png"
                               },
                               {
                                   "title": "微波炉",
                                   "pic": "assets/images/categroy-img/chu5.jpg"
                               },
                               {
                                   "title": "电烤箱",
                                   "pic": "assets/images/categroy-img/chu6.jpg"
                               },
                               {
                                   "title": "料理机",
                                   "pic": "assets/images/categroy-img/chu7.jpg"
                               },

                           ]
                       }
                   ]
               },
               {
                    "title": "新品",
                    "pic": "assets/images/categroy-img/new1.jpg",
                    "goods": [
                        {
                            "name": "手机",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/phone1.png"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/phone2.png"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/phone3.png"
                                },
                                {
                                    "title": "小米9 Pro",
                                    "pic": "assets/images/categroy-img/phone4.png"
                                },
                                {
                                    "title": "小米MIX Alpha",
                                    "pic": "assets/images/categroy-img/phone5.png"
                                },
                                {
                                    "title": "K20 Pro尊享版",
                                    "pic": "assets/images/categroy-img/phone6.png"
                                },
                                {
                                    "title": "Redmi Note 8 Pro",
                                    "pic": "assets/images/categroy-img/phone7.gif"
                                },
                                {
                                    "title": "Redmi Note 8",
                                    "pic": "assets/images/categroy-img/phone8.gif"
                                },
                                {
                                    "title": "小米CC9",
                                    "pic": "assets/images/categroy-img/phone9.png"
                                },
                                {
                                    "title": "小米CC9e",
                                    "pic": "assets/images/categroy-img/phone10.png"
                                },
                                {
                                    "title": "小米CC9 完美版",
                                    "pic": "assets/images/categroy-img/phone11.png"
                                }
                            ]

                        },
                        {
                            "name": "家电",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/phone1.png"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/phone2.png"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/phone3.png"
                                },
                                {
                                    "title": "小米9 Pro 5G",
                                    "pic": "assets/images/categroy-img/phone4.png"
                                },
                                {
                                    "title": "小米MIX Alpha",
                                    "pic": "assets/images/categroy-img/phone5.png"
                                },
                                {
                                    "title": "K20 Pro尊享版",
                                    "pic": "assets/images/categroy-img/phone6.png"
                                }
                            ]

                        },
                        {
                            "name": "电脑",
                            "products": [
                                {
                                    "title": "小米CC91 Pro",
                                    "pic": "assets/images/categroy-img/comp1.jpg"
                                },
                                {
                                    "title": "Redmi 8",
                                    "pic": "assets/images/categroy-img/comp2.jpg"
                                },
                                {
                                    "title": "Redmi 8A",
                                    "pic": "assets/images/categroy-img/comp3.jpg"
                                }
                            ]

                        }
                    ]
                },
               {
                   "title": "众筹",
                   "pic": "assets/images/categroy-img/zhong1.png",
                   "goods": [
                       {
                           "name": "众筹好物",
                           "products": [
                               {
                                   "title": "湿温度计",
                                   "pic": "assets/images/categroy-img/phone1.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/xiaoai3.jpg"
                               },
                               {
                                   "title": "Redmi 8A",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米9 Pro 5G",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "小米MIX Alpha",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "K20 Pro尊享版",
                                   "pic": "assets/images/categroy-img/xiaoai7.jpg"
                               },
                               {
                                   "title": "Redmi Note 8 Pro",
                                   "pic": "assets/images/categroy-img/xiaoai6.jpg"
                               },
                               {
                                   "title": "Redmi Note 8",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               },
                               {
                                   "title": "小米CC9",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "小米CC9e",
                                   "pic": "assets/images/categroy-img/phone10.png"
                               },
                               {
                                   "title": "小米CC9 完美版",
                                   "pic": "assets/images/categroy-img/phone11.png"
                               }
                           ]

                       }
                   ]
               },
               {
                   "title": "小米手机",
                   "pic": "assets/images/categroy-img/mi.jpg",
                   "goods": [
                       {
                           "name": "小米数字系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/mi1.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "Redmi 8A",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               },
                               {
                                   "title": "小米9 Pro 5G",
                                   "pic": "assets/images/categroy-img/phone4.png"
                               }
                           ]
                       },
                       {
                           "name": "小米MIX系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone10.png"
                               },
                               {
                                   "title": "Redmi 8",
                                   "pic": "assets/images/categroy-img/phone11.png"
                               }
                           ]

                       },
                       {
                           "name": "小米Max系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone6.png"
                               }
                           ]
                       },
                       {
                           "name": "小米手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone7.gif"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone8.gif"
                               }

                           ]
                       }
                   ]
               },
               {
                   "title": "Redmin手机",
                   "goods": [
                       {
                           "name": "Redmin红米 数字系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone2.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone7.gif"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone6.png"
                               }

                           ]
                       },
                       {
                           "name": "Redmin红米 Note系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone2.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone1.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone5.png"
                               }
                           ]
                       },
                       {
                           "name": "Redmin红米 K系列",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone3.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone9.png"
                               }
                           ]
                       },
                       {
                           "name": "Redmin红米 手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone4.png"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/phone5.png"
                               }
                           ]
                       }
                   ]
               },
               {
                   "title": "黑鲨游戏",
                   "goods": [
                       {
                           "name": "黑鲨游戏手机",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/hei1.png"
                               }
                           ]
                       },
                       {
                           "name": "黑鲨 手机配件",
                           "products": [
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/hei2.png"
                               }
                           ]
                       }
                   ]
               },
               {
                   "title": "电视",
                   "goods":[
                       {
                           "name": "电视",
                           "products": [
                               {
                                   "title": "32.4英寸",
                                   "pic": "assets/images/categroy-img/tv1.png"
                               },
                               {
                                   "title": "43英寸",
                                   "pic": "assets/images/categroy-img/tv2.jpg"
                               },
                               {
                                   "title": "49-50英寸",
                                   "pic": "assets/images/categroy-img/tv3.jpg"
                               },
                               {
                                   "title": "55-58英寸",
                                   "pic": "assets/images/categroy-img/tv4.jpg"
                               },
                               {
                                   "title": "65-75英寸",
                                   "pic": "assets/images/categroy-img/tv5.jpg"
                               },
                               {
                                   "title": "投光摄影电视",
                                   "pic": "assets/images/categroy-img/tv6.jpg"
                               }

                           ]
                       },
                   ]
               },
               {
                   "title": "大家电",
                   "goods": [
                       {
                           "name": "大家电",
                           "products": [
                               {
                                   "title": "冰箱",
                                   "pic": "assets/images/categroy-img/da1.png"
                               },
                               {
                                   "title": "壁挂空间",
                                   "pic": "assets/images/categroy-img/da2.png"
                               },
                               {
                                   "title": "立式空调",
                                   "pic": "assets/images/categroy-img/da3.jpg"
                               },
                               {
                                   "title": "滚筒洗衣机",
                                   "pic": "assets/images/categroy-img/da4.png"
                               },
                               {
                                   "title": "波轮洗衣机",
                                   "pic": "assets/images/categroy-img/da5.png"
                               }

                           ]
                       }]
               },
               {
                   "title": "电脑",
                   "goods": [
                       {
                           "name": "电脑",
                           "products": [
                               {
                                   "title": "显示器",
                                   "pic": "assets/images/categroy-img/comp1.jpg"
                               },
                               {
                                   "title": "小米CC91 Pro",
                                   "pic": "assets/images/categroy-img/comp2.jpg"
                               },
                               {
                                   "title": "Pro 15.6",
                                   "pic": "assets/images/categroy-img/comp3.jpg"
                               },
                               {
                                   "title": "Air 13.3",
                                   "pic": "assets/images/categroy-img/comp6.jpg"
                               },
                               {
                                   "title": "Air 12.5",
                                   "pic": "assets/images/categroy-img/comp5.jpg"
                               },
                               {
                                   "title": "游戏本",
                                   "pic": "assets/images/categroy-img/comp6.png"
                               }

                           ]
                       },
                   ]
               },
               {
                   "title": "小爱智能",
                   "goods": [
                       {
                           "name": "小爱智能",
                           "products": [
                               {
                                   "title": "小爱音箱",
                                   "pic": "assets/images/categroy-img/xiaoai2.png"
                               },
                               {
                                   "title": "小爱音箱 pro",
                                   "pic": "assets/images/categroy-img/xiaoai1.jpg"
                               },
                               {
                                   "title": "小爱老师",
                                   "pic": "assets/images/categroy-img/xiaoai3.jpg"
                               },
                               {
                                   "title": "小爱音箱Play",
                                   "pic": "assets/images/categroy-img/xiaoai4.jpg"
                               },
                               {
                                   "title": "小爱触屏",
                                   "pic": "assets/images/categroy-img/xiaoai5.png"
                               },
                               {
                                   "title": "小爱AI音箱",
                                   "pic": "assets/images/categroy-img/xiaoai6.jpg"
                               },
                               {
                                   "title": "小爱HD",
                                   "pic": "assets/images/categroy-img/xiaoai7.jpg"
                               },
                               {
                                   "title": "小爱超级通话版",
                                   "pic": "assets/images/categroy-img/xiaoai8.png"
                               }

                           ]
                       }
                       ]
               },
               {
                   "title": "路由器",
                   "goods": [
                         {
                               "name": "路由器",
                               "products": [
                                    {
                                        "title": "路由器AC2100",
                                        "pic": "assets/images/categroy-img/lu1.jpg"
                                    },
                                    {
                                        "title": "路由4A",
                                        "pic": "assets/images/categroy-img/lu2.jpg"
                                    },
                                    {
                                        "title": "路由Mesh",
                                        "pic": "assets/images/categroy-img/lu3.jpg"
                                    },
                                    {
                                        "title": "路由4C 300M",
                                        "pic": "assets/images/categroy-img/lu4.jpg"
                                    },
                                    {
                                        "title": "路由4A 干兆版",
                                        "pic": "assets/images/categroy-img/lu5.jpg"
                                    },
                                    {
                                        "title": "路由4 全干兆",
                                        "pic": "assets/images/categroy-img/lu6.jpg"
                                    },
                               ]
                           },
                   ]
               },
               {
                   "title": "生活电器",
                   "goods": [
                       {
                           "name": "生活电器",
                           "products": [
                               {
                                   "title": "空气净化器",
                                   "pic": "assets/images/categroy-img/life.png"
                               },
                               {
                                   "title": "新风机",
                                   "pic": "assets/images/categroy-img/life2.jpg"
                               },
                               {
                                   "title": "扫地机",
                                   "pic": "assets/images/categroy-img/life3.jpg"
                               },
                               {
                                   "title": "除螨仪",
                                   "pic": "assets/images/categroy-img/life5.png"
                               },
                               {
                                   "title": "擦地机",
                                   "pic": "assets/images/categroy-img/life2.jpg"
                               }

                           ]
                       }

                   ]
               },
               {
                   "title": "厨房电器",
                   "goods": [
                       {
                           "name": "厨房电器",
                           "products": [
                               {
                                   "title": "净水器",
                                   "pic": "assets/images/categroy-img/chu1.jpg"
                               },
                               {
                                   "title": "电饭煲",
                                   "pic": "assets/images/categroy-img/chu2.jpg"
                               },
                               {
                                   "title": "烟机灶具",
                                   "pic": "assets/images/categroy-img/chu3.png"
                               },
                               {
                                   "title": "电磁炉",
                                   "pic": "assets/images/categroy-img/chu4.jpg"
                               },
                               {
                                   "title": "电压力锅",
                                   "pic": "assets/images/categroy-img/chu3.png"
                               },
                               {
                                   "title": "微波炉",
                                   "pic": "assets/images/categroy-img/chu5.jpg"
                               },
                               {
                                   "title": "电烤箱",
                                   "pic": "assets/images/categroy-img/chu6.jpg"
                               },
                               {
                                   "title": "料理机",
                                   "pic": "assets/images/categroy-img/chu7.jpg"
                               },

                           ]
                       }
                   ]
               }
            ]}
        
              }
        },
        // created() {
        //     this._initPageData()
        // },
        methods: {
            /**
             * 页面的数据加载
             **/
            // async _initPageData () {
            //     let data = await categoryApi.getCategoryInfo()
            //     this.categoryInfo = data.goodlist
            // },
            dataScroll: function () {
                    this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            },
            jump(index) {
                let jump = document.getElementsByClassName('catg-item-main');
                // 获取需要滚动的距
                let total = jump[index].offsetTop - 50;
                jump[index].style.color="#fb7d34!important";
                jump[index].style.fontSize='0.177rem!important' ;
                $('html, body').animate({
                'scrollTop': total
                }, 400);
            },
            loadSroll: function () {
                var $navs = $(".catg-list-nav-cur");
                var sections = document.getElementsByClassName('catg-item-main');
                for (var i = sections.length - 1; i >= 0; i--) {
                    if (this.scroll >= sections[i].offsetTop-100) {
                        $navs.eq(i).addClass("catgCurrent").siblings().removeClass("catgCurrent")
                        break;
                    }
                }
            }
        },
        watch: {
            scroll: function () {
                this.loadSroll()
            }
        },
        mounted() {
            window.addEventListener('scroll', this.dataScroll);
        }
    }

</script>

<style scoped>
    /* @import "../../node_modules/swiper/css/swiper.css"; */
    .catg-nav {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        align-items: center;
        height: 50px;
        background: #f2f2f2;
        color: #666;
        display: flex;
        width:3.75rem;
        font-size: 0.16rem;
    }
    .catg-back {
        display: inline-block;
        width: .31rem;
        margin: 0 .1rem;
        height: 0.26rem;

    }
    .catg-back span{
        display: inline-block;
        width: 0.26rem;
        height: 0.26rem;
        background-color: #fb7d34;
        /* background: url("../assets/images/home-img/catg-back.png") no-repeat;
        background-size: contain; */
    }
    .catg-nav-title {
        width: 72%;
    }
    .catg-nav-operation {
        display: block;
        width: .32rem;
        height: .32rem;
        /* background: url(../assets/images/home-img/search.png) no-repeat;
        right: .1rem;
        background-size: contain; */
        background-color: aqua;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
    }
    .catg-list-box{
        position: relative;
        max-width: 7.2rem;
        margin: 0 auto;
    }
    .catg-list-con{
        padding-top: 50px;
        padding-bottom: 52px;
        background: #fff;
        color: #3c3c3c;
    }
    .catg-list-left {
        position: fixed;
        top: 50px;
        bottom: 52px;
        left: 0;
        width: 0.78rem;
        border-right: 1px solid #efefef;
        overflow: hidden;
        height: calc(100vh - 0.76rem);
        overflow-y: auto;
        z-index: 50;
        -webkit-overflow-scrolling: touch;
    }
    .catg-list-left::-webkit-scrollbar{      display:none    }
    .catg-list-left ul li {
        position: relative;
        font-size: .14rem;
        height: .47rem;
        line-height: .47rem;
        text-align: center;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .catg-list-left ul li span{
        display: block;
        height: .47rem;
        overflow: hidden;
        color:#3c3c3c;
    }
    .catg-list-right{
        padding-left: 0.958rem;
        padding-right: .166rem;
    }
    .catg-right-item{
        overflow-y: auto;
    }
    .catg-item-pic, .catg-item-pic img{
        height: 1.05rem;
        width: 2.6rem;
    }
    .category_title {
        background: #fff;
        font-size: .145rem;
        text-align: center;
        font-weight: 400;
        margin-top: .1rem;
        height: 0.666rem;
        line-height: 0.666rem;
        overflow: hidden;
    }
    .category_title span{
        position: relative;
    }
    .category_title span:after, .category_title span:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.208rem;
        border-top: 1px solid #e0e0e0;
        transform: translate3d(-150%,-50%,0);
    }
    .category_title span:after {
        left: auto;
        right: 0!important;
        transform: translate3d(150%,-50%,0) !important;
    }
    .category_group{
        background: #fff;
        margin: -.03rem 0 0;
    }
    .category_group_box {
        width: 100%;
        overflow: hidden;
        display: flex;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
    }
    .category_group_product{
        float: left;
        width: 33.333333333333336%;
        text-align: center;
        margin-top: .1rem;
        margin-bottom: .156rem;
        overflow: hidden;
        display: block;

    }
    .category_group_product a {
        display: inline-block;
        width: 100%;
    }
    .category_group_product .img{
        width: 0.52rem;
        height: 0.52rem;
        margin: 0 auto;
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .category_group_product img{
        width: 0.52rem;
        height: 0.52rem;
    }
    .category_group_product .name {
        margin-top: .145rem;
        white-space: nowrap;
        font-size: .12rem;
        color: rgba(0,0,0,.54);
    }
    .catg-list-right{
        box-sizing: border-box;
        overflow: hidden;
        /*height: calc(100vh - 0.76rem);*/
        /*overflow-y: auto;*/
        /*z-index: 50;*/
        /*-webkit-overflow-scrolling: touch;*/
    }
    .catg-item-main{
        position: relative;
    }
    .catgCurrent span{
        color: #fb7d34!important;
        font-size: 0.177rem!important;
        transform: scale(1);
        transition: transform .1s linear;
    }
    .cate-empty{
        height: 2rem;
    }
</style>
