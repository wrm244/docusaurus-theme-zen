const path = require('path')
const math = require('remark-math');
const katex = require('rehype-katex');
const announcementBarContent = `🎉 新用户免费试用三天 <a href="https://www.offshoreview.xyz/auth/register">(需邀请码)</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docusaurus-theme-zen',
  titleDelimiter: '-',
  url: 'https://docs.offshoreview.xyz',//请填写你的网站
  baseUrl: '/docusaurus-theme-zen/',//建议填写/
  favicon: 'https://www.offshoreview.xyz/favicon.ico',
  organizationName: '',
  projectName: 'docusaurus-theme-zen',
  tagline: '飞鸟集网络服务',
  onBrokenLinks: 'ignore',  //忽略坏链
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: '/assets/images/social/avatar.png',
    announcementBar: {
       id: 'announcementBar-3',
      content: announcementBarContent,
     },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      showLinenums: true,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'docusaurus-theme-zen',
      },
      {
        name: 'keywords',
        content: 'blog,javascript, nginx,, react, vue, web',
      },
      {
        name: 'keywords',
        content: ' 编程爱好者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '飞鸟集',
      logo: {
        alt: 'your name',
        src: 'https://pan.createvoyage.com/f/GzUA/icon.png',
        srcDark: 'https://pan.createvoyage.com/f/GzUA/icon.png',//记得加上绝对路径/
      },
      hideOnScroll: false,
      items: [
        {
          label: '博客',
          position: 'left',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '随笔',
              to: 'tags/lifestyle',
            },
          ],
        },
        {
          label: '帮助中心',
          position: 'left',
          to: 'docs/tutorial/intro',
/*          items: [
            {
              label: '客户端',
              to: 'docs/stack/',
            },
          ], */
        },
        {
          label: '导航',
          position: 'left',
          to: 'resource',
        },
        {
          label: '项目',
          position: 'left',
          to: 'project',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },

          ],
        },
        {
          title: '学习',
          items: [
            {
              label: '笔记',
              to: 'docs/stack',
            },
            {
              label: '项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wrm244/docusaurus-theme-zen',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              to: 'friends',
            },
            {
              label: '导航',
              to: 'resource',
            },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img alt="Built with Docusaurus" style="height:50px;margin-top:0.5rem" src="https://pan.createvoyage.com/f/KEf4/buildwith.png" /></a>`,
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 飞鸟集网络, 此网站主题基于 <a href="https://github.com/wrm244/docusaurus-theme-zen" target="_blank">Theme-zen</a>  搭建。
      <span id="runtime_span"></span>
      <script type="text/javascript">function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
      Date("10/16/2022 8:22:00");
      Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
      a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
      runtime_span.innerHTML="<br>本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();</script>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    // algolia: { algolia 评论插件需要安装
    //   appId: 'S4K9Vx4X',
    //   apiKey: '3bf796bbbc1561253bcb25dafc',
    //   indexName: 'wikiblog',
    // },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: '#eef9fd',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        magin: 10,
        scrollOffset: 0,
      },
    },
    giscus: {
      repo: 'wrm244/docusaurus-theme-zen',
      repoId: 'R_kgDOJZ-VIA',
      category: 'General',
      categoryId: 'DIC_kwDOJZ-VIM4CV95r',
      loading: "lazy",
      lang: "zh-CN",
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {//需要修改
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
      csdn: 'https://blog.csdn.net/',
      juejin: 'https://juejin.cn/',
      qq: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=xxxxxxxx&website=www.oicqzone.com',
      zhihu: 'https://www.zhihu.com/',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'docusaurus-theme-zen',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/wrm244/docusaurus-theme-zen/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'docusaurus-theme-zen',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'docusaurus-theme-zen',
          copyright: `Copyright © ${new Date().getFullYear()} your name Built with Docusaurus. class="footer_lin">`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'assets/images/social/avatar.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {

            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
    href: 'https://jsd.onmicrosoft.cn/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        indexBlog: true,
        indexPages: true,
        indexDocs: true,
      }),
    ],
  ],
}

module.exports = config
