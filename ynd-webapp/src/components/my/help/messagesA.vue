<template>
    <div class="messagesA">
        <div class="top">
            <div class="box">
                <img src="../../../assets/my/left_go.png" @click="back"/>
                <img src="../../../assets/my/kefu.png"/>
                <p>优农哆客服</p>
                <span>官方</span>
            </div>
            <img src="../../../assets/my/phone.png">
        </div>
        <div class="bottom">
            <img src="../../../assets/my/voice.png">
            <input type="text" placeholder="请输入文字">
            <img src="../../../assets/my/more.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "messagesA",
    methods:{
        back(){
            this.$router.push({path:'/my'})
        }
    }
}
</script>

<style scoped>
    .top{
        background-color: #F2F2F2;
        display: flex;
        justify-content: space-between;
        height: 0.3rem;
        padding: 0.06rem 0.14rem;
    }
    .box{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
    .top img{
        width: 0.25rem;
        height: 0.25rem;
        margin: auto 0;
    }
    .box span{
        font-size: 0.12rem;
        border: 1px solid #787878;
        border-radius: 0.08rem;
        padding: 0 0.03rem;
        margin-left: 0.08rem;
    }
    .box p{
        margin-left: 0.08rem;
    }
    .bottom{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        background-color: #F2F2F2;
        padding: 0.1rem 0;
    }
    .bottom input{
        width: 70%;
        outline: none;
        border: 1px solid #000000;
        padding-left: 0.1rem;
    }
</style>