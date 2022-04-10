<template>
    <div>
        <v_checkbox v-model="value" :label="checkbox.label" :value="checkbox.value"></v_checkbox>
        <button @click="result">查看结果</button>
    </div>
</template>

<script>
import V_checkbox from "./v_checkbox";
export default
{
    name: "v_checkbox_test",
    components: {V_checkbox},
    data()
    {
        return {
            checkbox: {
                label: "香蕉🍌",
                value: "1",
            },
            value: "1",
        };
    },
    methods: {
        result()
        {
            console.log(this.value);
        },
    },
}
</script>

<style scoped>

</style>
