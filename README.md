# vue-overtime
    vue   加班休假  技能

## 技术栈
    vue + vuex + vue-router + webpack + ES6 + sass + rem + flex

## 项目运行
>前端(client)：
```
    git clone https://github.com/xhr0415/vue-overtime.git
    cd vue-overtime/client
    npm install 或 yarn(推荐)
    npm start
```
>后台(server)：

    先用后台软件进行启动
    cd vue-overtime/server
    npm start

## 项目布局
```
src/api/index.js                       //axios发起的所有接口
src/components/                       //公用的组件
src/router/index.js                   //路由的配置文件
src/store/index.js                    //全局vuex
src/modules/user.js                   //局部vuex，判断是否登录
src/views/                            //路由视图
src/App.vue                           //主文件
src/main.js                           //入口文件
src/request.js                        //axios封装的拦截器