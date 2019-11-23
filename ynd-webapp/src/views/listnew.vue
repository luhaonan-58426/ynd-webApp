<template>
    <div>
        <newtop/>
        <newtitle/>
        <newcont/>

    </div>
</template>

<script>
    import newtop from "../components/new/newtop";
    import newcont from "../components/new/newcont";
    import newtitle from "../components/new/newtitle";
    export default {
        name: "new",
    components:{
        newtop,
        newcont,
        newtitle
    }
    }
</script>

<style scoped>

</style>