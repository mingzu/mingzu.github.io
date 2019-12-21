const sidebar = require('./sidebar');
const path = require('path')
const fs = require('fs')

module.exports = {
  base: '/',
  dese: 'pubilc',
  title: '文档docs',
  description: 'Welcome to my docs',
  locales: {
    '/': {
        lang: 'zh-CN',
        title: 'doc',
        description: 'doc'
    },
    '/En/': {
        lang: 'en-US',
        title: 'doc',
        description: 'doc'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'vue组件,文档'
      }
    ],
    
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-145250139-1');`
    ]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/mingzu/mingzu.github.io.git',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebarDepth: 3,
    sidebar: 'auto',
    //导航
    nav: [
      {
        text: '主页',
        link: '/'
      }
     
    ],
    locales: {
        '/En/': {
            selectText: 'Language',
            label: 'ENGLISH',
            // editLinkText: 'Edit this page on GitHub',
            sidebar: sidebar.sidebarEn,
            nav: [
                {text: '主页', link: '/'},
            ]
        },
        '/': {
            selectText: 'Language',
            label: '简体中文',
            // editLinkText: '在 GitHub 上编辑此页',
            sidebar: sidebar.sidebarCn,
            nav: [
                {text: '主页', link: '/'},
            ],
        },
    }
    
    // 侧边栏
    // sidebar: {
    //   '/components/': [
    //     'introduction',
    //     {
    //       title: 'UI组件',
    //       collapsable: false,
    //       children: genSidebarConfig('Components/UI', true)
    //     },
    //   ],
    //   '/english/': [
    //     'introduction',
    //     {
    //       title: '2019十一月(November)',
    //       collapsable: false,
    //       children: genSidebarConfig('English/2019/2019-November', false)
    //     },
    //   ],
    // }
  },
  sass: { indentedSyntax: true }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir)
  let files = fs.readdirSync(p)
  let subDir = hasSub
    ? dir.split('/')[1]
    : dir.split('/')[1] + '/' + dir.split('/')[2]
  files = files.map(item => {
    item = subDir
      ? subDir + '/' + path.basename(item, '.md')
      : path.basename(item, '.md')
    return item
  })
  return files
}
