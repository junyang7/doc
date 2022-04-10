<template>
    <div>
        <div>
            <v_input v-model="a"></v_input>
            <v_input v-model="o" password></v_input>
            <v_input v-model="f" pre="ri-lock-line"></v_input>
        </div>
        <br/>
        <p>输入框是单行输入组件。常用在各种少量文本提交的场景，例如登录、表单等。</p>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">数据</div>
            <p>显式指定v-model属性的值可以动态双向绑定数据</p>
            <div>
                <pre><code>&#60;v_input v-model="l" password&#62;&#60;/v_input&#62;</code></pre>
                <p>
                    <v_input v-model="o" password></v_input>
                </p>
            </div>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">尺寸</div>
            <p>显式设置size属性的值可以获得不同的尺寸</p>
            <ul>
                <li>
                    <div>大输入框</div>
                    <div>
                        <pre><code>&#60;v_input v-model="b" size="large"&#62;&#60;/v_input&#62;</code></pre>
                        <p>
                            <v_input v-model="b" size="large"></v_input>
                        </p>
                    </div>
                </li>
                <li>
                    <div>中输入框</div>
                    <div>
                        <pre><code>&#60;v_input v-model="b" size="middle"&#62;&#60;/v_input&#62;</code></pre>
                        <p>
                            <v_input v-model="c" size="middle"></v_input>
                        </p>
                    </div>
                </li>
                <li>
                    <div>小输入框</div>
                    <div>
                        <pre><code>&#60;v_input v-model="b" size="small"&#62;&#60;/v_input&#62;</code></pre>
                        <p>
                            <v_input v-model="d" size="small"></v_input>
                        </p>
                    </div>
                </li>
            </ul>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">图标</div>
            <p>支持任何class属性形式的字体图标</p>
            <ul>
                <li>
                    <div>前缀</div>
                    <div>
                        <i>显式设置pre属性的值</i>
                    </div>
                    <div>
                        <pre><code>&#60;v_input v-model="f" pre="ri-lock-line"&#62;&#60;/v_input&#62;</code></pre>
                        <p>
                            <v_input v-model="f" pre="ri-lock-line"></v_input>
                        </p>
                    </div>
                </li>
                <li>
                    <div>后缀</div>
                    <div>
                        <i>显式设置suf属性的值</i>
                    </div>
                    <div>
                        <i>绑定事件sufClick可以监听后缀的点击事件（该事件无参数）</i>
                    </div>
                    <div>
                        <pre><code>&#60;v_input v-model="i" @sufClick="sufClick_i" suf="ri-search-line"&#62;&#60;/v_input&#62;</code></pre>
                        <p>
                            <v_input v-model="i" @sufClick="sufClick_i" suf="ri-search-line"></v_input>
                        </p>
                    </div>
                </li>

            </ul>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">清空</div>
            <p>显示指定clear属性，当组件有内容时，组件内部右侧会出现清空图标，点击图标可以清空组件内容。</p>
            <div>
                <pre><code>&#60;v_input v-model="l" clear&#62;&#60;/v_input&#62;</code></pre>
                <p>
                    <v_input v-model="l" clear></v_input>
                </p>
            </div>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">密码</div>
            <p>显示指定password属性，组件内部右侧会出现密码显示或隐藏图标，点击图标显示或隐藏组件内容（本质上是切换type的值为text或password）。</p>
            <div>
                <pre><code>&#60;v_input v-model="l" password&#62;&#60;/v_input&#62;</code></pre>
                <p>
                    <v_input v-model="o" password></v_input>
                </p>
            </div>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">宽度</div>
            <p>显示指定long属性，组件会在水平方向上自动填充至100%</p>
            <div>
                <pre><code>&#60;v_input v-model="l" long&#62;&#60;/v_input&#62;</code></pre>
                <p>
                    <v_input v-model="r" long></v_input>
                </p>
            </div>
        </div>


    </div>
</template>

<script>
import v_input from "./v_input";
export default
{
    name: "v_input_test",
    components: {
        v_input
    },
    data()
    {
        return {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd',
            e: 'e',
            f: 'f',
            g: 'g',
            h: 'h',
            i: 'i',
            j: 'j',
            k: 'k',
            l: 'l',
            m: 'm',
            n: 'n',
            o: 'o',
            p: 'p',
            q: 'q',
            r: 'r',
            s: 's',
        };
    },
    methods: {
        sufClick_h()
        {
            console.log(this.h);
        },
        sufClick_i()
        {
            console.log(this.i);
        },
        sufClick_j()
        {
            console.log(this.j);
        },
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
}
</style>
