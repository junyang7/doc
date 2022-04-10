<template>
    <div>
        <Input v-model="username"/>
        <button @click="click">测试</button>
    </div>
</template>

<script>
import Input from "./Input";
export default {
    name: "Input_test",
    components: {
        Input
    },
    data()
    {
        return {
            username: "guoguo",
        };
    },
    methods: {
        click()
        {
            console.log(this.username)
        }
    },
}
</script>

<style scoped>

</style>
