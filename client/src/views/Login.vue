<template>
    <div class="login">
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-cuo" @click="$router.go(-1)"></i>
            </template>
        </Header>

        <div class="head">
            欢迎来到星享俱乐部
        </div>

        <div class="main">
            <div class="user">
                <input type="text" placeholder="手机号码" v-model="user">
            </div>
            <div class="psw">
                <input type="text" placeholder="密码" v-model="psw">
            </div>

            <div class="btn-box">
                <button class="btn" @click="loginFn">登录/注册</button>
            </div>
        </div>
    </div>
</template>
<script>

const Header = ()=>import('../components/Header')
import request from '../request'

export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            user:'',
            psw:''
        }
    },
    computed:{

    },
    methods:{
        loginFn(){
            if(this.user !=='' && this.psw !==''){
                request.post('/api/login',{
                    phone:this.user,
                    password:this.psw
                }).then(res=>{
                    if(res.data.code===1){
                        this.$alert(res.data.message);
                        window.localStorage.setItem('token',res.data.token);
                        this.$router.go(-1);
                    }
                }).catch((error)=>{
                    this.$alert(error.response.data.message)
                })
            }
            else{
                this.$alert('不能为空')
            }
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';
.login{
    width: 100%;
    height: 100%;

    .head{
        width: 100%;
        height: pxTorem(70px);
        font-size: pxTorem(32px);
        box-shadow: 0px 20px 70px -50px;
        display: flex;
        align-items: center;
        padding-bottom: pxTorem(15px);
        padding-left: pxTorem(20px);
        font-weight: bolder;
    }

    .main{
        padding: pxTorem(0px) pxTorem(20px);
        padding-top:pxTorem(20px);

        >div{
            input{
                width: 100%;
                height: 100%;
                font-size: pxTorem(16px);
            }
        }

        .user{
            width: 100%;
            height: pxTorem(50px);
            border-bottom: 1px solid #ccc;
        }
        
        .psw{
            width: 100%;
            height: pxTorem(50px);
            border-bottom: 1px solid #ccc;
        }

        .btn-box{
            width: 100%;
            height: pxTorem(43px);
            margin-top: pxTorem(60px);

            .btn{
                width: 100%;
                height: 100%;
                border-radius: pxTorem(30px);
                outline: none;
                border: 0;
                font-size: pxTorem(19px);
                color: white;
                background: #ccc;
            }
        }
    }
}
</style>