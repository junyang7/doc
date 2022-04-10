//jQuery插件
+function($)
{
    /**
     * xGuoguo构造函数
     * 1.定义相关属性，合并保存参数，预处理数据
     * 2.根据参数调用相关方法进行处理
     * @param element 当前选取的jQuery对象
     * @param option 调用插件是传递的参数，一般是个对象形式
     */
    var xGuoguo = function(element, option)
    {

        /**
         * 1.定义相关属性，合并保存参数，预处理数据
         */
        //当前jQuery对象
        this.$element = element;
        //默认参数
        this.$defaults = {
            //类型
            type: "navigate",
            //方向
            direction: "horizontal",
            //风格
            style: "float",
            //数据
            data: [
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
                {
                    id: 1,
                    name: "首页",
                    parent_id: 0,
                    sort_weight: 1,
                },
            ],
            //宽度
            width: "auto",
            //排序
            sort: {
                //字段名称
                key: "sort_weight",
                //排序方式
                order: "asc",
            },
            //背景颜色
            backgroundColor: "transparent",
            //节点对象
            item: {
                //回调函数
                callback: {
                    click: this.$callback_item_click,
                },
                //高度
                height: 26,
                //宽度
                width: "auto",
                //字号
                fontSize: 12,
                //文字颜色
                color: "#515a6e",
                //文字向右缩进距离
                textIndent: 5,
                backgroundColor: "",
                iWidth: 20,//图标宽度（不包括水平线和垂直线）
                lineXWidth: 20,//水平线宽度
                padding: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0,
                },
                border: {
                    top: "none",
                    right: "none",
                    bottom: "none",
                    left: "2px solid transparent",
                },
                margin: {
                    top: 0,
                    right: 1,
                    bottom: 1,
                    left: 0,
                },
                radio: {
                    fontSize: 12,
                    color: "#515a6e",
                },
                checkbox: {
                    fontSize: 12,
                    color: "#515a6e",
                },
                icon: {
                    fontSize: 12,
                    color: "#515a6e",
                },
                hover: {
                    color: "#2d8cf0",
                    backgroundColor: "#f8f8f9",
                    border: {
                        top: "none",
                        right: "none",
                        bottom: "none",
                        left: "2px solid #2d8cf0",
                    },
                },
            },
            //折叠展开图标
            action: {
                class: [
                    //折叠状态类名
                    "ri-add-box-line",
                    //展开状态类名
                    "ri-checkbox-indeterminate-line",
                ],
                color: "#515a6e",
                hover: {
                    color: "#2d8cf0",
                },
            },
            radio: {
                class: [
                    //单选框未选中状态类名
                    "ri-checkbox-blank-circle-line",
                    //单选框半选中状态类名
                    "ri-checkbox-circle-fill",
                ],
                color: "#515a6e",
                hover: {
                    color: "#2d8cf0",
                },
            },
            checkbox: {
                class: [
                    //复选框未选中状态类名
                    "ri-checkbox-blank-line",
                    //复选框半选中状态类名
                    "ri-checkbox-indeterminate-fill",
                    //复选框全选中状态类名
                    "ri-checkbox-fill",
                ],
                color: "#515a6e",
                hover: {
                    color: "#2d8cf0",
                },
            },
        };
        //合并参数
        this.$option = $.extend(true, this.$defaults, option);
        //预处理后的数据
        this.$data = [];
        //将数据处理成标准的树数据格式（包含排序）
        this.$toTree(this, this.$option.data);

        /**
         * 2.根据参数调用相关方法进行处理
         */
        //根据参数自动匹配相关方法进行调用
        switch(this.$option.type)
        {
            //导航
            case "navigate":
                switch(this.$option.direction)
                {
                    //水平导航
                    case "horizontal":
                        switch(this.$option.style)
                        {
                            case "float":
                                this.$navigateHorizontalFloat(this);
                                break;
                            case "dock":
                                break;
                            default:
                                break;
                        }
                        break;
                    //垂直导航
                    case "vertical":
                        switch(this.$option.style)
                        {
                            case "float":
                                this.$navigateVerticalFloat(this);
                                break;
                            case "dock":
                                this.$navigateVerticalDock(this);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                break;
            //树
            case "tree":
                switch(this.$option.direction)
                {
                    //垂直树
                    case "vertical":
                        switch(this.$option.style)
                        {
                            //默认
                            case "default":
                                this.$treeVerticalDefault(this);
                                break;
                            //单选框
                            case "radio":
                                this.$treeVerticalRadio(this);
                                break;
                            //复选框
                            case "checkbox":
                                this.$treeVerticalCheckbox(this);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };
    /**
     * 方法列表
     * @type {{$sort: (function(*=, *, *=): *), $navigateHorizontal: $navigateHorizontal, $toTree: $toTree}}
     */
    xGuoguo.prototype = {
        //默认点击项目时候的回调处理函数
        $callback_item_click: function(href, id, pid)
        {
            var a = document.createElement('a');
            a.href = href;
            a.click();
        },
        /**
         * 将数据转换成标准的树格式（包含排序，排序调用排序方法递归处理）
         * @param _this 当前插件对象
         * @param arr   需要处理的数据，数组形式
         */
        $toTree: function(_this, arr)
        {
            var map = {};
            arr.forEach(function(item){
                //1.删除所有子元素
                delete item.children;
                //2.转换键值对存储
                map[item.id] = item;
            });
            arr.forEach(function(item){
                //添加所有父级元素或顶级元素
                var parent = map[item.parent_id];
                if(parent)
                {
                    (parent.children || ( parent.children = [] )).push(item);
                }
                else
                {
                    //循环内this代表当前循环的对象，因此如果要操作外部对象，必须引入新的变量
                    _this.$data.push(item);
                }
            });
            //排序
            this.$sort(this, this.$data, this.$option.sort.order == "asc" ? true : false);
        },
        /**
         * 对标准数格式数据进行递归排序
         * @param _this 当前插件对象
         * @param arr   需要处理的数据，数组格式
         * @param asc   是否升序，布尔
         * @returns {*} 排序好的数组
         */
        $sort: function(_this, arr, asc)
        {
            arr.sort(function(a, b){return asc ? a[_this.$option.sort.key] - b[_this.$option.sort.key] : b[_this.$option.sort.key] - a[_this.$option.sort.key];});
            for(var i = 0; i < arr.length; i ++)
            {
                if(arr[i].hasOwnProperty("children"))
                {
                    this.$sort(_this, arr[i]["children"], asc);
                }
            }
            return arr;
        },
        /**
         * *导航*
         * *水平*
         * *悬浮*
         * @param _this 当前插件对象
         */
        $navigateHorizontalFloat: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '<i style="float: right;" class="more ri-arrow-right-s-line"></i>';
                        menu += '</div>';
                        menu += '<ul display="inline-block">';
                        toDom(arr[i]["children"], deep + 1);
                        menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                        menu += '<div href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 处理样式
             */
            //插件容器背景颜色
            $(this.$element).css(
                {
                    backgroundColor: this.$option.backgroundColor,
                }
            );
            //ul去除默认样式，字体大小设置为0，顶部对齐
            $(this.$element).find("ul").css(
                {
                    listStyle: "none",
                    fontSize: "0px",
                    verticalAlign: "top",
                }
            );
            //*外边距和内边距清空，不允许复制
            $(this.$element).find("*").css(
                {
                    margin: "0px",
                    padding: "0px",
                    unselectable: "none",
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                }
            );
            //div，树中对象
            //高，宽，背景颜色，字体大小，边框，向右缩进，右外边距，字体颜色
            //非0级对象
            $(this.$element).find("div").css(
                {
                    height: _this.$option.item.height + "px",
                    width: _this.$option.item.width + "px",
                    backgroundColor: _this.$option.item.backgroundColor,
                    lineHeight: _this.$option.item.height + "px",
                    fontSize: _this.$option.item.fontSize + "px",
                    borderTop: _this.$option.item.border.top,
                    borderRight: _this.$option.item.border.right,
                    borderBottom: _this.$option.item.border.bottom,
                    borderLeft: _this.$option.item.border.left,
                    marginTop: _this.$option.item.margin.top + "px",
                    marginRight: _this.$option.item.margin.right + "px",
                    marginBottom: _this.$option.item.margin.bottom + "px",
                    marginLeft: _this.$option.item.margin.left + "px",
                    textIndent: _this.$option.item.textIndent + "px",
                    paddingTop: _this.$option.item.padding.top + "px",
                    paddingRight: _this.$option.item.padding.right + "px",
                    paddingBottom: _this.$option.item.padding.bottom + "px",
                    paddingLeft: _this.$option.item.padding.left + "px",
                    color: _this.$option.item.color,
                    display: "inline-block",
                }
            );
            //0级对象
            $(this.$element).find("div[pid=0]").css(
                {
                    display: "block",
                }
            );
            $(this.$element).find("div[pid=0]").find(".more").toggleClass("ri-arrow-right-s-line ri-arrow-down-s-line");
            //树对象中元素
            //高，字体大小
            $(this.$element).find("i,a,span").css(
                {
                    height: _this.$option.item.height + "px",
                    lineHeight: _this.$option.item.height + "px",
                    verticalAlign: "top",
                    display: "inline-block",
                    fontSize: _this.$option.item.fontSize + "px",
                }
            );
            //所有li都转成行内块级元素
            $(this.$element).find("> ul > li").css(
                {
                    display: "inline-block",
                }
            );
            //所有处理第一个ul之外的ul默认隐藏，绝对定位
            $(this.$element).find("> ul ul").css(
                {
                    display: "none",
                    position: "absolute",
                }
            );
            /**
             * 处理事件
             */
            //树中对象hover事件
            $(this.$element).find("div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.backgroundColor,
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            //树中对象的不同级别子级菜单的显示和隐藏事件
            $(this.$element).find("> ul > li div").mouseenter(function(){
                var display = "block";
                if($(this).next().attr("display") == "inline-block")
                {
                    display = "inline-block";
                }
                $(this).next().css(
                    {
                        display: display,
                    }
                );
                $(this).next().addClass("active");
                $(this).parent().mouseleave(function(){
                    $(this).find(".active").css(
                        {
                            display: "none",
                        }
                    );
                });
            });
            //树中对象点击事件
            $(this.$element).find("div").click(function(){
                // var a = document.createElement('a');
                // a.href = $(this).attr("href");
                // a.click();
                _this.$option.item.callback.click($(this).attr("href"), $(this).attr("id"), $(this).attr("pid"));
            });
        },
        /**
         * *导航*
         * *垂直*
         * *悬浮*
         * @param _this 当前插件对象
         */
        $navigateVerticalFloat: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '<i style="float: right;" class="more ri-arrow-right-s-line"></i>';
                        menu += '</div>';
                        menu += '<ul display="inline-block">';
                        toDom(arr[i]["children"], deep + 1);
                        menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                        menu += '<div href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 处理样式
             */
            //插件容器背景颜色
            $(this.$element).css(
                {
                    backgroundColor: this.$option.backgroundColor,
                }
            );
            //ul去除默认样式，字体大小设置为0，顶部对齐
            $(this.$element).find("ul").css(
                {
                    listStyle: "none",
                    fontSize: "0px",
                    verticalAlign: "top",
                }
            );
            //*外边距和内边距清空，不允许复制
            $(this.$element).find("*").css(
                {
                    margin: "0px",
                    padding: "0px",
                    unselectable: "on",
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                }
            );
            //div，树中对象
            //高，宽，背景颜色，字体大小，边框，向右缩进，右外边距，字体颜色
            //非0级对象
            $(this.$element).find("div").css(
                {
                    height: _this.$option.item.height + "px",
                    width: _this.$option.item.width + "px",
                    backgroundColor: _this.$option.item.backgroundColor,
                    lineHeight: _this.$option.item.height + "px",
                    fontSize: _this.$option.item.fontSize + "px",
                    borderTop: _this.$option.item.border.top,
                    borderRight: _this.$option.item.border.right,
                    borderBottom: _this.$option.item.border.bottom,
                    borderLeft: _this.$option.item.border.left,
                    marginTop: _this.$option.item.margin.top + "px",
                    marginRight: _this.$option.item.margin.right + "px",
                    marginBottom: _this.$option.item.margin.bottom + "px",
                    marginLeft: _this.$option.item.margin.left + "px",
                    textIndent: _this.$option.item.textIndent + "px",
                    paddingTop: _this.$option.item.padding.top + "px",
                    paddingRight: _this.$option.item.padding.right + "px",
                    paddingBottom: _this.$option.item.padding.bottom + "px",
                    paddingLeft: _this.$option.item.padding.left + "px",
                    color: _this.$option.item.color,
                    display: "inline-block",
                }
            );
            //树对象中元素
            //高，字体大小
            $(this.$element).find("i,a,span").css(
                {
                    height: _this.$option.item.height + "px",
                    lineHeight: _this.$option.item.height + "px",
                    verticalAlign: "top",
                    display: "inline-block",
                    fontSize: _this.$option.item.fontSize + "px",
                }
            );
            //所有处理第一个ul之外的ul默认隐藏
            $(this.$element).find("> ul ul").css(
                {
                    position: "absolute",
                    display: "none",
                }
            );
            /**
             * 处理事件
             */
            //树中对象hover事件
            $(this.$element).find("div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.backgroundColor,
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            //树中对象的不同级别子级菜单的显示和隐藏事件
            $(this.$element).find("> ul > li div").mouseenter(function(){
                $(this).next().css(
                    {
                        display: "inline-block",
                    }
                );
                $(this).next().addClass("active");
                $(this).parent().mouseleave(function(){
                    $(this).find(".active").css(
                        {
                            display: "none",
                        }
                    );
                });
            });
            //树中对象点击事件
            $(this.$element).find("div").click(function(){
                // var a = document.createElement('a');
                // a.href = $(this).attr("href");
                // a.click();
                _this.$option.item.callback.click($(this).attr("href"), $(this).attr("id"), $(this).attr("pid"));
            });
        },
        /**
         * *导航*
         * *垂直*
         * *嵌入*
         * @param _this 当前插件对象
         */
        $navigateVerticalDock: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                        menu += '<div id="' + arr[i]["id"] + '"  id="' + arr[i]["id"] + '" pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '" style="padding-left: ' + deep * _this.$option.item.padding.left + 'px;">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '<i style="float: right;" class="more ri-arrow-right-s-line"></i>';
                        menu += '</div>';
                        menu += '<ul display="inline-block">';
                        toDom(arr[i]["children"], deep + 1);
                        menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                        menu += '<div id="' + arr[i]["id"] + '"  pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '" style="padding-left: ' + deep * _this.$option.item.padding.left + 'px;">';
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';
                        menu += '<span>' + arr[i]["name"] + '</span>';
                        menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 处理样式
             */
            //插件容器背景颜色
            $(this.$element).css(
                {
                    backgroundColor: this.$option.backgroundColor,
                    width: this.$option.width,
                    overflowY: "auto",
                }
            );
            //ul去除默认样式，字体大小设置为0，顶部对齐
            $(this.$element).find("ul").css(
                {
                    listStyle: "none",
                    fontSize: "0px",
                    verticalAlign: "top",
                    margin: "0px",
                    padding: "0px",
                }
            );
            //*外边距和内边距清空，不允许复制
            $(this.$element).find("*").css(
                {
                    unselectable: "on",
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                }
            );
            $(this.$element).find("div").css(
                {
                    height: _this.$option.item.height + "px",
                    backgroundColor: _this.$option.item.backgroundColor,
                    lineHeight: _this.$option.item.height + "px",
                    fontSize: _this.$option.item.fontSize + "px",
                    borderTop: _this.$option.item.border.top,
                    borderRight: _this.$option.item.border.right,
                    borderBottom: _this.$option.item.border.bottom,
                    borderLeft: _this.$option.item.border.left,
                    marginTop: _this.$option.item.margin.top + "px",
                    marginRight: _this.$option.item.margin.right + "px",
                    marginBottom: _this.$option.item.margin.bottom + "px",
                    marginLeft: _this.$option.item.margin.left + "px",
                    textIndent: _this.$option.item.textIndent + "px",
                    paddingTop: _this.$option.item.padding.top + "px",
                    paddingRight: _this.$option.item.padding.right + "px",
                    paddingBottom: _this.$option.item.padding.bottom + "px",
                    color: _this.$option.item.color,
                    whiteSpace: "nowrap",
                }
            );
            //树对象中元素
            //高，字体大小
            $(this.$element).find("i,a,span").css(
                {
                    height: _this.$option.item.height + "px",
                    lineHeight: _this.$option.item.height + "px",
                    verticalAlign: "top",
                    display: "inline-block",
                    fontSize: _this.$option.item.fontSize + "px",
                }
            );
            //所有处理第一个ul之外的ul默认隐藏
            $(this.$element).find("> ul ul").css(
                {
                    display: "none",
                }
            );
            /**
             * 处理事件
             */
            //树中对象hover事件
            $(this.$element).find("div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    if($(this).hasClass("active"))
                    {
                        return;
                    }
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.backgroundColor,
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            //树中对象click事件
            $(this.$element).find("div").click(function(e){
                e.stopPropagation();
                if($(this).hasClass("active"))
                {
                    return;
                }
                $(_this.$element).find(".active").each(function(){
                    $(this).removeClass("active");
                    $(this).css(
                        {
                            backgroundColor: _this.$option.item.backgroundColor,
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            color: _this.$option.item.color,
                        }
                    );
                });
                $(this).css(
                    {
                        backgroundColor: _this.$option.item.hover.backgroundColor,
                        borderTop: _this.$option.item.hover.border.top,
                        borderRight: _this.$option.item.hover.border.right,
                        borderBottom: _this.$option.item.hover.border.bottom,
                        borderLeft: _this.$option.item.hover.border.left,
                        color: _this.$option.item.hover.color,
                    }
                );
                $(this).addClass("active");
                _this.$option.item.callback.click($(this).attr("href"), $(this).attr("id"), $(this).attr("pid"));
            });
            //树中对象子级菜单显示与隐藏事件
            $(this.$element).find(".more").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).toggleClass("ri-arrow-right-s-line ri-arrow-down-s-line");
                $(this).parent().next().slideToggle();
            });

        },
        /**
         * *树*
         * *垂直*
         * *默认*
         * @param _this 当前插件对象
         */
        $treeVerticalDefault: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                        menu += '<div>';
                        menu += '<i class="' + _this.$option.action.class[0] + '"></i>';//展开折叠占位，默认折叠
                        menu += '<i></i>';//垂直线
                        menu += '<i></i>';//水平线
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i></i>';//单复选框
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                        menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                        menu += '</div>';
                        menu += '</div>';
                        menu += '<ul>';
                        toDom(arr[i]["children"], deep + 1);
                        menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                        menu += '<div>';
                        menu += '<i></i>';//展开折叠占位
                        menu += '<i></i>';//垂直线
                        menu += '<i></i>';//水平线
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i></i>';//单复选框
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                        menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                        menu += '</div>';
                        menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 树容器内部所有【*】
             * 1.外边距0
             * 2.内边距0
             * 3.禁止复制
             */
            $(this.$element).find("*").css({
                margin: "0px",
                padding: "0px",
                unselectable: "on",
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
            });
            /**
             * 树容器内部所有【ul】
             * 1.清除默认样式
             * 2.设置字号0
             */
            $(this.$element).find("ul").css({
                listStyle: "none",
                fontSize: "0px",
            });
            /**
             * 树容器内部所有【i,a,span】
             * 1.垂直居中
             * 2.水平居中
             * 3.去除下划线
             * 4.设置高度
             * 5.设置行高
             * 6.设置字体大小
             * 7.设置字体颜色
             */
            $(this.$element).find("i,a,span").css({
                verticalAlign: "middle",
                textAlign: "center",
                textDecoration: "none",
                height: _this.$option.item.height + "px",
                lineHeight: _this.$option.item.height + "px",
                fontSize: _this.$option.item.fontSize + "px",
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部所有【div】
             * 1.设置高度
             * 2.设置换行方式为不换行
             * 3.设置右内边距
             */
            $(this.$element).find("div").css({
                height: _this.$option.item.height + "px",
                whiteSpace: "nowrap",
                paddingTop: _this.$option.item.padding.top + "px",
                paddingRight: _this.$option.item.padding.right + "px",
                paddingBottom: _this.$option.item.padding.bottom + "px",
                paddingLeft: _this.$option.item.padding.left + "px",
            });
            /**
             * 树容器内部所有【折叠展开图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置定位方式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                position: "absolute",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             * 3.设置背景
             */
            $(this.$element).find("> ul li > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【首端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直底部对齐
             */
            $(this.$element).find("> ul > li:first-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "bottom",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直顶部对齐
             */
            $(this.$element).find("ul > li:last-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "top",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【水平线】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置向左缩进：缩进【折叠展开图标】宽度的一半
             * 4.设置水平线：y坐标为树对象【div】高度的一半
             */
            $(this.$element).find("> ul li > div > i:nth-child(3)").css({
                width: _this.$option.item.lineXWidth + "px",
                display: "inline-block",
                marginLeft: - _this.$option.item.iWidth / 2 + "px",
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAYAAACe5Y9JAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAE0lEQVQIHWNgAIIzZ878B9FUBQAa5wNk4YGBdwAAAABJRU5ErkJggg==") 0px ' + _this.$option.item.height / 2 + 'px repeat-x',
            });
            /**
             * 树容器内部【所有节点】【叶子】【分叉】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             */
            $(this.$element).find("li:not(:last-child) > ul").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【所有节点】【叶子】相对于【分叉】【外部】【向右缩进】
             * 1.设置向右缩进：【折叠展开图标】或【单复选框】或【对象图标】宽度的一半 + 【水平线】宽度
             * 2.设置显示方式
             */
            $(this.$element).find("li > ul").css({
                paddingLeft: _this.$option.item.lineXWidth + _this.$option.item.iWidth / 2 + 1 + "px",
                display: "none",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【整体】
             * 1.设置显示方式
             * 2.设置左边框样式
             */
            $(this.$element).find("> ul li > div > div").css({
                display: "inline-block",
                borderTop: _this.$option.item.border.top,
                borderRight: _this.$option.item.border.right,
                borderBottom: _this.$option.item.border.bottom,
                borderLeft: _this.$option.item.border.left,
                backgroundColor: _this.$option.item.backgroundColor,
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【单复选框】
             * 1.设置宽度
             * 2.设置显示方式
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                display: "none",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置字体大小
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                fontSize: _this.$option.item.icon.fontSize + "px",
                color: _this.$option.item.icon.color,
            });
            /**
             ********************************
             * 处理事件
             ********************************
             */
            /**
             * 树中对象hover事件
             * 鼠标移入时候改变当前节点的样式
             * 鼠标移除时候改变当前节点的样式，离开时判断当前元素是否含有active，若有则不改变样式的离开
             */
            $(this.$element).find("> ul li > div > div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    if($(this).hasClass("active"))
                    {
                        return;
                    }
                    $(this).css(
                        {
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            backgroundColor: _this.$option.item.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            /**
             * 树中对象click事件
             * 当前节点点击时移除素有包含active的元素的样式及active类名，设置当前元素样式并添加active
             */
            $(this.$element).find("> ul li > div > div").click(function(){
                var active = $(_this.$element).find("> ul li > div > div.active");
                $(active).css(
                    {
                        borderTop: _this.$option.item.border.top,
                        borderRight: _this.$option.item.border.right,
                        borderBottom: _this.$option.item.border.bottom,
                        borderLeft: _this.$option.item.border.left,
                        backgroundColor: _this.$option.item.backgroundColor,
                    }
                );
                $(active).find("*").css(
                    {
                        color: _this.$option.item.color,
                    }
                );
                $(active).removeClass("active");
                $(this).css(
                    {
                        borderTop: _this.$option.item.hover.border.top,
                        borderRight: _this.$option.item.hover.border.right,
                        borderBottom: _this.$option.item.hover.border.bottom,
                        borderLeft: _this.$option.item.hover.border.left,
                        backgroundColor: _this.$option.item.hover.backgroundColor,
                    }
                );
                $(this).find("*").css(
                    {
                        color: _this.$option.item.hover.color,
                    }
                );
                $(this).addClass("active");
                var a = document.createElement('a');
                a.href = $(this).attr("href");
                a.click();
            });
            /**
             * 折叠展开事件点击事件
             * 点击折叠展开图标时自动切换图标并切换子级容器的展开或折叠状态
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").click(function(){
                $(this).toggleClass(_this.$option.action.class.join(" "));
                $(this).parent().next().toggle();
            });
            /**
             * 折叠展开事件热点事件
             * 鼠标移入时改变样式
             * 鼠标移出是改变样式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.color,
                        }
                    );
                }
            );
        },
        /**
         * *树*
         * *垂直*
         * *单选*
         * @param _this 当前插件对象
         */
        $treeVerticalRadio: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                        menu += '<div>';
                        menu += '<i class="' + _this.$option.action.class[0] + '"></i>';//展开折叠占位，默认折叠
                        menu += '<i></i>';//垂直线
                        menu += '<i></i>';//水平线
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + _this.$option.radio.class[0] + '"></i>';//单复选框
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                        menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                        menu += '</div>';
                        menu += '</div>';
                        menu += '<ul>';
                        toDom(arr[i]["children"], deep + 1);
                        menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                        menu += '<div>';
                        menu += '<i></i>';//展开折叠占位
                        menu += '<i></i>';//垂直线
                        menu += '<i></i>';//水平线
                        menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                        menu += '<i class="' + _this.$option.radio.class[0] + '"></i>';//单复选框
                        menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                        menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                        menu += '</div>';
                        menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 树容器内部所有【*】
             * 1.外边距0
             * 2.内边距0
             * 3.禁止复制
             */
            $(this.$element).find("*").css({
                margin: "0px",
                padding: "0px",
                unselectable: "on",
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
            });
            /**
             * 树容器内部所有【ul】
             * 1.清除默认样式
             * 2.设置字号0
             */
            $(this.$element).find("ul").css({
                listStyle: "none",
                fontSize: "0px",
            });
            /**
             * 树容器内部所有【i,a,span】
             * 1.垂直居中
             * 2.水平居中
             * 3.去除下划线
             * 4.设置高度
             * 5.设置行高
             * 6.设置字体大小
             * 7.设置字体颜色
             */
            $(this.$element).find("i,a,span").css({
                verticalAlign: "middle",
                textAlign: "center",
                textDecoration: "none",
                height: _this.$option.item.height + "px",
                lineHeight: _this.$option.item.height + "px",
                fontSize: _this.$option.item.fontSize + "px",
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部所有【div】
             * 1.设置高度
             * 2.设置换行方式为不换行
             * 3.设置右内边距
             */
            $(this.$element).find("div").css({
                height: _this.$option.item.height + "px",
                whiteSpace: "nowrap",
                paddingTop: _this.$option.item.padding.top + "px",
                paddingRight: _this.$option.item.padding.right + "px",
                paddingBottom: _this.$option.item.padding.bottom + "px",
                paddingLeft: _this.$option.item.padding.left + "px",
            });
            /**
             * 树容器内部所有【折叠展开图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置定位方式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                position: "absolute",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             * 3.设置背景
             */
            $(this.$element).find("> ul li > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【首端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直底部对齐
             */
            $(this.$element).find("> ul > li:first-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "bottom",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直顶部对齐
             */
            $(this.$element).find("ul > li:last-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "top",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【水平线】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置向左缩进：缩进【折叠展开图标】宽度的一半
             * 4.设置水平线：y坐标为树对象【div】高度的一半
             */
            $(this.$element).find("> ul li > div > i:nth-child(3)").css({
                width: _this.$option.item.lineXWidth + "px",
                display: "inline-block",
                marginLeft: - _this.$option.item.iWidth / 2 + "px",
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAYAAACe5Y9JAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAE0lEQVQIHWNgAIIzZ878B9FUBQAa5wNk4YGBdwAAAABJRU5ErkJggg==") 0px ' + _this.$option.item.height / 2 + 'px repeat-x',
            });
            /**
             * 树容器内部【所有节点】【叶子】【分叉】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             */
            $(this.$element).find("li:not(:last-child) > ul").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【所有节点】【叶子】相对于【分叉】【外部】【向右缩进】
             * 1.设置向右缩进：【折叠展开图标】或【单复选框】或【对象图标】宽度的一半 + 【水平线】宽度
             * 2.设置显示方式
             */
            $(this.$element).find("li > ul").css({
                paddingLeft: _this.$option.item.lineXWidth + _this.$option.item.iWidth / 2 + 1 + "px",
                display: "none",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【整体】
             * 1.设置显示方式
             * 2.设置左边框样式
             */
            $(this.$element).find("> ul li > div > div").css({
                display: "inline-block",
                borderTop: _this.$option.item.border.top,
                borderRight: _this.$option.item.border.right,
                borderBottom: _this.$option.item.border.bottom,
                borderLeft: _this.$option.item.border.left,
                backgroundColor: _this.$option.item.backgroundColor,
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【单复选框】
             * 1.设置宽度
             * 2.设置显示方式
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                fontSize: _this.$option.item.radio.fontSize + "px",
                color: _this.$option.item.radio.color,
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置字体大小
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                fontSize: _this.$option.item.icon.fontSize + "px",
                color: _this.$option.item.icon.color,
            });
            /**
             ********************************
             * 处理事件
             ********************************
             */
            /**
             * 树中对象hover事件
             * 鼠标移入时候改变当前节点的样式
             * 鼠标移除时候改变当前节点的样式，离开时判断当前元素是否含有active，若有则不改变样式的离开
             */
            $(this.$element).find("> ul li > div > div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    if($(this).hasClass("active"))
                    {
                        return;
                    }
                    $(this).css(
                        {
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            backgroundColor: _this.$option.item.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            /**
             * 树中对象click事件
             * 当前节点点击时移除素有包含active的元素的样式及active类名，设置当前元素样式并添加active
             */
            $(this.$element).find("> ul li > div > div").click(function(){
                var active = $(_this.$element).find("> ul li > div > div.active");
                $(active).css(
                    {
                        borderTop: _this.$option.item.border.top,
                        borderRight: _this.$option.item.border.right,
                        borderBottom: _this.$option.item.border.bottom,
                        borderLeft: _this.$option.item.border.left,
                        backgroundColor: _this.$option.item.backgroundColor,
                    }
                );
                $(active).find("*").css(
                    {
                        color: _this.$option.item.color,
                    }
                );
                $(active).removeClass("active");
                $(this).css(
                    {
                        borderTop: _this.$option.item.hover.border.top,
                        borderRight: _this.$option.item.hover.border.right,
                        borderBottom: _this.$option.item.hover.border.bottom,
                        borderLeft: _this.$option.item.hover.border.left,
                        backgroundColor: _this.$option.item.hover.backgroundColor,
                    }
                );
                $(this).find("*").css(
                    {
                        color: _this.$option.item.hover.color,
                    }
                );
                $(this).addClass("active");
            });
            /**
             * 折叠展开事件点击事件
             * 点击折叠展开图标时自动切换图标并切换子级容器的展开或折叠状态
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").click(function(){
                $(this).toggleClass(_this.$option.action.class.join(" "));
                $(this).parent().next().toggle();
            });
            /**
             * 折叠展开事件热点事件
             * 鼠标移入时改变样式
             * 鼠标移出是改变样式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.color,
                        }
                    );
                }
            );
            //单选框点击事件
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").click(function(){
                //选中此节点
                if($(this).hasClass(_this.$option.radio.class[0]))
                {
                    $(_this.$element).find("." + _this.$option.radio.class[1]).toggleClass(_this.$option.radio.class.join(" "));
                    $(this).toggleClass(_this.$option.radio.class.join(" "));
                }
                //撤销此节点
                else
                {
                    $(_this.$element).find("." + _this.$option.radio.class[1]).toggleClass(_this.$option.radio.class.join(" "));
                }
                //处理父节点
                $(this).parents("ul").each(function(){
                    //未选中当前对象：只要存在已选中，则父类半选中，否则不选中
                    var checked = $(this).find("div > div > i:nth-child(1).ri-checkbox-circle-fill").length;
                    var unchecked = $(this).find("div > div > i:nth-child(1).ri-checkbox-blank-circle-line").length;
                    var all = checked + unchecked;
                    //子级全部已选中
                    if(checked == all)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass("ri-checkbox-blank-circle-line");
                        // $(parent).removeClass("ri-checkbox-blank-fill");
                        $(parent).addClass("ri-checkbox-circle-fill");
                        return;
                    }
                    //子级全部未选中
                    if(unchecked == all)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass("ri-checkbox-circle-fill");
                        // $(parent).removeClass("ri-checkbox-blank-fill");
                        $(parent).addClass("ri-checkbox-blank-circle-line");
                        return;
                    }
                    //子级部分已选中
                    if(checked > 0)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass("ri-checkbox-blank-circle-line");
                        // $(parent).removeClass("ri-checkbox-circle-fill");
                        $(parent).addClass("ri-checkbox-circle-fill");
                        return;
                    }
                });
            });
            //单选框热点事件
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.radio.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.radio.color,
                        }
                    );
                }
            );
        },
        /**
         * *树*
         * *垂直*
         * *复选*
         * @param _this 当前插件对象
         */
        $treeVerticalCheckbox: function(_this)
        {
            var menu = '';
            var toDom = function(arr, deep)
            {
                for(var i = 0; i < arr.length; i ++)
                {
                    if(arr[i].hasOwnProperty("children"))
                    {
                        menu += '<li>';
                            menu += '<div>';
                                menu += '<i class="' + _this.$option.action.class[0] + '"></i>';//展开折叠占位，默认折叠
                                menu += '<i></i>';//垂直线
                                menu += '<i></i>';//水平线
                                menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                                    menu += '<i class="' + _this.$option.checkbox.class[0] + '"></i>';//单复选框
                                    menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                                    menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                                menu += '</div>';
                            menu += '</div>';
                            menu += '<ul>';
                                toDom(arr[i]["children"], deep + 1);
                            menu += '</ul>';
                        menu += '</li>';
                    }
                    else
                    {
                        menu += '<li>';
                            menu += '<div>';
                                menu += '<i></i>';//展开折叠占位
                                menu += '<i></i>';//垂直线
                                menu += '<i></i>';//水平线
                                menu += '<div pid="' + arr[i]["parent_id"] + '" href="' + arr[i]["path"] + '">';
                                    menu += '<i class="' + _this.$option.checkbox.class[0] + '"></i>';//单复选框
                                    menu += '<i class="' + arr[i]["icon_class"] + '"></i>';//图标
                                    menu += '<a href="#' + arr[i]["id"] + '">' + arr[i]["name"] + '</a>';//文本
                                menu += '</div>';
                            menu += '</div>';
                        menu += '</li>';
                    }
                }
            };
            toDom(this.$data, 0);
            $(this.$element).append('<ul>' + menu + '</ul>');
            /**
             * 树容器内部所有【*】
             * 1.外边距0
             * 2.内边距0
             * 3.禁止复制
             */
            $(this.$element).find("*").css({
                margin: "0px",
                padding: "0px",
                unselectable: "on",
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
            });
            /**
             * 树容器内部所有【ul】
             * 1.清除默认样式
             * 2.设置字号0
             */
            $(this.$element).find("ul").css({
                listStyle: "none",
                fontSize: "0px",
            });
            /**
             * 树容器内部所有【i,a,span】
             * 1.垂直居中
             * 2.水平居中
             * 3.去除下划线
             * 4.设置高度
             * 5.设置行高
             * 6.设置字体大小
             * 7.设置字体颜色
             */
            $(this.$element).find("i,a,span").css({
                verticalAlign: "middle",
                textAlign: "center",
                textDecoration: "none",
                height: _this.$option.item.height + "px",
                lineHeight: _this.$option.item.height + "px",
                fontSize: _this.$option.item.fontSize + "px",
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部所有【div】
             * 1.设置高度
             * 2.设置换行方式为不换行
             * 3.设置右内边距
             */
            $(this.$element).find("div").css({
                height: _this.$option.item.height + "px",
                whiteSpace: "nowrap",
                paddingTop: _this.$option.item.padding.top + "px",
                paddingRight: _this.$option.item.padding.right + "px",
                paddingBottom: _this.$option.item.padding.bottom + "px",
                paddingLeft: _this.$option.item.padding.left + "px",
            });
            /**
             * 树容器内部所有【折叠展开图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置定位方式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                position: "absolute",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             * 3.设置背景
             */
            $(this.$element).find("> ul li > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【首端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直底部对齐
             */
            $(this.$element).find("> ul > li:first-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "bottom",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【外部】【垂直线】
             * 1.设置高度：树对象【div】高度的一半
             * 2.设置垂直顶部对齐
             */
            $(this.$element).find("ul > li:last-child > div > i:nth-child(2)").css({
                height: _this.$option.item.height / 2 + "px",
                verticalAlign: "top",
            });
            /**
             * 树容器内部【所有节点】【叶子】【末端】【外部】【水平线】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置向左缩进：缩进【折叠展开图标】宽度的一半
             * 4.设置水平线：y坐标为树对象【div】高度的一半
             */
            $(this.$element).find("> ul li > div > i:nth-child(3)").css({
                width: _this.$option.item.lineXWidth + "px",
                display: "inline-block",
                marginLeft: - _this.$option.item.iWidth / 2 + "px",
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAYAAACe5Y9JAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAE0lEQVQIHWNgAIIzZ878B9FUBQAa5wNk4YGBdwAAAABJRU5ErkJggg==") 0px ' + _this.$option.item.height / 2 + 'px repeat-x',
            });
            /**
             * 树容器内部【所有节点】【叶子】【分叉】【外部】【垂直线】
             * 1.设置宽度：与【折叠展开图标】宽度一样
             * 2.设置显示方式
             */
            $(this.$element).find("li:not(:last-child) > ul").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                /**
                 * 计算方式：
                 * 1.因为图片像素存在偏移，-8是将将像素点平移到习惯的0px位置，就可以用0px标识竖线的起始位置
                 * 2.竖线需要显示在折叠展开图标的中间线上，及图标宽度的一半，加上偏移（-8）
                 */
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAACCAYAAACKVvbTAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABBJREFUCB1jYKAGOHPmzH8ACHUDZF9CeZ4AAAAASUVORK5CYII=") '+ (-8 + _this.$option.item.iWidth / 2) +'px 0px repeat-y',
            });
            /**
             * 树容器内部【所有节点】【叶子】相对于【分叉】【外部】【向右缩进】
             * 1.设置向右缩进：【折叠展开图标】或【单复选框】或【对象图标】宽度的一半 + 【水平线】宽度
             * 2.设置显示方式
             */
            $(this.$element).find("li > ul").css({
                paddingLeft: _this.$option.item.lineXWidth + _this.$option.item.iWidth / 2 + 1 + "px",
                display: "none",
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【整体】
             * 1.设置显示方式
             * 2.设置左边框样式
             */
            $(this.$element).find("> ul li > div > div").css({
                display: "inline-block",
                borderTop: _this.$option.item.border.top,
                borderRight: _this.$option.item.border.right,
                borderBottom: _this.$option.item.border.bottom,
                borderLeft: _this.$option.item.border.left,
                backgroundColor: _this.$option.item.backgroundColor,
                color: _this.$option.item.color,
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【单复选框】
             * 1.设置宽度
             * 2.设置显示方式
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                fontSize: _this.$option.item.checkbox.fontSize + "px",
                color: _this.$option.item.checkbox.color,
            });
            /**
             * 树容器内部【尾端节点】【叶子】【末端】【内部】【图标】
             * 1.设置宽度
             * 2.设置显示方式
             * 3.设置字体大小
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(2)").css({
                width: _this.$option.item.iWidth + "px",
                display: "inline-block",
                fontSize: _this.$option.item.icon.fontSize + "px",
                color: _this.$option.item.icon.color,
            });
            /**
             ********************************
             * 处理事件
             ********************************
             */
            /**
             * 树中对象hover事件
             * 鼠标移入时候改变当前节点的样式
             * 鼠标移除时候改变当前节点的样式，离开时判断当前元素是否含有active，若有则不改变样式的离开
             */
            $(this.$element).find("> ul li > div > div").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            borderTop: _this.$option.item.hover.border.top,
                            borderRight: _this.$option.item.hover.border.right,
                            borderBottom: _this.$option.item.hover.border.bottom,
                            borderLeft: _this.$option.item.hover.border.left,
                            backgroundColor: _this.$option.item.hover.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    if($(this).hasClass("active"))
                    {
                        return;
                    }
                    $(this).css(
                        {
                            borderTop: _this.$option.item.border.top,
                            borderRight: _this.$option.item.border.right,
                            borderBottom: _this.$option.item.border.bottom,
                            borderLeft: _this.$option.item.border.left,
                            backgroundColor: _this.$option.item.backgroundColor,
                        }
                    );
                    $(this).find("*").css(
                        {
                            color: _this.$option.item.color,
                        }
                    );
                }
            );
            /**
             * 树中对象click事件
             * 当前节点点击时移除素有包含active的元素的样式及active类名，设置当前元素样式并添加active
             */
            $(this.$element).find("> ul li > div > div").click(function(){
                var active = $(_this.$element).find("> ul li > div > div.active");
                $(active).css(
                    {
                        borderTop: _this.$option.item.border.top,
                        borderRight: _this.$option.item.border.right,
                        borderBottom: _this.$option.item.border.bottom,
                        borderLeft: _this.$option.item.border.left,
                        backgroundColor: _this.$option.item.backgroundColor,
                    }
                );
                $(active).find("*").css(
                    {
                        color: _this.$option.item.color,
                    }
                );
                $(active).removeClass("active");
                $(this).css(
                    {
                        borderTop: _this.$option.item.hover.border.top,
                        borderRight: _this.$option.item.hover.border.right,
                        borderBottom: _this.$option.item.hover.border.bottom,
                        borderLeft: _this.$option.item.hover.border.left,
                        backgroundColor: _this.$option.item.hover.backgroundColor,
                    }
                );
                $(this).find("*").css(
                    {
                        color: _this.$option.item.hover.color,
                    }
                );
                $(this).addClass("active");
            });
            /**
             * 折叠展开事件点击事件
             * 点击折叠展开图标时自动切换图标并切换子级容器的展开或折叠状态
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").click(function(){
                $(this).toggleClass(_this.$option.action.class.join(" "));
                $(this).parent().next().toggle();
            });
            /**
             * 折叠展开事件热点事件
             * 鼠标移入时改变样式
             * 鼠标移出是改变样式
             */
            $(this.$element).find("> ul li > div > i:nth-child(1)").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.action.color,
                        }
                    );
                }
            );
            /**
             * 复选框点击事件
             * 处理当前对象状态
             * 处理当前对象的父对象的状态
             * 处理当前对象的子对象的状态
             */
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").click(function(){
                //根据父对象处理子对象状态
                if($(this).hasClass(_this.$option.checkbox.class[0]))
                {
                    $(this).closest("li").find("div > div > i:nth-child(1)").removeClass(_this.$option.checkbox.class[0]);
                    $(this).closest("li").find("div > div > i:nth-child(1)").addClass(_this.$option.checkbox.class[2]);
                }
                else if($(this).hasClass(_this.$option.checkbox.class[1]))
                {

                    $(this).closest("li").find("div > div > i:nth-child(1)").removeClass(_this.$option.checkbox.class[1]);
                    $(this).closest("li").find("div > div > i:nth-child(1)").addClass(_this.$option.checkbox.class[0]);
                }
                else
                {
                    $(this).closest("li").find("div > div > i:nth-child(1)").removeClass(_this.$option.checkbox.class[2]);
                    $(this).closest("li").find("div > div > i:nth-child(1)").addClass(_this.$option.checkbox.class[0]);
                }
                if($(this).hasClass(_this.$option.checkbox.class[0]))
                {
                    $(this).closest("li").find("div > div > i:nth-child(1)").removeClass(_this.$option.checkbox.class[2]);
                    $(this).closest("li").find("div > div > i:nth-child(1)").addClass(_this.$option.checkbox.class[0]);
                }
                //根据子对象处理父对象状态
                $(this).parents("ul").each(function(){
                    //未选中当前对象：只要存在已选中，则父类半选中，否则不选中
                    var checked = $(this).find("div > div > i:nth-child(1)." + _this.$option.checkbox.class[2]).length;
                    var unchecked = $(this).find("div > div > i:nth-child(1)." + _this.$option.checkbox.class[0]).length;
                    var all = checked + unchecked;
                    //子级全部已选中
                    if(checked == all)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass(_this.$option.checkbox.class[0]);
                        $(parent).removeClass(_this.$option.checkbox.class[1]);
                        $(parent).addClass(_this.$option.checkbox.class[2]);
                        return;
                    }
                    //子级全部未选中
                    if(unchecked == all)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass(_this.$option.checkbox.class[2]);
                        $(parent).removeClass(_this.$option.checkbox.class[1]);
                        $(parent).addClass(_this.$option.checkbox.class[0]);
                        return;
                    }
                    //子级部分已选中
                    if(checked > 0)
                    {
                        var parent = $(this).prev().find("> div > i:nth-child(1)");
                        $(parent).removeClass(_this.$option.checkbox.class[0]);
                        $(parent).removeClass(_this.$option.checkbox.class[2]);
                        $(parent).addClass(_this.$option.checkbox.class[1]);
                        return;
                    }
                });
            });
            //复选框热点事件
            $(this.$element).find("> ul li > div > div > i:nth-child(1)").hover(
                //进入
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.checkbox.hover.color,
                        }
                    );
                },
                //离开
                function()
                {
                    $(this).css(
                        {
                            color: _this.$option.checkbox.color,
                        }
                    );
                }
            );
        },
    };
    //在插件中使用
    $.fn.xGuoguo = function(option)
    {
        new xGuoguo(this, option);
    };
}(jQuery);
