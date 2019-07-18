// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
import BaiduMap from 'vue-baidu-map'

//挂载到Vue的原型上，取别名为$axios
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueLazyload,{               
	loading:require('./assets/images/timg.gif'),
	attempt: 3,
	preLoad: 1.3
})

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'w88wxAx0CvoB3pkTTMMbhvj05mTe9HZi'
})
