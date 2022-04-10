<template>
    <div>
        <v_checkbox
            v-model="checkedAll"
            label="全选"
            :indeterminate="indeterminate"
            @click.native="onClick"></v_checkbox>
        <hr/>
        <v_checkbox_group
            v-model="value"
            @onChange="onChange">
            <v_checkbox
                v-for="(a, b) in checkbox_list"
                :label="a.label"
                :value="a.value"
                :key="b"></v_checkbox>
        </v_checkbox_group>
        <button
            @click="result">查看结果</button>
    </div>
</template>

<script>
import V_checkbox_group from "./v_checkbox_group";
import V_checkbox from "../v_checkbox/v_checkbox";
export default
{
    name: "v_checkbox_group_test",
    components: {V_checkbox, V_checkbox_group},
    data()
    {
        return {
            checkbox_list: [
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
                {
                    label: "鲸鱼🐳",
                    value: "4",
                },
                {
                    label: "老鼠🐀",
                    value: "5",
                },
            ],
            value: ["2", "4", ],
            indeterminate: true,
            checkedAll: false,
        };
    },
    methods: {
        result()
        {
            console.log(this.value);
        },
        onChange(value)
        {
            if(value.length === this.checkbox_list.length)
            {
                this.indeterminate = false;
                this.checkedAll = true;
            }
            else if(value.length === 0)
            {
                this.indeterminate = false;
                this.checkedAll = false;
            }
            else
            {
                this.indeterminate = true;
                this.checkedAll = false;
            }
        },
        onClick()
        {
            this.indeterminate = !this.indeterminate;
            if(this.value.length === 0)
            {
                for(let i = 0, j = this.checkbox_list.length; i < j; i ++)
                {
                    this.value.push(this.checkbox_list[i].value);
                }
                this.checkedAll = true;
            }
            else
            {
                this.value = [];
                this.checkedAll = false;
            }
        },
    },
    mounted()
    {
        if(this.value.length === this.checkbox_list.length)
        {
            this.indeterminate = false;
            this.checkedAll = true;
        }
        else if(this.value.length === 0)
        {
            this.indeterminate = false;
            this.checkedAll = false;
        }
        else
        {
            this.indeterminate = true;
            this.checkedAll = false;
        }
    },
}
</script>

<style scoped>

</style>
