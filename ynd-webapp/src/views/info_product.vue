<template>
    <div class="product">
    <producttop/>
    <productcont2/>
     <productcont3/>
     <productpay/>
    </div>
</template>

<script>
    import producttop from '../components/product/producttop'
    import productcont2 from "../components/product/productcont2";
    import productcont3 from "../components/product/productcont3";
    import productpay from "../components/product/productpay";
    export default {
        name: "product",
        components:{
            producttop,
            productcont2,
            productcont3,
            productpay
        },
        mounted () {
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
}
    }

</script>

<style scoped>
 body{
     background-color: white;
 }
</style>