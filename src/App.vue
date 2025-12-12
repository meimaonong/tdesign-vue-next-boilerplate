<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  ArticleIcon
} from 'tdesign-icons-vue-next';

// 创建响应式变量控制主题模式
const isDarkMode = ref(false);

// 初始化主题模式
onMounted(() => {
  // 检查本地存储或系统偏好
  const savedTheme = localStorage.getItem('theme-mode');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    // 检查系统偏好
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // 应用初始主题
  applyTheme();
});

// 切换主题模式
const toggleTheme = (value: boolean) => {
  isDarkMode.value = value;
  applyTheme();
  // 保存到本地存储
  localStorage.setItem('theme-mode', value ? 'dark' : 'light');
};

// 应用主题到根元素
const applyTheme = () => {
  const root = document.documentElement;
  root.setAttribute('theme-mode', isDarkMode.value ? 'dark' : 'light');
};
</script>

<template>
  <div class="app-container">
    <div class="theme-switch-container">
      <span class="theme-label">亮色</span>
      <t-switch 
        v-model="isDarkMode" 
        @change="toggleTheme"
        :label="['', '']"
        size="large"
      />
      <span class="theme-label">暗色</span>
    </div>
    <div class="content">
      <div>
        <article-icon size="50" :fill-color='["transparent","transparent"]' :stroke-color='["currentColor","#0052d9"]' :stroke-width="2"/>
      </div>
      <div>
        <t-icon name="article" size="50" style="color:red" />
      </div>
      <div>
        <t-button size="large" theme="primary">填充按钮</t-button>
      </div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.3s ease;
}

.theme-switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
}

.theme-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
