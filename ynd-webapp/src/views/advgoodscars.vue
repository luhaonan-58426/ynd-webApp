<template>
  <div>
   <jx-cart-header></jx-cart-header>
   
  <div class="shopping">
    <div v-if="msg.shops">
    <jx-cart-shop @xuan="shopSelect" @Allxuan="Yxuan" :data="data" :sid="sid" :key="sid"  v-for="(data,sid) in msg.shops" ></jx-cart-shop>
    </div>
  </div>
   
   <jx-cart-footer @cAll="checkAll" :data="msg"></jx-cart-footer>
    <footerbar></footerbar>
  </div>
</template>

<script>
// import shopApi from '../shopapi/carapi'
import footerbar from '../components/common/footerbar/footbar'
import myheader from './head'
import myfooter from './footer'
import myshop from './shop'
export default {
  name: 'advgoodsscars',
  data () {
    return {
      shopSelectYesNo: true,
      msg: [
         {"user":{"no":1},
         "shops":[{"checked":true,"degree":1,"shopName":"华为店铺","totalPrice":0,"products":[{"checked":true,"title":"华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+128GB天空之境全网通双4G手机","price":3000,"num":1,"attrs":{"weight":100,"color":"black","version":"1.0"},"pic":"https://m.360buyimg.com/babel/s333x333_jfs/t1/23126/19/13168/517409/5c9c65ecE1ece7d3e/a9a140f21b283d4d.png"},{"checked":true,"title":"华为 HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 极光色 全网通移动联通电信4G手机 双卡双待","price":3988,"num":1,"attrs":{"weight":100,"color":"black","version":"1.0"},"pic":"https://m.360buyimg.com/babel/s333x333_jfs/t21442/289/1241148405/601692/a6791100/5b239e5eN6414d33b.png"}]},{"checked":true,"degree":1,"shopName":"京东自营店铺","totalPrice":0,"products":[{"checked":true,"title":"Champion冠军 男装 纯棉彩色刺绣草写LOGO短袖T恤 男女同款 C3-H371-03 白色 M","price":210,"num":1,"attrs":{"weight":100,"color":"black","version":"1.0"},"pic":"https://m.360buyimg.com/babel/s333x333_jfs/t1/34452/4/8675/227146/5ccd2231Eb49170a3/256aa37418e1be50.png"},{"checked":true,"title":"Columbia哥伦比亚户外19春夏男款奥米吸湿短袖POLO衫PM3722 100 S","price":269,"num":1,"attrs":{"weight":100,"color":"black","version":"1.0"},"pic":"https://img14.360buyimg.com/n1/s360x360_jfs/t1/75937/34/553/144012/5ced06c9E5f06786c/4b22c07eead7d9c7.jpg.webp"}]}],"totalPrice":0,"checked":true
         }
      ]
    }
  },
  components:{
    'jx-cart-header':myheader,
    'jx-cart-footer':myfooter,
    'jx-cart-shop':myshop,
    footerbar
  },
  props:["data","sid"],
  methods:{
    //活动安排
    _initfilters(){
          let total =0 
            if(this.msg.shops){
                 this.msg.shops.forEach(function(shop,sid){
                 shop.products.forEach(function(product,pid){
                     if(product.checked){
                       total += (product.price * product.num )
                     }
                 })
            })
            }
            
            return total
    },
    //商品操控商店是否被选中
    Yxuan(sid){
      let igeclect = this.msg.shops[sid].products.every(function(product,pid,arr){
        return product.checked == true
      })
      this.msg.shops[sid].checked = igeclect;

      let waiT =this.msg.shops.every(function(shop,sid,arr){
        return shop.checked == true
      })
      this.msg.checked = waiT

      
     
      //console.log(sid)
                // let checked = this.msg.shops[sid].products.every((product, ppid, nArr) => {
                //     return product.checked == true
                // })

                // this.msg.shops[sid].checked = checked;

                // let schecked = this.msg.shops.every((shop,ssid,nArr)=>{
                //     console.log(shop.checked)
                //     return shop.checked == true
                // })


                // this.msg.checked = schecked
             
      //    })
      //       //shop[sid].checked =shopSelectYesNo
      //  })
       
      //  let BigShop = 0;
      //  this
    },
    shopSelect(sid){
      console.log(sid);
      let checked = this.msg.shops[sid].checked;
      console.log(checked);
      this.msg.shops[sid].products.forEach(function(product,pid){
        console.log(pid);
        product.checked = checked;
      })
      
    },
     _initPageData(){
      let sss= shopApi
      this.msg =sss
      // let data = await shopApi.getShopInfo()
      
      //   this.msg = data
      //  console.log(data)
      console.log(sss)
    },
    checkAll(){
          let seclected=this.msg.checked;
          this.msg.shops.forEach(function(shop,sid){
            shop.checked=seclected;
            shop.products.forEach(function(product,pid){
              product.checked=seclected;
            })
          })

    },
    AddNum(pid,sid,flag){
      console.log(pid,sid,flag);
      if(flag){
        this.msg.shops[sid].products[pid].num++
      }else{
        if(this.msg.shops[sid].products[pid].num>1){
         this.msg.shops[sid].products[pid].num--
        }else{
          this.msg.shops[sid].products[pid].num==1
        }
        
      }
      
    }
  },
  watch:{
      msg:{
        handler:function(n,o){
            let total=this._initfilters();
            console.log(total);
            if(total>8000 && this.shopSelectYesNo== true){
                 console.log("满8000减100");
                 this.shopSelectYesNo = false

            }
        },
        deep:true
      }
  },
  // created(){
  //   this._initPageData()
  // },
  mounted(){
    this.$event.$on("add",this.AddNum)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>