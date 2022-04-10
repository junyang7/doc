<template>
    <div>
        <v_radio_group v-model="value">
            <v_radio v-for="(a, b) in radio_list" :label="a.label" :value="a.value" :key="b"></v_radio>
        </v_radio_group>
        <button @click="result">查看结果</button>
    </div>
</template>

<script>
import V_radio_group from "./v_radio_group";
import V_radio from "../v_radio/v_radio";
export default
{
    name: "v_radio_group_test",
    components: {V_radio, V_radio_group},
    data()
    {
        return {
            radio_list: [
                {
                    label: "香蕉🍌",
                    value: "1",
                },
                {
                    label: "西瓜🍉",
                    value: "2",
                },
                {
                    label: "地瓜🍠",
                    value: "3",
                },
            ],
            value: "2",
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
