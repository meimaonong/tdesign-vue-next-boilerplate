<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 创建响应式变量控制主题模式
const isDarkMode = ref(false);
const storedTheme = ref('');

// 初始化主题模式
onMounted(() => {
  // 检查本地存储或系统偏好
  const savedTheme = localStorage.getItem('theme-mode');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
    storedTheme.value = savedTheme;
  } else {
    // 检查系统偏好
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    storedTheme.value = isDarkMode.value ? 'dark' : 'light';
  }
  // 应用初始主题
  applyTheme();
});

// 切换主题模式
const toggleTheme = (value: boolean) => {
  isDarkMode.value = value;
  storedTheme.value = value ? 'dark' : 'light';
  applyTheme();
  // 保存到本地存储
  localStorage.setItem('theme-mode', value ? 'dark' : 'light');
};

// 应用主题到根元素
const applyTheme = () => {
  const root = document.documentElement;
  root.setAttribute('theme-mode', isDarkMode.value ? 'dark' : 'light');
};

// 重置主题设置
const resetTheme = () => {
  localStorage.removeItem('theme-mode');
  isDarkMode.value = false;
  storedTheme.value = '';
  applyTheme();
};
</script>

<template>
  <div class="demo-container">
    <h2>暗亮色主题切换演示</h2>
    
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

    <div class="demo-content">
      <div class="demo-card">
        <h3>卡片组件演示</h3>
        <p>这是一个演示卡片，用于展示不同主题下的视觉效果。</p>
        <button class="demo-button">示例按钮</button>
      </div>

      <div class="demo-info">
        <h4>当前主题状态</h4>
        <p><strong>主题模式:</strong> {{ isDarkMode ? '暗色模式' : '亮色模式' }}</p>
        <p><strong>本地存储:</strong> {{ storedTheme || '未设置' }}</p>
        <button @click="resetTheme" class="reset-button">重置主题设置</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-container {
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: var(--td-text-color-primary);
  }
}

.theme-switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
  border: 1px solid var(--td-border-color);
}

.theme-label {
  font-size: 16px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.demo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.demo-card {
  padding: 24px;
  border-radius: 12px;
  background-color: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-2);
  border: 1px solid var(--td-border-color);
  transition: all 0.3s ease;

  h3 {
    margin: 0 0 16px 0;
    color: var(--td-text-color-primary);
    font-size: 20px;
  }

  p {
    margin: 0 0 20px 0;
    color: var(--td-text-color-secondary);
    line-height: 1.6;
  }
}

.demo-button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: var(--td-brand-color);
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--td-brand-color-hover);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}

.demo-info {
  padding: 24px;
  border-radius: 12px;
  background-color: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-2);
  border: 1px solid var(--td-border-color);

  h4 {
    margin: 0 0 16px 0;
    color: var(--td-text-color-primary);
    font-size: 18px;
  }

  p {
    margin: 8px 0;
    color: var(--td-text-color-secondary);
    line-height: 1.5;

    strong {
      color: var(--td-text-color-primary);
    }
  }
}

.reset-button {
  margin-top: 16px;
  padding: 8px 16px;
  border: 1px solid var(--td-border-color);
  border-radius: 6px;
  background-color: transparent;
  color: var(--td-text-color-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--td-bg-color-secondary);
    color: var(--td-text-color-primary);
  }
}
</style>