export default {
  mounted() {
    var o = new MutationObserver(function(s) {
      o.disconnect();
      try {
        var r = document.body.querySelector('.theme-container');
        if (r.childElementCount > 0) {
          Han(r).render();
        }
      } catch {
        o.observe(document.body, { childList: true, subtree: true });
      }
    });
    o.observe(document.body, { childList: true, subtree: true });

    this.$router.afterEach(() => {
      o.observe(document.body, { childList: true, subtree: true });
    });
  },
};
