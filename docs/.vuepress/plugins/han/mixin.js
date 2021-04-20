export default {
  mounted() {
    var o = new MutationObserver(function(s) {
      o.disconnect();
      try {
        var r = document.body.querySelector('.theme-container');
        if (r.childElementCount > 0) {
          Han(r).render();
          document.body
            .querySelectorAll('a > h-hws:last-child')
            .forEach((e) => {
              if (e.nextSibling.wholeText === undefined) {
                e.parentNode.removeChild(e);
              }
            });
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
