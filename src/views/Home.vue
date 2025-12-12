<template>
  <div class="home">
    <h1>首页</h1>
    <p>这是一个使用Vue 3、Vue Router和Pinia的示例项目</p>
    <router-link to="/about">关于我们</router-link>
    
    <div class="counter-container">
      <h2>计数器示例</h2>
      <p>当前计数: {{ counterStore.count }}</p>
      <p>计数的两倍: {{ counterStore.doubleCount }}</p>
      <div class="counter-buttons">
        <t-button theme="primary" @click="counterStore.increment">增加</t-button>
        <t-button theme="primary" @click="counterStore.decrement">减少</t-button>
        <t-button theme="primary" @click="counterStore.reset">重置</t-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  color: var(--td-text-color-primary);
}

p {
  margin: 10px 0;
  color: var(--td-text-color-secondary);
}

router-link {
  color: var(--td-brand-color);
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}

.counter-container {
  margin-top: 30px;
  padding: 20px;
  background-color: var(--td-bg-color-container);
  border-radius: 8px;
  box-shadow: var(--td-shadow-1);
}

.counter-buttons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

</style>