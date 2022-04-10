测试域名：http://order-api.chongmuniao.cn/app/  
正式域名：https://order-api.jjbangbang.com/app/  

----

[TOC]

----

### 购物车商品数量
调用场景：获取购物车商品数量  
接口地址：sampleCartSkuCount/getSampleCartSkuCountS  
请求方式：GET  
输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {
        "cart_sku_count": 0
    }
}
```
### 添加某个商品到购物车  
调用场景：添加某个商品到购物车  
接口地址：sampleCartSku/addSampleCartSkuS  
请求方式：POST  
必需参数：3个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| goods_id |1 | 商品ID |
| sku_id |1 | skuID |
| sku_count |1 | sku数量 |

可选参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sku_selected |Y | 是否被选中，Y是，N否，默认Y |

输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
### 更新购物车某些商品  
调用场景：更新购物车某些商品  
接口地址：sampleCartSku/setSampleCartSkuM  
请求方式：POST  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| cart_skus |参见备注① | JSON格式字符串 |

备注①cart_skus参数JSON格式化结构：  
```
[
    {
        "item_id": 1, // 条目ID
        "goods_id": 1, // 商品ID
        "sku_id": 1, // skuID
        "sku_count": 1, // sku数量
        "sku_selected": "Y" // 是否选中，Y是，N否
    },
]
```
输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
### 删除购物车中某些商品  
调用场景：删除购物车中某些商品  
接口地址：sampleCartSku/delSampleCartSkuM  
请求方式：POST  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| cart_skus |参见备注① | 需要删除的购物车的商品JSON字符串 |

备注①，cart_skus参数的JSON格式化形式如下（实际传递是处理成JSON字符串）：  
```
[ // 购物车商品列表，以sku为单位
  {
    "goods_id": 1, // 商品ID
    "sku_id": 1 // skuID
  },
]
```
输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
### 获取购物车中所有商品  
调用场景：获取购物车中所有商品  
接口地址：sampleCartSku/listSampleCartSkuM  
请求方式：GET  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| region |北京市-朝阳区 | 两级行政区，中间中划线分割，整体是个字符串，行政区目录必需精准完整 |

输出结果：  
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "cart_sku_count": 7, // 商品数量
    "cart_skus": [ // 商品列表
      {
        "item_id": "444", // SKU记录行ID
        "shop_id": "0", // 店铺ID
        "goods_id": "1503691700013", // SPU ID
        "sku_id": "437", // SKU ID
        "sku_count": "3", // SKU 数量
        "sku_selected": "Y", // SKU 是否选中，Y是，N否
        "cate_id": "44", // SKU 二级分类ID
        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
        "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg", // SPU 封面
        "sku_name": "米白色（方头）,35", // SKU 名称
        "sku_price": "3.00", // SKU 单售价
        "cps_fee": "0.12", // SKU 单佣金
        "is_cross_border": "N", // 是否是跨境商品，Y是，N否
        "is_soldout": "N", // 是否已售罄，Y是，N否
        "stock": "10000", // 库存数量
        "state": "1", // 上下架状态，1已上架，0已下架
        "refuse_region": "", // 禁售地区
        "freight_tpl_info": { // 运费模板信息
          "freight_tpl_id": "23", // 模板ID
          "name": "test01", // 模板名称
          "area_list": [ // 模板地区与运费列表，当模板ID>1时有值，其他为空
            {
              "id": "28", // 关系ID
              "area": "新疆维吾尔自治区-乌鲁木齐市,新疆维吾尔自治区-克拉玛依市,新疆维吾尔自治区-吐鲁番市", // 地区列表
              "fee": "6.00" // 当前地区列表范围内的运费金额
            }
          ]
        },
        "merchant_id": "50", // 供应商ID
        "gifts": [ // 赠品列表
          {
            "gift_name": "俊阳大哥", // 赠品名称
            "gift_cover": "https://img.jjbangbang.com/test/image/871d88879f2d8f4ca5e285fd8bdbf8cf.jpg", // 赠品封面
            "gift_count": "19988" // 赠品数量
          }
        ],
        "is_forbid": "N", // 当前收货地址内是否禁售
        "forbid_text": "" // 当前收货地址内禁售时的提示文案
      }
    ]
  },
  "consume": 706,
  "time": 1606910944
}
```

### 样品订单列表  
调用场景：获取样品订单列表时，全部、待付款、待发货和待收货  
接口地址：sampleOrder/listSampleOrderM  
请求方式：GET  
可选参数：4个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| state | 0 | 订单流转状态：0.全部;1.待付款;2.待发货;3.待收货;默认0; |
| offset |0 | 偏移量，默认0 |
| size |2 | 展示量，默认10 |
| order |DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：  
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "order_m": [ // 订单列表
      {
        "sub_order_id": "307371990001149", // 子订单ID（子订单标识）
        "addtime": "2020-12-03 16:01:19", // 创建时间
        "finish_time": "1970-01-01 00:00:00", // 完成时间
        "state_code": "1301", // 订单流转状态
        "price": "641.00", // 订单商品总金额
        "pay_price": "641.00", // 订单商品总支付金额
        "has_sku_in_sold": "N", // 是否有商品处于售后中，Y是，N否
        "seller_id": "7", // 卖家ID
        "exists_express": "Y", // 是否存在物流，Y是，N否
        "order_total_pay_price": "646.00", // 订单总支付金额
        "shop_info": { // 店铺信息
          "name": "俊阳小店", // 店铺名称
          "shop_id": "2" // 店铺ID
        },
        "sku_m": [ // SKU 列表
          {
            "cate_id": "44", // 二级分类ID
            "goods_id": "1503691700013", // SPU ID
            "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
            "goods_cover": "https://img.jjbangbang.com/goods/881a75e81067d47b4468e5795fdb5412.jpg", // SPU 封面
            "sku_id": "436", // SKU ID
            "sku_name": "绿色（方头）,39", // SKU 名称
            "sku_count": "1", // SKU 数量
            "sku_price": "3.00", // SKU 单售价金额
            "pay_price": "3.00", // SKU 实际支付金额
            "sold_state_code": "0", // SKU 售后状态码
            "express_id": "0", // 物流包裹ID
            "state_code": "1701", // 商品流转状态码
            "gifts": [ // 赠品列表
              {
                "gift_name": "俊阳大哥", // 赠品名称
                "gift_cover": "https://img.jjbangbang.com/test/image/871d88879f2d8f4ca5e285fd8bdbf8cf.jpg", // 赠品封面
                "gift_count": 1 // 赠品数量
              }
            ]
          }
        ]
      },
      {
        "order_id": "207371990001212", // 主订单ID（主订单标识）
        "addtime": "2020-12-03 15:32:46", // 创建时间
        "state_code": "1101", // 订单状态码
        "price": "641.00", // 订单商品总金额
        "pay_price": "641.00", // 订单商品总支付金额
        "seller_id": "7", // 卖家ID
        "order_total_price": "646.00", // 订单总金额
        "shop_info": { // 店铺信息
          "name": "俊阳小店", // 店铺名称
          "shop_id": "2" // 店铺ID
        },
        "sku_m": [ // SKU 列表
          {
            "cate_id": "44", // 二级分类ID
            "goods_id": "1503691700013", // SPU ID
            "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
            "goods_cover": "https://img.jjbangbang.com/goods/881a75e81067d47b4468e5795fdb5412.jpg", // SPU 封面
            "sku_id": "436", // SKU ID
            "sku_name": "绿色（方头）,39", // SKU 名称
            "sku_count": "1", // SKU 数量
            "sku_price": "3.00", // SKU 单售价金额
            "pay_price": "3.00", // SKU 实际支付金额
            "sold_state_code": "0", // SKU 售后状态码
            "express_id": "0", // SKU 包裹ID
            "state_code": "4101", // SKU 状态码
            "gifts": [ // 赠品列表
              {
                "gift_name": "俊阳大哥", // 赠品名称
                "gift_cover": "https://img.jjbangbang.com/test/image/871d88879f2d8f4ca5e285fd8bdbf8cf.jpg", // 赠品封面
                "gift_count": 1 // 赠品数量
              }
            ]
          }
        ]
      }
    ],
    "more": true,
    "offset": "728"
  },
  "consume": 279,
  "time": 1606985709
}
```
#### 取消样品主订单  
调用场景：用户点击取消样品主订单时，适用于取消待支付样品订单  
接口地址：sampleOrder/celSampleOrderS  
请求方式：POST  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 203368210000051 | 主订单ID |

输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 样品主订单预支付信息  
调用场景：需要对未支付订单再次支付时  
接口地址：sampleOrderPrepayInfo/getSampleOrderPrepayInfoS  
请求方式：GET  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 201368310000319 | 主订单ID |

可选参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| pay_type | 0 | 0或不传，则取下单时选择的支付方式；3微信支付，4支付宝支付 |

输出结果：  
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "order_total_pay_price": "10.04", // 订单总需（实）付金额
    "order_id": "207371850001178", // 主订单ID
    "buyer_id": "7", // 买家ID
    "pay_price": "0.04", // 商品总需（实）付金额
    "pay_type": "3", // 支付方式：1无平台；2余额支付；3微信-APP；4支付宝-APP；5微博；6微信-H5；7支付宝-H5；8微信-小程序；9微信-公众号
    "source": "3", // 订单创建来源：1管理后台 巨鲸帮帮；2管理后台微博小店；3巨鲸帮帮达人Andorid应用端；4巨鲸帮帮达人iOS应用端；5微博小店（达人）；6巨鲸帮帮粉丝微信小程序端；7巨鲸帮帮粉丝H5；8微博小店（粉丝下单）；9一直播（粉丝下单）；10微博CPS；11一直播CPS
    "return_url": "", // 跳转链接
    "prepay": {} // 支付参数信息，详见第三方支付文档，本字段仅对原始内容进行转发
  },
  "consume": 740,
  "time": 1606385352
}
```
#### 提醒发货  
调用场景：提醒发货  
接口地址：sampleOrderDeliveryRemind/addSampleOrderDeliveryRemindS  
请求方式：POST  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368350001004 | 子订单ID |

输出结果：  
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 子订单物流列表  
调用场景：查看子订单物流列表时  
接口地址：subOrderExpress/listSubOrderExpressM  
请求方式：GET  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368310000912 | 子订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "expresses": [
            {
                "express_id": "291",
                "skus": [
                    {
                        "cate_id": "22",
                        "goods_id": "1503688300003",
                        "goods_name": "阔太太旗袍式连衣裙2020新款夏韩版中长款显瘦印花过膝大码a字裙",
                        "goods_cover": "https://img.jjbangbang.com/goods/ca1c31cd10efa9091d9b7f4272eb3c11.jpg",
                        "sku_id": "150",
                        "sku_name": "红花 L",
                        "sku_price": "155.00",
                        "sku_count": "1"
                    }
                ]
            },
            {
                "expresses_id": "0",
                "skus": [
                    {
                        "cate_id": "22",
                        "goods_id": "1503688300003",
                        "goods_name": "阔太太旗袍式连衣裙2020新款夏韩版中长款显瘦印花过膝大码a字裙",
                        "goods_cover": "https://img.jjbangbang.com/goods/2ce5594f6e6c5367b95ef768dbdeff74.jpg",
                        "sku_id": "144",
                        "sku_name": "蓝花 L",
                        "sku_price": "155.00",
                        "sku_count": "1"
                    }
                ]
            }
        ]
    },
    "consume": 152,
    "time": 1593577011
}
```
#### 查看物流详情  
调用场景：查看物流详情  
接口地址：express/getExpressS  
请求方式：GET  
必需参数：1个  

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| express_id | 19 | 物流ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "sub_order_id": "383368610000021",
        "addtime": "2020-06-17 16:53:37",
        "express_status": "1",
        "express_company_code": "yuantong",
        "express_company_name": "圆通速递",
        "express_number": "123",
        "express_info": [
            {
                "time": "2020-06-11 13:03:21",
                "ftime": "2020-06-11 13:03:21",
                "context": "向山小学对面快递之家妈妈驿站已发出自提短信,请上门自提,联系电话18196780181"
            },
        ]
    }
}
```
#### 确认收货样品子订单
调用场景：对样品子订单确认收货时
接口地址：sampleSubOrder/receivedSampleSubOrderS
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368310000930 | 子订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 删除样品主订单
调用场景：用户点击删除样品主订单时
接口地址：sampleOrder/delSampleOrderS
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 238368670000064 | 主订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```


#### 退款原因列表
调用场景：选择退款原因时
接口地址：refundReason/listRefundReasonM
请求方式：GET
可选参数：4个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 0 | |
| goods_id | 0 |  |
| sku_id | 0 | |
| cate_id | 0 | sku所属类目ID |

参数说明：
以上参数均可不传（或传0，等于不传），此时返回通用原因列表，适用于：批量售后
对单个SKU进行售后时，以上参数必传

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "refund_reasons": [
            {
                "refund_reason_id": "1",
                "refund_reason_name": "拍错/多拍/不想要"
            },
        ]
    }
}
```
#### 创建售后样品订单
调用场景：点击申请售后页的“提交”时
接口地址：sampleSoldOrder/addSampleSoldOrderS
请求方式：POST
必需参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368310000936 | 子订单ID |
| skus | 参考备注① | 商品信息，JSON字符串 |
| refund_reason_id | 1 | 退款原因选项ID |

可选参数：4个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| refund_type | 1 | 申请售后类型：1.仅退款;2.退货退款;默认1; |
| remarks | 别说废话，赶紧退款！ | 退款说明，默认：无 |
| pictures | 参考备注② | 凭证图片，JSON字符串，默认'[]' |
| source | 3 | 订单来源：3.达人Andorid应用端;4.达人iOS应用端;默认3; |

备注①skus格式（以下展示了格式化之后的JSON字符串）：
```
[ //使用数组将订单中的所有商品进行包裹
  { // 订单中的某个SKU，以SKU为单位，每个SKU一个对象
    "goods_id": 1, // sku对应的goods_id
    "sku_id": 2, // skuID
  },
]
```
备注②pictures格式（以下展示了格式化之后的JSON字符串）：
```
[ // 使用数组将凭证图片链接地址进行包裹
  "http://www.bigeyegroup.com/uploadfiles/image/20180929/20180929184608_33719.png", // 凭证图片地址链接
]
```
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "sold_id": "18"
    }
}
```
#### 样品售后订单列表
调用场景：退款/售后选项卡中列表显示卖家所有售后订单时
接口地址：sampleSoldOrder/listSampleSoldOrderM
请求方式：GET
可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset | 0 | 偏移量 |
| size | 2 | 展示量，默认20 |
| order | DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "order_m": [
            {
                "sold_id": "4213691800018",
                "state_code": "3010",
                "seller_id": "0",
                "addtime": "2020-07-15 21:03:09",
                "expire_time": "2020-07-16 16:00:00",
                "shop_info": null,
                "sku_m": [
                    {
                        "cate_id": "21",
                        "goods_id": "1503691700013",
                        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋",
                        "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg",
                        "sku_id": "437",
                        "sku_name": "米白色（方头） 35",
                        "sku_price": "1.00",
                        "sku_count": "1",
                        "sold_state_code": "2201"
                    }
                ]
            }
        ],
        "offset": 20,
        "more": false
    },
    "consume": 136,
    "time": 1594818259
}
```
#### 售后样品订单详情
调用场景：查看售后样品订单详情时
接口地址：sampleSoldOrder/getSampleSoldOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |

输出结果：
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "order_refund_amount": "438.00", // 售后单总退款金额
    "buyer_id": "7", // 买家ID
    "seller_id": "7", // 卖家ID
    "sold_id": "4133718300044", // 售后单ID
    "addtime": "2020-11-25 14:56:09", // 创建时间
    "expire_time": "2020-11-27 14:56:09", // 待处理过期时间
    "close_time": "1970-01-01 00:00:00", // 关闭时间
    "refuse_time": "1970-01-01 00:00:00", // 拒绝时间
    "success_time": "2020-11-25 14:56:11", // 成功时间
    "state_code": "3010", // 售后单流转状态码
    "refund_type": "1", // 退款类型：1仅退款；2退货退款；
    "refund_reason_id": "1", // 退款原因ID
    "refund_amount": "438.00", // 退款金额
    "remarks": "", // 退款说明
    "pictures": [ // 退款图片列表，最多3张
      "https://img.jjbangbang.com/goods/b9f33a7fca5cc9dee71ea593b4132ee7.jpg" // 图片链接
    ],
    "sold_express_id": "0", // 售后物流ID
    "refund_reason_name": "拍错/多拍/不想要", // 退款原因名称
    "judge": {
      "reason": "付款未超过24小时，且商品未发货，{system}自动同意退款",
      "pictures": [
        "https://img.jjbangbang.com/goods/b9f33a7fca5cc9dee71ea593b4132ee7.jpg"
      ]
    },
    "address": { // 售后收货地址信息
      "name": "俊阳粉丝", // 收货人名称
      "phone": "15210757705", // 收货人联系电话
      "region": "河南省-洛阳市-嵩县", // 地区
      "address": "一个小山沟里" // 详细地址
    },
    "sku_m": [ // SKU 列表
      {
        "cate_id": "44", // 二级类目ID
        "sub_order_id": "307371830001113", // 子订单ID
        "goods_id": "1503688300002", // SPU ID
        "goods_name": "罗衣气质V领连衣裙女2020夏装新款优雅波点鱼尾摆包臀中长裙02008", // SPU 名称
        "goods_cover": "https://img.jjbangbang.com/goods/5ac0c0e0f8723c617f1d628e21842771.jpg", // SPU 封面
        "sku_id": "129", // SKU ID
        "sku_name": "备选,2XL", // SKU 名称
        "sku_price": "638.00", // SKU 单价
        "pay_price": "638.00", // SKU 实（需）付金额
        "sku_count": "1", // SKU 数量
        "sold_state_code": "2201", // SKU 售后流转状态码
        "available_refund_amount": "0.00", // SKU 可用退款金额
        "gifts": [ // SKU 赠品列表，如果该SKU没有赠品，此字段为空array
          {
            "gift_name": "缔葭DIJIA城市橘色腮红粉元气正品裸妆自然修容高光一体盘晒红女", // 赠品名称
            "gift_cover": "https://img.jjbangbang.com/goods/c62796eadced370ab8cc0fc2396663f8.jpg", // 赠品封面
            "gift_count": "1" // 赠品数量
          }
        ],
        "freight_tpl_id": "1", // 运费模板ID
        "available_refund_fee": "0.00" // 运费模板可退总金额
      }
    ]
  },
  "consume": 130,
  "time": 1606391696
}
```
#### 撤销售后样品订单
调用场景：撤销售后样品订单
接口地址：sampleSoldOrder/celSampleSoldOrderS
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 修改售后样品订单
调用场景：修改售后申请保存时
接口地址：sampleSoldOrder/setSampleSoldOrderS
请求方式：POST
必需参数：4个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |
| sub_order_id | 301368310000936 | 子订单ID |
| skus | 参考备注① | 商品信息，JSON字符串 |
| refund_reason_id | 1 | 退款原因选项ID |

可选参数：4个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| refund_type | 1 | 申请售后类型：1.仅退款;2.退货退款;默认1; |
| remarks | 别说废话，赶紧退款！ | 退款说明，默认：无 |
| pictures | 参考备注② | 凭证图片，JSON字符串，默认'[]' |
| source | 3 | 订单来源：3.达人Andorid应用端;4.达人iOS应用端;默认3; |

备注①skus格式（以下展示了格式化之后的JSON字符串）：
```
[ //使用数组将订单中的所有商品进行包裹
  { // 订单中的某个SKU，以SKU为单位，每个SKU一个对象
    "goods_id": 1, // sku对应的goods_id
    "sku_id": 2, // skuID
  },
]
```
备注②pictures格式（以下展示了格式化之后的JSON字符串）：
```
[ // 使用数组将凭证图片链接地址进行包裹
  "http://www.bigeyegroup.com/uploadfiles/image/20180929/20180929184608_33719.png", // 凭证图片地址链接
]
```
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "sold_id": 17
    }
}
```
#### 获取订单收货地址
调用场景：售后发货时
接口地址：receivedAddress/getReceivedAddressS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id |301368320000981 | 子订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "address": {
            "name": "大眼",
            "phone": "15210858894",
            "region": "北京市朝阳区",
            "address": "高碑店东亿传媒产业园D4号楼101室",
            "sub_order_id": 338368430000096
        }
    }
}
```
#### 售后样品订单发货
调用场景：售后样品订单发货
接口地址：sampleSoldOrderExpress/addSampleSoldOrderExpressS
请求方式：POST
必需参数：5个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |
| express_number | SF912761398 | 快递单号 |
| express_company_code | shunfengsuyun | 快递公司编码 |
| express_company_name | 顺丰速运 | 快递公司名称 |
| phone | 1383627263726 | 联系电话，需要保存到售后表里 |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 售后样品订单申请官方介入
调用场景：售后样品详情点击“申请平台介入”时
接口地址：sampleSoldOrderOfficial/addSampleSoldOrderOfficialS
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
#### 协商历史
调用场景：查看某个售后单的协商历史信息

由于各端展示数据的时候有一些个性化显示，因此，服务器在存储数据的时候对个性化部分使用占位符进行了替换处理。各端在获取接口数据之后，需要按照各端的逻辑使用相关数据替换为自己的相关文案。接口数据涉及到的一些占位符即意义：

对于action_name,message_info字段中的内容，按下列规则替换即可

|类型ID|类型替换文本占位符|类型释义|APP端展示|小程序端展示|商家端展示|运营后台展示|
|:--|:--|:--|:--|:--|:--|:--|
|1|{system}|系统标识站位符|系统|系统|系统|系统|
|2|{admin}|管理员标识占位符|平台|平台|平台|平台|
|3|{merchant}|供应商标识占位符|商家|商家|供应商|供应商|
|4|{seller}|卖家标识占位符|商家|商家|卖家|卖家|
|5|{buyer}|买家标识占位符|买家|买家|买家|买家|

对于操作人，即之前的nickname字段，根据type判断角色，如果需要个性化展示，直接取oname字段的值即可。


接口地址：soldOrderRecord/listSoldOrderRecordM
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id |32 | 售后订单ID |

可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset |0 | 偏移量，默认0 |
| size |2 | 展示量，默认20 |
| order |DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "sold_records": [
            {
                "addtime": "2020-07-08 21:41:32",
                "type": "5",
                "oname": "152****701",
                "avatar_url": "https://img.jjbangbang.com/jjbb-avatar.png",
                "action_name": "{buyer}发起了售后申请",
                "message_info": [
                    {
                        "key": "退款金额",
                        "value": "{refund_amount}",
                        "canCopy": false
                    },
                ],
                "pictures": [
                    "https://img.jjbangbang.com/image/52cc718146cfcab5564b54bba24dda1a.jpg"
                ]
            }
        ],
        "offset": 200,
        "more": false,
        "refund_amount": "155.00"
    },
    "consume": 72,
    "time": 1594215895
}
```
#### 售后订单物流列表
调用场景：查看售后订单物流列表时
接口地址：soldOrderExpress/listSoldOrderExpressM
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 32 | 售后单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "expresses": [
            {
                "express_id": "15",
                "skus": [
                    {
						"cate_id": "0",
                        "goods_id": "1043682900084",
                        "goods_name": "缔葭DIJIA城市橘色腮红粉元气正品裸妆自然修容高光一体盘晒红女",
                        "goods_cover": "https://img.jjbangbang.com/goods/c62796eadced370ab8cc0fc2396663f8.jpg",
                        "sku_id": "4523",
                        "sku_name": "杭州北山秋色13 焦糖棕",
                        "sku_price": "100.0000",
                        "sku_count": "2"
                    },
                ]
            }
        ]
    }
}
```
#### 店铺销售订单列表
调用场景：获取店铺销售订单列表时，全部、待付款、待发货和待收货
接口地址：shopOrder/listShopOrderM
请求方式：GET
可选参数：4个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| state | 0 | 订单流转状态：0.全部;1.待付款;2.待发货;3.待收货;默认0; |
| offset |0 | 偏移量，默认0 |
| size |2 | 展示量，默认20 |
| order |DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "order_m": [ // 订单列表
      {
        "sub_order_id": "307371990001149", // 子订单ID（子订单标识）
        "addtime": "2020-12-03 16:01:19", // 创建时间
        "finish_time": "1970-01-01 00:00:00", // 完成时间
        "state_code": "1301", // 订单流转状态
        "price": "641.00", // 订单商品总金额
        "pay_price": "641.00", // 订单商品总支付金额
        "has_sku_in_sold": "N", // 是否有商品处于售后中，Y是，N否
        "seller_id": "7", // 卖家ID
        "exists_express": "Y", // 是否存在物流，Y是，N否
        "order_total_pay_price": "646.00", // 订单总支付金额
        "shop_info": { // 店铺信息
          "name": "俊阳小店", // 店铺名称
          "shop_id": "2" // 店铺ID
        },
        "sku_m": [ // SKU 列表
          {
            "cate_id": "44", // 二级分类ID
            "goods_id": "1503691700013", // SPU ID
            "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
            "goods_cover": "https://img.jjbangbang.com/goods/881a75e81067d47b4468e5795fdb5412.jpg", // SPU 封面
            "sku_id": "436", // SKU ID
            "sku_name": "绿色（方头）,39", // SKU 名称
            "sku_count": "1", // SKU 数量
            "sku_price": "3.00", // SKU 单售价金额
            "pay_price": "3.00", // SKU 实际支付金额
            "sold_state_code": "0", // SKU 售后状态码
            "express_id": "0", // 物流包裹ID
            "state_code": "1701", // 商品流转状态码
            "gifts": [ // 赠品列表
              {
                "gift_name": "俊阳大哥", // 赠品名称
                "gift_cover": "https://img.jjbangbang.com/test/image/871d88879f2d8f4ca5e285fd8bdbf8cf.jpg", // 赠品封面
                "gift_count": 1 // 赠品数量
              }
            ]
          }
        ],
        "income": 0.12 // 订单预估收益金额
      },
      {
        "order_id": "207371990001212", // 主订单ID（主订单标识）
        "addtime": "2020-12-03 15:32:46", // 创建时间
        "state_code": "1101", // 订单状态码
        "price": "641.00", // 订单商品总金额
        "pay_price": "641.00", // 订单商品总支付金额
        "seller_id": "7", // 卖家ID
        "order_total_price": "646.00", // 订单总金额
        "shop_info": { // 店铺信息
          "name": "俊阳小店", // 店铺名称
          "shop_id": "2" // 店铺ID
        },
        "sku_m": [ // SKU 列表
          {
            "cate_id": "44", // 二级分类ID
            "goods_id": "1503691700013", // SPU ID
            "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
            "goods_cover": "https://img.jjbangbang.com/goods/881a75e81067d47b4468e5795fdb5412.jpg", // SPU 封面
            "sku_id": "436", // SKU ID
            "sku_name": "绿色（方头）,39", // SKU 名称
            "sku_count": "1", // SKU 数量
            "sku_price": "3.00", // SKU 单售价金额
            "pay_price": "3.00", // SKU 实际支付金额
            "sold_state_code": "0", // SKU 售后状态码
            "express_id": "0", // SKU 包裹ID
            "state_code": "4101", // SKU 状态码
            "gifts": [ // 赠品列表
              {
                "gift_name": "俊阳大哥", // 赠品名称
                "gift_cover": "https://img.jjbangbang.com/test/image/871d88879f2d8f4ca5e285fd8bdbf8cf.jpg", // 赠品封面
                "gift_count": 1 // 赠品数量
              }
            ]
          }
        ],
        "income": 127.72 // 订单预估收益金额
      }
    ],
    "more": true,
    "offset": "728"
  },
  "consume": 279,
  "time": 1606985709
}
```
#### 店铺主订单详情
调用场景：需要获取某个店铺主订单的详细信息时，仅适用于待支付订单详情（主订单）
接口地址：shopOrder/getShopOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 201368290000250 | 主订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "order_id": "210369180000267",
        "addtime": "2020-07-15 21:08:23",
        "state_code": "1101",
        "price": "2.00",
        "expire_time": "2020-07-15 21:28:23",
        "is_cross_border": "N",
        "seller_id": "7",
        "adress": {
            "name": "俊阳粉丝",
            "phone": "152****7702",
            "region": "河南省-洛阳市-嵩县",
            "real_name": "大眼",
            "id_card": "410923837182374618X",
            "address": "一个小山沟里"
        },
        "shop_info": {
            "name": "俊阳小店",
            "shop_id": "2"
        },
        "sku_m": [
            {
                "cate_id": "21",
                "goods_id": "1503691700013",
                "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋",
                "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg",
                "sku_id": "437",
                "sku_name": "米白色（方头） 35",
                "sku_price": "2.00",
                "sku_count": "1",
                "sold_state_code": "0"
            }
        ]
    },
    "consume": 110,
    "time": 1594991512
}
```
#### 店铺子订单详情
调用场景：需要获取某个店铺子订单的详细信息时，适用于非待支付订单详情（子订单）
接口地址：shopSubOrder/getShopSubOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368290000596 | 子订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "sub_order_id": "310369180000281",
        "addtime": "2020-07-15 20:28:22",
        "state_code": "1601",
        "price": "2.00",
        "is_cross_border": "N",
        "has_sku_in_sold": "N",
        "seller_id": "7",
        "exists_express": "N",
        "exists_not_delivered_sku": "Y",
        "address": {
            "name": "俊阳粉丝",
            "phone": "152****7702",
            "region": "河南省-洛阳市-嵩县",
            "address": "一个小山沟里",
            "real_name": "大眼",
            "id_card": "410923837182374618X"
        },
        "shop_info": {
            "name": "俊阳小店",
            "shop_id": "2"
        },
        "sku_m": [
            {
                "cate_id": "21",
                "id": "28",
                "goods_id": "1503691700013",
                "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋",
                "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg",
                "sku_id": "437",
                "sku_name": "米白色（方头） 35",
                "sku_price": "2.00",
                "sku_count": "1",
                "state_code": "2001",
                "sold_state_code": "2201",
                "sold_expire_time": "1970-01-01 00:00:00",
                "sold_id": "4813691800007",
                "express_id": "0"
            }
        ]
    },
    "consume": 129,
    "time": 1594818852
}
```
#### 店铺售后订单列表
调用场景：退款/售后选项卡中列表显示店铺所有售后订单时
接口地址：shopSoldOrder/listShopSoldOrderM
请求方式：GET
可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset | 0 | 偏移量 |
| size | 2 | 展示量，默认20 |
| order | DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "order_m": [
            {
                "sold_id": "4833691800023",
                "state_code": "2401",
                "seller_id": "7",
                "addtime": "2020-07-15 21:20:10",
                "expire_time": "2020-07-16 16:00:00",
                "shop_info": {
                    "name": "俊阳小店",
                    "shop_id": "2"
                },
                "sku_m": [
                    {
                        "cate_id": "21",
                        "goods_id": "1503691700013",
                        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋",
                        "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg",
                        "sku_id": "437",
                        "sku_name": "米白色（方头） 35",
                        "sku_price": "2.00",
                        "sku_count": "1",
                        "sold_state_code": "2101"
                    }
                ]
            },
        ],
        "offset": 20,
        "more": false
    },
    "consume": 278,
    "time": 1594819298
}
```
#### 店铺售后订单详情
调用场景：查看店铺售后订单详情时
接口地址：shopSoldOrder/getShopSoldOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id | 30 | 售后订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "seller_id": "7",
        "sold_id": "4833691800023",
        "addtime": "2020-07-15 21:20:10",
        "expire_time": "2020-07-16 16:00:00",
        "close_time": "1970-01-01 00:00:00",
        "refuse_time": "1970-01-01 00:00:00",
        "success_time": "1970-01-01 00:00:00",
        "state_code": "2401",
        "refund_type": "1",
        "refund_reason_id": "1",
        "refund_amount": "2.00",
        "remarks": "无",
        "pictures": [],
        "sold_express_id": "0",
        "refund_reason_name": "拍错/多拍/不想要",
        "judge": null,
        "address": null,
        "sku_m": [
            {
                "cate_id": "21",
                "sub_order_id": "310369180000283",
                "goods_id": "1503691700013",
                "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋",
                "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg",
                "sku_id": "437",
                "sku_name": "米白色（方头） 35",
                "sku_price": "2.00",
                "sku_count": "1",
                "sold_state_code": "2101"
            }
        ]
    },
    "consume": 138,
    "time": 1594819495
}
```
#### 我的
调用场景：我的样品订单统计气泡：待付款、待发货、待收货
接口地址：mySampleOrderInfo/getMySampleOrderInfoS
请求方式：GET
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "unpaid_count": 14,
        "unshipped_count": 15,
        "not_recived_count": 0
    }
}
```
#### 店铺首页数据
调用场景：店铺数据首页
接口地址：shopIndexData/getShopIndexDataS
请求方式：GET
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "yesterday": { // 昨日数据
            "income": "445.0000", // 收益
            "sale_amount": "831.0000", // 销售额
            "order_quantity": "822" // 订单量
        },
        "today": { // 当天实时数据
            "income": 0,
            "sale_amount": 0,
            "order_quantity": 4
        }
    }
}
```
#### 店铺日销售数据
调用场景：日数据
接口地址：shopDayData/listShopDayDataM
请求方式：GET
可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset |0 | 偏移量，默认0 |
| size |2 | 展示量，默认10 |
| order |DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "data": [
            {
                "day": "2020-05-20", // 日期
                "income": "952.0000", // 收益
                "sale_amount": "6.0000", // 销售额
                "order_quantity": "176" // 订单量
            },
        ],
        "offset": 10,
        "more": true
    }
}
```
#### 店铺月销售数据
调用场景：月数据
接口地址：shopMonthData/listShopMonthDataM
请求方式：GET
可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset |0 | 偏移量，默认0 |
| size |2 | 展示量，默认10 |
| order |DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "data": [
            {
                "month": "2018-01",  // 月份
                "income": "481.0000", // 收益
                "sale_amount": "152.0000", // 销售额
                "order_quantity": "319" // 订单量
            },
        ],
        "offset": 10,
        "more": true
    }
}
```
#### 快递公司列表
调用场景：选择快递公司时
接口地址：expressCompanyName/listExpressCompanyNameM
请求方式：GET
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "express_companies": [
            {
                "express_company_code": "zhongtong",
                "express_company_name": "中通快递"
            },
        ]
    }
}
```
#### 快递单号智能匹配快递公司
调用场景：填写单号时
接口地址：expressCompanyName/matchExpressCompanyNameM
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| express_number |12345678 | 快递单号 |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "express_companies": [
            {
                "express_company_code": "zhongtong",
                "express_company_name": "中通快递"
            },
        ]
    }
}
```
#### 服务器当前时间
调用场景：校对时间，用于客户端自己处理倒计时
接口地址：serverCurrentTime/getServerCurrentTimeS
请求方式：GET
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {},
    "consume": 0,
    "time": 1594634407 // 服务器当前时间戳
}
```
#### 未支付订单倒计时结束回调
调用场景：未支付订单倒计时结束时请求
接口地址：unpaidOrderTimeoutEvent/triggerUnpaidOrderTimeoutEventS
请求方式：POST
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id |210369170000257 | 主订单ID |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {},
    "consume": 0,
    "time": 1594634407
}
```
#### 售后订单倒计时结束回调
调用场景：售后订单倒计时结束时请求
接口地址：soldOrderTimeoutEvent/triggerSoldOrderTimeoutEventS
请求方式：POST
必需参数：2个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sold_id |4833691800023 | 售后单ID |
| state_code | 2401 | 售后单状态码 |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {},
    "consume": 0,
    "time": 1594634407
}
```
#### 店铺日销售业绩订单列表
调用场景：点击某个日的销售业绩跳转
接口地址：ShopDaySaleSubOrder/listShopDaySaleSubOrderM
请求方式：GET
必选参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| day | 2020-08-25 | 某一个天，yyyy-MM-dd格式，/^\d{4}-\d{2}-\d{2}$/ |

可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset | 0 | 偏移量 |
| size | 2 | 展示量，默认10 |
| order | DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "income": "3.00", // 当前日期的总预估收益
        "more": false, // 是否含有下一页
        "offset": "608", // 下一页偏移量（当more是true时有效）
        "order_m": [ // 订单列表，没有数据时返回空列表
            {
                "sub_order_id": "306369990000220", // 子订单ID，跳转子订单详情时用，当前返回的只有子订单
                "addtime": "2020-08-25 15:30:55", // 创建时间
                "state_code": "1401", // 订单状态码
                "price": "2.00", // 订单金额
                "pay_price": "2.00", // 订单实际支付金额
                "sku_m": [ // 订单中SKU列表
                    {
                        "goods_id": "1043699900120", // 商品ID
                        "goods_name": "KINGPOWER泰国冬阴功一体式汤料100g*5王权免税同款轻松做大厨", // 商品名称
                        "goods_cover": "https://img.jjbangbang.com/goods/44dba7f0b035e77ab4275e3733767ce1.jpg", // 商品封面
                        "sku_id": "933", // SKUID
                        "sku_name": "默认", // SKU名称
                        "sku_count": "1", // SKU数量
                        "sku_price": "2.00", // SKU价格
                        "pay_price": "2.00", // SKU实际支付价格
                        "sold_state_code": "2101" // SKU售后状态码
                    }
                ],
                "income": "1.00" // 订单预估收益
            },
        ]
    },
    "consume": 163,
    "time": 1598506525
}
```
#### 店铺月销售业绩订单列表
调用场景：点击某个月的销售业绩跳转
接口地址：ShopMonthSaleSubOrder/listShopMonthSaleSubOrderM
请求方式：GET
必选参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| month  | 2020-08 | 某一个月，yyyy-MM格式，/^\d{4}-\d{2}$/ |

可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset | 0 | 偏移量 |
| size | 2 | 展示量，默认10 |
| order | DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "income": "4.00", // 月收益金额（如果是当月，则统计到昨日）
        "more": false, // 是否有下一页
        "offset": "218", // 下一页偏移量
        "order_m": [ // 订单列表
            {
                "sub_order_id": "310369990000469", // 子订单ID
                "addtime": "2020-08-25 13:26:22", // 创建时间
                "state_code": "1501", // 订单状态码
                "price": "2.00", // 订单金额
                "pay_price": "2.00", // 订单实付金额
                "sku_m": [ // SKU列表
                    {
                        "goods_id": "1503691700013", // 商品ID
                        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // 商品名称
                        "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg", // 商品封面
                        "sku_id": "437", // SKUID
                        "sku_name": "米白色（方头） 35", // SKU名称
                        "sku_count": "1", // SKU数量
                        "sku_price": "2.00", // SKU价格
                        "pay_price": "2.00", // SKU实际支付价格
                        "sold_state_code": "0" // SKU售后状态码
                    }
                ],
                "income": "1.00" // 订单预估收益金额
            },
        ]
    },
    "consume": 299,
    "time": 1598512021
}
```
#### 联系客服对话框功能区订单卡片列表
调用场景：点击联系客服对话框功能区订单时
接口地址：SampleOrderCard/listSampleOrderCardM
请求方式：GET
可选参数：3个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| offset | 0 | 偏移量 |
| size | 2 | 展示量，默认10，建议取服务端预设的默认值，不要自己传 |
| order | DESC | 排序方式，DESC降序，ASC升序，默认DESC |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "more": true, // true有下一页，false没有下一页
        "offset": "1149", // 获取下一页数据时回传次参数
        "order_m": [ // 订单列表数组
            {
                "sub_order_id": "307370250000732", // 子订单ID，标识该订单是子订单
                "addtime": "2020-09-07 15:58:19", // 订单创建时间
				"state_code": "1201", // 订单状态码
				"price": "2.00", // 订单合计总价格
                "sku_m": [ // 订单商品列表，默认只返回一个，结构不变，字段有删减
                    {
                        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // 商品名称
                        "goods_cover": "https://img.jjbangbang.com/goods/4b1e1e927b068b5a9679b36f750255f6.jpg", // 商品缩略图
                        "sku_name": "米白（尖头） 39" // SKU名称
                    }
                ]
            },
            {
                "addtime": "2020-09-07 15:58:18", // 订单创建时间
                "state_code": "1001", // 订单状态码
                "price": "2.00", // 订单合计总价格
                "order_id": "207370250000720", // 主订单ID，标识该订单是主订单
                "sku_m": [// 订单商品列表，默认只返回一个，结构不变，字段有删减
                    {
                        "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // 商品名称
                        "goods_cover": "https://img.jjbangbang.com/goods/4b1e1e927b068b5a9679b36f750255f6.jpg", // 商品缩略图
                        "sku_name": "米白（尖头） 39" // SKU名称
                    }
                ]
            }
        ]
    },
    "consume": 117,
    "time": 1599465525
}
```
#### 订单支付信息
调用场景：未支付订单点击去付款时
接口地址：SampleOrderPayInfo/getSampleOrderPayInfoS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 201368310000319 | 主订单ID |

输出结果：
```
{
  "code": 0, // 0正常，其他异常
  "msg": "",
  "data": {
    "order_total_pay_price": "10.04", // 订单总需（实）付金额
    "order_id": "207371850001178", // 主订单ID
    "pay_type": "3", // 支付方式：1无平台；2余额支付；3微信-APP；4支付宝-APP；5微博；6微信-H5；7支付宝-H5；8微信-小程序；9微信-公众号
    "expire_time": "2020-11-26 19:57:26", // 待支付过期时间
    "pay_price": "0.04" // 商品总需（实）付金额
  },
  "consume": 116,
  "time": 1606390966
}
```
#### 店铺订单计数数据摘要
调用场景：店铺订单计数气泡：待付款、待发货、待收货
接口地址：ShopSaleOrderInfo/getShopSaleOrderInfoS
请求方式：GET
输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "unpaid_count": 0,
        "unshipped_count": 0,
        "not_recived_count": 0
    },
    "consume": 53,
    "time": 1600841100
}
```
#### 预生成订单运费金额
调用场景：订单确认页展示勾选商品的运费金额
接口地址：preOrderFreight/getPreOrderFreight
请求方式：GET
必需参数：2个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| region |河南省-洛阳市 | 收货地址，至少二级，级之间英文-分割 |
| sku_list | [{"merchant_id":1,"freight_tpl_info":{"freight_tpl_id":1,"name":1,"area_list":[{"id":11,"area":"海南省","fee":1.1},{"id":12,"area":"河南省-洛阳市","fee":11.11}]}}] | 勾选商品用于计算运费的信息，购物车提交必传merchant_id，商品详情页提交可不传merchant_id或传0 |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "express_cost": 22.22 // 订单（预）运费金额
    },
    "consume": 107,
    "time": 1606825226
}
```

#### 预售后订单退款金额
调用场景：申请售后时动态实时计算勾选商品的总退款金额
接口地址：preSoldRefundAmount/getPreSoldRefundAmount
请求方式：GET
必需参数：2个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 307371990001153 | 子订单ID |
| sku_id | 130,436 | SKU ID列表字符串，英文逗号分割 |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "sold_refund_amount": 641 // 预售后单退款总金额
    },
    "consume": 107,
    "time": 1606825226
}
```

#### 创建订单
接口地址：sampleOrder/addSampleOrderS
请求方式：POST
必需参数：2个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_skus | [{"goods_id":1503691700013,"sku_id":437,"sku_count":1},] | 订单商品JSON字符串 |
| address_id | 1 | 收货人地址ID |

可选参数：6个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| source | 1 | 订单来源，3达人Andorid应用端，4达人iOS应用端 |
| pay_type | 1 | 支付平台，3微信支付，4支付宝支付 |
| real_name | 大眼 | 真实姓名 |
| id_card | 1000012827261287127 | 真实身份证号码 |
| is_from_cart | Y | 是否从购物车提交订单，Y是，N否，默认Y |
| remarks | 订单备注 | 订单备注 |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "order_id": "207374510002010", // 主订单ID
        "buyer_id": "7", // 买家ID
        "pay_price": "66.00", // 商品总需（实）付金额
        "pay_type": 3, // 支付方式：1无平台；2余额支付；3微信-APP；4支付宝-APP；5微博；6微信-H5；7支付宝-H5；8微信-小程序；9微信-公众号
        "source": "3", // 订单创建来源：1管理后台 巨鲸帮帮；2管理后台微博小店；3巨鲸帮帮达人Andorid应用端；4巨鲸帮帮达人iOS应用端；5微博小店（达人）；6巨鲸帮帮粉丝微信小程序端；7巨鲸帮帮粉丝H5；8微博小店（粉丝下单）；9一直播（粉丝下单）；10微博CPS；11一直播CPS
        "return_url": "", // 跳转链接
        "order_total_pay_price": "266.00", // 订单总需（实）付金额
        "type": "2",
        "sub_order_id_list": [
            "307374510001793" // 子订单ID
        ],
        "prepay": {} // 支付参数信息
    },
    "consume": 2432,
    "time": 1617858833
}
```

#### 主订单详情
接口地址：sampleOrder/getSampleOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| order_id | 201368290000250 | 主订单ID |

输出结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "shop_id": "2", // 0正常，其他异常
        "type": "2", // 订单类型：1样品订单；2销售订单；3定向闪购，4商家日常，5全量闪购
        "order_id": "207374510002010", // 主订单ID
        "addtime": "2021-04-08 13:13:51", // 创建时间
        "state_code": "1001", // 订单流转状态
        "address": {
            "address": "一个小山沟里", // 详细地址
            "name": "俊阳达人", // 收货人名称
            "phone": "15210757705", // 收货人联系电话
            "region": "甘肃省-兰州市-城关区", // 地区
            "real_name": "", // 真实姓名
            "id_card": "" // 身份证号码
        },
        "price": "66.00", // 订单商品总金额
        "pay_price": "66.00", // 订单总商品实付金额
        "expire_time": "2021-04-08 13:33:51", // 待支付过期时间
        "is_cross_border": "N", // 订单是否包含跨境商品
        "seller_id": "7", // 买家ID
        "express_cost": "200.00", // 订单总运费金额
        "order_total_price": "266.00", // 订单总金额
        "order_total_pay_price": "266.00", // 订单总需（实）付金额
        "remarks": "订单备注1", // 订单备注
        "shop_info": {
            "shop_id": "2", // 店铺名称
            "name": "俊阳小店" // 店铺ID
        },
        "sku_m": [
            {
                "type": "2", // 订单类型：1样品订单；2销售订单；3定向闪购，4商家日常，5全量闪购
                "cate_id": "44", // 二级分类ID
                "goods_id": "1503691700013", // SPU ID
                "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
                "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg", // SPU 封面
                "sku_id": "437", // SKU ID
                "sku_name": "颜色分类:米白色（方头）,尺码:35", // SKU 名称
                "sku_price": "33.00", // SKU 单价
                "pay_price": "33.00", // SKU商品总支付金额
                "sku_count": "1", // SKU数量
                "sold_state_code": "0", // SKU售后状态码
                "gifts": [
                    {
                        "gift_id": "195", // 赠品ID
                        "gift_name": "你好我是赠品", // 赠品名称
                        "gift_cover": "https://img.jjbangbang.com/test/image/bdc6bd7560ee17bae6198c52926d79d6.jpg", // 赠品封面
                        "gift_count": "1" // 赠品数量
                    }
                ]
            }
        ]
    },
    "consume": 185,
    "time": 1617859000
}
```

#### 子订单详情
接口地址：sampleSubOrder/getSampleSubOrderS
请求方式：GET
必需参数：1个

| 名称 | 实例 | 说明 |
| :------------ | :------------ | :------------ |
| sub_order_id | 301368290000596 | 子订单ID |

输出结果：
```
{
    "code": 0, // 0正常，其他异常
    "msg": "",
    "data": {
        "shop_id": "2", // 0正常，其他异常
        "type": "2", // 订单类型：1样品订单；2销售订单；3定向闪购，4商家日常，5全量闪购
        "sub_order_id": "307374500001789", // 子订单ID
        "addtime": "2021-04-07 21:49:27", // 创建时间
        "finish_time": "1970-01-01 00:00:00", // 订单完成时间
        "state_code": "1201", // 订单流转状态
        "price": "66.00", // 订单商品总金额
        "pay_price": "66.00", // 订单总商品实付金额
        "is_cross_border": "N", // 订单是否包含跨境商品
        "has_sku_in_sold": "N", // 订单是否有商品处于售后流程中
        "seller_id": "7", // 买家ID
        "exists_express": "N", // 是否存在物流信息
        "express_cost": "200.00", // 订单总运费金额
        "order_total_price": "266.00", // 订单总金额
        "order_total_pay_price": "266.00", // 订单总需（实）付金额
        "address": {
            "address": "一个小山沟里", // 详细地址
            "name": "俊阳达人", // 收货人名称
            "phone": "15210757705", // 收货人联系电话
            "region": "甘肃省-兰州市-城关区", // 地区
            "real_name": "", // 真实姓名
            "id_card": "" // 身份证号码
        },
        "shop_info": {
            "shop_id": "2", // 店铺名称
            "name": "俊阳小店" // 店铺ID
        },
        "sku_m": [
            {
                "type": "2", // 订单类型：1样品订单；2销售订单；3定向闪购，4商家日常，5全量闪购
                "cate_id": "44", // 二级分类ID
                "goods_id": "1503691700013", // SPU ID
                "goods_name": "西遇平底单鞋女夏百搭2020新款秋季方头方扣软皮软底浅口舒适瓢鞋", // SPU 名称
                "goods_cover": "https://img.jjbangbang.com/goods/4204913c51a77ce9f6c7a14e324135ab.jpg", // SPU 封面
                "sku_id": "437", // SKU ID
                "sku_name": "颜色分类:米白色（方头）,尺码:35", // SKU 名称
                "sku_price": "33.00", // SKU 单价
                "pay_price": "33.00", // SKU实付金额
                "sku_count": "1", // SKU数量
                "state_code": "1701", // SKU流转状态码
                "sold_state_code": "0", // SKU售后状态码
                "sold_expire_time": "1970-01-01 00:00:00", // SKU售后流程待处理过期时间
                "sold_id": "0", // SKU所在最近一次售后的售后单ID
                "express_id": "0", // SKU所在物流包裹的物流ID
                "available_refund_amount": "33.00", // SKU 可用退款金额
                "gifts": [
                    {
                        "gift_id": "195", // 赠品ID
                        "gift_name": "你好我是赠品", // 赠品名称
                        "gift_cover": "https://img.jjbangbang.com/test/image/bdc6bd7560ee17bae6198c52926d79d6.jpg", // 赠品封面
                        "gift_count": "1" // 赠品数量
                    }
                ]
            }
        ],
        "remarks": "订单备注2" // 订单备注
    },
    "consume": 280,
    "time": 1617859487
}
```
