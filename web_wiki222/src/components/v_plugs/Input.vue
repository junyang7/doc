<template>
    <input v-model="c_value"/>
</template>

<script>
export default
{
    name: "Input",
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

    },
    watch: {
        c_value(n, o)
        {
            this.$emit('update', n);
        },
        p_value(n, o)
        {
            this.c_value = n;
        },
    }
}
</script>

<style scoped>
input {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 32px;
    border: 1px solid #dcdee2;
}
</style>
