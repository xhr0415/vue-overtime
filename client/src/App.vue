<template>
  <div class="box">
      <router-view></router-view>
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
<style lang="scss">
@import '../static/scss/common.scss';
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  html,body,#app,.box{
    width: 100%;
    height: 100%;
  }
  .box>div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .main{
      flex: 1;
      overflow: auto;
    }
  }
</style>