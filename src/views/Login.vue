<template>
  <div class="page-container login-page">
    <div class="login-header">
      <img src="@/assets/vue.svg" alt="Logo" class="logo" />
      <h1 class="title">欢迎登录</h1>
    </div>

    <div class="login-form">
      <t-input
        v-model="formData.username"
        placeholder="请输入账号/手机号"
        clearable
      >
        <template #prefixIcon>
          <t-icon name="user" />
        </template>
      </t-input>

      <t-input
        v-model="formData.password"
        placeholder="请输入密码"
        :type="isPasswordVisible ? 'text' : 'password'"
        clearable
      >
        <template #prefixIcon>
          <t-icon name="lock-on" />
        </template>
        <template #suffixIcon>
          <t-icon
            v-if="isPasswordVisible"
            name="browse"
            @click="isPasswordVisible = false"
          />
          <t-icon v-else name="browse-off" @click="isPasswordVisible = true" />
        </template>
      </t-input>

      <div class="agreement-section">
        <t-checkbox v-model="formData.agreed">
          我已阅读并同意 <span class="link">《用户协议》</span>和<span
            class="link"
            >《隐私协议》</span
          >
        </t-checkbox>
      </div>

      <div class="action-section">
        <t-button theme="primary" size="large" block @click="handleLogin"
          >登录</t-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Toast } from 'tdesign-mobile-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isPasswordVisible = ref(false)

const formData = reactive({
  username: '',
  password: '',
  agreed: false
})

const handleLogin = () => {
  if (!formData.username) {
    Toast('请输入用户名')
    return
  }
  if (!formData.password) {
    Toast('请输入密码')
    return
  }
  if (!formData.agreed) {
    Toast('请勾选协议')
    return
  }

  // 模拟登录
  Toast.success('登录成功')
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  box-sizing: border-box;
  background-color: var(--td-bg-color-container);

  .login-header {
    margin-top: 48px;
    margin-bottom: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      width: 80px;
      height: 80px;
      margin-bottom: 16px;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      color: var(--td-text-color-primary);
      margin: 0;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .agreement-section {
      margin-top: 8px;
      margin-bottom: 24px;
      font-size: 12px;
      display: flex;
      align-items: center;

      .link {
        color: var(--td-brand-color);
      }
    }
  }
}
</style>
