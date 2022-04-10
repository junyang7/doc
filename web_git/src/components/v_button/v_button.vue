<template>


    <button :class="button_class_list_string" :disabled="disabled || processing">

        <!--加载-->
        <template v-if="processing">
            <div class="button_processing_box">
                <div class="button_processing">
                    <i class="ri-loader-5-line"></i>
                </div>
            </div>
        </template>

        <!--前缀-->
        <template v-if="pre && !processing">
            <div class="button_pre">
                <i :class="pre"></i>
            </div>
        </template>


        <!--图标-->
        <template v-if="mid && !processing">
            <div class="button_mid">
                <i :class="mid"></i>
            </div>
        </template>


        <!--文本-->
        <template v-else>
            <div class="button_mid">
                <slot>按钮</slot>
            </div>
        </template>


        <!--后缀-->
        <template v-if="suf && !processing">
            <div class="button_suf">
                <i :class="suf"></i>
            </div>
        </template>


    </button>


</template>

<script>
export default
{
    name: "v_button",
    props: {
        processing: {
            type: Boolean,
            default()
            {
                return false;
            },
        },
        disabled: {
            type: Boolean,
            default()
            {
                return false;
            },
        },
        pre: {
            type: String,
            default()
            {
                return "";
            },
        },
        mid: {
            type: String,
            default()
            {
                return "";
            },
        },
        suf: {
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
            button_class_list: [
                "button",
            ],
            button_class_list_string: "",
        };
    },
    created()
    {
        // type
        if(this.$attrs.hasOwnProperty("type"))
        {
            this.button_class_list.push(`button_type_${this.$attrs.type}`);
        }
        else
        {
            this.button_class_list.push("button_type_default");
        }
        // size
        let size = "middle";
        if(this.$attrs.hasOwnProperty("size"))
        {
            size = this.$attrs.size;
            this.button_class_list.push(`button_size_${this.$attrs.size}`);
        }
        else
        {
            this.button_class_list.push("button_size_middle");
        }
        // circle
        if(this.$attrs.hasOwnProperty("circle"))
        {
            if(this.mid)
            {
                this.button_class_list.push(`button_shape_circle_icon_${size}`);
            }
            else
            {
                this.button_class_list.push(`button_shape_circle_text_${size}`);
            }
        }
        else
        {
            this.button_class_list.push(`button_shape_default`);
        }
        // long
        if(this.$attrs.hasOwnProperty("long"))
        {
            this.button_class_list.push(`button_style_long`);
        }
        // class
        this.button_class_list_string = this.button_class_list.join(" ");
    }
}
</script>

<style scoped>
/*base*/
.button
{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    margin: 2px;
}
/*shape*/
.button_shape_default
{
    border-radius: 2px;
}
.button_shape_circle_text_large
{
    border-radius: 48px;
}
.button_shape_circle_text_middle
{
    border-radius: 36px;
}
.button_shape_circle_text_small
{
    border-radius: 24px;
}
.button_shape_circle_icon_large
{
    border-radius: 48px;
    padding: 0 !important;
}
.button_shape_circle_icon_middle
{
    border-radius: 36px;
    padding: 0 !important;
}
.button_shape_circle_icon_small
{
    border-radius: 24px;
    padding: 0 !important;
}
/*size*/
.button_size_large
{
    height: 48px;
    min-width: 48px;
    padding: 0 24px;
    font-size: 16px;
}
.button_size_middle
{
    height: 36px;
    min-width: 36px;
    padding: 0 12px;
    font-size: 14px;
}
.button_size_small
{
    height: 24px;
    min-width: 24px;
    padding: 0 6px;
    font-size: 12px;
}
/*type*/
.button_type_default
{
    color: rgb(144,144,144);
    background-color: rgba(242,242,242, 1);
    border: 1px solid rgba(242,242,242, 1);
}
.button_type_default:hover
{
    background-color: rgba(242,242,242, 0.9);
    border: 1px solid rgba(242,242,242, 0.9);
}
.button_type_default:focus
{
    box-shadow: 0 0 0 2px rgba(232,232,232, 0.2);
}
.button_type_primary
{
    color: #ffffff;
    background-color: rgba(45, 140, 240, 1);
    border: 1px solid rgba(45, 140, 240, 1);
}
.button_type_primary:hover
{
    background-color: rgba(45, 140, 240, 0.9);
    border: 1px solid rgba(45, 140, 240, 0.9);
}
.button_type_primary:focus
{
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
.button_type_success
{
    color: #ffffff;
    background-color: rgba(25, 190, 107, 1);
    border: 1px solid rgba(25, 190, 107, 1);
}
.button_type_success:hover
{
    background-color: rgba(25, 190, 107, 0.9);
    border: 1px solid rgba(25, 190, 107, 0.9);
}
.button_type_success:focus
{
    box-shadow: 0 0 0 2px rgba(25, 190, 107, 0.2);
}
.button_type_warn
{
    color: #ffffff;
    background-color: rgba(255, 153, 0, 1);
    border: 1px solid rgba(255, 153, 0, 1);
}
.button_type_warn:hover
{
    background-color: rgba(255, 153, 0, 0.9);
    border: 1px solid rgba(255, 153, 0, 0.9);
}
.button_type_warn:focus
{
    box-shadow: 0 0 0 2px rgba(255, 153, 0, 0.2);
}
.button_type_error
{
    color: #ffffff;
    background-color: rgba(237, 64, 20, 1);
    border: 1px solid rgba(237, 64, 20, 1);
}
.button_type_error:hover
{
    background-color: rgba(237, 64, 20, 0.9);
    border: 1px solid rgba(237, 64, 20, 0.9);
}
.button_type_error:focus
{
    box-shadow: 0 0 0 2px rgba(237, 64, 20, 0.2);
}
/*long*/
.button_style_long
{
    display: flex;
    width: 100%;
}
/*pre,mid,suf,processing*/
.button_pre, .button_mid, .button_suf, .button_processing
{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
}
.button_pre
{
    padding-right: 4px;

}
.button_suf
{
    padding-left: 4px;
}
/*processing*/
.button_processing_box
{
    box-sizing: border-box;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    padding-right: 4px;
}
.button_processing
{
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
</style>
