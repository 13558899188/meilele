import Vue from 'vue'
import Router from 'vue-router'
import jiancai from '@/Pages/jiancai/jiancai.vue'
import tuangou from '@/Pages/tuangou/tuangou.vue'
import index from '@/Pages/index/index.vue'
import detail from '@/Pages/detail/detail.vue'
import Jiaju from '@/Pages/jiaju/jiaju.vue'
import login from '@/Pages/login/login.vue'
import order from '@/Pages/order/order.vue'
import search from '@/Pages/search/search.vue'
import shipin from '@/Pages/shipin/shipin.vue'
import shoppCart from '@/Pages/shoppCart/shoppCart.vue'
import zhuce from '@/Pages/zhuce/zhuce.vue'
import pay from '@/Pages/pay/pay.vue'

import fixedAdr from '@/components/fixedAdr'

Vue.use(Router)

export default new Router({
  routes: [   
    {
      path: '/',
      name: 'index',
      component: index
    },
			{path:'/index',name:'index',component:index},
			{path:'/jiaju',name:'jiaju',component:Jiaju},
			{path:'/jiancai',name:'jiancai',component:jiancai},
			{path:'/tuangou',name:'tuangou',component:tuangou},
			{path:'/detail',name:'detail',component:detail},
			{path:'/login',name:'login',component:login},
			{path:'/order',name:'order',component:order},
			{path:'/search',name:'search',component:search},
			{path:'/shipin',name:'shipin',component:shipin},
			{path:'/shoppCart',name:'shoppCart',component:shoppCart},
			{path:'/zhuce',name:'zhuce',component:zhuce},
			{path:'/pay',name:'pay',component:pay}
  ]
})
