<template>
  <p v-if="$page.frontmatter.external" class="external-links">
    <a
      v-if="$page.frontmatter.external.wechat"
      :href="'//mp.weixin.qq.com/s/' + $page.frontmatter.external.wechat"
      class="iconfont icon-wechat"
      target="_blank"
      rel="noopener noreferrer"
    ></a
    ><a
      v-if="$page.frontmatter.external.amap"
      :href="'//www.amap.com/place/' + $page.frontmatter.external.amap"
      class="iconfont icon-amap"
      target="_blank"
      rel="noopener noreferrer"
    ></a
    ><a
      v-if="$page.frontmatter.external.dianping"
      :href="'//www.dianping.com/shop/' + $page.frontmatter.external.dianping"
      class="iconfont icon-dianping"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  </p>
</template>

<style lang="stylus">
.external-links
  .icon-wechat:before
  .icon-amap:before
  .icon-dianping:before
    padding-right: 0.25em

  .icon-wechat:after
    content: '微信'
  .icon-amap:after
    content: '高德地图'
  .icon-dianping:after
    content: '大众点评'

  .icon-wechat
  .icon-amap
  .icon-dianping
    margin-right: 1em
    color: var(--textLightenColor)
    opacity: 0.8
</style>
