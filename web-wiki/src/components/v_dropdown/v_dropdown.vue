<template>
  <div class="v_dropdown">
    <div :vid="vid" ref="v_dropdown_head" class="v_dropdown_head" @click="onDropdownHeadClick">
      <slot name="dropdown_head"></slot>
    </div>
    <div ref="v_dropdown_item_container" :style="style">
      <slot name="dropdown_item_container"></slot>
    </div>
  </div>
</template>

<script>
export default
{
  name: "v_dropdown",
  data()
  {
    return {
      vid: "",
      style: {
        "position": "absolute",
        "display": "none",
        "background-color": "#ffffff",
        "border": "1px solid #e8eaec",
        "box-shadow": "0 0 0 2px rgba(232,232,232, 0.2)",
        "box-sizing": "border-box",
        "margin": "2px",
        "border-radius": "2px",
        "word-break": "keep-all",
        "z-index": "99999",
      },
    };
  },
  methods: {
    async onDropdownHeadClick(e)
    {
      let head = this.$refs.v_dropdown_head.getBoundingClientRect();
      this.style["visibility"] = "hidden";
      delete this.style["display"];
      await this.$forceUpdate();
      let container = this.$refs.v_dropdown_item_container.getBoundingClientRect();
      this.style["display"] = "none";
      delete this.style["visibility"];
      await this.$forceUpdate();
      if(window.innerHeight - head.bottom < container.height)
      {
        delete this.style["display"];
        delete this.style["visibility"];
        this.style["bottom"] = `${head.height}px`;
        await this.$forceUpdate();
      }
      else
      {
        delete this.style["display"];
        delete this.style["visibility"];
        this.style["top"] = `${head.height}px`;
        await this.$forceUpdate();
      }
      if(window.innerWidth - head.right < container.width)
      {
        delete this.style["display"];
        delete this.style["visibility"];
        this.style["right"] = 0;
        await this.$forceUpdate();
      }
      else
      {
        delete this.style["display"];
        delete this.style["visibility"];
        this.style["left"] = 0;
        await this.$forceUpdate();
      }
    },
    async onDocumentClick(e)
    {
      for(let key of e.path)
      {
        if(key.getAttribute && key.getAttribute("vid") === this.vid)
        {
          return;
        }
      }
      this.style["display"] = "none";
      delete this.style["visibility"];
      await this.$forceUpdate();
    },
  },
  created()
  {
    this.vid = Date.now() .toString(36) + Math.random().toString(36).replace('.', '');
    document.addEventListener("click", this.onDocumentClick, false);
  },
  beforeDestroy()
  {
    document.removeEventListener("click", this.onDocumentClick, false);
  },
}
</script>

<style scoped>
.v_dropdown
{
  position: relative;
  display: inline-block;
  cursor: pointer;
}
</style>
