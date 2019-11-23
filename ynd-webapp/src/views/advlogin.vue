<template>
    <div>
  <div class="toptitle">
      <router-link to="advhome" tag="div" class="back"></router-link>
      <p class="toptitle-p">登录</p>
  </div>
    <div class="body">

        
            <!-- 登录框全部内容 -->
            <div class="login">


        <div class="loginuse1">
            <!-- <label for="username">用户名:</label> -->
        <input type="text" v-model="name" class="input1" placeholder="请输入手机号"></div>

        <div class="loginuse2">
        <!-- <label for="pwd">密码:</label> -->
        <input type="text" v-model="pwd" class="input" placeholder="请输入密码或者验证码"></div>

        <div class="positionyan" @click.prevent="loginyan">发送验证码</div>

        <p @click.prevent="login" class="logingoon">确定</p>
        <p class="xieyip">点击上述按钮，代表同意优农网用户协议</p>

        </div>
        

        <!-- 登录框下边的信息说明 -->
        <div><h1>{{msg}}</h1></div>


    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'',
            pwd:'',
            msg:'',//接收数据
            adds:'西安'
            

        }
    },
    methods:{
        login(){
            // fetch('http://39.98.112.201:8888/user/login/', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         name: '李佳豪',
            //         pwd: '123456'
            //     })
            // }).then(resp=>resp.json()).then(data=>{
            //     console.log(data);
            //     this.msg = result.data.msg;
            //     // $('ret').innerHTML = "<h5>"+data.msg+"</h5><h6>"+data.token+"</h6>"
            // })
            this.$axios.post(this.HOST+'user/login/',{name:this.name,pwd:this.pwd})
            .then(result=>{
                console.log(result.data)
                this.msg = result.data.msg
            })
            .catch(err=>{
                console.log(err)
            })
        },
    
        loginyan(){
           
    //需要处理异步请求的问题
    this.$axios.get(this.HOST+'banner/activate/'+'?banner_id=1')
        .then(function (response) {
            //将response获得的数据进行处理
            var data=response.data;
          console.log(data);    //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })


            // this.$axios.post(this.HOST+'user/login/',{name:this.name,pwd:this.pwd})
            // .then(result=>{
            //     console.log(result.data)
            //     this.msg = result.data.msg
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
    }
    // exports.login = (req,res)=>{
    // let username = req.body.username
    // let pwd = req.body.password
    // // 查询语句
    // let sql = 'select * from user where username = ?'
    // db.base(sql,username,(result)=>{
    //     if(!result.length){
    //         return res.json({ status: 1, msg: '登录失败' })
    //     }else{
    //         // [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
    //         if(result[0].password==pwd){
    //             return res.json({ status: 1, msg: '登录成功' })
    //         }
    //         return res.json({ status: 1, msg: '密码错误' })
    //     }
    // })

}
}
</script>
<style scoped>
.body{
  width: 100%;
  height: 6.07rem;
  border-right: .1rem solid white;
  border-left: .1rem solid white;
  box-sizing: border-box;
  background-color: white;
}
.login{
    width: 100%;
    height:2.4rem;
    /* background-color: lightgrey; */
    box-sizing: border-box;
   position: relative;
}
.xieyip{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
}
.positionyan{
    width: 1rem;
    height: .4rem;
    border: .01rem solid lightgrey;
    font-size: .16rem;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    top:.27rem;
    right:.14rem; 
    border-radius: .08rem;
}
.loginuse1{
    width: 100%;
    height: .8rem;
    text-indent: .2rem;
   border-bottom: .01rem solid rgb(202, 199, 199);
}
.loginuse2{
    width: 100%;
    height: .6rem;
    text-indent: .2rem;
    margin-top: .1rem;
    border-bottom: .01rem solid rgb(202, 199, 199);
}
.input{
    margin-top: .04rem;
    border: none;
    outline: none;
    height: .5rem;
    font-size: .18rem;
    font-weight: normal;
}
.input1{
    margin-top: .24rem;
    border: none;
    outline: none;
    height: .5rem;
    font-size: .18rem;
    font-weight: normal;
}
.logingoon{
    width: 100%;
    height: .5rem;
    background-color: rgb(134, 131, 131);
    color: white;
    text-align: center;
    line-height: .5rem;
    font-size: .2rem;
    font-weight: 500;
    border-radius: .1rem;
    margin-top: .3rem;
}
.p{
  width: 100%;
  color:red;
  font-weight: 600;
  /* text-align: center; */
  text-indent: 2.5rem;
  font-size: .2rem;
  padding-top: 5.5rem;
}
.toptitle{
  width: 100%;
  height: .6rem;
  position: relative;
  border-bottom: .01rem solid rgb(202, 199, 199);
   
}
.toptitle-p{
 z-index: 1;
  width: 100%;
  height: .6rem;
  text-align: center;
  font-weight: 600;
  font-size: .2rem;
  line-height: .6rem;
  color: rgb(11, 49, 14);
}
.back{
  position: absolute;
  top: .2rem;
  left:.15rem;
  z-index: 5;
  width: .2rem;
  height: .3rem;
  display: block;
  background-image: url("../assets/back2.png");
  background-repeat: no-repeat;
  background-size: contain;  
}
</style>