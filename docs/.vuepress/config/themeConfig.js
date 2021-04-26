const nav = require('./themeConfig/nav.js');
const htmlModules = require('./themeConfig/htmlModules.js');

module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1（h2），最大2（h3）
  logo: '/assets/img/logo.png',
  repo: 'prairist/prairist.github.io',
  searchMaxSuggestions: 10,
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '编辑',

  category: false, // 分类功能
  // tag: true, // 标签功能
  // archive: true, // 归档功能
  // categoryText: '随笔', // 碎片化文章默认分类值

  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], 默认15秒轮换
  // bodyBgImgOpacity: 0.5,

  titleBadge: false, // 文章标题前图标
  // titleBadgeIcons: [
  //   '图标地址1',
  //   '图标地址2'
  // ],
  contentBgStyle: 6,

  // updateBar: { // 最近更新
  //   showToArticle: true,
  //   moreArticle: '/archives'
  // },
  // rightMenuBar: false,
  // sidebarOpen: false,
  // pageButton: false,

  sidebar: 'structuring',

  // author: { // 文章默认作者信息
  //   name: 'xugaoyi',
  //   link: 'https://github.com/xugaoyi',
  // },
  social: {
    iconfontCssFile: '//at.alicdn.com/t/font_2493081_3q9hccmznzt.css',
    icons: [
      {
        iconClass: 'icon-wechat',
        title: '微信公众号',
        link: 'http://weixin.qq.com/r/fhx5YcXE25ikrYEC90ls',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/prairist',
      },
    ],
  },
  footer: {
    createYear: 2021,
    copyrightInfo: '大草原出行家 | CC BY-NC-SA 4.0',
  },
  htmlModules,
};
