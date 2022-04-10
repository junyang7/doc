<template>
    <ul class="v_tree_ul">
        <li class="v_tree_ul_li" v-for="(a, b) in data">
            <div
                @mouseenter="a.control = true"
                @mouseleave="a.control = false"
                @click="click(a)"
                :class="{
                    'v-tree-item': true,
                    'v-tree-item-activated': a === activated
                }">
                <div>
                    <div :style="{'width': deep * 24 + 'px'}"></div>
                    <template v-if="a.hasOwnProperty('children')">
                        <div
                            @click.stop="collapse(a)"
                            v-if="a.collapse === false" style="width: 24px; height: 36px; display: inline-flex; align-items: center; font-size: 16px;">
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                        <div
                            @click.stop="collapse(a)"
                            v-if="a.collapse === true" style="width: 24px; height: 36px; display: inline-flex; align-items: center; font-size: 16px;">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                    </template>
                    <template v-else>
                        <div style="width: 24px; height: 36px;"></div>
                    </template>
<!--                    <template v-if="a.hasOwnProperty('children')">-->
<!--                        <div style="width: 24px; height: 36px; display: inline-flex; align-items: center;">-->
<!--                            <i class="ri-folder-line"></i>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template v-else>-->
<!--                        <div style="width: 24px; height: 36px; display: inline-flex; align-items: center;">-->
<!--                            <i class="ri-file-text-line"></i>-->
<!--                        </div>-->
<!--                    </template>-->
                    <div class="v-tree-item-title" style="word-break: keep-all; height: 36px; line-height: 36px;">
                        {{ a.title }}
                    </div>
                    <div style="width: 4px;"></div>
                </div>
                <div>
                    <div style="width: 10px;"></div>
                    <div style="width: 36px; text-align: center;">
<!--                        <template v-if="a.control">-->
<!--                            <v_dropdown bottom right>-->
<!--                                <template slot="v_dropdown_head">-->
<!--                                    <div style="height: 36px; width: 36px; display: inline-flex; align-items: center; justify-content: center;">-->
<!--                                        <i class="ri-more-fill"></i>-->
<!--                                    </div>-->
<!--                                </template>-->
<!--                                <template slot="v_dropdown_list">-->
<!--                                    <v_dropdown_item @click.native="controlAdd" color="#19be6b" icon="ri-file-line" label="新建"></v_dropdown_item>-->
<!--                                    <v_dropdown_item @click.native="controlSet" color="#ff9900" icon="ri-edit-line" label="修改"></v_dropdown_item>-->
<!--                                    <v_dropdown_item @click.native="controlDel" color="#ed4014" icon="ri-delete-bin-line" label="删除"></v_dropdown_item>-->
<!--                                </template>-->
<!--                            </v_dropdown>-->
<!--                        </template>-->
<!--                        <template v-else>-->
<!--                            <div style="width: 20px;"></div>-->
<!--                        </template>-->
                    </div>

<!--                    <div style="width: 4px;"></div>-->
                </div>
            </div>
            <template v-if="a.hasOwnProperty('children')">
                <v_tree
                    :activated="activated"
                    :data="a.children"
                    :deep="deep + 1"
                    :style="{ 'display': a.collapse ? '' : 'none' }"></v_tree>
            </template>
        </li>
    </ul>
</template>

<script>
// import V_dropdown from "./v_dropdown";
// import V_dropdown_item from "./v_dropdown_item";
export default {
    name: "v_tree",
    // components: {V_dropdown_item, V_dropdown},
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
        activated: {
            type: Object,
            default()
            {
                return null;
            }
        }
    },
    data()
    {
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
        openMenu(node)
        {
            node.menu = true;
            this.$forceUpdate();
        },
        collapse(node) {
            node.collapse = !node.collapse
            this.$forceUpdate();
        },
        click(node) {
            this.$parent.treeNodeClick(node)
        },
        treeNodeClick(node)
        {
            this.$parent.treeNodeClick(node)
        },
        controlSet()
        {
            this.$parent.controlSet();
        },
        controlAdd()
        {
            this.$parent.controlAdd();
        },
        controlDel()
        {
            this.$parent.controlDel();
        },
    }
}
</script>

<style scoped>
.v_tree_ul  {
    list-style: none;
    padding: 0;
    margin: 0;
    /*color: #515a6e;*/
    /*font-size: 14px;*/
    /*font-family: Consolas, Monaco, monospace;*/
}
.v_tree_ul_li
{
    padding: 0;
    margin: 0;
    /*color: #515a6e;*/
    /*font-size: 14px;*/
    /*font-family: Consolas, Monaco, monospace;*/
}
.v-tree-item
{
    border-left: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*padding-left: 4px;*/
}
.v-tree-item:hover, .v-tree-item-activated
{
    background-color: #f8f8f9;
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: 1px solid #2d8cf0;
    color: #2d8cf0;
    cursor: pointer;
}
.v-tree-item > div
{
    display: flex;
}

</style>
