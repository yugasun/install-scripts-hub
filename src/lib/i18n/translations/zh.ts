import type { Translation } from '../translations';

const zh: Translation = {
  nav: {
    home: '首页',
    about: '关于',
  },
  common: {
    menu: {
      home: '首页',
      about: '关于',
    },
    language: {
      en: '英文',
      zh: '中文',
      select: '选择语言',
    },
    theme: {
      light: '浅色',
      dark: '深色',
      system: '系统',
    },
  },
  home: {
    title: 'Install Scripts Hub',
    subtitle: '流行工具和软件的一键安装脚本',
    availableScripts: '可用脚本',
    searchPlaceholder: '搜索脚本...',
    clearSearch: '清除搜索',
    loading: '加载脚本中...',
    loadingError: '加载脚本失败，请重试。',
    noResults: '没有找到匹配的脚本。',
    scriptsFound: '个脚本',
    quickTips: '快速提示',
  },
  tips: {
    curl: '确保您的系统中已安装 curl。',
    sudo: '某些脚本可能需要 sudo 权限。',
    verify: '在运行之前，请务必核对脚本内容。',
  },
  script: {
    details: '查看详情',
    source: '查看源码',
  },
  install: {
    installCommand: '安装命令',
    copy: '复制',
    copied: '已复制!',
    copyFailed: '复制失败',
    selectScript: '请选择一个脚本查看安装命令。',
    tip: '点击命令复制，或使用复制按钮。运行此命令将安装 <strong>{name}</strong>。',
    clickToCopy: '点击复制',
  },
  detail: {
    backToList: '返回脚本列表',
    howToUse: '如何使用',
    step1: '复制上面的命令',
    step2: '打开你的终端',
    step3: '粘贴并运行命令',
    step4: '按照额外的说明进行操作',
    share: '分享',
    copyLink: '复制链接',
    socialShare: '或在社交媒体上分享:',
  },
  about: {
    title: '关于 Install Scripts Hub',
    subtitle: '了解更多关于本项目及其工作原理',
    whatIs: '什么是 Install Scripts Hub?',
    description: 'Install Scripts Hub 是一个提供流行工具和软件一键安装命令的平台。它使在你的系统上安装开发者工具、实用程序和应用程序变得简单，无需记住复杂的安装过程。',
    howWorks: '它是如何工作的?',
    workingDescription: 'Install Scripts Hub 通过提供托管在我们服务器上的精选shell脚本来工作。当你运行安装命令时，它会下载并执行脚本，脚本会为你处理安装过程。',
    step1: '我们维护一系列流行软件的安装脚本。',
    step2: '你运行一个简单的curl命令，它会下载并执行适当的脚本。',
    step3: '脚本处理在你系统上安装和配置软件所需的所有步骤。',
    contribute: '如何贡献',
    contributeDesc: '这个项目是开源的，欢迎贡献。如果你想添加新的安装脚本或改进现有脚本，请访问我们在 ',
    security: '安全考虑',
    securityDesc: '我们非常重视安全性。以下是我们确保脚本安全的方式:',
    securityItem1: '所有脚本都是开源的，可以在执行前进行审查。',
    securityItem2: '我们验证脚本按预期工作且不包含恶意代码。',
    securityItem3: '我们鼓励用户在运行脚本前对其进行审查。',
    contact: '联系方式',
    contactDesc: '如有任何问题、建议或反馈，请联系 ',
  },
  error: {
    scriptNotFound: '脚本未找到',
    redirecting: '正在重定向到首页',
    returnHome: '返回首页',
  },
  footer: {
    rights: '版权所有',
    madeWith: '用爱制作',
    author: '由 Yuga Sun 创建'
  }
};

export default zh;