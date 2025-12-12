<script setup lang="ts">
// 移除所有主题切换相关代码
</script>

<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.3s ease;
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
