<template>
    <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <div>
            <div style="position: relative; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                <div style="z-index: 0; position: absolute; width: 16px; height: 16px; box-sizing: border-box">
                    <div
                        :class="{
                            outer: true,
                            outer_checked: checked,
                            outer_focus: focus
                        }"></div>
                    <div
                        :class="{
                            inner: true,
                            inner_in: checked,
                            inner_out: !checked,
                        }">
                        <i class="ri-checkbox-fill"></i>
                    </div>
                </div>
                <div class="test" style="z-index: 100; position: absolute; width: 16px; height: 16px; box-sizing: border-box;">
                    <input
                        @click="click"
                        type="radio"
                        @focus="onInputFocus"
                        @blur="onInputBlur"
                        autofocus/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "develop",
    data()
    {
        return {
            checked: false,
            focus: false,
        };
    },
    methods: {
        onInputFocus()
        {
            if(this.checked)
            {
                this.focus = true;
            }
        },
        onInputBlur()
        {
            this.focus = false;
        },
        click()
        {
            this.checked = !this.checked;
            this.focus = this.checked;
        },
    },
}
</script>

<style scoped>
.outer
{
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #e8eaec;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    cursor: pointer;
}
.test:hover
{
    border: 1px solid rgba(45, 140, 240, 0.9);
    border-radius: 2px;
    cursor: pointer;
}
.outer:hover
{
    border: 1px solid rgba(45, 140, 240, 0.9);
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
.inner
{
    position: absolute;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #2d8cf0;
    border-radius: 2px;
}
.inner_in
{
    transform: scale(1.2);
    transition: transform 0.1s ease-in-out;
}
.inner_out
{
    transform: scale(0);
    transition: transform 0.1s ease-in-out;
}
input
{
    box-shadow:none;
    outline: none;
    resize: none;
    border: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    /*background-color: rgba(255,0,0,0.5);*/
    display: inline-flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
