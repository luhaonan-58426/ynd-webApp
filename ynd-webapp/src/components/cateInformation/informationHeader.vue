<template>
    <div class="information">
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="go">
            <span>行情资讯</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "informationHeader",
        methods:{
            go(){
                this.$router.push("./home")
            }
        }
    }
</script>

<style scoped>
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
</style>