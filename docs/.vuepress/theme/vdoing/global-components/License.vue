<template>
  <div class="license">
    本文采用<a
      v-if="spdx === 'CC-BY-SA-4.0'"
      href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
      >知识共享&ensp;署名&ndash;相同方式共享4.0国际许可协议<OutboundIcon /></a
    ><a
      v-else-if="spdx === 'CC-BY-NC-ND-4.0'"
      href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
      >知识共享&ensp;署名&ndash;非商业性使用&ndash;禁止演绎4.0国际许可协议<OutboundIcon /></a
    >发布
  </div>
</template>

<script>
export default {
  name: 'License',
  props: {
    spdx: {
      type: String,
      required: true,
    },
  },

  mounted() {
    Han(this.$el).render();
    this.$el.querySelectorAll('a > h-hws:last-child').forEach((e) => {
      if (e.nextSibling.wholeText === undefined) {
        e.parentNode.removeChild(e);
      }
    });
  },
};
</script>
