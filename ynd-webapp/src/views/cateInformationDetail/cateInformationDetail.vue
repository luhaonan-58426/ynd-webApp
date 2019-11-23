<template>
    <div>
        <cate-informationDetail></cate-informationDetail>
    </div>
</template>

<script>
    import InformationDetail from "../../components/cateInformationDetail/InformationDetail";
    export default {
        name: "CateInformation",
        components:{
            'cate-informationDetail' :InformationDetail
        }
    }
</script>

<style scoped>

</style>