import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import('../views/Home')
const Login = ()=>import('../views/Login')
const Search = ()=>import('../views/Search')
const Sort = ()=>import('../views/Sort')
const Details = ()=>import('../views/Details')
const Batch = ()=>import('../views/Batch')
const Addtask = ()=>import('../views/Addtask')

Vue.use(Router)


const router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'加班/休息'
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        title:'登录'
      },
    },
    {
      path:'/search',
      component:Search,
      meta:{
        title:'搜索'
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta:{
        title:'排序'
      }
    },
    {
      path:'/details/:type/:id',
      name:'details',
      component:Details,
      props:true,
      meta:{
        title:'详情'
      }
    },
    {
      path:'/batch',
      component:Batch,
      meta:{
        title:'批量管理'
      }
    },
    {
      path:'/addtask/:type',
      name:'addtask',
      component:Addtask,
      meta:{
        title:'添加任务'
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next();
})

export default router;