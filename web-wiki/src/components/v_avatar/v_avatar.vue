<template>
  <div :class="{
      avatar: true,
      avatar_size_large: this.size === 'large',
      avatar_size_middle: this.size === 'middle',
      avatar_size_small: this.size === 'small',
      avatar_shape_rect: this.shape === 'rect',
      avatar_shape_circle: this.shape === 'circle',
    }">
    <div class="avatar_container">
      <template v-if="src">
        <img :src="src" alt="avatar"/>
      </template>
      <template v-else>
        <i class="ri-user-line"></i>
      </template>
    </div>
  </div>
</template>

<script>
export default
{
  name: "v_avatar",
  props: {
    // 尺寸
    src: {
      type: String,
      default()
      {
        return "";
      },
    },
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
    // 形状
    shape: {
      type: String,
      validator: (shape) => {
        return ["rect", "circle", ].indexOf(shape) !== -1;
      },
      default()
      {
        return "rect";
      },
    },
  },
}
</script>

<style scoped>
.avatar
{
  position: relative;
  background-color: rgba(242,242,242, 1);
  display: inline-block;
  border: 1px solid #e8eaec;
  box-shadow: 0 0 0 2px rgba(232,232,232, 0.2);
}
.avatar_container
{
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.avatar img
{
  width: 100%;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
}
/*size*/
.avatar_size_large
{
  height: 48px;
  width: 48px;
  font-size: 16px;
}
.avatar_size_middle
{
  height: 36px;
  width: 36px;
  font-size: 14px;
}
.avatar_size_small
{
  height: 24px;
  width: 24px;
  font-size: 12px;
}
/*shape*/
.avatar_shape_rect
{
  border-radius: 2px;
}
.avatar_shape_rect img
{
  -webkit-user-drag: none;
  border-radius: 2px;
}
.avatar_shape_circle
{
  border-radius: 100%;
}
.avatar_shape_circle img
{
  -webkit-user-drag: none;
  border-radius: 100%;
}
</style>
