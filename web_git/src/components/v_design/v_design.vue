<template>
    <div>
        <div style="position: relative; display: flex; align-items: center; justify-content: center;">
            <div class="a"></div>
            <div class="b"></div>
        </div>

        <div style="margin-top: 50px;">
            <button class="btn">按钮</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "v_design"
}
</script>

<style scoped>
.a
{
    z-index: 0;
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: 2px solid #19be6b;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: c;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
.b
{
    z-index: 1;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: #19be6b;
}
@keyframes c {
    from
    {
        opacity: 1;
        transform: scale(0.3, 0.3);
    }
    to
    {
        opacity: 0;
        transform: scale(1,1);
    }
}


.btn
{
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    border-radius: 2px;
    font-size: 14px;
    background-color: #1890ff;
    border: 1px solid #1890ff;
    color: #ffffff;
    cursor: pointer;
    outline: none;
}
.btn:hover
{
    background-color: #40a9ff;
    border: 1px solid #40a9ff;
}
.btn:focus
{
    box-shadow: 0 0 0 2px rgba(24,144,255, 0.2);
}
</style>
