<template>
    <div class="sort">
        <Header>
            <template v-slot:center>
                <div>排序</div>
            </template>
        </Header>

        <div class="main">
            <div class="content" v-for="(item,index) in data" :key="index">
                <div class="top">{{item.title}}</div>
                <div class="bottom">
                    <button :class="{active:inds===ind&&indexs===index}" v-for="(ele,ind) in item.children" 
                    :key="ind" @click="clk_button(index,ind)">
                        {{ele.title}}
                    </button>
                </div>
            </div>
        </div>

        <Footer>
            <template v-slot:left>
                <div class="left" @click="$router.go(-1)">返 回</div>
            </template>
            <template v-slot:right>
                <div class="right">确 认</div>
            </template>
        </Footer>
    </div>
</template>
<script>
const Header = ()=>import('../components/Header')
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{
        Header
    },
    data(){
        return {
            indexs:0,
            inds:0,
            data:[
                {
                    'title':'按发起时间排序',
                    'children':[
                        {
                            'title':'按时间倒序'
                        },
                        {
                            'title':'按时间顺序'
                        }
                    ]
                },
                {
                    'title':'按加班日期排序',
                    'children':[
                        {
                            'title':'按日期倒序'
                        },
                        {
                            'title':'按日期顺序'
                        }
                    ]
                },
                {
                    'title':'按加班时数排序',
                    'children':[
                        {
                            'title':'按时数倒序'
                        },
                        {
                            'title':'按时数顺序'
                        }
                    ]
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['islogin']),
        clk_button(index,ind){
            this.indexs = index;
            this.inds = ind;
        }
    },
    created(){
        this.islogin();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';

.sort{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main{
    padding-top: pxTorem(40px);
    padding-left: pxTorem(25px);
    padding-right: pxTorem(15px);
    .content{
        width: 100%;
        height: pxTorem(80px);
        display: flex;
        flex-direction: column;
        margin-bottom: pxTorem(30px);
            
        .top{
            flex: 1;
            display: flex;
            align-items: center;
            
            font-size: pxTorem(17px);
        }

        .bottom{
            flex: 1;
            display: flex;

            button{
                width: 45%;
                height: 100%;
                margin-right: 5%;
                font-size: pxTorem(14px);
                border: 0;
                background: #eee;
                outline: none;
                border-radius: pxTorem(5px);
            }
            .left{
                flex: 1;
                margin-right: pxTorem(13px);
            }
            .right{
                flex: 1;
            }
            .active{
            background: #0B6242;
            color: white;
        }
        }
    }
}


</style>