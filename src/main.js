// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/index.css'
import router from './router'
import Http from '@/plugins/http'
import moment from 'moment'

Vue.config.productionTip = false

// 目的  把一个不是vue插件的axios变成vue插件

Vue.use(Http)

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

Vue.filter('fmtDate', (v) => {
  return moment(v).format("YYYY-MM-DD");
})
