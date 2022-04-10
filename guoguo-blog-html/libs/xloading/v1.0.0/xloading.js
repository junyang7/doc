var xLoading = {
    $icon: "ri-loader-4-line",
    //message组件对象
    $element: null,
    //初始化
    $init: function(e)
    {
        this.$element = $(
            '<div class="guoguo-loading-box">'+
                '<div>'+
                    '<div>'+
                        '<i class="' + this.$icon + '">'+
                        '</i>'+
                    '</div>'+
                    '<div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        );
        $("body").append(this.$element);
    },
    //展示
    $show: function()
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$element.show();
    },
    //关闭
    $hidden: function()
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$element.hide();
    },
};
