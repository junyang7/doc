<template>
    <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
        <table style="width: 100%; height: 100%; border-collapse: collapse;">
            <tr style="height: 80px; background-color: #ffffff">
                <td colspan="2">
                    <div style="height: 80px; width: 100%; display: flex; align-items: center; justify-content: space-between;">
<!--                        <div style="height: 30px; width: 30px; background-color: red">WIKI</div>-->
<!--                        <div style="box-sizing: border-box; padding-right: 10px;">-->
<!--                            <img style="border: 1px solid #e8eaec; width: 50px; height: 50px; border-radius: 100%;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a9d85ecf6bdba80120662104b791.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621833703&t=06a6bf4e41d62c880ae4203f38f09abb"/>-->
<!--                        </div>-->
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box;">
                        <table style="width: 100%; height: 100%; border-collapse: collapse;">
                            <tr style="height: 30px; background-color: #e8eaec;">
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="height: 100%; box-sizing: border-box;">
                                        <v_tree :data="data" :deep="0"></v_tree>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
                <td style="width: 100%;">
                    <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box;">
                        <table style="width: 100%; height: 100%; border-collapse: collapse;">
                            <tr style="height: 30px; background-color: #e8eaec;">
                                <td>
                                    <div style="height: 100%; width: 100%; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; padding: 0 10px;">
                                        <div></div>
                                        <div style="display: inline-flex; align-items: center; justify-content: flex-end;">
                                            <div style="line-height: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
                                                <i class="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div ref="ace" style="width: 100%; height: 100%; line-height: 20px;"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
<!--        <div style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); z-index: 100000000000; display: flex; align-items: center; justify-content: center;">-->
<!--            <div style="box-sizing: border-box; padding: 30px; background-color: #ffffff;">-->
<!--                <div style="font-size: 13px; padding-left: 4px;">选择操作：</div>-->
<!--                <div style="font-size: 13px; padding-left: 4px;">删除</div>-->
<!--                <div style="font-size: 13px; padding-left: 4px;">新建</div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>


import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import v_tree from '@/components/v_tree.vue'
export default {
  name: "Index",
    components: {v_tree},
  data() {
    return {
      html: "",
        data: [
            {
                "id": 0,
                "name": "wiki",
                "pid": 0,
                "ranking": 0,
                "collapse": true,
                "activated": false,
                "children": [
                    {
                        "id": 1,
                        "name": "客户端",
                        "pid": 0,
                        "ranking": 0,
                        "collapse": true,
                        "activated": false,
                        "children": [
                            {
                                "id": 3,
                                "name": "Android",
                                "pid": 1,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                                "children": [
                                    {
                                        "id": 10,
                                        "name": "app",
                                        "pid": 3,
                                        "ranking": 0,
                                        "collapse": true,
                                        "activated": false,
                                    },
                                    {
                                        "id": 10,
                                        "name": "h58888888888888888888888",
                                        "pid": 3,
                                        "ranking": 0,
                                        "collapse": true,
                                        "activated": false,
                                    }
                                ]
                            },
                            {
                                "id": 4,
                                "name": "iOS",
                                "pid": 1,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "服务端",
                        "pid": 0,
                        "ranking": 0,
                        "collapse": true,
                        "activated": false,
                        "children": [
                            {
                                "id": 5,
                                "name": "app",
                                "pid": 2,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            },
                            {
                                "id": 6,
                                "name": "mp",
                                "pid": 2,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            },
                            {
                                "id": 7,
                                "name": "admin",
                                "pid": 2,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            },
                            {
                                "id": 8,
                                "name": "h5",
                                "pid": 2,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            },
                            {
                                "id": 9,
                                "name": "src",
                                "pid": 2,
                                "ranking": 0,
                                "collapse": true,
                                "activated": false,
                            }
                        ]
                    }
                ]
            }
        ],
        ace_editor: null,
        activated: null,
    };
  },
  methods: {
      click(node)
      {
          node.activated = true;
          this.activated = node;
      },

  },
  mounted()
  {
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
      // this.aceEditor.resize();

  },
}
</script>

<style scoped>
tr
{
    padding: 0;
    margin: 0;
}
td
{
    padding: 0;
    margin: 0;
}
</style>
