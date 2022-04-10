<template>
    <div class="message">
        <div>
            <template v-for="(a, b) in message_list">
                <div class="container">
                    <div
                        :class="{
                                item: true,
                                item_info: a.type === 'info',
                                item_success: a.type === 'success',
                                item_warn: a.type === 'warn',
                                item_error: a.type === 'error',
                            }"
                        :key="b">
                        <div class="main">
                            <div class="icon">
                                <template v-if="a.type === 'info'">
                                    <i class="ri-information-fill"></i>
                                </template>
                                <template v-if="a.type === 'success'">
                                    <i class="ri-checkbox-circle-fill"></i>
                                </template>
                                <template v-if="a.type === 'warn'">
                                    <i class="ri-error-warning-fill"></i>
                                </template>
                                <template v-if="a.type === 'error'">
                                    <i class="ri-close-circle-fill"></i>
                                </template>
                            </div>
                            <div class="divide"></div>
                            <div class="text">
                                {{ a.text }}
                            </div>
                        </div>
                        <template v-if="!a.auto_close">
                            <div class="control" @click="close(a.index)">
                                <i class="ri-close-line"></i>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default
{
    name: "v_message",
    data()
    {
        return {
            index: 0,
            message_list: [],
            message_container: {},
        };
    },
    methods: {
        init()
        {
            let message_list = [];
            for(let i in this.message_container)
            {
                message_list.unshift(this.message_container[i]);
            }
            this.message_list = message_list;
        },
        add(message)
        {
            let index = ++ this.index;
            this.message_container[index] = {
                index: index,
                text: message.text,
                type: message.type,
                auto_close: message.auto_close,
            };
            if(this.message_container[index].auto_close)
            {
                this.message_container[index]["st"] = setTimeout(() => {this.remove(index); }, message.time);
            }
            this.init();
            this.$forceUpdate();
        },
        remove(index)
        {
            if(this.message_container[index].hasOwnProperty("st"))
            {
                clearTimeout(this.message_container[index].st);
            }
            delete this.message_container[index];
            this.init();
            this.$forceUpdate();
        },
        close(index)
        {
            this.remove(index);
        },
    }
};
</script>
<style scoped>
/*base*/
.message
{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    pointer-events: none;
    box-sizing: border-box;
    padding-top: 24px;
}
.container
{
    display: flex;
    justify-content: center;
}
.item
{
    margin-top: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 2px;
    box-shadow: 0 0 0 2px rgba(232,232,232, 0.2);
    height: 36px;
    border: 1px solid #e8eaec;
    background-color: #ffffff;
}
.main
{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    width: auto;
}
.divide
{
    width: 10px;
}
.icon
{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}
.text
{
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: #515a6e;
}
.control
{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    font-weight: lighter;
    color: #808695;
    font-size: 14px;
    pointer-events: auto;
    cursor: pointer;
}
/*type*/
.item_info .icon
{
    color: rgba(45, 140, 240, 1);
}
.item_success .icon
{
    color: rgba(25, 190, 107, 1);
}
.item_warn .icon
{
    color: rgba(255, 153, 0, 1);
}
.item_error .icon
{
    color: rgba(237, 64, 20, 1);
}
</style>
