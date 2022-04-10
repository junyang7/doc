<template>
    <div>
        <v_radio v-model="value" :label="radio.label" :value="radio.value"></v_radio>
        <button @click="result">查看结果</button>
    </div>
</template>

<script>
import V_radio from "./v_radio";
export default
{
    name: "v_radio_test",
    components: {
        V_radio,
    },
    data()
    {
        return {
            radio: {
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
