const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: require.resolve('./theme/vdoing'),
  evergreen: true,
  locales: {
    '/': {
      lang: 'zh-Hans-CN',
      title: '大草原出行家',
      description: 'Prairist',
    },
  },

  head,
  themeConfig,
  plugins,

  chainMarkdown(config) {
    const { PLUGINS } = require('@vuepress/markdown');
    const originalLinkPlugin = require('@vuepress/markdown/lib/link.js');

    config.plugins.delete(PLUGINS.CONVERT_ROUTER_LINK);

    const linkPlugin = function(md) {
      const result = originalLinkPlugin.apply(this, arguments);
      const close = md.renderer.rules.link_close;
      md.renderer.rules.link_close = function() {
        return close
          .apply(this, arguments)
          .replace('<OutboundLink/>', '<OutboundIcon/>');
      };
      return result;
    };

    config.plugin(PLUGINS.CONVERT_ROUTER_LINK).use(linkPlugin, [
      {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ]);
  },
};
