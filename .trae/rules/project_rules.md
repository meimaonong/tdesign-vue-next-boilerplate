# Trae.md

This file provides guidance to Trae when working with code in this repository.

## 项目技术栈

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript** (严格模式)
- **Vite 7.2.4** (构建工具)
- **TDesign Mobile Vue 1.11.1** (移动端UI组件库)
- **Vue Router 4** (路由管理)
- **Pinia 3.0.4** (状态管理)
- **Sass** (CSS预处理器)

## 常用命令

```bash
# 开发
pnpm dev        # 启动开发服务器
pnpm preview    # 预览生产构建

# 构建
pnpm build      # TypeScript类型检查 + 构建生产版本

# 代码规范
pnpm lint       # 运行ESLint检查并自动修复
pnpm lint:check # 仅检查ESLint错误，不修复
pnpm format     # 使用Prettier格式化代码
pnpm format:check # 检查代码格式是否符合规范
```

## 项目架构

### 目录结构

```
src/
├── assets/     # 静态资源
├── router/     # 路由配置
│   └── index.ts
├── stores/     # Pinia 状态管理
│   └── index.ts
├── styles/     # 样式文件
│   ├── theme.scss    # 主题变量(亮色/暗色模式)
│   ├── global.scss   # 全局样式
│   └── style.scss    # 自定义样式
├── views/      # 页面组件
│   ├── Home.vue
│   └── demo/
│       └── ThemeDemo.vue
├── App.vue     # 根组件
├── main.ts     # 应用入口
└── vite-env.d.ts # Vite环境变量类型声明
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

5. **代码规范**
   - ESLint 使用 flat config 格式 (eslint.config.js)
   - Prettier 配置：单引号、无分号、2空格缩进
   - Husky + lint-staged 自动化 pre-commit 检查
   - Vue 组件必须使用 PascalCase 命名
   - 生产环境禁用 console 和 debugger

## 开发约定

1. **组件开发**
   - 使用 `<script setup>` 语法
   - TypeScript 严格模式，必须定义类型
   - 组件文件使用 PascalCase 命名
   - Props 必须定义默认值和类型

2. **样式编写**
   - 使用 Sass 预处理器
   - 全局样式在 `src/styles/global.scss`
   - 遵循 TDesign 的设计规范

3. **状态管理**
   - 使用 Pinia
   - store 模块放在 `src/stores/` 目录下

4. **Git 提交**
   - 提交前自动运行 ESLint 和 Prettier
   - 确保 lint 检查通过后再提交

## 构建流程

1. **开发环境**
   - `pnpm dev` 启动热重载开发服务器

2. **生产构建**
   - `pnpm build` 先执行 TypeScript 类型检查
   - 类型错误会导致构建失败
   - 构建输出到 `dist/` 目录

3. **预览构建**
   - `pnpm preview` 预览生产构建结果

## 注意事项

1. **UI 组件库**
   - 项目全量引入了 TDesign Mobile Vue
   - 组件库样式已在 `main.ts` 中引入

2. **TypeScript**
   - 使用项目引用配置
   - tsconfig.app.json 包含应用特定的配置
   - 严格模式，所有类型必须明确定义

3. **ESLint 配置**
   - 使用最新的 flat config 格式
   - 集成了 Vue、TypeScript、Prettier 插件
   - Prettier 违规被视为 ESLint 错误

4. **Git 工作流**
   - 主分支：`main`
   - 开发前请创建新分支
   - 使用 Husky 管理 Git hooks