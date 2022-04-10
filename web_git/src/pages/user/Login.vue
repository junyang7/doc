<template>
    <div style="position: absolute; left: 0; top: 0; width: 100%; height: 90%; display: flex; align-items: center; justify-content: center;">

        <div>
            <div style="display: flex; margin: 40px 0">
                <div style="width: 100px; height: auto;"></div>
                <div style="width: 10px;"></div>
                <div style="width: 204px;">
                    <v_badge :title="'阳仔'" :sub="'仓库'"></v_badge>
                </div>
            </div>

            <div style="display: flex; align-items: center; margin: 10px 0">
                <div style="width: 100px; height: 40px; display: flex; align-items: center; justify-content: flex-end">
                    <div style="color: #515a6e; word-break: keep-all;">用户名或邮箱</div>
                    <div style="color: #ff0000;">*</div>
                </div>
                <div style="width: 10px;"></div>
                <div style="width: 204px; height: 40px;">
                    <v_input v-model="user_name" pre="ri-user-line"></v_input>
                </div>
            </div>

            <div style="display: flex; align-items: center; margin: 10px 0">
                <div style="width: 100px; height: 40px; display: flex; align-items: center; justify-content: flex-end">
                    <div style="color: #515a6e; word-break: keep-all;">密码</div>
                    <div style="color: #ff0000;">*</div>
                </div>
                <div style="width: 10px;"></div>
                <div style="width: 204px; height: 40px;">
                    <v_input v-model="user_password" pre="ri-lock-line" password></v_input>
                </div>
            </div>

            <div style="display: flex; margin: 40px 0">
                <div style="width: 100px; height: auto;"></div>
                <div style="width: 10px;"></div>
                <div style="width: 204px;">
                    <v_button type="primary" :pre="'ri-login-box-line'" @click.native="login">登录</v_button>
                </div>
            </div>

            <v_loading :loading="loading" fixed></v_loading>
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

        getRandomString(length = 128)
        {
            let char_list = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`[];',./~{}:\"<>?";
            let char_list_length = 77;
            let random_string = '';
            for(let i = 0; i < length; i ++)
            {
                random_string += char_list.charAt(Math.floor((Math.random() * char_list_length) + 1));
            }
            return random_string;
        },

        async getSalt()
        {
            axios.defaults.withCredentials=true;
            return await axios.request(
                {
                    method: "POST",
                    url: "http://127.0.0.1/api/user/salt/get",
                    data: QS.stringify(
                        {
                            user_name: this.user_name.trim(),
                        }
                    ),
                }
            ).then(res => {
                this.loading = false;
                console.log(res)
                return res.data.data.salt;

            }).catch(err => {
                console.log(err);
                this.loading = false;
            });
        },

        async login()
        {

            if(this.user_name.trim() === "")
            {
                this.$Message.error(`参数错误：user_name`);
                this.loading = false;
                return;
            }

            if(this.user_password.trim() === "")
            {
                this.$Message.error(`参数错误：user_password`);
                this.loading = false;
                return;
            }




            let CryptoJS = require("crypto-js");
            let salt_old = await this.getSalt()
            let fd = new FormData();
            fd.append("salt", this.getRandomString());
            fd.append("user_name", this.user_name.trim());
            fd.append("user_password", CryptoJS.SHA512(this.user_password.trim() + fd.get("user_name") + salt_old, salt_old).toString(CryptoJS.enc.Hex) + CryptoJS.SHA512(this.user_password.trim() + fd.get("user_name") + fd.get("salt"), fd.get("salt")).toString(CryptoJS.enc.Hex));

            console.log(salt_old)
            console.log(fd.get('salt'))
            console.log(fd.get('user_name'))
            console.log(fd.get('user_password'))

            axios.request(
                {
                    method: "POST",
                    url: "http://127.0.0.1/api/user/login",
                    data: fd,
                }
            ).then(res => {
                this.loading = false;
                console.log(res)

            }).catch(err => {
                console.log(err);
                this.loading = false;
            });

        },

    },
    mounted()
    {
        this.loading = false;
    },
    created()
    {

    },
}
</script>

<style scoped>

</style>
