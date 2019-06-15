// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/scss/flexble'
import '../static/scss/common.scss'
import store from './store/index'
import {DatePicker,TimePicker } from 'element-ui'

Vue.use(DatePicker);
Vue.use(TimePicker );

const Header = ()=>import('./components/Header.vue')
const Footer = ()=>import('./components/Footer.vue')
import Pop from './components/Pop'

Vue.config.productionTip = false
Vue.component('Header',Header);
Vue.component('Footer',Footer);

//弹出框
Vue.prototype.$alert = (text)=>{
  let Alert = Vue.extend(Pop);
  let AlertComponent = new Alert({
    propsData:{
      text
    }
  });
  AlertComponent.$mount();
  document.body.appendChild(AlertComponent.$el)
  // console.log(AlertComponent)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
