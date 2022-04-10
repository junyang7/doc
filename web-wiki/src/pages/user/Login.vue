<template>
    <div style="position: absolute; left: 0; top: 0; width: 100%; height: 90%; display: flex; align-items: center; justify-content: center;">

        <div>
            <div style="display: flex; margin: 40px 0">
                <div style="width: 100px; height: auto;"></div>
                <div style="width: 10px;"></div>
                <div style="width: 204px;">
                    <v_badge :title="'大眼'" :sub="'wiki'"></v_badge>
                </div>
            </div>

            <div style="display: flex; align-items: center; margin: 10px 0">
                <div style="width: 100px; height: 40px; display: flex; align-items: center; justify-content: flex-end">
                    <div style="color: #515a6e; word-break: keep-all;">用户名或邮箱</div>
                    <div style="color: #ff0000;">*</div>
                </div>
                <div style="width: 10px;"></div>
                <div style="width: 204px; height: 40px;">
                    <v_input pre="ri-user-line"></v_input>
                </div>
            </div>

            <div style="display: flex; align-items: center; margin: 10px 0">
                <div style="width: 100px; height: 40px; display: flex; align-items: center; justify-content: flex-end">
                    <div style="color: #515a6e; word-break: keep-all;">密码</div>
                    <div style="color: #ff0000;">*</div>
                </div>
                <div style="width: 10px;"></div>
                <div style="width: 204px; height: 40px;">
                    <v_input pre="ri-lock-line" password></v_input>
                </div>
            </div>

            <div style="display: flex; margin: 40px 0">
                <div style="width: 100px; height: auto;"></div>
                <div style="width: 10px;"></div>
                <div style="width: 204px;">
                    <v_button :processing="loading" :disabled="loading" type="primary" :pre="'ri-login-box-line'">登录</v_button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import QS from "qs";
import V_badge from "../../components/v_badge/v_badge";
import V_input from "../../components/v_input/v_input";
import V_button from "../../components/v_button/v_button";
import V_loading from "../../components/v_loading/v_loading";
export default
{
    name: "Login",
    components: {V_loading, V_button, V_input, V_badge},
    data()
    {
        return {
            loading: true,
            user_name: "",
            user_password: "",
        };
    },
    methods: {
        login()
        {
            this.loading = true;
            let user_name = this.user_name.trim();
            if(user_name === "")
            {
                this.$Message.error(`参数错误：user_name`);
                this.loading = false;
                return;
            }
            let user_password = this.user_password.trim();
            if(user_password === "")
            {
                this.$Message.error(`参数错误：user_password`);
                this.loading = false;
                return;
            }


            let data = QS.stringify(
                {
                    user_name: user_name,
                    user_password: user_password,
                }
            );
            axios.request(
                {
                    method: "POST",
                    url: "http://127.0.0.1/api/user/login",
                    data: data,
                }
            ).then(res => {
                console.log(res);
                this.loading = false;

            }).catch(err => {
                console.log(err);
                this.loading = false;
            });
        },
    },
    mounted()
    {
        this.loading = true;
    },
    created()
    {

    },
}
</script>

<style scoped>

</style>
