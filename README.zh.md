# Install Scripts Hub

<p align="center">
  <img src="public/favicon.png" alt="Install Scripts Hub" width="64" height="64">
</p>

<p align="center">
  一站式安装脚本集合平台 | One-stop installation script collection platform
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/yugasun/install-scripts-hub" alt="License">
  </a>
</p>

[English](README.md) | [简体中文](README.zh.md)

## 📖 项目简介

Install Scripts Hub 是一个集中式平台，提供各种流行开发工具和实用程序的一键安装脚本。当前应用基于 **Next.js（App Router）+ React** 构建，并支持静态导出，便于部署在各种静态托管环境。

## ✨ 功能特点

- 🌐 **多语言支持**：提供英文和中文版本，并配有便捷的语言选择器
- 🌙 **暗/亮主题**：支持暗色和亮色主题，提供舒适的浏览体验
- 📋 **一键复制**：所有安装命令支持一键复制功能
- 📱 **响应式设计**：在移动设备和桌面上都能完美运行
- 🔍 **分类脚本**：安装脚本按类别组织，条理清晰
- 🚀 **快速轻量**：Next.js 静态导出，加载迅速

## 🚀 可用安装脚本

本项目目前包含以下安装脚本：

- `chsrc.sh` - 更改软件包源以加速下载
- `fnm.sh` - Fast Node Manager，用于 Node.js 版本管理
- `ghosts.sh` - Shell 脚本安装工具
- `netbird.sh` - 安全网络解决方案
- `oh-my-zsh.sh` - Oh My Zsh 终端框架
- `sdkman.sh` - 软件开发工具包管理器
- `tailscale.sh` - VPN 网络服务
- `uv.sh` - Python 包安装器和解析器

## 🛠 开发指南

### 前置条件

- Node.js (版本 18 或更高)
- 任意包管理器（npm/pnpm/bun）

### 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/yugasun/install-scripts-hub.git
cd install-scripts-hub
```

2. 安装依赖：
```bash
bun install
```

3. 启动开发服务器：
```bash
bun run dev
```

4. 打开浏览器并访问 `http://localhost:3000`

### 构建生产版本

创建优化的生产构建：

```bash
bun run build
```

在本地运行构建产物：

```bash
bun run start
```

## 📁 项目结构

```
├── src/                 # 源代码
│   ├── app/             # Next.js App Router 路由
│   ├── components/      # React 组件
│   └── lib/             # 通用类型、i18n、服务、工具函数
├── public/              # 静态资源（原样导出）
│   ├── installs/        # 安装脚本
│   └── scripts.*.json   # 脚本元数据（含 scripts.json 回退）
└── ... 配置文件
```

## 📝 添加新的安装脚本

## 📝 添加新的安装脚本

我们欢迎贡献！你可以通过以下两种方式添加新脚本：

### 1. 通过 GitHub Issues (推荐)

1. 前往 [Issues](https://github.com/yugasun/install-scripts-hub/issues) 页面。
2. 点击 **New Issue** 并选择 **Add New Script** 模板。
3. 填写所需信息（脚本 ID、URL、名称、描述等）。
4. 一旦维护者将该 issue 标记为 `approved`，系统将自动生成一个 Pull Request。

### 2. 手动贡献

1. 将你的 shell 脚本添加到 [public/installs/](public/installs/) 目录。
2. 在 [src/lib/data/scripts.ts](src/lib/data/scripts.ts) 中添加脚本元数据。
3. 运行 `npm run validate-scripts` 确保一切正确。
4. 提交 Pull Request。

## 🤝 贡献指南

欢迎贡献！随时提交 Pull Request。

1. Fork 仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 [Apache License 2.0](LICENSE) 授权。

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- 所有提供安装脚本的优秀开源项目