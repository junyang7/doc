<template>
    <div>
        <x_page></x_page>
<!--        <div style="height: 100px; border-bottom: 1px solid #e8eaec; box-shadow: 0 0 10px 4px #e8eaec;">-->
<!--            <div style="width: 960px; margin: auto; display: flex; height: 100%; align-items: center;">-->
<!--                <v_badge :title="'阳仔'" :sub="'仓库'"></v_badge>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div style="width: 960px; margin: auto; display: flex;">-->
<!--            <div style="box-sizing: border-box; padding: 36px 18px 36px 0; width: 700px;">-->
<!--                <div style="width: 100%; color: #515a6e;">-->



<!--                    <div style="display: flex;">-->
<!--                        <div style="width: 50px;">-->
<!--                            &lt;!&ndash;                            <div style="width: 50px; height: 50px; background-color: red; border-radius: 100%;"></div>&ndash;&gt;-->
<!--                            <v_avatar src="static/photo.jpeg" shape="circle" style="height: 50px; width: 50px;"></v_avatar>-->
<!--                        </div>-->
<!--                        <div style="width: 10px;"></div>-->
<!--                        <div style="width: 100%;">-->

<!--                            <div style="height: 20px; font-size: 16px; margin-bottom: 10px;">-->
<!--                                <span><a href="#">guojunyang</a> 在仓库 <a href="#">guojunyang</a> / php 中修改了分支 master</span>-->
<!--                            </div>-->

<!--                            <div style="margin-bottom: 10px;">-->
<!--                                <div style="height: 20px; font-size: 14px; display: flex; align-items: center;">-->
<!--                                    <span>基准：ahskdfahsuidh</span>-->
<!--                                </div>-->
<!--                                <div style="height: 20px; font-size: 14px; display: flex; align-items: center;">-->
<!--                                    <span>当前：ioyuiahdkfasd</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div style="height: 20px; font-size: 14px; display: flex; align-items: center; margin-bottom: 4px;">-->
<!--                                <span>对比代码提交</span>-->
<!--                            </div>-->

<!--                            <div style="height: 20px; font-size: 14px; display: flex; align-items: center;">-->
<!--                                <span>2021-06-07 12:56:24</span>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div style="width: 10px;"></div>-->
<!--                        <div style="width: 50px; font-size: 50px;">-->
<!--                            <i class="ri-git-commit-line"></i>-->
<!--                        </div>-->
<!--                    </div>-->




<!--                </div>-->
<!--                <div style="height: 36px;"></div>-->
<!--                <div style="width: 100%; height: 36px; background-color: rgba(0,0,0,0.02)"></div>-->
<!--            </div>-->
<!--            <div style="box-sizing: border-box; padding: 36px 0 36px 18px; width: 260px;">-->
<!--                <div style="width: 100%; height: 200px; background-color: rgba(0,0,0,0.02)"></div>-->
<!--                <div style="height: 36px;"></div>-->
<!--                <div style="width: 100%; height: 200px; background-color: rgba(0,0,0,0.02)"></div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
import V_badge from "../components/v_badge/v_badge";
import V_avatar from "../components/v_avatar/v_avatar";
export default
{
    name: "Index",
    components: {V_avatar, V_badge}
}
</script>

<style scoped>

</style>
