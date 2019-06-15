<template>
    <div>
        <!-- 头部 -->
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-arrow-left"></i>
            </template>
            <template v-slot:center>
                <span>加班/休息</span>
            </template>
            <template v-slot:right>
                <i class="iconfont icon-riqixuanze"></i>
                <i class="iconfont icon-fangdajing" @click="clk_search"></i>
            </template>
        </Header>

       <div class="main">
            <!-- tab切换 -->
            <div class="tab-box">
                <Tabcontent v-for="(item,index) in tabArr" :key="index"
                :title="item.title" 
                :icon="item.icon"
                :index="index"
                :ind="ind"  @change_tab="change_tab">
                </Tabcontent>
            </div>

            <div class="tab2-box">
                <div class="tab2_span_box">
                    <span class="tab2_span" v-for="(item,index) in tab2Arr" :key="index" 
                    :class="{active:ind2==index}" @click="clk_tab2(index,item.type)">
                        {{item.title}}
                    </span>
                    <div class="tab2-icon">
                        <i class="iconfont icon-zhuanhuan" @click="$router.push('/batch')"></i>
                        <i class="iconfont icon-gengduo-2" @click="$router.push('/sort')"></i>
                    </div>
                </div>
            </div>

            <!-- 数据 -->
            <List v-for="(item,index) in data" :key="index" :item="item" :listType="tabArr[ind]"></List>

            <!-- 发起任务按钮 -->
            <div class="task" @click="clk_task">
                + 发起任务
            </div>

            <!-- 遮罩 -->
            <div class="add_task" v-if="task_flag" @click="clk_add_task">
                <div class="task_content" @click.stop>
                    <div class="left" @click="$router.push({
                        name:'addtask',
                        params:{
                            type:'overtime'
                        }
                    })">
                        <div><i class="iconfont icon-gongzuojilu" style="color:orange"></i></div>
                        <div>加班</div>
                    </div>
                    
                    <div class="right" @click="$router.push({
                        name:'addtask',
                        params:{
                            type:'vacation'
                        }
                    })">
                        <div><i class="iconfont icon-fengjing" style="color:limegreen"></i></div>
                        <div>休假</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const Tabcontent = ()=>import('../components/Tab_content')
const List = ()=>import('../components/List')
import request from '../request'
import {mapState,mapMutations,mapActions} from 'vuex'
import api from '../api/index'

export default {
    props:{

    },
    components:{
        Tabcontent,
        List
    },
    data(){
        return {
            tabArr:[
                {
                    'title':'待处理',
                    'icon':'iconfont icon-naozhong'
                },
                {
                    'title':'已发起',
                    'icon':'iconfont icon-07'
                },
                {
                    'title':'已处理',
                    'icon':'iconfont icon-baocun'
                }
            ],
            ind:0,
            ind2:0,
            tab2Arr:[
                {
                    'title':'加班',
                    'type':'overtime'
                },
                {
                    'title':'休假',
                    'type':'vacation'
                }
            ],
            data:[
                {
                    'state':"待确认",
                    'person':'ZhangSan',
                    'type':'工作日加班',
                    'date':'2019-02-02',
                    'hours':'2.5',
                    'id':0,
                    'ser':'OT2019021222'
                },
                {
                    'state':"已召回",
                    'person':'ZhangSan',
                    'type':'工作日加班',
                    'date':'2019-02-02',
                    'hours':'2.5',
                    'id':1,
                    'ser':'OT2019021222'
                },
                {
                    'state':"已退回",
                    'person':'ZhangSan',
                    'type':'工作日加班',
                    'date':'2019-02-02',
                    'hours':'2.5',
                    'id':2,
                    'ser':'OT2019021222'
                },
                {
                    'state':"审批中",
                    'person':'ZhangSan',
                    'type':'工作日加班',
                    'date':'2019-02-02',
                    'hours':'2.5',
                    'id':3,
                    'ser':'OT2019021222'
                }
            ],
            task_flag:false
        }
    },
    computed:{
        
    },
    methods:{
        ...mapActions('user',['islogin']),
        ...mapMutations(['pop']),
        //第一个tab切换
        change_tab(index){
            this.ind = index;
            this.get_data();
            this.ind2 = 0;
        },
        //第二个tab切换
        clk_tab2(index,type){
            this.ind2 = index;
            this.get_data(type);
        },
        //点击发起任务
        clk_task(){
            this.task_flag = true;
        },
        //点击取消遮罩
        clk_add_task(e){
            this.task_flag = false;
        },
        //点击搜索
        clk_search(){
            this.$router.push('/search');
        },
        //请求数据
        get_data(type){
            api.getlist({
                params:{
                page:1,
                pageSize:10,
                create_at:10,
                type:type,
                status:this.ind
                }
            }).then(res=>{
                this.data = res.data.data;
            })
        }
    },
    created(){
        //判断是否登录
        this.islogin();
        this.get_data('overtime');

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';

    .main{
        background: #eee;
    }
    .tab-box{
        width: 100%;
        height: pxTorem(100px);
        box-shadow: 0px 40px 50px -60px;
        background: white;
        display: flex;
    }

    .tab2-box{
        width: 100%;
        height: pxTorem(70px);
        padding-top: pxTorem(10px);
        background: white;
        margin-top:pxTorem(1px);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

       .tab2_span_box{
           width: pxTorem(190px);
           height: pxTorem(25px);
           border: 1px solid green;
           border-radius: pxTorem(15px);
           overflow: hidden;
           display: flex;

           span{
               flex: 1;
               display: flex;
               align-items: center;
               justify-content: center;
               color: green;
           }

           .active{
               background: green;
               color: white;
           }
       }

       .tab2-icon{
           width: pxTorem(80px);
           height: pxTorem(50px);
           position: absolute;
           right: 0;
           top: pxTorem(20px);
           display: flex;

           i{
               flex: 1;
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: pxTorem(18px);
               color: #ccc;
           }
       }
    }

    .task{
        width: pxTorem(130px);
        height: pxTorem(45px);
        border-radius: pxTorem(20px);
        overflow: hidden;
        background: rgb(1, 94, 1);
        position: fixed;
        right: pxTorem(30px);
        bottom: pxTorem(30px);
        color: white;
        font-size: pxTorem(16px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add_task{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        
        .task_content{
            width: 100%;
            height: pxTorem(140px);
            background: white;
            position: absolute;
            bottom: 0;
            display: flex;

            >div{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: pxTorem(30px) pxTorem(50px);

                >div:first-child{
                    flex: 7;
                    display: flex;
                    align-items: center;

                    i{
                       font-size:  pxTorem(25px); 
                    }
                }
                >div:last-child{
                    flex: 3;
                } 
            }
        }
    }
</style>