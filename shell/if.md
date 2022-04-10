shell中条件语句if的基本语法

```
if [ condition ]; then
    #
elif [ condition ]; then
    #
else
    #
fi
```


### 文件/文件夹判断

[ -d FILE ]
FILE存在且FILE是一个目录则真

[ -e FILE ]
FILE存在则真

[ -f FILE ]
FILE存在且是普通文件

[ -r FILE ]
FILE存在且可读

[ -w FILE ]
FILE存在且可写

[ -x FILE ]
FILE存在且可执行


## 字符串判断

[ -z STRING ]
字符串长度为0

[ -n STRING ]
字符串长度非0

[ STRING1 = STRING2 ]
两个字符串相同

[ STRING1 != STRING2 ]
两个字符串不同


## 数字判断

[ INT1 -eq INT2 ]
相等

[ INT1 -nq INT2 ]
不等

[ INT1 -gt INT2 ]
大于

[ INT1 -ge INT2 ]
大于等于

[ INT1 -lt INT2 ]
小于

[ INT1 -le INT2 ]
小于等于


## 复杂逻辑

-a
与

-o
或

!
非

[ $a -gt $b -o $a -lt $c -a !$c ]
