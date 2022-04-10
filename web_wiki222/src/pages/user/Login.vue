<template>
  <div style="position: absolute; height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
    <div style="box-sizing: border-box; padding: 50px; border: 1px solid #e8eaec;">
        <div style="height: 30px; width: 100%;">
            <input v-model="username" placeholder="username" type="text"/>
        </div>
        <div>
            <input v-model="password" placeholder="password" type="password"/>
        </div>
        <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import QS from "qs";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // login() {
    //   let username = this.username.trim();
    //   if(username === "")
    //   {
    //     console.log("参数错误：username")
    //     return;
    //   }
    //   let password = this.password.trim();
    //   if(password === "")
    //   {
    //     console.log("参数错误：password")
    //     return;
    //   }
    //   axios.request({
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     method: "POST",
    //     url: "http://127.0.0.1/api/user/login",
    //     data: QS.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   }).then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.log(err)
    //   });
    // }
  }
}
</script>

<style scoped>

</style>
