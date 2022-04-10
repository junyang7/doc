<template>
  <div>
    <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
      <table border="1" style="width: 100%; height: 100%; border-collapse: collapse; border: 1px solid #e8eaec">
        <tr style="height: 80px;">
          <td colspan="2"></td>
        </tr>
        <tr style="height: 30px;">
          <td></td>
          <td>
            <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-end; padding: 0 20px;">
              <!--保存-->
              <template v-if="mode === 'editor'">
                <i
                  @click="view"
                  class="ri-check-line"></i>
              </template>
              <!--编辑-->
              <template v-if="mode === 'viewer'">
                <i
                  @click="edit"
                  class="ri-pencil-line"></i>
              </template>
            </div>
          </td>
        </tr>
        <tr style="height: 100%;">
          <td>
            <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box;">
              <!--树-->
              <Tree :data="data" :deep="0"></Tree>
            </div>
          </td>
          <td style="width: 100%;">
            <div style="position: relative; height: 100%; width: 100%; box-sizing: border-box;">
              <!--编辑器-->
              <template v-if="mode === 'editor'">
                <CodeEditor></CodeEditor>
              </template>
              <!--阅读器-->
              <template v-if="mode === 'viewer'">
                <HtmlViewer :html="html"></HtmlViewer>
              </template>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;">
      <div style="box-sizing: border-box; padding: 20px; background-color: #ffffff;">
        <div>
          <div style="height: 300px; width: 300px;">
            <Input size="normal"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tree from "@/components/v_plugs/Tree";
import CodeEditor from "@/components/v_plugs/CodeEditor";
import HtmlViewer from "@/components/v_plugs/HtmlViewer";
import Input from "@/components/v_plugs/Input";

export default {
  name: "Index",
  components: {
    Input,
    Tree,
    HtmlViewer,
    CodeEditor,
  },
  data() {
    return {
      mode: "viewer", // viewer | editor
      html: "<h1>Hello world! </h1>",
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
    };
  },
  methods: {
    edit() {
      this.mode = "editor";
    },
    view() {
      this.mode = "viewer";
    },
    click(node)
    {
      console.log(node)
    },
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
