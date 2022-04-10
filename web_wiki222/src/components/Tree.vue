<template>
  <div>
    <TreeNode
      :option="option"
      :data="data"
      :deep="0"></TreeNode>
  </div>
</template>

<script>
import TreeNode from "./TreeNode";
export default {
  name: "Tree",
  components: {TreeNode},
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
}
</script>

<style scoped>

</style>
