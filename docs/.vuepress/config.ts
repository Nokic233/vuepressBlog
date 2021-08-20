import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  title: "matLiu's blog",
  description: 'matLiu的个人网站',
  base: '/', // 这是部署到github相关的配置

  // 主题配置
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    nav: [
      // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '微博', link: 'https://baidu.com' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    search: true, //搜索
    searchMaxSuggestions: 10,
  },
});
