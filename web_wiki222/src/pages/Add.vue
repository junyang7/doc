<template>
  <div>
    <textarea v-model="md"></textarea>
    <button @click="add">创建</button>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import axios from "axios";
import QS from "qs";
export default {
  name: "Add",
  data() {
    return {
      md: "",
      md_parsed_highlight: "",
    };
  },
  methods: {
    add() {
      let a = new Date().getMilliseconds();
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      this.md_parsed_highlight = marked.parse(this.md);
      axios.post('http://127.0.0.1/api_md_add.php', QS.stringify({
        md: this.md,
        md_parsed_highlight: this.md_parsed_highlight,
      })).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
    },
  },
  mounted() {

  },
}
</script>

<style scoped>

</style>
