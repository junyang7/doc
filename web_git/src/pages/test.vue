<template>
    <div style="padding: 300px; box-sizing: border-box;">
        <div class="table_outer">
            <table>
                <template v-for="(a, b, c) in row_index">


                    <!--列头开始-->
                    <template v-if="c === 0">
                        <tr class="header-col-tr" style="height: 30px; background-color: #f8f8f9; user-select: none;">
                            <td class="header-row-td" style="width: 30px; height: 30px;">
                                <div class="cell" style="position: relative;">
                                    <div class="cell-border-left-outer">
                                        <div class="cell-border-left-inner"></div>
                                    </div>
                                    <div class="cell-border-top-outer">
                                        <div class="cell-border-top-inner"></div>
                                    </div>
                                    <div class="cell-border-right-outer">
                                        <div class="cell-border-right-inner"></div>
                                    </div>
                                    <div class="cell-border-bottom-outer">
                                        <div class="cell-border-bottom-inner"></div>
                                    </div>
                                    <div class="cell-content"></div>
                                </div>
                            </td>
                            <template v-for="(d, e, f) in a">
                                <td class="header-col-tr-td" style="width: 100px; height: 30px;">
                                    <div class="cell" style="position: relative;">
                                        <div class="cell" style="position: relative;">
                                            <div class="cell-border-top-outer">
                                                <div class="cell-border-top-inner"></div>
                                            </div>

                                            <div class="cell-border-right-outer" @mouseenter="colOnMouseEnter(e)" @mouseleave="colOnMouseLeave(e)">
                                                <div class="cell-border-right-inner"></div>
                                            </div>
                                            <div class="cell-border-bottom-outer">
                                                <div class="cell-border-bottom-inner"></div>
                                            </div>
                                            <div class="cell-content">{{ e }}</div>
                                        </div>
                                    </div>
                                </td>
                            </template>
                        </tr>
                    </template>
                    <!--列头结束-->


                    <tr style="height: 30px;">
                        <!--行头开始-->
                        <td class="header-row-td" style="height: 30px; background-color: #f8f8f9; user-select: none;">
                            <div class="cell" style="position: relative;">
                                <div class="cell-border-left-outer">
                                    <div class="cell-border-left-inner"></div>
                                </div>
                                <div class="cell-border-right-outer">
                                    <div class="cell-border-right-inner"></div>
                                </div>
                                <div class="cell-border-bottom-outer" @mouseenter="rowOnMouseEnter(b)" @mouseleave="rowOnMouseLeave(b)">
                                    <div class="cell-border-bottom-inner"></div>
                                </div>
                                <div class="cell-content">{{ b }}</div>
                            </div>
                        </td>
                        <!--行头结束-->
                        <template v-for="(d, e, f) in a">
                            <td style="height: 30px;">
                                <div class="cell" style="position: relative;">
                                    <div
                                        :class="{
                                            'cell-border-right-outer': true,
                                            'cell-border-right-outer-hover': d.col_selected,
                                        }" >
                                        <div
                                            :class="{
                                                'cell-border-right-inner': true,
                                                'cell-border-right-inner-hover': d.col_selected,
                                            }"></div>
                                    </div>
                                    <div
                                        :class="{
                                            'cell-border-bottom-outer': true,
                                            'cell-border-bottom-outer-hover': d.row_selected,
                                        }">
                                        <div
                                            :class="{
                                                'cell-border-bottom-inner': true,
                                                'cell-border-bottom-inner-hover': d.row_selected,
                                            }"></div>
                                    </div>
                                    <div class="cell-content">{{ d.val }}</div>
                                </div>
                            </td>
                        </template>
                    </tr>
                </template>


            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "develop",
    data()
    {
        return {
            // 原始数据
            data_list: [
                ["A1", "B1", "C1", ],
                ["A2", "B2", "C2", ],
                ["A3", "B3", "C3", ],
            ],
            // 按行索引
            row_index: {},
            // 按列索引
            col_index: {},

        };
    },
    methods: {
        init()
        {
            for(let i = 0, j = this.data_list.length; i < j; i ++)
            {
                let row = i + 1;
                for(let k = 0, l = this.data_list[i].length; k < l; k ++)
                {
                    let col = String.fromCharCode(65 + k);
                    let obj = {};
                    obj["row"] = row;
                    obj["col"] = col;
                    obj["val"] = this.data_list[i][k];
                    obj["row_selected"] = false;
                    obj["col_selected"] = false;
                    if(!this.row_index.hasOwnProperty(row))
                    {
                        this.row_index[row] = {};
                    }
                    if(!this.row_index[row].hasOwnProperty(col))
                    {
                        this.row_index[row][col] = obj;
                    }

                    if(!this.col_index.hasOwnProperty(col))
                    {
                        this.col_index[col] = {};
                    }
                    if(!this.col_index[col].hasOwnProperty(row))
                    {
                        this.col_index[col][row] = obj;
                    }
                }
            }
            console.log(this.row_index)
            console.log(this.col_index)

            this.$forceUpdate()
        },


        colOnMouseEnter(col)
        {
            for(let k in this.col_index[col])
            {
                this.col_index[col][k]["col_selected"] = true;
            }
            this.$forceUpdate();
        },
        colOnMouseLeave(col)
        {
            for(let k in this.col_index[col])
            {
                this.col_index[col][k]["col_selected"] = false;
            }
            this.$forceUpdate();
        },
        rowOnMouseEnter(row)
        {
            for(let k in this.row_index[row])
            {
                this.row_index[row][k]["row_selected"] = true;
            }
            this.$forceUpdate();
        },
        rowOnMouseLeave(row)
        {
            for(let k in this.row_index[row])
            {
                this.row_index[row][k]["row_selected"] = false;
            }
            this.$forceUpdate();
        },


        // 可以用一个遮罩层，和一个水平或者垂直线，鼠标移动到点击位置，显示水平线，鼠标移除，水平线消失
    },
    mounted()
    {
        this.init();
    },
}
</script>

<style scoped>
table
{
    border-collapse: collapse;
    padding: 0;
    margin: 0;
}
td
{
    padding: 0;
    margin: 0;
    box-sizing: content-box;
}
tr
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.table_outer
{
    display: inline-block;
}
.cell
{
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: block;
}


.header-col-tr
{
    height: 30px;
}
.header-row-td
{
    width: 30px;
}



/*右*/
.cell-border-right-outer
{
    z-index: 1;
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 2px;
    width: 3px;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    /*padding-bottom: 1px;*/
    background-color: transparent;
}
.cell-border-right-inner
{
    z-index: 0;
    height: 100%;
    width: 1px;
    background-color: #dcdee2;
}
.cell-border-right-outer:hover
{
    background-color: blue;
}
.cell-border-right-outer:hover > .cell-border-right-inner
{
    background-color: transparent;
}
.cell-border-right-outer-hover
{
    background-color: blue;
}
.cell-border-right-inner-hover
{
    background-color: transparent;
}


/*下*/
.cell-border-bottom-outer
{
    z-index: 1;
    position: absolute;
    height: 3px;
    right: 1px;
    bottom: 0;
    left: -2px;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    /*padding-right: 1px;*/
    background-color: transparent;
}
.cell-border-bottom-inner
{
    z-index: 0;
    width: 100%;
    height: 1px;
    background-color: #dcdee2;
}
.cell-border-bottom-outer:hover
{
    background-color: blue;
}
.cell-border-bottom-outer:hover > .cell-border-bottom-inner
{
    background-color: transparent;
}
.cell-border-bottom-outer-hover
{
    background-color: blue;
}
.cell-border-bottom-inner-hover
{
    background-color: transparent;
}


/*左*/
.cell-border-left-outer
{
    z-index: 1;
    position: absolute;
    top: -1px;
    left: -2px;
    bottom: 1px;
    width: 3px;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    /*padding-bottom: 1px;*/
    background-color: transparent;
}
.cell-border-left-inner
{
    z-index: 0;
    height: 100%;
    width: 1px;
    background-color: #dcdee2;
}
.cell-border-left-outer:hover
{
    background-color: blue;
}
.cell-border-left-outer:hover > .cell-border-left-inner
{
    background-color: transparent;
}


/*上*/
.cell-border-top-outer
{
    z-index: 1;
    position: absolute;
    height: 3px;
    right: 1px;
    top: -2px;
    left: -1px;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    /*padding-right: 1px;*/
    background-color: transparent;
}
.cell-border-top-inner
{
    z-index: 0;
    width: 100%;
    height: 1px;
    background-color: #dcdee2;
}
.cell-border-top-outer:hover
{
    background-color: blue;
}
.cell-border-top-outer:hover > .cell-border-top-inner
{
    background-color: transparent;
}






.cell-content
{
    z-index: 0;
    position: absolute;
    top: 0;
    right: 3px;
    bottom: 3px;
    left: 0;
    font-size: 12px;
    color: #515a6e;
}


.cell-border-right-outer:hover
{
    background-color: blue;
}
.header-col-tr .header-col-tr-td .cell-border-right-outer:hover .cell-border-right-inner
{
    background-color: transparent;
}
</style>
