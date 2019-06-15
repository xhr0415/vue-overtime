<template>
    <div class="details">
        <!-- 头部 -->
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="$router.go(-1)"></i>
            </template>
            <template v-slot:center>
                {{type==='overtime'?'办公室加班申请':'办公室休假申请'}}
            </template>
        </Header>

        <!-- 内容 -->
        <div class="main">
            <!-- 个人信息 -->
            <div class="personDetails">
                <div class="headimg">
                    <span>
                        <img :src="data.avatar" />
                    </span>
                </div>
                <div class="contentbox">
                    <div class="content">
                        <div class="left">申请人姓名</div>
                        <div class="right">{{data.nickname}}</div>
                    </div>
                    <div class="content">
                        <div class="left">直接主管</div>
                        <div class="right">秦义超</div>
                    </div>
                    <div class="content">
                        <div class="left">申请单号</div>
                        <div class="right">{{data.applicationNumber}}</div>
                    </div>
                    <div class="content">
                        <div class="left">发起时间</div>
                        <div class="right">{{new Date(data.startTime).toLocaleDateString()}}</div>
                    </div>
                </div>
            </div>

            <!-- 申请信息 -->
            <div class="appInfo">
                <p class="appInfo-head">申请信息</p>
                <div class="list">
                    <div class="left">加班日期<i>*</i></div>
                    <div class="right">{{new Date(data.startTime).toLocaleDateString()}}</div>
                </div>
                <div class="list">
                    <div class="left">加班类型</div>
                    <div class="right">{{data.describes}}</div>
                </div>
                <div class="list">
                    <div class="left">加班起始时间<i>*</i></div>
                    <div class="right">{{new Date(data.startTime).toLocaleTimeString()}}</div>
                </div>
                <div class="list">
                    <div class="left">加班截止时间<i>*</i></div>
                    <div class="right">{{new Date(data.endTime).toLocaleTimeString()}}</div>
                </div>
                <div class="list">
                    <div class="left">共计时数</div>
                    <div class="right">2.5</div>
                </div>
            </div>

            <!-- 加班事由 -->
            <div class="reason">
                <p class="appInfo-head">加班事由</p>
                <div class="reason-content">{{data.describes}}</div>
            </div>

            <!-- 附件 -->
            <div class="accessory">
                <p class="appInfo-head"><i class="iconfont icon-renren1"></i>附件</p>
                <div class="accessory-content" v-if="data.annex">
                    <img :src="'http://localhost:3000' + item" v-for="(item,index) in data.annex" :key="index" />
                </div>
            </div>
        </div>

        <!-- 尾部 -->
        <div class="footer">
            <div class="left">审批历史</div>
            <div class="center" @click="$router.go(-1)">退回</div>
            <div class="right">同意</div>
        </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex'
import api from '../api/index'


export default {
    props:[],
    components:{

    },
    data(){
        return {
            type:'',
            id:'',
            data:{}
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['islogin'])
    },
    created(){
        //判断是否登录
        this.islogin();

        this.type = this.$route.params.type;
        this.id = this.$route.params.id;
        api.getDetails(this.type,this.id).then(res=>{
            this.data = res.data.data;
            console.log(this.data);
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';
@import '../../static/scss/details/details.scss';

.details{
    width: 100%;
    height: 100%;

    .main{
        background: #eee;
    }

    .footer{
        width: 100%;
        height: pxTorem(40px);
        border-top: 1px solid #ccc;
        display: flex;

        >div{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .left{
            flex: 2;
            color: #bbb;
            font-size: pxTorem(10px);
        }

        .center{
            flex: 4;
            color: white;
            background: #404A53;
        }

        .right{
            flex: 4;
            color: white;
            background: #0B6242; 
        }
    }
}
</style>