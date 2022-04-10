<template>
    <div
        @click="onVInputClick"
        :class="v_input">


        <input
            ref="input"
            v-model="c_value"
            :type="password ? 'password': 'text'"
            @focus="onInputFocus"
            @blur="onInputBlur"
            autofocus/>

        <!--前缀-->
        <template v-if="pre">
            <div @click="onPreClick" :class="icon_pre">
                <i :class="pre"></i>
            </div>
        </template>


        <!--后缀-->
        <template v-if="suf">
            <div :class="icon_suf">
                <i @click.self="onSufClick" :class="suf"></i>
            </div>
        </template>


        <!--清空-->
        <template v-if="!suf && c_value && this.$attrs.hasOwnProperty('clear')">
            <div @click="c_value = ''" :class="icon_clear">
                <i class="ri-close-circle-line"></i>
            </div>
        </template>


        <!--密码-->
        <template v-if="!suf && c_value && !this.$attrs.hasOwnProperty('clear') && this.$attrs.hasOwnProperty('password')">
            <div @click="password = !password" :class="icon_password">
                <template v-if="password">
                    <i class="ri-eye-line"></i>
                </template>
                <template v-else>
                    <i class="ri-eye-off-line"></i>
                </template>
            </div>
        </template>

    </div>
</template>

<script>
export default
{
    name: "v_input",
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
        pre: {
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
            c_value: this.p_value,


            v_input_object: {
                v_input: true,
            },
            v_input: "",


            icon_pre_object: {
                icon_pre: true,
            },
            icon_pre: "",


            icon_suf_object: {
                icon_suf: true,
            },
            icon_suf: "",


            icon_clear_object: {
                icon_clear: true,
            },
            icon_clear: "",


            password: this.$attrs.hasOwnProperty('password'),
            icon_password_object: {
                icon_password: true,
            },
            icon_password: "",


        };
    },
    methods: {
        onSufClick(e)
        {
            this.$emit('sufClick');
        },
        onVInputClick()
        {
            this.$refs.input.focus();
            this.v_input_object[`v_input_focus`] = true;
            this.init();
        },
        onPreClick()
        {
            this.$refs.input.focus();
            this.v_input_object[`v_input_focus`] = true;
            this.init();
        },
        onInputFocus()
        {
            this.$refs.input.focus();
            this.v_input_object[`v_input_focus`] = true;
            this.init();
        },
        onInputBlur()
        {
            delete this.v_input_object[`v_input_focus`];
            this.init();
        },
        init()
        {
            this.v_input = Object.keys(this.v_input_object).join(" ");
            this.icon_pre = Object.keys(this.icon_pre_object).join(" ");
            this.icon_suf = Object.keys(this.icon_suf_object).join(" ");
            this.icon_clear = Object.keys(this.icon_clear_object).join(" ");
            this.icon_password = Object.keys(this.icon_password_object).join(" ");
        },
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
    },
    created()
    {
        // size
        let size = "middle";
        if(this.$attrs.hasOwnProperty("size"))
        {
            size = this.$attrs.size;
            this.v_input_object[`v_input_size_${size}`] = true;
        }
        else
        {
            this.v_input_object[`v_input_size_middle`] = true;
        }

        // pre
        if(this.pre)
        {
            this.icon_pre_object[`icon_pre_size_${size}`] = true;
            this.v_input_object[`v_input_pre_size_${size}`] = true;
        }

        // suf
        if(this.suf)
        {
            this.icon_suf_object[`icon_suf_size_${size}`] = true;
            this.v_input_object[`v_input_suf_size_${size}`] = true;
        }

        // clear
        if(this.$attrs.hasOwnProperty('clear'))
        {
            this.icon_clear_object[`icon_clear_size_${size}`] = true;
            this.v_input_object[`v_input_clear_size_${size}`] = true;
        }

        // password
        if(this.$attrs.hasOwnProperty('password'))
        {
            this.icon_password_object[`icon_password_size_${size}`] = true;
            this.v_input_object[`v_input_password_size_${size}`] = true;
        }

        // long
        if(this.$attrs.hasOwnProperty('long'))
        {
            this.v_input_object[`v_input_style_long`] = true;
        }

        this.init();
    },
}
</script>

<style scoped>
/*base*/
input
{
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 2px;
    font-size: 12px;
    color: #515a6e;
}
.v_input
{
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 2px;
    border: 1px solid #e8eaec;
    padding: 0 4px;
    width: 200px;
}
.v_input:hover
{
    border: 1px solid rgba(45, 140, 240, 0.9);
}
.v_input_focus
{
    border: 1px solid rgba(45, 140, 240, 0.9);
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}


/*size*/
.v_input_size_large
{
    height: 48px;
    padding: 0 12px;
}
.v_input_size_large input
{
    font-size: 16px;
}
.v_input_size_middle
{
    height: 36px;
    padding: 0 8px;
}
.v_input_size_middle input
{
    font-size: 14px;
}
.v_input_size_small
{
    height: 24px;
    padding: 0 4px;
}
.v_input_size_small input
{
    font-size: 12px;
}


/*pre*/
.icon_pre
{
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    color: #808695;
    box-sizing: border-box;
}
.icon_pre_size_large
{
    width: 48px;
    height: 46px;
    font-size: 16px;
}
.icon_pre_size_middle
{
    width: 36px;
    height: 34px;
    font-size: 14px;
}
.icon_pre_size_small
{
    width: 24px;
    height: 22px;
    font-size: 12px;
}
.v_input_pre_size_large
{
    padding-left: 48px;
}
.v_input_pre_size_middle
{
    padding-left: 34px;
}
.v_input_pre_size_small
{
    padding-left: 22px;
}


/*suf*/
.icon_suf
{
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    color: #808695;
    box-sizing: border-box;
}
.icon_suf_size_large
{
    width: 48px;
    height: 46px;
    font-size: 16px;
}
.icon_suf_size_middle
{
    width: 36px;
    height: 34px;
    font-size: 14px;
}
.icon_suf_size_small
{
    width: 24px;
    height: 22px;
    font-size: 12px;
}
.v_input_suf_size_large
{
    padding-right: 48px;
}
.v_input_suf_size_middle
{
    padding-right: 34px;
}
.v_input_suf_size_small
{
    padding-right: 22px;
}


/*clear*/
.icon_clear
{
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    color: #808695;
    box-sizing: border-box;
}
.icon_clear_size_large
{
    width: 48px;
    height: 46px;
    font-size: 16px;
}
.icon_clear_size_middle
{
    width: 36px;
    height: 34px;
    font-size: 14px;
}
.icon_clear_size_small
{
    width: 24px;
    height: 22px;
    font-size: 12px;
}
.v_input_clear_size_large
{
    padding-right: 48px;
}
.v_input_clear_size_middle
{
    padding-right: 34px;
}
.v_input_clear_size_small
{
    padding-right: 22px;
}


/*password*/
.icon_password
{
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    color: #808695;
    box-sizing: border-box;
}
.icon_password_size_large
{
    width: 48px;
    height: 46px;
    font-size: 16px;
}
.icon_password_size_middle
{
    width: 36px;
    height: 34px;
    font-size: 14px;
}
.icon_password_size_small
{
    width: 24px;
    height: 22px;
    font-size: 12px;
}
.v_input_password_size_large
{
    padding-right: 48px;
}
.v_input_password_size_middle
{
    padding-right: 34px;
}
.v_input_password_size_small
{
    padding-right: 22px;
}

/*long*/
.v_input_style_long
{
    width: auto;
    display: flex;
}
</style>
