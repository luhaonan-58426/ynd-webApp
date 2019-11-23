<template>
    <ul><div v-if="data">
        <jx-shop-product @Allxuan="Allxuan(sid,pid)" :key="pid" v-for="(object,pid) in data" :data="object" :sid="sid" :pid="pid"></jx-shop-product>
        </div>
    </ul>
</template>
<script>
import item from './product-item'
export default {
    name: 'list',
    components:{
        'jx-shop-product':item
    },
    props:["data","sid","pid"],
    methods:{
       Allxuan(sid,pid){
           this.$emit("Allxuan",sid,pid)
       }
    }
}
</scripte>
<style scoped>

</style>