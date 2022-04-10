<template>
    <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
        <div style="position: absolute; left: 0; top: 0; right: 0; height: 100px; border-bottom: 1px solid #e8eaec;"></div>
        <div style="position: absolute; left: 0; top: 100px; bottom: 0; width: 200px; border-right: 1px solid #e8eaec;">
            <ul>
                <li>
                    <router-link to="/component/v_button">按钮</router-link>
                </li>
            </ul>
        </div>
        <div style="position: absolute; left: 200px; top: 100px; bottom: 0; right: 0;">
            <div style="position: absolute; left: 50px; top: 50px; right: 50px; bottom: 50px; overflow: auto;">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import V_design_test from "../../components/v_design/v_design_test";
import V_button_test from "../../components/v_button/v_button_test";
export default {
    name: "develop",
    components: {V_button_test, V_design_test},
}
</script>

<style scoped>

</style>
