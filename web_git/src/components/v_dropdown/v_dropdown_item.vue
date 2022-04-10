<template>
  <div
    :class="{
      item: true,
      item_size_large: this.size === 'large',
      item_size_middle: this.size === 'middle',
      item_size_small: this.size === 'small',
    }">
    <template v-if="icon">
      <div class="item_icon" :style="{color: color, }">
        <i :class="icon"></i>
      </div>
    </template>

    <template v-if="icon && text">
      <div class="item_divide"></div>
    </template>

    <template v-if="text">
      <div class="item_text">{{ text }}</div>
    </template>

    <template v-if="!text && !icon">
      <div class="item_text">菜单</div>
    </template>
  </div>
</template>

<script>
export default
{
  name: "v_dropdown_item",
  props: {
    // 尺寸
    size: {
      type: String,
      validator: (size) => {
        return ["large", "middle", "small", ].indexOf(size) !== -1;
      },
      default()
      {
        return "middle";
      },
    },
    // 图标
    icon: {
      type: String,
      default()
      {
        return "";
      },
    },
    // 文本
    text: {
      type: String,
      default()
      {
        return "";
      },
    },
    // 颜色
    color: {
      type: String,
      default()
      {
        return "#808695";
      },
    },
  },
}
</script>

<style scoped>
/*base*/
.item
{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  width: 100%;
}
.item:hover
{
  background-color: #f8f8f9;
  cursor: pointer;
}
.item_icon
{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item_divide
{
  height: 100%;
  border-left: 1px solid #fafafa;
}
.item_text
{
  box-sizing: border-box;
  word-break: keep-all;
  height: 100%;
  display: flex;
  align-items: center;
  color: #808695;
}
/*size*/
.item_size_large
{
  height: 48px;
  font-size: 16px;
}
.item_size_large .item_icon
{
  width: 48px;
}
.item_size_large .item_text
{
  padding: 0 24px;
}
.item_size_middle
{
  height: 36px;
  font-size: 14px;
}
.item_size_middle .item_icon
{
  width: 36px;
}
.item_size_middle .item_text
{
  padding: 0 12px;
}
.item_size_small
{
  height: 24px;
  font-size: 12px;
}
.item_size_small .item_icon
{
  width: 24px;
}
.item_size_small .item_text
{
  padding: 0 6px;
}
</style>
