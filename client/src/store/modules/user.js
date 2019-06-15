import api from '../../api/index'

export default {
    namespaced:true,           //命名空间
    state:{
       data:{}
    },
    getters:{

    },
    mutations:{
        userData(state,data){
            state.data = data;
        }
    },
    actions:{
        //判断是否登录
        islogin(context){
            api.islogin().then(res=>{
                context.commit('userData',res.data.data);
            })
        }
    }
}