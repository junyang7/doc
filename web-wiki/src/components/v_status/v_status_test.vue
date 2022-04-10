<template>
    <div>
        <div style="display: inline-flex; align-items: center">
            <v_status></v_status>
            <div>正在直播...</div>
        </div>
        <br/>
        <br/>

        <div style="font-size: 30px; font-weight: 900;">状态</div>
        <br/>

        <div>通过给组件的type属性设置不同的值可以获得不同的颜色（预设）</div>
        <br/>
        <br/>

        <div>
            <div>
                <div>默认</div>
                <div>
                    <pre><code>&#60;v_status type="default"&#62;&#60;/v_status&#62;</code></pre>
                    <p>
                        <v_status type="default"></v_status>
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <div>成功</div>
                <div>
                    <pre><code>&#60;v_status type="success"&#62;&#60;/v_status&#62;</code></pre>
                    <p>
                        <v_status type="success"></v_status>
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <div>警告</div>
                <div>
                    <pre><code>&#60;v_status type="warn"&#62;&#60;/v_status&#62;</code></pre>
                    <p>
                        <v_status type="warn"></v_status>
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <div>错误</div>
                <div>
                    <pre><code>&#60;v_status type="error"&#62;&#60;/v_status&#62;</code></pre>
                    <p>
                        <v_status type="error"></v_status>
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <div>自定义</div>
                <div style="font-size: 12px;">显式设置color属性的值（任意合法css颜色）可以获得自定义颜色（color优先级高于type）</div>
                <div>
                    <pre><code>&#60;v_button color="#9400d3"&#62;&#60;/v_button&#62;</code></pre>
                    <p>
                        <v_status color="#9400d3"></v_status>
                    </p>
                </div>
            </div>

        </div>


    </div>

</template>

<script>
import V_status from "./v_status";
export default
{
    name: "v_status_test",
    components: {V_status}
}
</script>

<style scoped>
*
{
    font-family: Consolas, Monaco, monospace;
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
