// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'remixicon/fonts/remixicon.css'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// Vue.use(ViewUI);
Vue.config.productionTip = false


import node from '@/tools/node';
Vue.use(node);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
