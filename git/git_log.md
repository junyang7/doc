# 1. 参数说明

-p                  按不行格式显式每个更新之间的差异
--pretty            内容格式化
--date              日期格式化
--stat              显示每次更新的文件修改统计信息
--shortstat         只显示--stat中最后的行数修改添加移除统计
--name-only         仅显示已修改的文件清单
--name-status       显示新增、修改、删除的文件清单
--abbrev-commit     仅显示SHA-1的前9个字符，而非所有的40个字符
--relative-date     使用较短的相对时间显示（比如：2 days ago）
--graph             显示ASCII图形表示的分支合并历史
--since/after       显示提交比指定日期更新
--until/before      显示早于特定日期的提交
--author            作者
--committer         提交者
--grep              筛选关键字
--grep-reflog       正则筛选

## 1.1 pretty格式说明

### 1.1.1 简单格式

git log --pretty=oneline    一行格式：SHA1+提交信息
git log --pretty=short      短格式：SHA1+作者+日期+提交信息
git log --pretty=full       长格式：SHA1+作者+提交者+提交日期+提交信息
git log --pretty=fuller     长格式：SHA1+作者+作者提交日期+提交者+提交者日期+提交信息

### 1.1.2 格式化参数

%H  提交对象（commit）的完整哈希字符串
%h  %H的简短字符串
%T  树对象（tree）的完整哈希字符串
%t  %T的简短字符串
%P  父对象（parent）的完整哈希字符串
%p  %P的简短字符串
%an 作者（author）的名字
%ae 作者的电子邮件
%ad 作者修订日期
%ar 作者修订日期
%cn 提交者（commiter）的名字
%ce 提交者的电子邮件
%cd 提交日期
%cr 提交日期
%s  提交说明

## 1.2 date格式说明

### 1.2.1 小写

%a  星期缩写
%b  月份缩写
%c  格式化输出日期时间 月/日/年 时:分:秒
%d  日期
%j  一年的第几天
%m  月份数字
%p  上下午 AM/PM
%w  星期几 0-6
%x  格式化输出短日期 月/日/年
%y  年份
%z  时区

### 1.2.2 大写

%A  星期全写
%B  月份全写
%H  24小时制
%I  12小时制
%M  分钟
%S  秒
%U  一年的第几周（星期日作为每周的第一天）
%W  一年的第几周（星期一作为每周的第一天）
%X  格式化输出短时间
%Y  年份
%Z  时区
