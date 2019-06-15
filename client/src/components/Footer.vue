<template>
    <div class="footer">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>
<script>
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
.footer{
    width: 100%;
    height: pxTorem(45px);
    border-top: 2px solid #ccc;
    display: flex;

    .left{
        flex: 3;
        color: #0B6242;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: pxTorem(14px);
    }

    .right{
        flex: 7;
        background: #0B6242;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: pxTorem(14px);
    }
}
</style>