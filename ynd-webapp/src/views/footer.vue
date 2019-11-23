<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" 
            v-model="data.checked"
            @change="AllSelect"
            class="check goods-check"/>
            全选
        </div>
        <div class="shop-total">
            <strong>
                总价：
                <i id="AllTotal" class="total">{{data | totalCount}}</i>
            </strong>
            <span>减免：100</span>
        </div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>
<script>

export default {
    name: 'myfooter',
    props:["data"],
    methods:{
       AllSelect(){
           this.$emit("cAll")
       }
    },
    filters:{
        totalCount(msg){
            let total =0 
            if(msg.shops){
                 msg.shops.forEach(function(shop,sid){
                 shop.products.forEach(function(product,pid){
                     if(product.checked){
                       total += (product.price * product.num )
                     }
                 })
            })
            }
            
            return total
        }
    }
    
}
</scripte>
<style scoped>

</style>