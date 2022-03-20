import Vue from 'vue'
import Router from 'vue-router'

import Cart from '../components/Cart'
import MainPage from '../components/MainPage'
import Order from '../components/Order'

Vue.use(Router);

export default new Router({
   routes: [
      {
         path: '/',
         name: 'MainPage',
         component: MainPage,
      },     
      {
         path: '/cart',
         name: 'Cart',
         component: Cart,
         props: true,
      },
      {
         path: '/order',
         name: 'Order',
         component: Order,
      },
   ]
})

