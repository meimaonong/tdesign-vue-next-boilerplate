import { createRouter, createWebHistory } from 'vue-router';
import { ThemeDemo } from '../views/demo';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        title: '关于'
      }
    },
    {
      path: '/demo/theme',
      name: 'ThemeDemo',
      component: ThemeDemo,
      meta: {
        title: '主题切换演示'
      }
    },
  ],
});

// 路由守卫 - 设置页面标题
router.beforeEach((to, _, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE || 'TDesign Vue Next Boilerplate'}`;
  } else {
    document.title = import.meta.env.VITE_APP_TITLE || 'TDesign Vue Next Boilerplate';
  }
  next();
});

export default router;