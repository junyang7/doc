<template>
  <ul>
    <li v-for="(item, index) in data" :key=" index">
      <div>
        <!--折叠线-->
        <i
          v-if="item.children"
          :class="'ri-checkbox-indeterminate-line'"></i>
        <!--垂直线-->
        <!--水平线-->
      </div>
      <TreeNode
        :deep="count"
        :option="option"
        :data="item.children"
        v-if="item.children"></TreeNode>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    data: Array,
    option: Object,
    deep: Number,
  },
  data () {
    return {
      activated: {},
    };
  },
  computed: {
    count () {
      let i = this.deep;
      i ++;
      return i;
    }
  }
}
</script>

<style scoped>
div.libs_for
{
  user-select: none;
}
ul
{
  list-style: none;
  font-size: 0px;
  vertical-align: top;
  margin: 0px;
  padding: 0px;
}
.item-default
{
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid transparent;
  margin-top: 0px;
  margin-right: 1px;
  margin-bottom: 1px;
  margin-left: 0px;
  text-indent: 5px;
  padding-top: 0px;
  padding-right: 5px;
  padding-bottom: 0px;
  color: #515a6e;
  white-space: nowrap;
  padding-left: 5px;
}
.item-default:hover
{
  background-color: #f8f8f9;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid #2d8cf0;
  color: #2d8cf0;
}
i, a, span
{
  height: 36px;
  line-height: 36px;
  vertical-align: top;
  display: inline-block;
  font-size: 12px;
}
.item-active
{
  background-color: #f8f8f9;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 2px solid #2d8cf0;
  color: #2d8cf0;
}
</style>
