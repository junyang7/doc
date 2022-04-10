<template>
    <div class="v_badge">
        <slot name="v_badge_title">
            <div class="v_badge_title">{{ title }}</div>
        </slot>
        <div class="v_badge_sub_title_container">
            <slot name="v_badge_sub_title">
                <div class="v_badge_sub_title">{{ sub }}</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default
{
    name: "v_badge",
    props: {
        title: {
            type: String,
            default()
            {
                return "主标题"
            },
        },
        sub: {
            type: String|Number,
            default()
            {
                return "子标题";
            }
        },
    },
}
</script>

<style scoped>
.v_badge
{
    position: relative;
    width: auto;
    display: inline-flex;
}
.v_badge_title
{
    font-size: 38px;
    font-weight: 800;
    word-break: keep-all;
}
.v_badge_sub_title_container
{
    position: relative;
    width: 100%;
}
.v_badge_sub_title
{
    position: absolute;
    margin-top: -4px;
    word-break: keep-all;
    font-size: 10px;
    background-color: red;
    color: #ffffff;
    border-radius: 16px;
    box-sizing: border-box;
    height: 16px;
    min-width: 16px;
    padding: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
