<template>
    <div class="list" @click="$router.push({
        name:`details`,
        params:{
            type:item.list_type,
            id:item.applicationNumber
        }
    })">
        <div>
            <div class="left ser">{{item.applicationNumber}}</div>
            <div class="right state">
                <i class="iconfont" :class="listType.icon"></i>&nbsp;
                {{listType.title}}
            </div>
        </div>
        <div>
            <div class="left">申请人：{{item.nickname}}</div>
            <div class="right">加班类型：{{item.describes}}</div>
        </div>
        <div>
            <div class="left">加班日期：{{new Date(item.startTime).toLocaleDateString()}}</div>
            <div class="right">加班时数：2.4</div>
        </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex'

export default {
    props:["item",'listType'],
    components:{

    },
    data(){
        return {
            
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['islogin']),
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
.list{
    width: 100%;
    height: pxTorem(120px);
    margin-bottom:pxTorem(10px);
    background: white;
    padding: pxTorem(10px) pxTorem(20px);
    display: flex;
    flex-direction: column;

    >div{
        flex: 1;
        display: flex;

        .left{
            flex: 1;
        }
        .right{
            flex: 1;
            padding-left: pxTorem(30px);

            i{
                font-size: pxTorem(15px);
            }
        }
        .ser{
            font-size: pxTorem(15px);
        }
        .state{
            display: flex;
            padding-right:pxTorem(10px);
            justify-content: flex-end;
        }
    }
}
</style>