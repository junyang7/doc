<template>
    <div>
        <div style="position: relative; width: 200px; height: 100px; border: 1px solid #e8eaec;">
            <div>文本</div>
            <v_loading :loading="true"></v_loading>
        </div>
        <br/>
        <p>加载中组件常用在页面或事件未就绪前的遮罩</p>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">局部</div>
            <p>显示绑定loading属性的值可以在局部打开或关闭加载中组件</p>
            <ul>
                <li>
                    <div>打开</div>
                    <div>
                        <pre><code>&#60;v_loading :loading="true"&#62;&#60;/v_loading&#62;</code></pre>
                        <div style="position: relative; width: 200px; height: 100px; border: 1px solid #e8eaec;">
                            <div>文本</div>
                            <v_loading :loading="true"></v_loading>
                        </div>
                    </div>
                </li>
                <li>
                    <div>关闭</div>
                    <div>
                        <pre><code>&#60;v_loading :loading="false"&#62;&#60;/v_loading&#62;</code></pre>
                        <div style="position: relative; width: 200px; height: 100px; border: 1px solid #e8eaec;">
                            <div>文本</div>
                            <v_loading :loading="false"></v_loading>
                        </div>
                    </div>
                </li>
            </ul>
        </div>


        <div>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">全局</div>
            <p>显示指定fixed属性可以让组件以全局最顶层的方式展示</p>
            <div>
                <pre><code>&#60;v_loading fixed&#62;&#60;/v_loading&#62;</code></pre>
                <div style="position: relative; width: 200px; height: 100px; border: 1px solid #e8eaec;">
                    <div>文本</div>
                    <template v-if="fixed">
                        <v_loading fixed :loading="loading"></v_loading>
                    </template>
                    <template v-else>
                        <v_loading :loading="loading"></v_loading>
                    </template>
                </div>
                <br/>
                <div>
                    <v_button @click.native="fullLoading" :disabled="disabled" type="warn">测试全局加载中</v_button>
                </div>
                <div>
                    <v_button @click.native="partLoading" :disabled="disabled" type="primary">测试局部加载中</v_button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import V_loading from "./v_loading";
import V_button from "../v_button/v_button";
import V_input from "../v_input/v_input";
export default
{
    name: "v_loading_test",
    components: {V_input, V_button, V_loading},
    data()
    {
        return {
            fixed: false,
            loading: false,
            disabled: false,
        };
    },
    methods: {
        partLoading()
        {
            this.loading = true;
            this.disabled = true;
            this.init();
        },
        fullLoading()
        {
            this.fixed = true;
            this.loading = true;
            this.disabled = true;
            this.init();
        },
        init()
        {
            setTimeout(() => {
                this.loading = false;
                this.disabled = false;
                this.fixed = false;
            }, 1000);
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
