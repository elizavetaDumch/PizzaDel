import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import store from './_store/store'
import router from './router/router.js'
import 'material-design-icons-iconfont'

//import VueRouter from 'vue-router'
//Vue.use(VueRouter)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store, router,
  render: h => h(App),
});
