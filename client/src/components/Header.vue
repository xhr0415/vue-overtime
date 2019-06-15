<template>
  <div class="header">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
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
.header{
  width: 100%;
  height: pxTorem(50px);
  display: flex;

  >div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  i{
      font-size: pxTorem(20px);
  }

  .left{
    flex: 1.5;
  }

  .center{
    flex: 6.5;
    font-size: pxTorem(17px);
  }

  .right{
    flex: 2; 
    display: flex;
    i{
      flex: 1;
    }
  }
}
</style>