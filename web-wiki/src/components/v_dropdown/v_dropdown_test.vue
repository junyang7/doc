<template>
  <div>
    <div>
      <div>
        <v_dropdown>
          <template slot="dropdown_head">
            <v_button>下拉框</v_button>
          </template>
          <template slot="dropdown_item_container">
            <v_dropdown_item :key="b" :icon="a.icon" :text="a.text" :color="a.color" v-for="(a, b) in item_list"></v_dropdown_item>
          </template>
        </v_dropdown>
      </div>
    </div>


    <div style="margin: 2px;">
      <br/>
      <br/>
      <div style="font-size: 18px; font-weight: 800;">触发组件</div>
      <p>任何有效HTML元素都可以作为触发组件使用，只需要引入组件后，在组件内部，绑定slot属性值为dropdown_head</p>
      <div>
        <ul>
          <li>
            <div style="margin: 10px 0;">
              <div>使用元素作为触发组件</div>
              <div>
                <div>
                  <pre><code v-html="code_list[0]"></code></pre>
                </div>
                <div>
                  <v_dropdown>
                    <template slot="dropdown_head">
                      <a href="javascript:void(0)">下拉框</a>
                    </template>
                    <template slot="dropdown_item_container">
                      <div :key="b" v-for="(a, b) in item_list">
                        <button>{{ a.text }}</button>
                      </div>
                    </template>
                  </v_dropdown>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div style="margin: 10px 0;">
              <div>使用组件作为触发组件</div>
              <div>
                <div>
                  <pre><code v-html="code_list[1]"></code></pre>
                </div>
                <div>
                  <v_dropdown>
                    <template slot="dropdown_head">
                      <v_button>下拉框</v_button>
                    </template>
                    <template slot="dropdown_item_container">
                      <div :key="b" v-for="(a, b) in item_list">
                        <button>{{ a.text }}</button>
                      </div>
                    </template>
                  </v_dropdown>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div style="margin: 2px;">
      <br/>
      <br/>
      <div style="font-size: 18px; font-weight: 800;">遮罩组件</div>
      <div>
        <ul>
          <li>
            <div style="margin: 10px 0;">
              <div>自定义</div>
              <div>
                <div>
                  <pre><code v-html="code_list[2]"></code></pre>
                </div>
                <div>
                  <v_dropdown>
                    <template slot="dropdown_head">
                      <v_button>下拉框</v_button>
                    </template>
                    <template slot="dropdown_item_container">
                      <div :key="b" v-for="(a, b) in item_list">
                        <button>{{ a.text }}</button>
                      </div>
                    </template>
                  </v_dropdown>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div style="margin: 10px 0;">
              <div>v_dropdown_item</div>
              <div>
                <div>
                  <pre><code v-html="code_list[3]"></code></pre>
                </div>
                <div>
                  <v_dropdown>
                    <template slot="dropdown_head">
                      <v_button>下拉框</v_button>
                    </template>
                    <template slot="dropdown_item_container">
                      <div :key="b" v-for="(a, b) in item_list">
                        <v_dropdown_item></v_dropdown_item>
                      </div>
                    </template>
                  </v_dropdown>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <div style="margin: 10px 0;">
                    <p>大小</p>
                    <p>显式设置size属性可指定大小</p>
                    <div>
                      <ul>
                        <li>
                          <p>大</p>
                          <p>size="large"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[4]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item size="large"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                        <li>
                          <p>中</p>
                          <p>size="middle"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[5]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item size="middle"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                        <li>
                          <p>小</p>
                          <p>size="small"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[6]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item size="small"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div style="margin: 10px 0;">
                    <p>文本</p>
                    <p>显式设置text属性可指定文本</p>
                    <div>
                      <div>
                        <pre><code v-html="code_list[7]"></code></pre>
                      </div>
                      <div>
                        <v_dropdown>
                          <template slot="dropdown_head">
                            <v_button>下拉框</v_button>
                          </template>
                          <template slot="dropdown_item_container">
                            <div :key="b" v-for="(a, b) in item_list">
                              <v_dropdown_item :text="a.text"></v_dropdown_item>
                            </div>
                          </template>
                        </v_dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div style="margin: 10px 0;">
                    <p>图标</p>
                    <p>显式设置icon属性可指定图标</p>
                    <div>
                      <ul>
                        <li>
                          <p>图标</p>
                          <p>icon="icon"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[8]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item :icon="a.icon"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                        <li>
                          <p>颜色</p>
                          <p>color="color"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[9]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item :icon="a.icon" :color="a.color"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                        <li>
                          <p>混合</p>
                          <p>text="text" icon="icon" color="color"</p>
                          <div>
                            <div>
                              <pre><code v-html="code_list[10]"></code></pre>
                            </div>
                            <div>
                              <v_dropdown>
                                <template slot="dropdown_head">
                                  <v_button>下拉框</v_button>
                                </template>
                                <template slot="dropdown_item_container">
                                  <div :key="b" v-for="(a, b) in item_list">
                                    <v_dropdown_item :text="a.text" :icon="a.icon" :color="a.color"></v_dropdown_item>
                                  </div>
                                </template>
                              </v_dropdown>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
import v_dropdown from "./v_dropdown";
import v_dropdown_item from "./v_dropdown_item";
import v_button from "../v_button/v_button";
export default
{
  name: "v_dropdown_test",
  components: {v_button, v_dropdown_item, v_dropdown},
  data()
  {
    return {
      item_list: [
        {
          text: '选项1',
          icon: 'ri-pie-chart-line',
          color: '#19be6b',
        },
        {
          text: '选项2',
          icon: 'ri-donut-chart-line',
          color: '#ff9900',
        },
        {
          text: '选项3',
          icon: 'ri-bubble-chart-line',
          color: '#ed4014',
        },
      ],
      code_list: [
`&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;a href=&quot;javascript:void(0)&quot;&gt;下拉框&lt;/a&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;button&gt;{{ a.text }}&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;button&gt;{{ a.text }}&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;button&gt;{{ a.text }}&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item size=&quot;large&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item size=&quot;middle&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item size=&quot;small&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item :text=&quot;a.text&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item :icon=&quot;a.icon&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item :icon=&quot;a.icon&quot; :color=&quot;a.color&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
        `&lt;v_dropdown&gt;
  &lt;template slot=&quot;dropdown_head&quot;&gt;
    &lt;v_button&gt;下拉框&lt;/v_button&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;dropdown_item_container&quot;&gt;
    &lt;div :key=&quot;b&quot; v-for=&quot;(a, b) in item_list&quot;&gt;
      &lt;v_dropdown_item :text=&quot;a.text&quot; :icon=&quot;a.icon&quot; :color=&quot;a.color&quot;&gt;&lt;/v_dropdown_item&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v_dropdown&gt;`,
      ],
    };
  },
}
</script>

<style scoped>
*
{
  font-family: Consolas, Monaco, monospace;
  font-size: 14px;
  color: #515a6e;
}
pre
{
  border: 1px solid #e8eaec;
  display: inline-block;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 2px;
  margin-left: 2px;
  margin-right: 2px;
}
</style>
