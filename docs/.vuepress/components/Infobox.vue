<template>
  <table class="infobox">
    <tbody v-if="$page.frontmatter.commercial">
      <tr v-if="$page.frontmatter.commercial.address">
        <th>地址</th>
        <td>{{ $page.frontmatter.commercial.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
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

<style lang="stylus">
.infobox
  font-size: 87.5%
  @media (min-width: 720px)
    width: auto
    max-width: 60%
    margin-left: 1rem
    float: right
  table
    width: 100%
  tr
    background: none
  th
    min-width: 4em
    text-align: center
  th
  td
    vertical-align: top
    padding: 0.25em
    border-left: none
    border-right: none
</style>
