<template>
    <div style="position: absolute; height: 90%; width: 100%; display: flex; align-items: center; justify-content: center;">
        <ul>
            <li>
                <v_badge :title="title" :sub="sub"></v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div class="v_badge_title">中国</div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div class="v_badge_sub_title">99+</div>
                    </template>
                </v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div style="font-size: 26px; font-weight: 800;">中国</div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div style="background-color: #19be6b; color: yellow; border-radius: 14px; font-size: 10px; padding: 0 4px;">航天载人办公室</div>
                    </template>
                </v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div style="width: 50px; height: 50px; background-color: #2b85e4; border-radius: 4px;"></div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div style="position: absolute; margin-top: -8px; margin-left: -8px; background-color: #ff0000; color: #ffffff; font-size: 10px; border-radius: 16px; padding: 0 4px; height: 16px; min-width: 16px; display: inline-flex; align-items: center; justify-content: center;">4</div>
                    </template>
                </v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div style="width: 50px; height: 50px; background-color: #2b85e4; border-radius: 4px;"></div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div style="position: absolute; margin-top: -12px; margin-left: -8px; color: #ff0000; font-size: 16px; display: inline-flex; align-items: center; justify-content: center;">
                            <i class="ri-dvd-line"></i>
                        </div>
                    </template>
                </v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div style="display: inline-flex; align-items: center; justify-content: center; font-size: 16px;">
                            <i class="ri-notification-line"></i>
                        </div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div style="position: absolute; background-color: #ff0000; border-radius: 100%; height: 6px; width: 6px;"></div>
                    </template>
                </v_badge>
            </li>
            <li>
                <v_badge>
                    <template slot="v_badge_title">
                        <div style="display: inline-flex; align-items: center; justify-content: center; font-size: 16px;">可以是一个连接</div>
                    </template>
                    <template slot="v_badge_sub_title">
                        <div style="position: absolute; background-color: #ff0000; border-radius: 100%; height: 6px; width: 6px;"></div>
                    </template>
                </v_badge>
            </li>
        </ul>
    </div>
</template>

<script>
import V_badge from "./v_badge";
export default {
    name: "v_badge_test",
    components: {V_badge},
    data()
    {
        return {
            title: '大眼',
            sub: 'wiki'
        };
    },
}
</script>

<style scoped>
li
{
    list-style: none;
    margin-bottom: 10px;
}
</style>
