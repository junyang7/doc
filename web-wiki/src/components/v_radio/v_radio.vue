<template>
    <div class="radio" @click="onClick(value)">
        <div class="container">
            <div class="mask">
                <div
                    :class="{
                        outer: true,
                        outer_checked: value === c_value,
                        outer_focus: value === c_value,
                    }"></div>
                <div
                    :class="{
                        inner: true,
                        inner_in: value === c_value,
                        inner_out: value !== c_value,
                    }"></div>
            </div>
            <div class="real">
                <input
                    type="radio"
                    autofocus/>
            </div>
        </div>
        <div class="text">
            <slot>{{ label }}</slot>
        </div>
    </div>
</template>

<script>
export default
{
    name: "v_radio",
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
        label: {
            type: String,
            default()
            {
                return "";
            },
        },
        value: {
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
        onClick(value)
        {
            if(this.$parent.$options._componentTag === "v_radio_group")
            {
                this.$parent.onRadioClick(value);
                return;
            }
            this.c_value = this.c_value === value ? "" : value;
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
}
</script>

<style scoped>
.radio
{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
}
.container
{
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    margin: 2px;
}
.mask
{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.outer
{
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid #e8eaec;
}
.outer_focus
{
    border: 1px solid rgba(45, 140, 240, 0.9);
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
.outer_checked
{
    border: 1px solid #2d8cf0;
}
.outer:hover
{
    border: 1px solid rgba(45, 140, 240, 0.9);
}
.inner
{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #2d8cf0;
}
.inner_in
{
    transform: scale(0.5);
    transition: transform 0.1s ease-in-out;
}
.inner_out
{
    transform: scale(0);
    transition: transform 0.1s ease-in-out;
}
.real
{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
input
{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 100%;
    box-shadow: none;
    outline: none;
    resize: none;
    border: none;
    cursor: pointer;
}
.text
{
    display: inline-flex;
    align-items: center;
    font-size: 14px;
}
</style>
