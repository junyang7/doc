<template>
  <div ref="ace" style="width: 100%; height: 100%; line-height: 20px;"></div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
export default {
  name: "CodeEditor",
  data() {
    return {
      ace_editor: null,
    };
  },
  mounted() {
    this.ace_editor = ace.edit(
      this.$refs.ace,
      {
        fontSize: 13,
        theme: 'ace/theme/github',
        mode: 'ace/mode/markdown',
        tabSize: 4,
        highlightActiveLine: true,
        printMarginColumn: 120,
        fontFamily: 'Consolas, Monaco, monospace'
      }
    );
  },
}
</script>

<style scoped>

</style>
