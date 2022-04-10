<template>
  <ul style="background-color: rgba(255,0,0,0.5); width: 100%; ">
    <li v-for="(item, index) in data" :key="index">
      <div>
        <!--折叠展开图标-->
        <!--含有子节点-->
        <i
          style="color: #2d8cf0;"
          title="折叠"
          v-if="item.children && !item.collapse"
          @click.stop="collapse(item)"
          class="ri-checkbox-indeterminate-line"></i>
        <i
          style="color: #2d8cf0;"
          title="展开"
          v-if="item.children && item.collapse"
          @click.stop="collapse(item)"
          class="ri-add-box-line"></i>
        <!--不含子节点-->
        <i v-if="!item.children"></i>
        <!--垂直线-->
        <i></i>
        <!--水平线-->
        <i></i>
        <!--树形节点内容-->
        <div>
          <!--选框-->
          <i></i>
          <!--图标-->
          <i class="ri-file-list-line" style="color: #ff9900;"></i>
          <!--文本-->
          <span>{{ item['name'] }}</span>
        </div>
      </div>
      <x_tree
        v-if="item.children"
        :data="item.children"
        :deep="count"
        :style="{ 'display': !item.collapse ? '' : 'none' }"></x_tree>
    </li>
  </ul>
</template>

<script>
export default {
  name: "x_tree",
  props: {
    deep: {
      type: Number,
      default() {
        return 0;
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
  },
  computed: {
    count() {
      let i = this.deep
      i++
      return i
    }
  },
  methods: {
    collapse(node) {
      node.collapse = !node.collapse
      this.$forceUpdate();
    },
    click(node) {
      this.$parent.click(node)
    },
  }
}
</script>

<style>
.x_tree * {
  margin: 0;
  padding: 0;
  user-select: none;
  font-family: Consolas, Monaco, monospace;
}

.x_tree {
  --font-size: 13;
  /*--h: 30;*/
  /*--w: 24;*/
  color: #515a6e;

}



.x_tree ul {
  list-style: none;
  font-size: 0px;
}

.x_tree i, .x_tree a, .x_tree span {
  --h: 30;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  height: calc(var(--h) * 1px);
  line-height: calc(var(--h) * 1px);
  font-size: calc(var(--font-size) * 1px);
  /*color: #515a6e;*/
}

.x_tree div {
  --h: 30;
  height: calc(var(--h) * 1px);
  white-space: nowrap;
  padding-right: 10px;
}

.x_tree li > div > div:hover, .x_tree li > div > div.actived {
  background-color: #f8f8f9;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid #2d8cf0;
  color: #2d8cf0;
}

.x_tree > ul li > div > i:nth-child(1) {
  --w: 24;
  width: calc(var(--w) * 1px);
  position: absolute;
  color: #515a6e;
}

.x_tree > ul li > div > i:nth-child(2) {
  --w: 24;
  width: calc(var(--w) * 1px);
  display: inline-block;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") calc((-8 + var(--w) / 2) * 1px) 0px repeat-y;
}

.x_tree > ul > li:first-child > div > i:nth-child(2) {
  --h: 30;
  height: calc((var(--h) / 2) * 1px);
  vertical-align: bottom;
}

.x_tree ul > li:last-child > div > i:nth-child(2) {
  --h: 30;
  height: calc((var(--h) / 2) * 1px);
  vertical-align: top;
  /*outline: 1px solid red;*/
}

.x_tree > ul li > div > i:nth-child(3) {
  --w: 24;
  --h: 30;
  width: calc(var(--w) * 1px);
  display: inline-block;
  margin-left: calc(var(--w) / 2 * -1 * 1px);
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAYAAACe5Y9JAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAE0lEQVQIHWNgAIIzZ878B9FUBQAa5wNk4YGBdwAAAABJRU5ErkJggg==") 0px calc((var(--h) / 2) * 1px) repeat-x;
}

.x_tree li:not(:last-child) > ul {
  --w: 24;
  width: calc(var(--w) * 1px);
  display: inline-block;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") calc((-8 + var(--w) / 2) * 1px) 0px repeat-y;
}

.x_tree li > ul {
  --w: 24;
  padding-left: calc((var(--w) + var(--w) / 2 + 1) * 1px);
  display: inline-block;
}

.x_tree > ul li > div > div {
  display: inline-block;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid transparent;
  color: #515a6e;
}

/*选框*/
.x_tree > ul li > div > div > i:nth-child(1) {
  --w: 24;
  width: calc(var(--w) * 1px);
  display: none;

}

.x_tree > ul li > div > div > i:nth-child(2) {
  --w: 24;
  width: calc(var(--w) * 1px);
  display: inline-block;
  /*color: #515a6e;*/
}

/*根节点*/
.x_tree > ul > li:only-child > div > i:nth-child(2) {
  background: none;
}
</style>

