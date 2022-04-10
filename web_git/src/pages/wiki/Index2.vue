<template>
    <div>
        <div style="height: 100px; width: 100%; border-bottom: 1px solid #e8eaec; box-sizing: border-box; padding: 0 36px; display: flex; align-items: center; justify-content: space-between; background-color: #001529;">
            <div style="position: relative; width: auto; display: flex;">
                <div style="font-size: 26px; font-weight: 800; word-break: keep-all; color: #ffffff;">大眼</div>
                <div style="position: relative;">
                    <div style="position: absolute; margin-top: -8px; word-break: keep-all; font-size: 10px; background-color: red; display: inline-block; color: #ffffff; border-radius: 2px; box-sizing: border-box; padding: 0 4px;">wiki</div>
                </div>
            </div>
            <div style="position: relative;">
                <div>
                    <Dropdown placement="bottom-end">
                        <Avatar size="large" src="static/photo.jpeg"/>
                        <DropdownMenu slot="list">
                            <DropdownItem>退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div style="display: flex;">
            <div style="display: block; height: auto; padding: 36px; box-sizing: border-box; word-break: keep-all;">
                <v_tree :data="data" :deep="0"></v_tree>
            </div>
            <div style="height: auto; border-left: 1px solid #dcdee2;"></div>
            <div style="overflow: auto; box-sizing: border-box; padding: 0 36px 0 36px; height: 100%;">
                <div style="height: 36px;"></div>
<!--                <div class="marked" v-html="html"></div>-->
<!--                <textarea v-model="md"></textarea>-->
<!--                <button @click="add">创建</button>-->
                <div ref="ace" style="width: 500px; height: 100%; line-height: 20px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import "highlight.js/styles/github.css";
import v_tree from '@/components/v_tree.vue'

import marked from "marked";
import hljs from "highlight.js";
import QS from "qs";

import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'

export default {
    name: "Index",
    components: {v_tree},
    data() {
        return {
            html: "",
            title_list: [
                {
                    id: 1,
                    name: '客户端',
                    icon: 'ri-file-list-line',
                    pid: 0,
                    ranking: 8,
                    collapse: true,
                    control: false,
                },
                {
                    id: 2,
                    name: '服务端',
                    icon: 'ri-file-list-line',
                    pid: 0,
                    ranking: 7,
                    collapse: true,
                    control: false,
                },
                {
                    id: 3,
                    name: '订单中心',
                    icon: 'ri-file-list-line',
                    pid: 2,
                    ranking: 6,
                    collapse: true,
                    control: false,
                },
                {
                    id: 4,
                    name: '支付中心',
                    icon: 'ri-file-list-line',
                    pid: 2,
                    ranking: 5,
                    collapse: true,
                    control: false,
                },
                {
                    id: 5,
                    name: '商品中心',
                    icon: 'ri-file-list-line',
                    pid: 2,
                    ranking: 4,
                    collapse: true,
                    control: false,
                },
                {
                    id: 6,
                    name: 'app',
                    icon: 'ri-file-list-line',
                    pid: 3,
                    ranking: 3,
                    collapse: true,
                    control: false,
                },
                {
                    id: 7,
                    name: 'mp',
                    icon: 'ri-file-list-line',
                    pid: 3,
                    ranking: 2,
                    collapse: true,
                    control: false,
                },
                {
                    id: 8,
                    name: 'h5',
                    icon: 'ri-file-list-line',
                    pid: 3,
                    ranking: 1,
                    collapse: true,
                    control: false,
                },
            ],
            data: [
                {
                    "id": 0,
                    "name": "wiki",
                    "pid": 0,
                    "ranking": 0,
                    "collapse": true,
                    control: false,
                    "children": [
                        {
                            "id": 1,
                            "name": "客户端",
                            "pid": 0,
                            "ranking": 0,
                            "collapse": true,
                            control: false,
                            "children": [
                                {
                                    "id": 3,
                                    "name": "Android",
                                    "pid": 1,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                    "children": [
                                        {
                                            "id": 10,
                                            "name": "app",
                                            "pid": 3,
                                            "ranking": 0,
                                            "collapse": true,
                                            control: false,
                                        },
                                        {
                                            "id": 10,
                                            "name": "h58888888888888888888888",
                                            "pid": 3,
                                            "ranking": 0,
                                            "collapse": true,
                                            control: false,
                                        }
                                    ]
                                },
                                {
                                    "id": 4,
                                    "name": "iOS",
                                    "pid": 1,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "服务端",
                            "pid": 0,
                            "ranking": 0,
                            "collapse": true,
                            control: false,
                            "children": [
                                {
                                    "id": 5,
                                    "name": "app",
                                    "pid": 2,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                },
                                {
                                    "id": 6,
                                    "name": "mp",
                                    "pid": 2,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                },
                                {
                                    "id": 7,
                                    "name": "admin",
                                    "pid": 2,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                },
                                {
                                    "id": 8,
                                    "name": "h5",
                                    "pid": 2,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                },
                                {
                                    "id": 9,
                                    "name": "src",
                                    "pid": 2,
                                    "ranking": 0,
                                    "collapse": true,
                                    control: false,
                                }
                            ]
                        }
                    ]
                }
            ],
            md: "",
            md_parsed_highlight: "",
            ace_editor: null,
            activated: null,
        };
    },
    methods: {
        get() {
            axios.get('http://127.0.0.1/api_md_parsed_highlight_get.php').then(res => {
                this.html = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        init () {
            this.title_list = this.sort(this.convert(this.title_list), this);
            // this.data = this.title_list;
            console.log(JSON.stringify(this.title_list))
            console.log(JSON.stringify(this.data))
        },
        // 转换格式
        convert (row_list) {
            let map = {};
            for (let i = 0, j = row_list.length; i < j; i++) {
                delete row_list[i].children;
                map[row_list[i]['id']] = row_list[i];
            }
            let data_list = [];
            for (let i = 0, j = row_list.length; i < j; i++) {
                let parent = map[row_list[i]['pid']];
                if (parent) {
                    if (!parent.children) {
                        parent.children = [];
                    }
                    parent.children.push(row_list[i]);
                    continue;
                }
                data_list.push(row_list[i]);
            }
            return data_list;
        },
        // 排序
        sort (row_list, _this) {
            row_list.sort(function (a, b) {
                return a['ranking'] - b['ranking'];
            })
            for (let i = 0; i < row_list.length; i++) {
                if (row_list[i].hasOwnProperty('children')) {
                    _this.sort(row_list[i]['children'], _this);
                }
            }
            return row_list;
        },

    },
    mounted() {
        this.get();
        this.init();
        this.ace_editor = ace.edit(
            this.$refs.ace,
            {
                fontSize: 13,
                theme: 'ace/theme/github',
                mode: 'ace/mode/markdown',
                tabSize: 4,
                highlightActiveLine: true,
                printMarginColumn: 120,
                fontFamily: 'Consolas, Monaco, monospace'
            }
        );
    },
}
</script>

<style>
/*标题*/
.marked h1, h2, h3, h4, h5, h6
{
    font-size: 100%;
    font-weight: bolder;
    color: #17233d;
}
.marked h1
{
    font-size: 2em;
    margin: .67em 0;
}
.marked h2
{
    font-size: 1.5em;
    margin: .75em 0
}
.marked h3
{
    font-size: 1.17em;
    margin: .83em 0
}
.marked h5
{
    font-size: .83em;
    margin: 1.5em 0
}
.marked h6
{
    font-size: .75em;
    margin: 1.67em 0
}
.marked hr
{
    /*height: 1px;*/
    /*background-color: #e8eaec;;*/
    border: 0;
    border-top: 1px dashed #e8eaec;
}
/*代码*/
.marked pre
{
    overflow: auto;
    color: #515a6e;
    border: 1px solid #e8eaec;
    border-radius: 2px;
    /*background-color: #f8f8f9;*/
}
.marked code
{
    font-family: Consolas, Monaco, monospace;
    font-size: 13px;
    color: #515a6e !important;
}
.marked pre > *
{
    color: #515a6e;
}
/*表格*/
.marked table
{
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    font-size: 13px;
    margin: 10px 0;
}
.marked table th
{
    font-weight: bold;
}
.marked table th, .marked table td
{
    padding: 6px 13px;
    border: 1px solid #e8eaec;
    height: 36px;
}
.marked table tr
{
    background-color: #fff;
    border-top: 1px solid #e8eaec;
}
.marked table tr:nth-child(2n)
{
    background-color: #f8f8f9;
}
.marked table thead tr, .marked table thead tr
{
    background-color: #f8f8f9;
}
</style>
