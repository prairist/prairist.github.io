<template>
  <span>
    <img class="icon outbound" src="/assets/img/outbound.svg" /><span class="sr-only">{{
      openInNewWindowTitle
    }}</span>
  </span>
</template>

<script>
export default {
  computed: {
    openInNewWindowTitle() {
      return this.$themeLocaleConfig.openNewWindowText || '(opens new window)';
    },
  },
};
</script>
