<template>
    <div style="z-index: 1; position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
        <div style="position: absolute; left: 0; top: 0; right: 0; height: 100px; box-sizing: border-box; padding: 0 36px; display: flex; align-items: center; justify-content: space-between; background-color: #ffffff; border-bottom: 1px solid #e8eaec; box-shadow: 0 0 10px 4px #e8eaec;">
            <!--logo-->
            <v_badge :title="'大眼'" :sub="'wiki'"></v_badge>
            <!--photo-->
            <div style="z-index: 1; position: relative;">
                <div>
<!--                    <v_dropdown bottom right>-->
<!--                        <template slot="v_dropdown_head">-->
<!--&lt;!&ndash;                            <div style="height: 30px;"></div>&ndash;&gt;-->
<!--                            <Avatar size="large" src="static/photo.jpeg"/>-->
<!--&lt;!&ndash;                            <div style="height: 30px;"></div>&ndash;&gt;-->
<!--                        </template>-->
<!--                        <template slot="v_dropdown_list">-->
<!--                            <v_dropdown_item @click.native="controlDel" color="#2db7f5" icon="ri-logout-box-line" label="退出"></v_dropdown_item>-->
<!--                        </template>-->
<!--                    </v_dropdown>-->
                </div>
            </div>
        </div>
        <div style="z-index: -1; position: absolute; left: 0; top: 100px; right: 0; bottom: 0; display: flex;">
            <!--tree-->
            <div style="display: block; height: auto; padding: 36px; box-sizing: border-box; word-break: keep-all; ">
                <v_tree :data="title_list" :deep="0" :activated="activated"></v_tree>
            </div>
            <!--divide-->
            <div style="height: auto; border-left: 1px solid #e8eaec;"></div>



            <!--code&html-->
            <div style="position: relative; height: 100%; width: 100%;">
                <!--code-->
                <div v-show="show_code_container">
                    <div style="position: absolute; left: 36px; top: 36px; right: 36px; height: 36px; display: flex; align-items: center;">
                        <div>标题</div>
                        <div style="color: #ff0000;">*</div>
                    </div>
                    <div style="position: absolute; left: 36px; top: 72px; right: 36px; height: 36px;">
                        <Input v-model="document_title" type="text" autofocus/>
                    </div>
                    <div style="position: absolute; left: 36px; top: 142px; right: 36px; height: 36px; display: flex; align-items: center;">
                        <div>内容</div>
                        <div style="color: #ff0000;">*</div>
                    </div>
                    <div style="position: absolute; left: 36px; top: 178px; right: 36px; bottom: 102px;">
                        <div class="code-editor" ref="ace" style="width: 100%; height: 100%; line-height: 20px; box-sizing: border-box; color: #515a6e;"></div>
                    </div>
                    <div style="position: absolute; left: 36px; bottom: 30px; right: 36px; height: 36px;">
                        <Button v-if="action === 'add'" @click="buttonAdd" type="primary" icon="ios-checkmark" style="width: 50px;"></Button>
                        <Button v-if="action === 'set'" @click="buttonSet" type="primary" icon="ios-checkmark" style="width: 50px;"></Button>
                        <Button @click="buttonCel" icon="ios-close" style="width: 50px;"></Button>
                    </div>
                </div>
                <div v-show="show_html_container">
                    <div style="position: absolute; left: 36px; top: 36px; right: 36px; bottom: 36px;">
                        <div style="width: 100%; height: 100%; line-height: 20px; box-sizing: border-box; color: #515a6e; overflow: auto;">
                            <div class="marked" v-html="document_content_parsed"></div>
                        </div>
                    </div>
                </div>
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
// import V_dropdown from "../../components/v_dropdown";
// import V_dropdown_item from "../../components/v_dropdown_item";
import V_badge from "../../components/v_badge/v_badge";

export default
{
    name: "Index",
    components: {
        V_badge,
        // V_dropdown_item,
        // V_dropdown,
        v_tree
    },
    data()
    {
        return {
            loading: true,
            show_code_container: false,
            show_html_container: true,
            html: "",
            md: "",
            md_parsed_highlight: "",


            wiki_list: [
                {
                    id: 0,
                    name: "wiki",
                    pid: 0,
                    ranking: 0,
                    collapse: true,
                    control: false,
                },
            ],
            title: "",
            pid_ranking_max: {},
            map: {},
            test: {},
            title_list: [],


            document_title_tre: [],
            document_title_map: {},
            activated: null,
            document_title: "",
            document_content: "",
            document_content_parsed: "",
            code_container: null,
            ace_editor_option: {
                fontSize: 13,
                theme: "ace/theme/github",
                mode: "ace/mode/markdown",
                tabSize: 4,
                highlightActiveLine: true,
                printMarginColumn: 120,
                fontFamily: "Consolas, Monaco, monospace",
            },
            action: "add", // "" | add | set | del
        };
    },
    methods: {
        // 初始化
        async init()
        {
            // 获取标题列表
            await this.getDocumentTitleList();
            // 设置初始化时的激活节点（URL->根节点）
            this.setInitActivatedNode();
            // 获取激活节点内容
            await this.getContent();
            // 渲染内容
            this.renderDocumentContent();
            this.loading = false;
        },
        // 获取标题列表
        async getDocumentTitleList()
        {
            await axios.request(
                {
                    method: "GET",
                    url: "http://127.0.0.1/api/document/title/getList",
                }
            ).then(res => {
                console.log(res)
                if(res.data.data.document_list.length > 0)
                {
                    this.title_list = this.sort(this.convert(res.data.data.document_list), this);
                }
            }).catch(err => {
                console.log(err);
                this.loading = false;
            });
        },
        // 设置初始化时的激活节点（URL->根节点）
        setInitActivatedNode()
        {
            let document_id = this.$route.query.document_id ? parseInt(this.$route.query.document_id) : 1;
            this.activated = this.document_title_map[document_id];
        },
        // 获取激活节点内容
        async getContent()
        {
            await axios.request(
                {
                    method: "GET",
                    url: "http://127.0.0.1/api/document/content/get",
                    params: {
                        document_id: this.activated.id,
                    },
                }
            ).then(res => {
                this.document_content = res.data.data.document.content;
            }).catch(err => {
                console.log(err)
            });
        },
        // 渲染内容
        renderDocumentContent()
        {
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function(code) {
                    return hljs.highlightAuto(code).value;
                },
                pedantic: false,
                gfm: true,
                tables: true,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false
            });
            this.document_content_parsed = marked.parse(this.document_content);
            this.show_code_container = false;
            this.show_html_container = true;
        },


        // 树节点的点击事件
        async treeNodeClick(node)
        {
            this.loading = true;
            if(this.activated === node)
            {
                this.loading = false;
                return;
            }
            this.activated = node;
            this.$router.push(
                {
                    path: '/',
                    query: {
                        document_id: this.activated.id,
                    },
                }
            );
            // 获取激活节点内容
            await this.getContent();
            // 渲染内容
            this.renderDocumentContent();
            this.loading = false;
        },






        // 树节点控制按钮
        // 控制-新建
        controlAdd()
        {
            this.action = "add";
            this.document_title = "";
            this.code_container = ace.edit(this.$refs.ace, this.ace_editor_option);
            this.code_container.setValue("");
            this.show_code_container = true;
            this.show_html_container = false;
        },
        // 按钮-新建
        buttonAdd()
        {
            this.loading = true;
            let ranking = this.pid_ranking_max.hasOwnProperty(this.activated.id) ? this.pid_ranking_max[this.activated.id] + 1 : 1;
            let data = QS.stringify(
                {
                    title: this.document_title,
                    content: this.code_container.getValue(),
                    pid: this.activated.id,
                    ranking: ranking,
                }
            );
            axios.request(
                {
                    method: "POST",
                    url: "http://127.0.0.1/api/document/add",
                    data: data,
                }
            ).then(res => {
                console.log(res);
                this.$router.push(
                    {
                        path: '/',
                        query: {
                            document_id: res.data.data.document_id,
                        },
                    }
                );
                this.init();
            }).catch(err => {
                console.log(err);
                this.loading = false;
            });
        },
        // 控制-修改
        controlSet()
        {
            this.action = "set";
            this.document_title = this.activated.title;
            this.code_container = ace.edit(this.$refs.ace, this.ace_editor_option);
            this.code_container.setValue(this.document_content);
            this.show_code_container = true;
            this.show_html_container = false;
        },
        // 按钮-修改
        buttonSet()
        {
            this.loading = true;
            let ranking = this.pid_ranking_max.hasOwnProperty(this.activated.id) ? this.pid_ranking_max[this.activated.id] + 1 : 1;
            let data = QS.stringify(
                {
                    document_id: this.activated.id,
                    document_title: this.document_title,
                    document_content: this.code_container.getValue(),
                }
            );
            axios.request(
                {
                    method: "POST",
                    url: "http://127.0.0.1/api/document/set",
                    data: data,
                }
            ).then(res => {
                console.log(res);
                this.init();
            }).catch(err => {
                console.log(err);
                this.loading = false;
            });
        },









        get() {
            axios.get('http://127.0.0.1/api_md_parsed_highlight_get.php').then(res => {
                this.html = res.data;
            }).catch(err => {
                console.log(err);
            });
        },




        // 将记录行转换成树格式
        convert(row_list)
        {
            this.document_title_map = {};
            for(let i = 0, j = row_list.length; i < j; i++)
            {
                delete row_list[i].children;
                if(!this.pid_ranking_max.hasOwnProperty(row_list[i]['pid']))
                {
                    this.pid_ranking_max[row_list[i]['pid']] = parseInt(row_list[i]['ranking']);
                }
                else
                {
                    if(row_list[i]['ranking'] > this.pid_ranking_max[row_list[i]['pid']])
                    {
                        this.pid_ranking_max[row_list[i]['pid']] = parseInt(row_list[i]['ranking']);
                    }
                }
                row_list[i]['collapse'] = true;
                row_list[i]['control'] = false;
                this.document_title_map[row_list[i]['id']] = row_list[i];
            }
            let data_list = [];
            for(let i = 0, j = row_list.length; i < j; i++)
            {
                let parent = this.document_title_map[row_list[i]['pid']];
                if(parent)
                {
                    if(!parent.children)
                    {
                        parent.children = [];
                    }
                    parent.children.push(row_list[i]);
                    continue;
                }
                data_list.push(row_list[i]);
            }
            return data_list;
        },
        // 对树格式数据按升序排序
        sort(row_list, _this)
        {
            row_list.sort(function(a, b){
                return a['ranking'] - b['ranking'];
            })
            for(let i = 0; i < row_list.length; i++)
            {
                if(row_list[i].hasOwnProperty('children'))
                {
                    _this.sort(row_list[i]['children'], _this);
                }
            }
            return row_list;
        },




        controlDel()
        {
            console.log('del')
        },



        buttonCel()
        {
            this.show_code_container = false;
            this.show_html_container = true;
        },




    },
    mounted()
    {
        this.init();
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

.ace-github .ace_gutter {
     /*background: #f8f8f9;*/
     /*color: #808695;*/
}


.code-editor
{
    border: 1px solid #e8eaec;
    /*border-radius: 4px;*/
}
.code-editor:hover
{
    border: 1px solid #75a4f0;
    outline: 2px solid #dee8fb;
}
</style>
