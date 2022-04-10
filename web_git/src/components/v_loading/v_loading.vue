<template>
    <div
        v-if="loading"
        :class="{
            'v_loading': true,
            'v_loading_fixed': this.$attrs.hasOwnProperty('fixed'),
        }">
        <div class="v_loading_box">
            <i class="ri-loader-4-line"></i>
        </div>
    </div>
</template>

<script>
export default
{
    name: "v_loading",
    props: {
        loading: {
            type: Boolean,
            default()
            {
                return false;
            },
        },
    },
}
</script>

<style scoped>
.v_loading
{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
    user-select: none;
}
.v_loading_box
{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d8cf0;
    animation: processing 0.75s linear infinite;
}
@keyframes processing
{
    from
    {
        transform: rotate(0deg);
    }
    to
    {
        transform: rotate(360deg);
    }
}
.v_loading_fixed
{
    position: fixed;
}
</style>
