<template>
    <div>
        <div>
            <v_button :processing="true" type="primary">正在处理</v_button>
        </div>
        <br/>
        <p>按钮一般用在需要与用户需要交互的地方。用户通过点击按钮，产生交互，例如提交表单、打开弹窗、关闭页面等等。</p>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">样式</div>
            <p>通过给组件的type属性设置不同的值可以获得不同的样式</p>
            <ul>
                <li>
                    <div>默认</div>
                    <div>
                        <pre><code>&#60;v_button type="default"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button type="default"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>常规</div>
                    <div>
                        <pre><code>&#60;v_button type="primary"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button type="primary"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>成功</div>
                    <div>
                        <pre><code>&#60;v_button type="success"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button type="success"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>警告</div>
                    <div>
                        <pre><code>&#60;v_button type="warn"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button type="warn"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>错误</div>
                    <div>
                        <pre><code>&#60;v_button type="error"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button type="error"></v_button>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">大小</div>
            <p>通过给组件的size属性设置不同的值可以获得不同的尺寸</p>
            <ul>
                <li>
                    <div>大按钮</div>
                    <div>
                        <i>高度48px，字号16px，左右内边距24px，最小宽度48px；</i>
                    </div>
                    <div>
                        <pre><code>&#60;v_button size="large"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button size="large"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>中按钮</div>
                    <div>
                        <i>高度36px，字号14px，左右内边距12px，最小宽度36px；</i>
                    </div>
                    <div>
                        <pre><code>&#60;v_button size="middle"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button size="middle"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>小按钮</div>
                    <div>
                        <i>高度24px，字号12px，左右内边距0px，最小宽度24px；</i>
                    </div>
                    <div>
                        <pre><code>&#60;v_button size="small"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button size="small"></v_button>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">填充</div>
            <p>通过给组件的显式指定long属性可以让按钮自动水平100%填充</p>
            <div>
                <pre><code>&#60;v_button long="long"&#62;&#60;/v_button&#62;</code></pre>
                <p>
                    <v_button long="long"></v_button>
                </p>
            </div>
        </div>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">图标</div>
            <p>支持任何以class名称的字体图标</p>
            <ul>
                <li>
                    <div>前缀</div>
                    <div>绑定pre属性</div>
                    <div>
                        <pre><code>&#60;v_button :pre="'ri-login-box-line'"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button :pre="'ri-login-box-line'">登录</v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>图标</div>
                    <div>绑定mid属性（推荐）</div>
                    <div>
                        <pre><code>&#60;v_button :mid="'ri-login-box-line'"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button :mid="'ri-login-box-line'"></v_button>
                        </p>
                    </div>
                    <div>利用组件预留的默认slot插槽实现（直接内容插入到组件内部）</div>
                    <div>
                        <pre><code>&#60;v_button&#62;
    &#60;i class="ri-login-box-line"&#62;&#60;/i&#62;
&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button>
                                <i class="ri-login-box-line"></i>
                            </v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>后缀</div>
                    <div>绑定suf属性</div>
                    <div>
                        <pre><code>&#60;v_button :suf="'ri-login-box-line'"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button :suf="'ri-login-box-line'">登录</v_button>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">圆角</div>
            <p>通过给组件的显式指定circle属性可以让按钮获得圆角</p>
            <ul>
                <li>
                    <div>常规</div>
                    <div>
                        <pre><code>&#60;v_button circle&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button circle></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>图标</div>
                    <div>
                        <pre><code>&#60;v_button circle :mid="'ri-at-line'"&#62;&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button circle :mid="'ri-at-line'"></v_button>
                        </p>
                    </div>
                </li>
                <li>
                    <div>前缀</div>
                    <div>
                        <pre><code>&#60;v_button circle :pre="'ri-download-2-line'"&#62;下载文件&#60;/v_button&#62;</code></pre>
                        <p>
                            <v_button circle :pre="'ri-download-2-line'">下载文件</v_button>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">状态</div>
            <p>通过给组件的绑定processing可以实现处理中动画</p>
            <div>
                <pre><code>&#60;v_button :processing="true"&#62;&#60;/v_button&#62;</code></pre>
                <p>
                    <v_button :processing="true"></v_button>
                </p>
            </div>
        </div>


    </div>
</template>

<script>
import v_button from "./v_button";
export default {
    name: "Button_test",
    components: {v_button}
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
