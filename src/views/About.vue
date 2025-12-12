<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>这是一个使用TDesign Mobile Vue的示例项目</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// About组件的逻辑
</script>

<style scoped>
.about {
  padding: 20px;
}

h1 {
  color: #333;
}

p {
  margin: 10px 0;
}

router-link {
  color: #1890ff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>