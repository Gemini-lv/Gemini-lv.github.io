# 吕昊个人主页

这是一个基于 Next.js App Router 重构的个人主页，适合部署到 Vercel。页面内容集中维护在 `src/data/profile.ts`，首页组件读取这些数据进行渲染。

> 中天科技集团 · 江苏中天物联传感有限公司 · 研发项目经理

## 本地预览

```bash
npm install
npm run dev
```

然后打开 `http://localhost:3000`。

## 常用命令

```bash
npm run lint
npm run build
```

## Vercel 部署

将仓库导入 Vercel 后，框架选择 Next.js，默认构建命令为 `npm run build`。本项目没有必需的环境变量。
