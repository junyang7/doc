<template>
  <div>
    <div style="width: 300px; height: 300px; border: 1px solid red; overflow: auto;">
      <div class="marked" v-html="html"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "highlight.js/styles/github.css";
export default {
  name: "Get",
  data() {
    return {
      html: "",
    };
  },
  methods: {
    get() {
      axios.get('http://127.0.0.1/api_md_parsed_highlight_get.php').then(res => {
        this.html = res.data;
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.get();
  },
}
</script>

<style scoped>

</style>
