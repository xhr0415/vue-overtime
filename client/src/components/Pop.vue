<template>
    <transition name="fade" v-if="show">
        <div class="pop" >
            {{text}}
        </div>
    </transition>
</template>
<script>
export default {
    props:['text'],
    components:{

    },
    data(){
        return {
            show:true
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        
    },
    mounted(){
        setTimeout(()=>{
            this.show = false;
        },2000)
    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';
    .pop{
        width: pxTorem(270px);
        padding: pxTorem(30px) pxTorem(10px);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: pxTorem(17px);
        font-family: '楷体';
        border-radius: pxTorem(8px);
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-leave,.fade-enter-to{
        opacity: 1;
    }
    .fade-enter-active{
        transition: all 2s;
    }
    .fade-leave-active{
        transition: all 2s;
    }
    
</style>