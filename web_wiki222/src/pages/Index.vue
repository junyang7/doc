<template>
    <div>
        <div style="height: 80px; width: 100%; border-bottom: 1px solid #e8eaec; display: flex; align-items: center; justify-content: space-between;">
            <div></div>
            <div style="box-sizing: border-box; padding-right: 15px;">
                <img style="border: 1px solid #e8eaec; width: 50px; height: 50px; border-radius: 100%;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a9d85ecf6bdba80120662104b791.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621833703&t=06a6bf4e41d62c880ae4203f38f09abb"/>
            </div>
        </div>
        <div style="display: flex;">
            <div style="display: block; height: auto; padding: 30px; box-sizing: border-box;">
                <p>
                    <v_tree :data="data" :deep="0"></v_tree>
                </p>
            </div>
            <div style="height: auto; border-left: 1px solid #e8eaec;"></div>
            <div style="height: auto; overflow: auto">
                <div style="height: 30px; padding: 0 30px; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-end">
                    <div style="height: 20px; font-size: 13px; line-height: 20px; color: #2d8cf0;">
                        <i class="ri-file-edit-fill"></i>
                    </div>
                    <div style="width: 10px;"></div>
                    <div style="height: 20px; font-size: 13px; line-height: 20px; color: #ed4014;">
                        <i class="ri-delete-bin-2-fill"></i>
                    </div>
                </div>

                <div style="padding:0 30px;">
                  <h1>Android</h1>
                </div>

                <div style="overflow: auto; box-sizing: border-box; padding: 0 30px 30px 30px;">
                    <div class="marked" v-html="html"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import "highlight.js/styles/github.css";
import v_tree from '@/components/v_tree.vue'
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
      ]
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
  },
}
</script>

<style>

</style>
