<template>
  <div>
    <textarea v-model="md"></textarea>
    <button @click="set">修改</button>
  </div>
</template>

<script>
import axios from "axios";
import QS from "qs";
import marked from "marked";
import hljs from "highlight.js";
export default {
  name: "Set",
  data() {
    return {
      md: "",
      md_parsed_highlight: "",
    };
  },
  methods: {
    get() {
      axios.get('http://127.0.0.1/api_md_get.php').then(res => {
        this.md = res.data;
      }).catch(err => {
        console.log(err);
      });
    },
    set() {
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
      axios.post('http://127.0.0.1/api_md_set.php', QS.stringify({
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
    this.get();
  },
}
</script>

<style scoped>

</style>
