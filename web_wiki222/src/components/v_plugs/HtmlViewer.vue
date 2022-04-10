<template>
  <div v-html="html"></div>
</template>

<script>
import "highlight.js/styles/github.css";
export default {
  name: "HtmlViewer",
  props: {
    html: {
      type: String,
      default() {
        return "";
      },
    },
  },
}
</script>

<style scoped>

</style>
