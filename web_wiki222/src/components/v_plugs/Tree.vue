<template>
  <ul>
    <li v-for="(a, b) in data">
      <div
        @mouseenter="a.control = true"
        @mouseleave="a.control = false"
        @click="click(a)"
        :class="'v-tree-item'">
        <div>
          <div :style="{'width': deep * 24 + 'px'}"></div>
          <template v-if="a.hasOwnProperty('children')">
            <div
              @click.stop="collapse(a)"
              v-if="a.collapse === false"
              style="color: #2d8cf0; width: 24px; height: 20px; display: inline-flex; align-items: center;">
              <i class="ri-arrow-right-s-fill"></i>
            </div>
            <div
              @click.stop="collapse(a)"
              v-if="a.collapse === true"
              style="color: #2d8cf0; width: 24px; height: 20px; display: inline-flex; align-items: center;">
              <i class="ri-arrow-down-s-fill"></i>
            </div>
          </template>
          <template v-else>
            <div style="width: 24px; height: 20px;"></div>
          </template>
          <template v-if="a.hasOwnProperty('children')">
            <div style="color: #ff9900; width: 24px; height: 20px; display: inline-flex; align-items: center;">
              <i class="ri-folder-fill"></i>
            </div>
          </template>
          <template v-else>
            <div style="color: #ff9900; width: 24px; height: 20px; display: inline-flex; align-items: center;">
              <i class="ri-markdown-line"></i>
            </div>
          </template>
          <div class="v-tree-item-title" style="word-break: keep-all; height: 20px; line-height: 20px;">
            {{ a.name }}
          </div>
          <div style="width: 4px;"></div>
        </div>
        <div>
          <div style="width: 4px;"></div>
          <template v-if="a.control">
            <div
              @click="openMenu(a)"
              style="color: #ff9900; width: 20px; height: 20px; display: inline-flex; align-items: center; position: relative;">
              <i class="ri-add-line"></i>
            </div>
          </template>
          <template v-else>
            <div style="width: 20px;"></div>
          </template>
        </div>
      </div>
      <template v-if="a.hasOwnProperty('children')">
        <Tree
          :data="a.children"
          :deep="deep + 1"
          :style="{ 'display': a.collapse ? '' : 'none' }"></Tree>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tree",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    deep: {
      type: Number,
      default() {
        return 0;
      }
    },
  },
  data() {
    return {
      menu_show: false,
    };
  },
  computed: {
    count() {
      let i = this.deep
      i++
      return i
    }
  },
  methods: {
    openMenu(node) {
      node.menu = true;
      this.$forceUpdate();
    },
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

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #515a6e;
  font-size: 14px;
  font-family: Consolas, Monaco, monospace;
}

li {
  padding: 0;
  margin: 0;
  color: #515a6e;
  font-size: 14px;
  font-family: Consolas, Monaco, monospace;
}

.v-tree-item {
  border-left: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4px;
}

.v-tree-item:hover, .v-tree-item-activated {
  background-color: #f8f8f9;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid #ed4014;
  color: #2d8cf0;
  cursor: pointer;
}

.v-tree-item > div {
  display: flex;
}

</style>
