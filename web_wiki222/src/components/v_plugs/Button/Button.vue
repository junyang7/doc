<template>
    <button
        @click="click"
        :class="{
            //基础样式
            'v_button': true,
            //尺寸
            'v_button_size_small': size === 'small',
            'v_button_size_normal': size === 'normal',
            'v_button_size_large': size === 'large',
            //类型
            'v_button_type_default': type === 'default',
            'v_button_type_primary': type === 'primary',
            'v_button_type_dashed': type === 'dashed',
            'v_button_type_text': type === 'text',
            'v_button_type_info': type === 'info',
            'v_button_type_success': type === 'success',
            'v_button_type_warning': type === 'warning',
            'v_button_type_error': type === 'error',
            //长度
            'v_button_long': this.$attrs.hasOwnProperty('long'),

        }"
    >
        <slot>
            <span>确定</span>
        </slot>
    </button>
</template>

<script>
export default
{
    name: "Button",
    props: {
        // 尺寸
        size: {
            type: String,
            default()
            {
                return "normal";
            }
        },
        // 类型
        type: {
            type: String,
            default()
            {
                return "default";
            }
        },
    },
    methods: {
        click()
        {
            this.$emit('click');
        },
    },
}
</script>

<style scoped>
.v_button
{
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 1px;
}

.v_button_long
{
    width: 100%;
}

/*尺寸*/
/*large*/
.v_button_size_large
{
    height: 44px;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 12px;
}
/*normal*/
.v_button_size_normal
{
    height: 32px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 12px;
}
/*small*/
.v_button_size_small
{
    height: 24px;
    padding: 0 10px;
    font-size: 12px;
}



.v_button_type_default
{
    background-color: #ffffff;
    border: 1px solid #e8eaec;
    color: #515a6e;
}
.v_button_type_default:hover
{
    background-color: #f8f8f9;
}



.v_button_type_primary
{
    background-color: rgba(45, 140, 240, 1);
    border: 1px solid rgba(45, 140, 240, 1);
    color: #ffffff;
}
.v_button_type_primary:hover
{
    background-color: rgba(45, 140, 240, 0.9);
}


.v_button_type_dashed
{
    background-color: #ffffff;
    border: 1px dashed #e8eaec;
    color: #515a6e;
}
.v_button_type_dashed:hover
{
    background-color: #f8f8f9;
}


.v_button_type_text
{
    background-color: transparent;
    color: #515a6e;
}
.v_button_type_text:hover
{
    color: #2d8cf0;
}

.v_button_type_info
{
    background-color: rgba(45, 183, 245, 1);
    border: 1px solid rgba(45, 183, 245, 1);
    color: #ffffff;
}
.v_button_type_info:hover
{
    background-color: rgba(45, 183, 245, 0.9);
}


.v_button_type_success
{
    background-color: rgba(25, 190, 107, 1);
    border: 1px solid rgba(25, 190, 107, 1);
    color: #ffffff;
}
.v_button_type_success:hover
{
    background-color: rgba(25, 190, 107, 0.9);
}



.v_button_type_warning
{
    background-color: rgba(255, 153, 0, 1);
    border: 1px solid rgba(255, 153, 0, 1);
    color: #ffffff;
}
.v_button_type_warning:hover
{
    background-color: rgba(255, 153, 0, 0.9);
}



.v_button_type_error
{
    background-color: rgba(237, 64, 20, 1);
    border: 1px solid rgba(237, 64, 20, 1);
    color: #ffffff;
}
.v_button_type_error:hover
{
    background-color: rgba(237, 64, 20, 0.9);
}
</style>
