<template>
    <div class="v_status">
        <div class="bg" :style="style_bg"></div>
        <div class="ft" :style="style_ft"></div>
    </div>
</template>

<script>
export default
{
    name: "v_status",
    data()
    {
        return {
            default: "#2d8cf0",
            success: "#19be6b",
            warn: "#ff9900",
            error: "#ed4014",
            color: "",
        };
    },
    methods: {
        init()
        {
            if(this.$attrs.hasOwnProperty("color"))
            {
                this.color = this.$attrs.color;
            }
            else if(this.$attrs.hasOwnProperty("type"))
            {
                this.color = this[this.$attrs.type];
            }
            else
            {
                this.color = this.default;
            }
        },
    },
    computed:
    {
        style_bg()
        {
            return {
                "border": `2px solid ${this.color}`,
            };
        },
        style_ft()
        {
            return {
                "background-color": `${this.color}`,
            };
        },
    },
    created()
    {
        this.init();
    },
}
</script>

<style scoped>
.v_status
{
    position: relative;
    width: 14px;
    height: 14px;
    display: inline-block;
}
@keyframes status {
    0%
    {
        transform: scale(0.3);
        opacity: 1;
    }
    100%
    {
        transform: scale(1);
        opacity: 0
    }
}


.bg
{
    z-index: 0;
    position: absolute;
    width: 14px;
    height: 14px;
    left: 50%;
    top: 50%;
    margin-left: -7px;
    margin-top: -7px;
    border-radius: 100%;
    box-sizing: border-box;
    /*border: 2px solid rgba(45, 140, 240, 0.8);*/
    animation: status 1.2s ease-in-out infinite;
}
.ft
{
    z-index: 1;
    position: absolute;
    width: 6px;
    height: 6px;
    left: 50%;
    top: 50%;
    margin-left: -3px;
    margin-top: -3px;
    border-radius: 100%;
    /*background-color: rgba(45, 140, 240, 1);*/
}


.bg_type_default
{
    border: 2px solid rgba(242,242,242, 1);
}
.ft_type_default
{
    background-color: rgba(242,242,242, 1);
}
.bg_type_primary
{
    border: 2px solid rgba(45, 140, 240, 1);
}
.ft_type_primary
{
    background-color: rgba(45, 140, 240, 1);
}
.bg_type_success
{
    border: 2px solid rgba(25, 190, 107, 1);
}
.ft_type_success
{
    background-color: rgba(25, 190, 107, 1);
}
.bg_type_warn
{
    border: 2px solid rgba(255, 153, 0, 1);
}
.ft_type_warn
{
    background-color: rgba(255, 153, 0, 1);
}
.bg_type_error
{
    border: 2px solid rgba(237, 64, 20, 1);
}
.ft_type_error
{
    background-color: rgba(237, 64, 20, 1);
}
</style>
