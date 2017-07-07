// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import province from './data/province';
import citieslatlon from './data/citieslatlon';
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


router.push("/")
var vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    province,citieslatlon,ok:false,title:"天气查询"
  }
});
router.beforeEach((to, from, next) => {
    vm.ok=true;
    next()
});


