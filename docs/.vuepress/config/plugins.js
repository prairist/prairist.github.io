module.exports = [
  require('../plugins/han/index.js'),
  [
    'container',
    {
      type: 'abstract',
      defaultTitle: '',
    },
  ],
  [
    'container',
    {
      type: 'img',
      defaultTitle: '',
    },
  ],
  ['img-lazy', {}],
  [
    'thirdparty-search',
    {
      thirdparty: [
        {
          title: '在维基百科搜索条目',
          frontUrl: 'https://zh.wikipedia.org/w/index.php?search=',
          behindUrl:
            '&title=Special%3A%E6%90%9C%E7%B4%A2&go=%E5%89%8D%E5%BE%80&ns0=1',
        },
        {
          title: '在高德地图搜索地点',
          frontUrl: 'https://www.amap.com/search?query=',
        },
        {
          title: '在 OpenStreetMap 搜索要素',
          frontUrl: 'https://www.openstreetmap.org/search?query=',
        },
      ],
    },
  ],
  [
    'one-click-copy',
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    '@vuepress/medium-zoom',
    {
      selector: '.theme-vdoing-content :not(a) > img',
      options: {
        margin: 16,
        background: 'var(--bodyBg)',
      },
    },
  ],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs');
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm');
      },
    },
  ],
];
