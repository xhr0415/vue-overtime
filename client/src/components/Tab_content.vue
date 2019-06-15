<template>
    <div class="tab-content" v-on:click="$emit('change_tab',index)">
        <div class="tab-top" :class="{active:index==ind}">
            <i :class="icon"></i>
        </div>
        <div class="tab-bottom" :class="{active:index==ind}">
            {{title}}
        </div>
    </div>
</template>
<script>
export default {
    props:['title','icon','index','ind'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        clk_tab(index){
            this.$emit('changetab')
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
    .tab-content{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: pxTorem(20px);

        >div{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ccc;
        }
        .tab-top{
            flex: 8;
            i{
                font-size: pxTorem(25px);
            }
        }
        .tab-bottom{
            flex: 2;
        }
    }

    .active{
        color: green !important;
    }
</style>