<template>
    <div class="batch">
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="$router.go(-1)"></i>
            </template>
            <template v-slot:center>
                <span>{{$route.meta.title}}</span>
            </template>
        </Header>

        <div class="main">
            <input type="radio" value="123">
        </div>
        
        <Footer>
            <template v-slot:left>
                <div class="left">
                    <input type="radio">&nbsp;全选
                </div>
            </template>
            <template v-slot:right>
                <div class="right">
                    批量同意
                </div>
            </template>
        </Footer>
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
.batch{
    width: 100%;
    height: 100%;
}

.footer{
    input{
        border: 1px solid #ccc;
        width: 20px;
        height: 20px;
    }
}
</style>