<template>
    <div class="informContent" >
        <div class="information-classify">
            <p :class="{active:i===isActive}" @click="fun(i)" v-for="(m,i) in img" :key="i" >
                <img :src="m" alt="">
            </p>
        </div>
        <informationContent-all v-show="isActive===0"></informationContent-all>
        <informationContent-laingYou  v-show="isActive===0"></informationContent-laingYou>
        <informationContent-nongZi  v-show="isActive===1"></informationContent-nongZi>
        <informationContent-miaoMu  v-show="isActive===2"></informationContent-miaoMu>
        <informationContent-nongFu  v-show="isActive===3"></informationContent-nongFu>
        <informationContent-xuMu  v-show="isActive===4"></informationContent-xuMu>
        <informationContent-shuiGuo  v-show="isActive===5"></informationContent-shuiGuo>

    </div>

</template>

<script>
    import all from './informationContent/all'
    import liangYou from './informationContent/liangYou'
    import nongZi from './informationContent/nongZi'
    import miaoMu from './informationContent/miaoMu'
    import nongFu from './informationContent/nongFu'
    import xuMu from './informationContent/xuMu'
    import shuiGuo from './informationContent/shuiGuo'
    export default {
        name: "informContent",
         data(){
            return{
                isActive: 0,
                img:[
                    'http://39.107.139.165/cateInformation/粮油米面.gif',
                    'http://39.107.139.165/cateInformation/农资农机.gif',
                    'http://39.107.139.165/cateInformation/苗木花草.gif',
                    'http://39.107.139.165/cateInformation/农副加工.gif',
                    'http://39.107.139.165/cateInformation/畜牧水产.gif',
                    'http://39.107.139.165/cateInformation/水果蔬菜.gif'

                ]
             }
         },
        components:{
            'informationContent-all':all,
            'informationContent-laingYou':liangYou,
            'informationContent-nongZi':nongZi,
            'informationContent-miaoMu':miaoMu,
            'informationContent-nongFu':nongFu,
            'informationContent-xuMu':xuMu,
            'informationContent-shuiGuo':shuiGuo

        },
        methods: {

            fun (i) {
                this.isActive = i

            },
            // go(){
            //     this.$router.push('./cateInformationDetail')
            // }

        }
    }



</script>

<style scoped>
    .information-classify{
        width: 100%;
        /*height: 0.9rem;*/
        text-align: center;
        display: flex;
        overflow-x: auto;

    }
    .information-classify p{
        margin: auto;
        flex-shrink: 0;
        padding:0.1rem 0.1rem;
    }
    .information-classify p img{
        width: 1rem;
    }
    /*.all>p{*/
    /*    width: 90%;*/
    /*    padding-left: 0.1rem;*/
    /*    border-left: 0.02rem solid olivedrab;*/
    /*    margin: auto;*/

    /*}*/
    /*.information-list li{*/
    /*    width: 90%;*/
    /*    height:1.7rem;*/
    /*    margin: 0 auto;*/
    /*    position: relative;*/
    /*    border-bottom: 0.01rem solid gray;*/
    /*    padding-top: 0.1rem;*/
    /*}*/
    /*.information-list li img{*/
    /*    width: 1.05rem;*/
    /*    height: 0.88rem;*/
    /*    float: left;*/
    /*    padding-right: 0.05rem;*/
    /*}*/
    /*.information-list li span{*/
    /*    color: gray;*/
    /*    font-size: 0.12rem;*/
    /*    display: inline-block;*/
    /*    padding-top: 0.1rem;*/
    /*}*/
    /*.information-list li span:last-child{*/
    /*    position: absolute;*/
    /*    right: 0rem;*/
    /*    top: 1.42rem;*/
    /*}*/

</style>