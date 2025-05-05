---
layout: home

hero:
  name: 72Live
  text: '新闻速递'
  textsuffix: 'Platform'
  tagline: ✨ AI加持的个性化定制新闻聚合，为您节约时间
  image:
    src: /logo.png
    alt: 72live News Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: About Us
      link: /about
---
<Box
  :items="[
    // iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.webp',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'new' }
  ]"
/>
# 欢迎访问News.72live.com

持续增加不同栏目中.
