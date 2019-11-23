<template>
    <li>
        <div class="shop-info">
                        <input type="checkbox" v-model="data.checked"
                               @change="Allxuan(sid,pid)"
                               class="check goods-check goodsCheck"/>
                        <div class="shop-info-img">
                            <a href="#">
                                <img :src="data.pic"/>
                            </a>
                        </div>
                        <div class="shop-info-text">
                            <h4>{{data.title}}
                            </h4>
                            <div class="shop-brief">
                                <span>重量:3.3kg | true</span>
                                <span>颜色:标配版</span>
                                <span>版本:13.3英寸</span>
                            </div>
                            <div class="shop-price">
                                <div class="shop-pices">
                                    ￥<b class="price">{{data.price}}</b>
                                </div>
                                <div class="shop-arithmetic">
                                    <a class="minus" @click="operate(pid,sid,0)">-</a>
                                    <span class="num">{{data.num}}</span>
                                    <a class="plus" @click="operate(pid,sid,1)">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </li>
</template>
<script>

export default {
    name: 'productList',
    props:["data","sid","pid"],
    methods:{
        operate(pid,sid,flag){
            this.$event.$emit("add",pid,sid,flag)
        },
        Allxuan(sid,pid){
            this.$emit("Allxuan",sid,pid)
        }
    }
    
}
</scripte>
<style scoped>

</style>