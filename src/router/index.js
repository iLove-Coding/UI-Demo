import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/main";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "Main",
      component: Main,
      redirect:"Page1",
      children: [{
          path: '/page1',
          name: 'Page1',
          component: () => import('@/components/page1/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '1'
          },
        },
        {
          path: '/page2',
          name: 'Page2',
          component: () => import('@/components/page2/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '2'
          },
        },
        {
          path: '/page3',
          name: 'Page3',
          component: () => import('@/components/page3/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '3'
          },
        },
        {
          path: '/page4',
          name: 'Page4',
          component: () => import('@/components/page4/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '4'
          },
        },
        {
          path: '/page5',
          name: 'Page5',
          component: () => import('@/components/page5/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '5'
          },
        },
        {
          path: '/page6',
          name: 'Page6',
          component: () => import('@/components/page6/'),
          meta: {
            title: '主页/iron push man',
            navIndex: '6'
          },
        }
      ],
      beforeEnter: (to, from, next) => {
        const cookie = Vue.cookie.get('login-token');
        if (!cookie) {
          router.push({
            name: 'login'
          })
        } else {
          next();
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/login/'),
      meta: {
        title: '登陆/iron push man'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

export default router;