<template>
    <div class="checkbox_group">
        <slot></slot>
    </div>
</template>

<script>
export default
{
    name: "v_checkbox_group",
    model: {
        prop: "p_value",
        event: "update",
    },
    props: {
        p_value: {
            type: Array,
            default()
            {
                return [];
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
        onCheckboxClick(value)
        {
            let index = this.c_value.indexOf(value);
            if(index === -1)
            {
                this.c_value.push(value);
            }
            else
            {
                this.c_value.splice(index, 1);
            }
            this.init();
        },
        init()
        {
            for(let i = 0, j = this.$children.length; i < j; i ++)
            {
                if(this.c_value.indexOf(this.$children[i].value) !== -1)
                {
                    this.$children[i].c_value = this.$children[i].value;
                }
                else
                {
                    this.$children[i].c_value = "";
                }
            }
        },
    },
    watch: {
        c_value(n, o)
        {
            this.$emit("update", n);
            this.$emit("onChange", n);
        },
        p_value(n, o)
        {
            this.c_value = n;
            this.init();
        },
    },
    mounted()
    {
        this.init();
    },
}
</script>

<style scoped>
.checkbox_group
{
    display: inline-block;
}
</style>
