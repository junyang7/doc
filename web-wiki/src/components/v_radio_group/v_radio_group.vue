<template>
    <div class="radio_group">
        <slot></slot>
    </div>
</template>

<script>
export default
{
    name: "v_radio_group",
    model: {
        prop: "p_value",
        event: "update",
    },
    props: {
        p_value: {
            type: String,
            default()
            {
                return "";
            },
        },
    },
    data()
    {
        return {
            c_value: this.p_value,
        };
    },
    methods: {
        onRadioClick(value)
        {
            for(let i = 0, j = this.$children.length; i < j; i ++)
            {
                if(this.$children[i].$options.propsData.value === value)
                {
                    this.$children[i].c_value = this.$children[i].c_value === value ? "" : value;
                    this.c_value = this.$children[i].c_value ? value : "";
                    continue;
                }
                this.$children[i].c_value = "";
            }
        },
    },
    watch: {
        c_value(n, o)
        {
            this.$emit("update", n);
        },
        p_value(n, o)
        {
            this.c_value = n;
        },
    },
    mounted()
    {
        for(let i = 0, j = this.$children.length; i < j; i ++)
        {
            this.$children[i].c_value = this.c_value;
        }
    }
}
</script>

<style scoped>
.radio_group
{
    display: inline-block;
}
</style>
