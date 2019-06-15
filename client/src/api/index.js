import request from '../request'

export default {
    //判断是否登录
    islogin:()=>request.get('/api/user/info'),

    //请求首页数据
    getlist:(data)=>request.get('/api/task/list',data),

    //获取详情数据
    getDetails:(type,id)=>request.get(`/api/apply/${type}`,{
        params:{
            applicationNumber:id
        }
    }),
    //提交图片
    commitFile:(file)=>request.post('/api/upload',file),
    //提交加班/加班
    submit:(type,obj)=>request.post('/api/apply/'+type+'',obj),
}