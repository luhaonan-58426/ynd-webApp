import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import My from '../views/my'
import Community from '../views/community'
import Publish from '../views/publish'
import indexSearch from '../views/home_search.vue'
import Top_page from '../views/top/top_page.vue'
import cate from '../views/content.vue'
import index from '../views/home_index.vue'
import addAds from '../views/addAds.vue'
import editAds from '../views/editAddress.vue'
import address from '../views/address.vue'
import goodsInfo from '../views/info_product.vue'
import Top_aspx from '../views/top/top_aspx'
import topZonghe from '../views/top/topzonghe'
import topZuixin from '../views/top/topzuixin'
import topFujin from '../views/top/topfujin'
import topZuigao from '../views/top/topzuigao'
import topZuidi from '../views/top/topzuidi'

import CateHall from '../views/cateHall/cateHall'
import CateGatherCheap from '../views/cateGatherCheap/cateGatherCheap.vue'
import CateStrict from '../views/cateStrict/cateStrict'
import CateRecently from '../views/cateRecently/cateRecently'
import CateNearby from '../views/cateNearby/cateNearby'
import listnew from '../views/listnew'


import advhome from '../views/advhome'
import advhometo1 from '../views/advhometo1'
import advhometo2 from '../views/advhometo2'
import advhometo3 from '../views/advhometo3'
import advhometo4 from '../views/advhometo4'
import advgoodsshow from '../views/advgoodsshow'
import advgoodscars from '../views/advgoodscars'
import advlogin from '../views/advlogin'
import advmymes from '../views/advmymes'


import Order from "../views/myorder/order"
import Management from '../views/myorder/management'
import Refund from "../views/myorder/refund";
import Search from "../views/myorder/search";
import Allorder from "../components/order/allorder";
import Abligation from "../components/order/obligation";
import Pending from "../components/order/pending";
import AwaitReceive from "../components/order/awaitReceive";



Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    // {
    //   name: 'top_page',
    //   path: '/top_page',
    //   component: Top_page
    // },
    {
      name: 'top_aspx',
      path: '/top_aspx',
      component: Top_aspx,
      children: [
        { name: "topZonghe", path: "topzonghe", component: topZonghe },
        { name: "topFujin", path: "topFujin", component: topFujin },
        { name: "topZuixin", path: "topZuixin", component: topZuixin },
        { name: "topZuigao", path: "topZuigao", component: topZuigao },
        { name: "topZuidi", path: "topZuidi", component: topZuidi },
      ]
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        { path: '/home', redirect: "index" },
        { path: 'index', name: "index", component: index },
        { path: 'top_page', name: "top_page", component: Top_page },
        { path: 'cate', name: "cate", component: cate },

      ]
    },
    {
      name: 'search',
      path: '/search',
      component: indexSearch,
    },
    {
      name: 'listnew',
      path: '/listnew',
      component: listnew,
    },
    {
      name: 'address',
      path: '/address',
      component: address,
    },
    {
      name: 'editAds',
      path: '/editAds',
      component: editAds,
    },
    {
      name: 'addAds',
      path: '/addAdr',
      component: addAds,
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/goodsInfo',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/carouselPage0',
      name: 'CarouselPage0',
      // component: CarouselPage0,
      meta: { keepAlive: true },
      component: () => import('../views/bannerpages/bannerPage0.vue')
    },
    {
      path: '/carouselPage1',
      name: 'CarouselPage1',
      // component: CarouselPage1,
      meta: { keepAlive: true },
      component: () => import('../views/bannerpages/bannerPage1')
    },
    {
      path: '/carouselPage2',
      name: 'CarouselPage2',
      // component: CarouselPage2,
      meta: { keepAlive: true },
      component: () => import('../views/bannerpages/bannerPage2')
    },
    {
      path: '/carouselPage3',
      name: 'CarouselPage3',
      // component: CarouselPage3,
      meta: { keepAlive: true },
      component: () => import('../views/bannerpages/bannerPage3')
    },
    {
      path: '/carouselPage4',
      name: 'CarouselPage4',
      // component: CarouselPage4,
      meta: { keepAlive: true },
      component: () => import('../views/bannerpages/bannerPage4')
    },
    {
      path: '/mess',
      name: 'Mess',
      // component: Mess,
      meta: { keepAlive: true },
      component: () => import('../components/my/help/messagesA')
    },
    {
      path: '/quest',
      name: 'Quest',
      // component: Quest,
      meta: { keepAlive: true },
      component: () => import('../components/my/help/question')
    },
    {
      name: 'catehall',
      path: '/catehall',
      component: CateHall
    },
    {
      name: 'cateGatherCheap',
      path: '/cateGatherCheap',
      component: CateGatherCheap
    },
    {
      name: 'cateStrict',
      path: '/cateStrict',
      component: CateStrict
    },
    {
      name: 'cateRecently',
      path: '/cateRecently',
      component: CateRecently
    },
    {
      name: 'cateNearby',
      path: '/cateNearby',
      component: CateNearby
    },
    {
      path: '/cateBrand',
      name: 'CateBrand',
      component: () => import('../views/cateBrand/cateBrand')
    },
    {
      path: '/cateInformation',
      name: 'CateInformation',
      component: () => import('../views/cateInformation/cateInformation')
      // component: CateInformation

    },
    {
      path: '/cateInformationDetail',
      name: 'CateInformationDetail',
      component: () => import('../views/cateInformationDetail/cateInformationDetail')
    },
    {
      path: '/cateMaretQuotations',
      name: 'CateMaretQuotations',
      component: () => import('../views/cateMaretQuotations/cateMaretQuotations')
    },
    // {
    //   path: '/cateMaretQuotations',
    //   name: 'CateMaretQuotations',
    //   component:()=>import('../views/cateMaretQuotations/cateMaretQuotations')
    // },
    {
      path: '/cateHotSale',
      name: 'CateHotSale',
      component: () => import('../views/cateHotSale/cateHotSale')
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('../views/access')
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('../views/money')
    },
    {
      name: 'advhome',
      path: '/advhome',
      component: advhome
    },
    {
      name: 'advmymes',
      path: '/advmymes',
      component: advmymes
    },
    {
      name: 'advgoodsshow',
      path: '/advgoodsshow',
      component: advgoodsshow
    },
    {
      name: 'advlogin',
      path: '/advlogin',
      component: advlogin
    },
    // {
    //   name: 'advhometo8',
    //   path: '/advhometo8',
    //   component: advhometo8
    // },
    {
      name: 'advgoodscars',
      path: '/advgoodscars',
      component: advgoodscars
    },
    {
      path: '/advhometo1',
      name: 'advhometo1',
      component: advhometo1
    },
    {
      path: '/advhometo2',
      name: 'advhometo2',
      component: advhometo2
    },
    {
      path: '/advhometo3',
      name: 'advhometo3',
      component: advhometo3
    },
    {
      path: '/advhometo4',
      name: 'advhometo4',
      component: advhometo4
    },
    {
      path: '/order',
      name: 'Order',
      redirect: "/order/allorder",
      component: Order,
      children: [
        {
          path: '/order/allorder',
          name: 'Allorder',
          component: Allorder,
        },
        {
          path: '/order/abligation',
          name: 'Abligation',
          component: Abligation,
        },
        {
          path: '/order/pending',
          name: 'Pending',
          component: Pending,
        },
        {
          path: '/order/awaitReceive',
          name: 'AwaitReceive',
          component: AwaitReceive,
        }
      ]
    },
    {
      path: '/order/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/order/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      redirect: "/home"
    }
  ]
})
export default router

