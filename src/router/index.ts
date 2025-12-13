import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demo/theme',
      name: 'ThemeDemo',
      component: () => import('@/views/demo/ThemeDemo.vue'),
      meta: {
        title: '主题切换演示'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登录'
      }
    }
  ]
})

// 路由守卫 - 设置页面标题
router.beforeEach((to, _, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE || 'TDesign Vue Next Boilerplate'}`
  } else {
    document.title =
      import.meta.env.VITE_APP_TITLE || 'TDesign Vue Next Boilerplate'
  }
  next()
})

export default router
