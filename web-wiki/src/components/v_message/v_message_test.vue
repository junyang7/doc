<template>
    <div>

        <div>
            <v_button type="primary" @click.native="addMessagePrimary">消息</v_button>
        </div>

        <div style="margin: 2px;">
            <br/>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">引入</div>
            <pre><code>import VMessage from "./VMessage.js";</code></pre>
        </div>

        <div style="margin: 2px;">
            <br/>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">类型</div>
            <p>显式调用不同的方法可以指定不同类型</p>
            <div>
                <ul>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>信息</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.info()</code></pre>
                                </div>
                                <div>
                                    <v_button type="primary" @click.native="addMessagePrimary">信息</v_button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>成功</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.success()</code></pre>
                                </div>
                                <div>
                                    <v_button type="success" @click.native="addMessageSuccess">成功</v_button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>警告</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.warn()</code></pre>
                                </div>
                                <div>
                                    <v_button type="warn" @click.native="addMessageWarn">警告</v_button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>错误</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.error()</code></pre>
                                </div>
                                <div>
                                    <v_button type="error" @click.native="addMessageError">错误</v_button>
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
            <div style="font-size: 18px; font-weight: 800;">文本</div>
            <p>消息方法第1个参数接收消息文本</p>
            <div style="margin: 10px 0;">
                <div>
                    <div>
                        <pre><code>VMessage.info("Hello World!")</code></pre>
                    </div>
                    <div>
                        <v_button type="primary" @click.native="addMessagePrimaryText()">文本</v_button>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin: 2px;">
            <br/>
            <br/>
            <div style="font-size: 18px; font-weight: 800;">自动关闭</div>
            <p>消息方法第2个参数用于设置是否自动关闭</p>
            <div>
                <ul>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>自动关闭</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.info("我会自动关闭", true);</code></pre>
                                </div>
                                <div>
                                    <v_button type="primary" @click.native="addMessagePrimaryAutoCloseTrue()">自动关闭</v_button>
                                </div>
                            </div>
                        </div>
                        <div style="margin: 2px;">
                            <div>默认自动关闭。消息方法第3个参数用于设置自动关闭前的持续时间。单位是毫秒。默认2000。</div>
                            <div style="margin: 10px 0;">
                                <div>
                                    <div>
                                        <pre><code>VMessage.info("我会在10秒后自动关闭", true, 10000);</code></pre>
                                    </div>
                                    <div>
                                        <v_button type="primary" @click.native="addMessagePrimaryAutoClose10000()">持续时间</v_button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="margin: 10px 0;">
                            <div>手动关闭</div>
                            <div>
                                <div>
                                    <pre><code>VMessage.info("我不会自动关闭，需要手动关闭", false);</code></pre>
                                </div>
                                <div>
                                    <v_button type="primary" @click.native="addMessagePrimaryAutoCloseFalse()">手动关闭</v_button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import VMessage from "./VMessage.js";
import V_button from "../v_button/v_button";
export default {
    components: {V_button},
    data() {
        return {
            index: 0,
        };
    },
    methods: {
        addMessagePrimary()
        {
            VMessage.info();
        },
        addMessageSuccess()
        {
            VMessage.success();
        },
        addMessageWarn()
        {
            VMessage.warn();
        },
        addMessageError()
        {
            VMessage.error();
        },
        addMessagePrimaryText()
        {
            VMessage.info("Hello World!");
        },
        addMessagePrimaryAutoCloseTrue()
        {
            VMessage.info("我会自动关闭", true);
        },
        addMessagePrimaryAutoCloseFalse()
        {
            VMessage.info("我不会自动关闭，需要手动关闭", false);
        },
        addMessagePrimaryAutoClose10000()
        {
            VMessage.info("我会在10秒后自动关闭", true, 10000);
        },
    }
};
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
