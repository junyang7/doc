import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/user/login',
      name: 'UserLogin',
      component: resolve => require(['@/pages/user/Login', ], resolve)
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/Index', ], resolve)
    },
    {
      path: '/develop',
      name: 'Index',
      component: resolve => require(['@/pages/wiki/develop', ], resolve)
    },




    {
      path: '/component',
      name: 'Component',
      component: resolve => require(['@/pages/component', ], resolve),
      children: [
        {
          path: '/component/v_design',
          name: 'v_design',
          component: resolve => require(['@/components/v_design/v_design_test', ], resolve)
        },
        {
          path: '/component/v_button',
          name: 'v_button',
          component: resolve => require(['@/components/v_button/v_button_test', ], resolve)
        },
        {
          path: '/component/v_input',
          name: 'v_input',
          component: resolve => require(['@/components/v_input/v_input_test', ], resolve)
        },
        {
          path: '/component/v_loading',
          name: 'v_loading',
          component: resolve => require(['@/components/v_loading/v_loading_test', ], resolve)
        },
        {
          path: '/component/v_status',
          name: 'v_status',
          component: resolve => require(['@/components/v_status/v_status_test', ], resolve)
        },
        {
          path: '/component/v_dropdown',
          name: 'v_dropdown',
          component: resolve => require(['@/components/v_dropdown/v_dropdown_test', ], resolve)
        },
        {
          path: '/component/v_avatar',
          name: 'v_avatar',
          component: resolve => require(['@/components/v_avatar/v_avatar_test', ], resolve)
        },
        {
          path: '/component/v_message',
          name: 'v_message',
          component: resolve => require(['@/components/v_message/v_message_test', ], resolve)
        },
        {
          path: '/component/v_radio',
          name: 'v_radio',
          component: resolve => require(['@/components/v_radio/v_radio_test', ], resolve)
        },
        {
          path: '/component/v_radio_group',
          name: 'v_radio_group',
          component: resolve => require(['@/components/v_radio_group/v_radio_group_test', ], resolve)
        },
        {
          path: '/component/v_checkbox',
          name: 'v_checkbox',
          component: resolve => require(['@/components/v_checkbox/v_checkbox_test', ], resolve)
        },
        {
          path: '/component/v_checkbox_group',
          name: 'v_checkbox_group',
          component: resolve => require(['@/components/v_checkbox_group/v_checkbox_group_test', ], resolve)
        },
      ],
    },


  ]
})
