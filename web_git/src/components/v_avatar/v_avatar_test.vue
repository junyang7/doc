<template>
    <div>

        <div>
            <v_avatar></v_avatar>
        </div>

        <div style="margin: 2px;">
            <br/>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">大小</div>
            <p>显式设置size属性的值可指定大小</p>
            <div>
                <ul>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>大</div>
                            <div>size="large"</div>
                            <div>
                                <div>
                                    <pre><code v-html=""></code></pre>
                                </div>
                                <div>
                                    <v_avatar size="large"></v_avatar>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>中</div>
                            <div>size="middle"</div>
                            <div>
                                <div>
                                    <pre><code v-html=""></code></pre>
                                </div>
                                <div>
                                    <v_avatar size="middle"></v_avatar>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>小</div>
                            <div>size="small"</div>
                            <div>
                                <div>
                                    <pre><code v-html=""></code></pre>
                                </div>
                                <div>
                                    <v_avatar size="small"></v_avatar>
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
            <div style="font-size: 18px; font-weight: 800;">形状</div>
            <p>显式设置shape属性的值可指定形状</p>
            <div>
                <ul>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>矩形</div>
                            <div>shape="rect"</div>
                            <div>
                                <div>
                                    <pre><code v-html=""></code></pre>
                                </div>
                                <div>
                                    <v_avatar shape="rect"></v_avatar>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>圆形</div>
                            <div>shape="circle"</div>
                            <div>
                                <div>
                                    <pre><code v-html=""></code></pre>
                                </div>
                                <div>
                                    <v_avatar shape="circle"></v_avatar>
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
            <div style="font-size: 18px; font-weight: 800;">图片</div>
            <p>显式设置src属性的值可指定图片</p>
            <div style="margin: 10px 0;">
                <div>矩形</div>
                <div>src="src"</div>
                <div>
                    <div>
                        <pre><code v-html=""></code></pre>
                    </div>
                    <div>
                        <v_avatar src="static/photo.jpeg"></v_avatar>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import V_avatar from "./v_avatar";
export default
{
    name: "v_avatar_test",
    components: {V_avatar}
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
