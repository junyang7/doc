var xMessage = {
    //message组件对象
    $element: null,
    //初始化
    $init: function(e)
    {
        this.$element = $(
            '<div class="guoguo-message-box">'+
                '<div>'+
                    '<ul></ul>'+
                '</div>'+
            '</div>'
        );
        $("body").append(this.$element);
    },
    $show: function(type, icon, message)
    {
        let li = $(
            '<li>'+
                '<div class="' + type + '">'+
                    '<i class="' + icon + '"></i>' +
                    '<span style="padding-left: 5px;">' + message + '</span>' +
                '</div>'+
            '</li>'
        );
        setTimeout(function(){
            li.remove()
        }, 5000);
        this.$element.find("> div > ul").prepend(li);
    },
    $default: function(e = "$default")
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$show("default", "ri-checkbox-blank-circle-fill", e);
    },
    $info: function(e = "$info")
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$show("info", "ri-information-fill", e);
    },
    $success: function(e = "$success")
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$show("success", "ri-checkbox-circle-fill", e);
    },
    $warning: function(e = "$warning")
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$show("warning", "ri-error-warning-fill", e);
    },
    $error: function(e = "$error")
    {
        if(!this.$element)
        {
            this.$init();
        }
        this.$show("error", "ri-close-circle-fill", e);
    },
};
