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

## 📖 Introduction

Install Scripts Hub is a centralized platform that provides one-liner installation scripts for popular development tools and utilities. The current app is built with **Next.js (App Router) + React** and statically exported for simple hosting.

## ✨ Features

- 🌐 **Multi-language Support**: Available in English and Chinese with an easy language selector
- 🌙 **Dark/Light Theme**: Supports both dark and light themes for comfortable viewing
- 📋 **Copy-to-Clipboard**: One-click copy for all installation commands
- 📱 **Responsive Design**: Works perfectly on mobile devices and desktops
- 🔍 **Categorized Scripts**: Well-organized installation scripts by category
- 🚀 **Fast and Lightweight**: Static export-friendly Next.js app

## 🚀 Available Installation Scripts

This project currently includes installation scripts for:

- `chsrc.sh` - Change package source for faster downloads
- `fnm.sh` - Fast Node Manager for Node.js version management
- `ghosts.sh` - Shell script installation tool
- `netbird.sh` - Secure networking solution
- `oh-my-zsh.sh` - Oh My Zsh terminal framework
- `sdkman.sh` - Software Development Kit Manager
- `tailscale.sh` - VPN networking service
- `uv.sh` - Python package installer and resolver

## 🛠 Development

### Prerequisites

- Node.js (version 18 or higher)
- Any package manager (npm/pnpm/bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yugasun/install-scripts-hub.git
cd install-scripts-hub
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
bun run build
```

You can run the built app locally with:

```bash
bun run start
```

## 📁 Project Structure

```
├── src/                 # Source code
│   ├── app/             # Next.js App Router routes
│   ├── components/      # React components
│   └── lib/             # Shared types, i18n, services, utils
├── public/              # Static assets (exported as-is)
│   ├── installs/        # Installation scripts
│   └── scripts.*.json   # Script metadata (with scripts.json fallback)
└── ... configuration files
```

## 📝 Adding New Installation Scripts

We welcome contributions! You can add new scripts in two ways:

### 1. Via GitHub Issues (Recommended)

1. Go to the [Issues](https://github.com/yugasun/install-scripts-hub/issues) page.
2. Click **New Issue** and select the **Add New Script** template.
3. Fill in the required information (Script ID, URL, Name, Description, etc.).
4. Once a maintainer labels the issue as `approved`, a Pull Request will be automatically generated.

### 2. Manual Contribution

1. Add your shell script to [public/installs/](public/installs/).
2. Add the script metadata to [src/lib/data/scripts.ts](src/lib/data/scripts.ts).
3. Run `npm run validate-scripts` to ensure everything is correct.
4. Submit a Pull Request.

1. Add your shell script to the `public/installs/` directory
2. Update the JSON metadata under `public/` (e.g. `public/scripts.en.json`, `public/scripts.zh.json`, and `public/scripts.json` fallback)
3. Update UI translations in `src/lib/i18n/translations/` if needed
4. Test your changes locally
5. Submit a pull request

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- All the amazing open-source projects providing installation scripts
