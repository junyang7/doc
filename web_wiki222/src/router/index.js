import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/wiki/Index', ], resolve)
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: resolve => require(['@/pages/user/Login', ], resolve)
    },
    {
      path: '/get',
      name: 'Get',
      component: resolve => require(['@/pages/Get', ], resolve)
    },
    {
      path: '/add',
      name: 'Add',
      component: resolve => require(['@/pages/Add', ], resolve)
    },
    {
      path: '/set',
      name: 'Set',
      component: resolve => require(['@/pages/Set', ], resolve)
    },
    // {
    //   path: '/',
    //   name: 'Test',
    //   component: resolve => require(['/Users/guoguo/2021/web_wiki/src/components/v_plugs/Button/Button_test.vue', ], resolve)
    // },

  ]
})
