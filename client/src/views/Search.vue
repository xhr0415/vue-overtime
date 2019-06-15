<template>
    <div class="search">
        <div class="search-header">
            <div class="left">
                <div class="input">
                    <i class="iconfont icon-fangdajing"></i>
                    <input type="text" placeholder="搜索" />
                </div>
            </div>
            <div class="right" @click="$router.go(-1)">
                取消
            </div>
        </div>

        <div class="main"></div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['islogin'])
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
.search{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-header{
        width: 100%;
        height: pxTorem(40px);
        display: flex;

        .left{
            flex: 8.5;
            padding: pxTorem(10px) pxTorem(0px) pxTorem(5px) pxTorem(10px);
            display: flex;
            align-items: center;
            justify-content: center;

            .input{
                width: 100%;
                height: 100%;
                background: #eee;
                display: flex;
                align-items: center;
                padding-left: pxTorem(5px);

                i{
                    font-size: pxTorem(15px);
                }
                input{
                    width: 100%;
                    height: 100%;
                    padding-left: pxTorem(5px);
                }
            }
        }

        .right{
            flex: 1.5;
            display: flex;
            align-items: center;
            justify-content: center;
            color: green;
            font-size: pxTorem(16px);
        }
    }
}
</style>