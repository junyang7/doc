<template>
    <div class="box">
        <div class="header"></div>
        <div class="nav-box">
            <div class="nav">
                <ul>
                    <li v-for="(a, b, c) in component_list">
                        <router-link :to="a.to">{{ a.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="val-box">
            <div class="val">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            component_list: [
                {
                    name: "设计规范",
                    to: "/component/v_design",
                },
                {
                    name: "按钮",
                    to: "/component/v_button",
                },
                {
                    name: "输入框",
                    to: "/component/v_input",
                },
                {
                    name: "加载中",
                    to: "/component/v_loading",
                },
                {
                    name: "状态",
                    to: "/component/v_status",
                },
                {
                    name: "下拉框",
                    to: "/component/v_dropdown",
                },
                {
                    name: "头像",
                    to: "/component/v_avatar",
                },
                {
                    name: "消息",
                    to: "/component/v_message",
                },
                {
                    name: "单选框",
                    to: "/component/v_radio",
                },
                {
                    name: "单选框组",
                    to: "/component/v_radio_group",
                },
                {
                    name: "多选框",
                    to: "/component/v_checkbox",
                },
                {
                    name: "多选框组",
                    to: "/component/v_checkbox_group",
                },
            ],
        };
    },
}
</script>

<style scoped>
.box
{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.header
{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100px;
    border-bottom: 1px solid #e8eaec;
}
.nav-box
{
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #e8eaec;
}
.nav
{
    position: absolute;
    left: 50px;
    top: 50px;
    right: 50px;
    bottom: 50px;
    overflow: auto;
}
.val-box
{
    position: absolute;
    left: 200px;
    top: 100px;
    bottom: 0;
    right: 0;
}
.val
{
    position: absolute;
    left: 50px;
    top: 50px;
    right: 50px;
    bottom: 50px;
    overflow: auto;
}
ul
{
    margin: 0;
    padding: 0;
}
li
{
    list-style: none;
}
li:hover
{

}
</style>
