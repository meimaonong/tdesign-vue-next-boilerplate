# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目技术栈

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript** (严格模式)
- **Vite** (构建工具)
- **TDesign Mobile Vue** (移动端UI组件库)
- **Vue Router 4** (路由管理)
- **Pinia** (状态管理)
- **Sass** (CSS预处理器)

## 常用命令

```bash
# 开发
pnpm dev        # 启动开发服务器
pnpm preview    # 预览生产构建

# 构建
pnpm build      # 类型检查 + 构建生产版本

# 注意：项目目前未配置 lint 和 test 命令
```

## 项目架构

### 目录结构

```
src/
├── assets/     # 静态资源
├── router/     # 路由配置
├── stores/     # Pinia 状态管理
├── styles/     # 样式文件（包含主题变量）
├── views/      # 页面组件
├── App.vue     # 根组件
└── main.ts     # 应用入口
```

### 关键配置

1. **路径别名**
   - `@` 指向 `src` 目录
   - 在 tsconfig.json 和 vite.config.ts 中都已配置

2. **环境变量**
   - 使用 `.env` 文件配置
   - `VITE_APP_TITLE`: 应用标题（用于页面标题）
   - `VITE_API_BASE_URL`: API 基础 URL（待配置）

3. **路由系统**
   - 基于浏览器 History 模式
   - 路由懒加载
   - 自动设置页面标题（基于路由 meta.title）

4. **主题系统**
   - 支持亮色/暗色模式切换
   - 使用 CSS 变量实现
   - 主题设置保存在 localStorage
   - 主题变量定义在 `src/styles/theme.scss`

## 开发约定

1. **组件开发**
   - 使用 `<script setup>` 语法
   - TypeScript 严格模式，必须定义类型
   - 组件文件使用 PascalCase 命名

2. **样式编写**
   - 使用 Sass 预处理器
   - 全局样式在 `src/styles/global.scss`
   - 遵循 TDesign 的设计规范

3. **状态管理**
   - 使用 Pinia
   - store 模块放在 `src/stores/` 目录下

## 注意事项

1. **UI 组件库**
   - 项目全量引入了 TDesign Mobile Vue
   - 组件库样式已在 `main.ts` 中引入

2. **代码规范**
   - 项目目前未配置 ESLint 和 Prettier
   - 建议后续添加以统一代码风格

3. **构建流程**
   - 构建前会自动进行 TypeScript 类型检查
   - 类型错误会导致构建失败

4. **Git 工作流**
   - 主分支：`main`
   - 开发前请创建新分支
