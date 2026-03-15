----
# 一 Linux管理
## 1.1 图形化管理linux
###  GUI->graphical user interface 

```
GUI->graphical user interface  图形化的用户接口，用户做操图形软件，软件通过内核请求资源，内核调用硬件资源，硬件处理，硬件返回信息给图形，用户看到图形显示。

CTRL+ALT+F1~F6：文字登录界面tty1-tty6终端
CTRL+ALT+F1~F7：图形界面

windows能进行的管理：
文件管理（文件的增删改查）
进程管理（进程的增删改查）
软件管理（软件的增删改查）
用户管理
权限管理
网络管理
磁盘管理
防火墙管理
...

linux能进行的管理：
文件管理（文件的增删改查）
进程管理（进程的增删改查）
软件管理（软件的增删改查）
用户管理
权限管理
网络管理
磁盘管理
防火墙管理
...
```
## 1.2 命令行管理linux
###  CLI->command line interface

```shell
/ect/inittab 启动环境说明
[root@localhost]# cat /etc/inittab
# inittab is no longer used.
#
# ADDING CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.
#
# Ctrl-Alt-Delete is handled by /usr/lib/systemd/system/ctrl-alt-del.target
#
# systemd uses 'targets' instead of runlevels. By default, there are two main targets:
#
# multi-user.target: analogous to runlevel 3
# graphical.target: analogous to runlevel 5
#
# To view current default target, run:
# systemctl get-default
#
# To set a default target, run:
# systemctl set-default TARGET.target

设置Linux启动默认为图形界面(run level 5)
[root@localhost]# systemctl set-default graphical.target

设置Linux启动默认为命令行模式(run level 3)
[root@localhost]# systemctl set-default multi-user.target

root@rhel10:~# systemctl set-default multi-user.target
Removed '/etc/systemd/system/default.target'.
Created symlink '/etc/systemd/system/default.target' → '/usr/lib/systemd/system/multi-user.target'.


CLI->command line interface 命令行的接口，用户敲命令，命令向内核请求资源，内核调用硬件资源，硬件处理，硬件返回信息到命令行接口，用户看到命令行的显示结果。

Ctrl+shift+'+'调整 terminal 字体临时变大
Ctrl+'-'调整 terminal 字体临时变小
```

```
无论是GUI还是CLI，都叫shell
用户操作的是shell，shell向内核请求资源，内核调用硬件资源，硬件处理，硬件返回信息到shell,用户通过shell查看结果。
```

```
web console 用户控制  /etc/cockpit/disallowed-users
```

## 1.3 Linux的一级目录详解
### 1.3.1 根目录
```
“/”表示根目录，根目录是linux目录结构中的最顶级目录,类似于windows中C:\，D:\
```

```
/boot目录：存放的是系统的启动配置文件和内核文件
```

```
/dev目录：存放的系统的设备文件
```

```
/etc目录：存放的是Linux的配置文件
```

```
/home目录：存放的是Linux普通用户的家目录
```

```
/media目录：挂载点目录
```

```
/mnt目录：挂载点目录
```

```
/run目录：挂载点目录
```

```
/opt目录：存放软件文件的目录
```

```
/proc目录：存放的是进程文件
```

```
/srv目录：存放一些资源文件
```

```
/sys目录：存放一些资源文件（系统资源）
```

```
/tmp目录：存放一些临时文件（非常重要）
```

```
/usr目录：linux软件默认安装的目录
```

```
/var目录：存放log日志文件的目录 (非常重要)
```

```
/bin->/usr/bin 存放的是普通户能执行的命令
```

```
/lib->/usr/lib 存放的是32位的函数文件  （根下面的lib表示是/usr/lib）
```

```
/lib64->/usr/lib64 存放的是64位的函数文件
```

```
/sbin->/usr/sbin 存放的是超级用户能执行的命令
```

![](../../Images/Pasted%20image%2020231018104506.png)

```
/root目录：是root用户的家目录
```

linux通过图形界面查看到文件夹右下角有箭头的叫做linux的快捷方式

# 二 linux命令

```shell
[shuaiqijun@localhost ~]$command [-options] parameter1 parameter2
                         命令     选项       参数1       参数2
命令太长时可以使用反斜杠\来转义Enter，使命令连续到下一行
[shuaiqijun@localhost ~]$ echo $LANG
en_US.UTF-8

连续的按俩个tab键为命令补齐或者文件补齐
```
## 2.1 文件操作命令
### linux文件管理

```
文件的增删改查
文件的创建（文本文件的创建，目录文件的创建）
文件的删除（文本文件的删除，目录文件的删除）
文件的修改（文件内容的修改，文件属性的修改）
文件的查看（文件内容的查看，文件属性的查看）
```

```
文件路径：绝对路径和相对路径
什么是绝对路径：以顶级目录开头的路径就是绝对路径，在linux中"/"根目录就是顶级目录，/home/shuaiqijun.
什么是相对路径：不以"/"开头的就是相对路径
```
### 2.1.1 文件查看命令
#### cd命令
```
```shell
cd (change directory) ：切换目录
cd path（相对路径或者绝对路径）
cd ..表示切换到上级目录
cd ~表示切换到当前shell的家目录
cd - 表示切换到上次所在的目录，反复的敲会在俩个目录反复切换
```
#### ls命令

```shell
ls (list) 查看文件的属性
ls 如果什么都不加，表示显示当前目录下的所有文件和文件夹名称
ls 后面加路径，就能显示路径下面的文件内容，如果ls后面跟的是目录，就把该目录下面的文件和文件夹名字列出来，如果ls后面跟的是普通文件，就把这个普通文件的名字列出来。
ls 后面可以跟多个路径

如果想看文件的详细信息，需要加参数
-l 参数表示显示文件的详细信息
-a 参数表示以"."开头的文件，在linux中，以"."开头的文件是隐藏文件
-d 参数表示显示目录本身，而不是目录里的内容

lrwxrwxrwx.  1 root                 root                     14 Mar 17  2025 system-release -> redhat-release

文件类型（ - 表示二进制文件(普通文件)、d表示目录 、l 表示软链接文件、b表示块设备(存储设备)）

rwx rwx rwx
u 所有者 g 所属组 o 其他人
r 读权限 w 写权限 x 执行权限 - 表示没有权限

权限9列后面的“.”表示该文件具备SELINUX的安全上下文，有些时候，权限9列后面可能是“+”，则表示该文件有ACL权限

1 后面的数字那列表示该文件的链接数量

root root前面表示文件的拥有者，后面表示所属组

7 文件所属组后面的列表示文件的大小（默认单位是字节Byte）ls -lh  (-h以直观的方式显示，必须和-l同时使用). 1024Bytes=1KB

Aug 10  2021 表示时间（月、日、分）或者（月、日、年）

```
#### cat命令

```shell
cat 文本文件内容查看命令
cat 文本文件的path1 文本文件的path2
```
#### head命令

```shell
head 文本文件的path，显示文件的前10行内容（默认）
head -n 5 文本文件的path，显示文件的前5行内容
head -5 等价于 head -n 5
```
#### tail命令

```shell
tail 文本文件的path，显示文件的后10行内容（默认）
tail  -n 5 文本文件的path，显示文件的后5行内容
tail -5 等价于 tail -n 5
tail -f 文本文件的path，不断地查看文件的后10行内容
tailf  文本文件的path，不断地查看文件的后10行内容(RHEL9没有tailf ，RHEL7有tailf )
```
#### more命令

```shell
more 当文件内容非常多的时候，cat命令会一次性将所有的内容输出到屏幕上，对于文本内容较多的文件，more命令可以分页显示这些内容。
回车键可以让你看下一行内容
空格和小键盘方向键向下键可以让你看指定的行数（more -n 5 /etc/passwd ），5行5行的看，也就是一页一页的看(翻页)
more命令不支持向前翻页，q可以退出more状态
```
#### less命令

```shell
less和more差不多，less的好处是可以向前翻页，more有的功能less也有，q退出
```
#### file命令

```shell
file path/文本文件名，查看文件的类型
[root@localhost ~]# file test.sh
test.sh: Bourne-Again shell script, ASCII text executable
```
### 2.1.2 新增文件、文件夹命令
#### touch命令

```shell
touch 文本文件名 
touch path/文本文件名，后面可以跟多路径 ([shuaiqijun@localhost /]$ touch /tmp/a /tmp/b)
touch 创建的文本文件默认都是空的
touch /tmp/a{1..100}  a1到a100
如果touch后面跟的文件已存在，那么就更新这个文件的时间戳
```
#### mkdir命令

```shell
mkdir(make directory) 目录名，创建目录
-p 参数，-p参数递归创建目录   mkdir -p /etc/tmp/a/b
-m 参数，-m参数指定目录的权限
```
### 2.1.3 删除文件、文件夹命令

#### rmdir目录删除命令(空目录)

```shell
rmdir + 目录路径，删除指定空目录
```
#### rm文件删除命令

```shell
rm+path1 path2
rm+path删除文件时，root会有自动提示是否删除，普通用户无提示
-i 参数，删除时会有提示 是否删除
-f 参数，如果是root用户删除文件，为了防止不断地删除提醒，可以加-f参数，表示force的意思，即不提示删除
-r 参数，赋予rm删除目录的能力
-r -f一起用，文件和目录都能在不提示的情况下删除

[root@rehc9 ~]# rm -rf !(anaconda-ks.cfg)
删除除anaconda-ks.cfg以外的所有文件
```
### 2.1.4 拷贝文件命令
#### cp命令（备份）

```shell
cp 源文件1 源文件2 ... 目的目录path
cp 如果最后一个文件是一个存在的目录，就将cp指定的文件拷贝该目录

cp 源文件 path/不存在的目录名
cp 如果最后一个文件并不是一个存在的目录，就将cp指定的文件拷贝到目标名字的上层目录，并且将cp指定的文件更改为目标名称

cp 如果最后一个文件是一个存在的文件，则覆盖该文件

-r 参数 拷贝目录
-a 参数 保留源文件的属性

```
### 2.1.5 剪切文件命令
#### mv命令

```shell
mv 命令与cp命令基本一致，唯一不同的就是源文件没了，到了新的路径
如果移动的源文件和目的文件路径一致，则是改名操作
```

### 2.1.6 ln软链接
#### ln命令
```shell
[root@server bin]# ln -s /usr/bin/python3.11 /usr/bin/python
[root@server bin]# ln -s ./python3.11 python3


[root@server bin]# ln -s ./python3.11 python3
[root@server bin]# ls -l | grep python
-rwxr-xr-x. 1 root root        3462 Aug 10  2021 activate-global-python-argcomplete
lrwxrwxrwx. 1 root root          19 Oct 29 16:52 python -> /usr/bin/python3.11
lrwxrwxrwx. 1 root root          12 Oct 29 16:54 python3 -> ./python3.11
-rwxr-xr-x. 1 root root       15448 Sep 15 08:13 python3.11
-rwxr-xr-x. 1 root root       15448 Sep 15 08:39 python3.9
-rwxr-xr-x. 1 root root        2558 Aug 10  2021 python-argcomplete-check-easy-install-script
-rwxr-xr-x. 1 root root         318 Aug 10  2021 python-argcomplete-tcsh
-rwxr-xr-x. 1 root root        1920 Aug 10  2021 register-python-argcomplete
```
![](../../Images/Pasted%20image%2020231205115736.png)
### 2.1.7 设置文件的隐藏属性
#### chattr命令
```shell
[root@localhost ~]# chattr [-pRVf] [-+=aAcCdDeijPsStTuFx] [-v version] files...
chattr设置文件的隐藏属性
参数：
+ 增加某一个特殊参数，其他原本存在的参数不变
- 删除某一个特殊参数，其他原本存在的参数不变
= 仅保留=后面的参数

A 当设置了A这个属性，若你有访问此文件（目录）时，它的访问时间atime将不会被修改
S 表示当你进行任何文件的修改，该修改会同步写入磁盘中
a 当设置a之后，这个文件只能增加数据，而不能删除也不能修改数据，只有root才能设置这个属性
  比如log文件就非常适合+a这个属性，可以增加但是不能修改旧的数据和删除
c 这个属性表示将会自动将此文件压缩，在读取的时候会自动解压缩
d 当dump程序被执行的时候，设置d属性将可使该文件或目录不会被dump备份
i 表示可以让一个文件不能被删除、改名、设置链接、也无法写入或者添加数据，只有root才能设置这个属性
s 当文件设置了s属性时，如果这个文件被删除，它将会完全在这个硬盘空间中删除
u 与s相反，当该文件删除了，则数据内容其实还在磁盘中，可以找回该文件

[root@localhost ~]# chattr +i test.sh
[root@localhost ~]# rm -rf test.sh
rm: cannot remove 'test.sh': Operation not permitted
```

#### lsattr命令
```shell
查看文件的隐藏属性
[root@localhost ~]# lsattr
---------------------- ./anaconda-ks.cfg
----i----------------- ./test.sh
---------------------- ./a
---------------------- ./b
---------------------- ./test.sh~
---------------------- ./test.sz~
```
## 2.2 系统命令
#### su命令

```shell
su (switch user)切换用户
普通用户切换到任何用户都需要输入密码
root用户切换到任何用户都不需要输入密码
su - username (切换加"-")
su命令切换用户如果不加"-"，只是shell层面的切换，用户的环境变量实际上是没有变的。
su - 等价于 su - root
```
#### alias命令

```shell
alias 别名
alias hello='ls'
alias rm='rm -i'，直接在命令行上 alias rm='rm -i'，创建的命令是临时的，shell关闭了就没有了。需要永久配置，需要更改环境变量。

```

```shell
如果要知道自己是谁 敲命令 whoami
```

```shell
如果要知道自己在哪 敲命令 pwd （print working directory)
```
#### history命令

```
history查看历史命令记录
!l 参数 
```

#### clear命令

```
clear 清理屏幕
```

#### date命令
```shell
date 显示日期与时间
[shuaiqijun@localhost ~]$ date
Mon Nov  6 10:28:42 AM CST 2023

[shuaiqijun@localhost ~]$ date +"%Y-%m-%d %H:%M:%S"
2023-11-06 10:34:12
```

#### cal命令
```shell
cal 显示日历的命令
[shuaiqijun@localhost ~]$ cal
    November 2023
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30

[shuaiqijun@localhost ~]$ cal 2024
                               2024

       January               February                 March
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6                1  2  3                   1  2
 7  8  9 10 11 12 13    4  5  6  7  8  9 10    3  4  5  6  7  8  9
14 15 16 17 18 19 20   11 12 13 14 15 16 17   10 11 12 13 14 15 16
21 22 23 24 25 26 27   18 19 20 21 22 23 24   17 18 19 20 21 22 23
28 29 30 31            25 26 27 28 29         24 25 26 27 28 29 30
                                              31
        April                   May                   June
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6             1  2  3  4                      1
 7  8  9 10 11 12 13    5  6  7  8  9 10 11    2  3  4  5  6  7  8
14 15 16 17 18 19 20   12 13 14 15 16 17 18    9 10 11 12 13 14 15
21 22 23 24 25 26 27   19 20 21 22 23 24 25   16 17 18 19 20 21 22
28 29 30               26 27 28 29 30 31      23 24 25 26 27 28 29
                                              30
        July                  August                September
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6                1  2  3    1  2  3  4  5  6  7
 7  8  9 10 11 12 13    4  5  6  7  8  9 10    8  9 10 11 12 13 14
14 15 16 17 18 19 20   11 12 13 14 15 16 17   15 16 17 18 19 20 21
21 22 23 24 25 26 27   18 19 20 21 22 23 24   22 23 24 25 26 27 28
28 29 30 31            25 26 27 28 29 30 31   29 30

       October               November               December
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
       1  2  3  4  5                   1  2    1  2  3  4  5  6  7
 6  7  8  9 10 11 12    3  4  5  6  7  8  9    8  9 10 11 12 13 14
13 14 15 16 17 18 19   10 11 12 13 14 15 16   15 16 17 18 19 20 21
20 21 22 23 24 25 26   17 18 19 20 21 22 23   22 23 24 25 26 27 28
27 28 29 30 31         24 25 26 27 28 29 30   29 30 31

[shuaiqijun@localhost ~]$cal month year
```

#### man命令
```shell
man 是manual（操作说明）的简写
[shuaiqijun@localhost ~]$ man date
DATE(1)                                  User Commands                                 DATE(1)

NAME
       date - print or set the system date and time

SYNOPSIS
       date [OPTION]... [+FORMAT]
       date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]

DESCRIPTION
       Display the current time in the given FORMAT, or set the system date.

       Mandatory arguments to long options are mandatory for short options too.

       -d, --date=STRING
              display time described by STRING, not 'now'

       --debug
              annotate the parsed date, and warn about questionable usage to stderr

       -f, --file=DATEFILE
              like --date; once for each line of DATEFILE

       -I[FMT], --iso-8601[=FMT]
              output  date/time  in  ISO 8601 format.  FMT='date' for date only (the default),
              'hours', 'minutes', 'seconds', or 'ns' for date and time to the indicated preci‐
              sion.  Example: 2006-08-14T02:34:56-06:00

       -R, --rfc-email
              output  date  and  time  in RFC 5322 format.  Example: Mon, 14 Aug 2006 02:34:56
              -0600

       --rfc-3339=FMT
              output date/time in RFC 3339 format.  FMT='date', 'seconds', or  'ns'  for  date
              and time to the indicated precision.  Example: 2006-08-14 02:34:56-06:00

       -r, --reference=FILE
              display the last modification time of FILE


DATE(1) DATE代表命令的名称，1代表一般用户可以执行的命令
数字的含义：
1 用户在shell环境中可以操作的命令或者可执行文件
2 系统内核可调用的函数与工具等
3 一些常用的函数与函数库，大部分为C的函数库
4 设备文件的说明，通常在/dev下的文件
5 配置文件或者是某些文件的格式
6 游戏
7 管理与协议，例如Linux文件协同、网络协议、ASCII code等说明
8 系统管理员可以使用的命令
9 跟kernel有关的文件
```
#### who命令
```shell
查看目前有哪些用户在线
[shuaiqijun@localhost ~]$ who
root     pts/0        2023-11-06 10:11 (10.100.10.100)
```
#### sync命令
```
sync 数据同步写入磁盘
```

#### shutdown命令
```shell
-t 后面加秒数，即过多少秒后关机
-k 不要真的关机，只是发送警告小心出去
-r 将系统的服务停掉后重启
-h 将系统的服务停掉后立即关机
-n 不经过init程序，直接以shutdown的功能来关机
-f 关机开机之后，强制略过fsck的磁盘检查
-F 重启之后，强制略过fsck的磁盘检查
-c 取消已经在进行的shutdown命令内容

[shuaiqijun@localhost ~]$ /sbin/shutdown -h 10 'I will shutdown after 10 mins'
Failed to set wall message, ignoring: Interactive authentication required.
Failed to schedule shutdown: Interactive authentication required.

[root@localhost ~]# /sbin/shutdown -h 10 'I will shutdown after 10 mins'
Shutdown scheduled for Mon 2023-11-06 11:18:54 CST, use 'shutdown -c' to cancel.

[root@localhost ~]# shutdown -r +30 'I will reboot after 30 mins'
Reboot scheduled for Mon 2023-11-06 11:40:51 CST, use 'shutdown -c' to cancel.

[shuaiqijun@localhost ~]$ shutdown -c

```
#### init命令
```shell
init 0 关机 run level 0
init 3 命令行模式 run level 3
init 5 图形界面模式 run level 5
init 6 重启 run level 6
```

## 2.3 通配符
### ? 通配符

```shell
'?'代表一个任意非空的字符

root@RHEL10-learn:~# ls aa?
aa1  aa2  aa3  aa4  aa5  aa6  aa7  aa8  aa9
```

### \ 转义字符

```
'\'表示转义字符，能让特殊字符失去原有的功能
```

### '' 单引号

```
与'\'用法相同
```
### [] 中括号

```
表示匹配[字符字符]中任意一个字符
[abc]表示匹配a、b、c其中任意一个
[a-z]表示匹配所有的小写字母
[A-Z]表示匹配所有的大写字母
[a-Z]表示匹配所有的字母
[0-9]表示匹配所有的数字
[^]
```
### * 星号

```
*表示匹配任意数量的字符，包括空
```

# 三 编辑工具
## 3.1 vim

```shell
命令行的情况下
vim path(文件)
当使用vim指定一个文本文件的时候，会进入该文本文件，并查看到该文本文件的内容。此时默认情况下是不能对该文件进行内容修改的。
vim 分为4大模式
命令模式（确定光标在哪）
编辑模式
末行模式
可视化模式
```

### 3.1.1 命令模式

```shell
只有在编辑模式下，才能类似于windows记事本那样去编辑文件

当vim指定文件然后回车，进入的第一模式是命令模式
hjkl分别代表←↑↓→ ，这四个字母都属于命令模式里面的'命令'，调整光标方向的命令
有些系统提供的命令行不支持小键盘，或者你的键盘压根就没有小键盘

gg 无论光标在任何位置，输入gg，都能将光标切换到行首，文本的第一行的最前面
G 输入G就能切换到最后一行，shift + g = G
nG 输入nG就能切换到第n行，3G，就能切换到第三行

x 光标所在位置按x，就能删除光标所在的字符，连续按x就会不断的向右删除字符

X 光标所在位置按X，就能删除光标所在位置左侧的第一个字符，如果连续按X，就会不断的向左删除字符

u 按u能撤回上一次的操作，相当于windows的Ctrl+z，windows Ctrl+z是有限制的，能撤回的次数有限，取决于编辑软件的缓冲区设置，vim命令模式下的u，几乎可以无限次的撤回到文件内容最开始的部分，按住u，就会一直撤回，直到恢复你刚进入文本的样子。

dd 在命令模式下按dd那个删除光标所在行
ndd 在命令模式下按ndd就能删除包含光标所在行的下n行
yy 在命令模式下按yy就能复制光标所在行
nyy 在命令模式下按nyy就能复制包含光标所在行的下n行
p 如果在命令模式的上一次操作中是dd或者yy这种命令，dd和yy所删除或者复制的行，都可以通过p命令粘贴到光标所在行的下面
P 如果在命令模式的上一次操作中是dd或者yy这种命令，dd和yy所删除或者复制的行，都可以通过P命令粘贴到光标所在行的上面

```
### 3.1.2 编辑模式

```shell
命令模式按 i I a A o O都能进入编辑模式
编辑模式：
i 命令模式下按i，就会开始从光标所在位置的左侧开始插入文本
I 命令模式下按I，光标就会立即到达光标所在行的行首插入文本
a 命令模式下按a，就会开始从光标所在位置的右侧开始插入文本
A 命令模式下按A，光标就会立即到达光标所在行的行尾插入文本
o 命令模式下按o，就会在光标所在行下面另起一行插入文本
O 命令模式下按O，就会在光标所在行上面另起一行插入文本
```

### 3.1.3 末行模式

```
在命令模式下输入“/”或者“:”就能进入末行模式
```

```
末行模式下常见的操作：
1. 查找指定的字符串
2. 文本内容的替换
3. 保存文本内容
4. 退出vim编辑器(如果修改的内容没没有保存是不能正常退出编辑器的，如果强制退出会导致编辑的内容丢失)
```

```shell
在命令模式下输入“/字符串“+回车查找字符串，如果没有找到就会报错，找到了就会用高亮的颜色显示。如果找到了多个可以按小n切换到下一个，按大N可以切换到上一个。
```

```shell
在末行模式下，按w然后回车，就可以将修改的你日工保存，即使保存了内容，命令行模式的u任然可以撤回。
保存之后可以在“:”的末行模式下输入q然后回车退出
在“:”的末行模式下支持:wq直接保存退出
:q!表示强制退出，之前编辑的内容不会保留
:set number回车 显示行号
:set nonumber回车 去掉行号
```

```shell
:n1,n2s/old content/new content/global
上面的操作会将n1行开始，n2行结束，这些行包含n1和n2，会将old content替换为new content

:5,10s/123/456/g
第5行到第10行的123全部替换为456

:1,$s/1.1.1.1/172.16.1.1/g
第一行到最后一行的1.1.1.1替换为72.16.1.1
$就表示最后一行
如果要替换前的文本和替换后的文本里面有特殊字符，需要用转义字符\进行转义
:1,$s/\/var\/lib/\/opt\/a/g  （/var/lib 替换为/opt/a)

替换结尾是否加g,表示是否进行全局替换，如果加，只替换每一行找到的第一个字符替换。
```

```
命令模式下按v或者V或者Ctrl+v能进入可视化模式

```
# 四 输入输出重定向

## 4.1 输出重定向

```
当我输入一个命令回车时，系统默认是输出到屏幕上。默认情况下，无论一个命令是错是对结果都会输出到屏幕。
有些情况下，我可能需要保留命令或者脚本输出的结果，当做log,用于分析。
```

```shell
[shuaiqijun@localhost ~]$ cat /etc/hosts >> file.txt

root@RHEL10-learn:~# cat /etc/hosts >> files.txt
root@RHEL10-learn:~# ls
files.txt
root@RHEL10-learn:~# cat files.txt 
# Loopback entries; do not change.
# For historical reasons, localhost precedes localhost.localdomain:
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
# See hosts(5) for proper format and other examples:
# 192.168.1.10 foo.example.org foo
# 192.168.1.13 bar.example.org bar
```

![](../../Images/Pasted%20image%2020231019141329.png)
### 4.1.1 正确重定向(> 和 >>)

```
">"和">>"是正确的重定向，能将正确的结果重定向到文件中，区别是：
">"会将重定向的内容覆盖指向的文件,>就是正确的覆盖
">>"会将重定向的内容追加到指定的文件，>>就是正确的追加
```
### 4.1.2 错误重定向

```
"2>"和"2>>"是错误的重定向，能将错误的结果重定向到文件中，区别是：
"2>"会将重定向的内容覆盖指向的文件,2>就是错误的覆盖
"2>>"会将重定向的内容追加到指定的文件，2>>就是错误的追加
```
### 4.1.3 同时使用

```
&> 正确错误都覆盖
&>> 正确错误都追加
&>> /dev/null
如果将重定向指向这个文件，那么就相当于将执行结果送到黑洞中
```
## 4.2 输入重定向

```
可以将交互式命令变成非交互式命令
引入了一些shell脚本的思想
shell脚本就是linux命令的几何体
一个脚本里面可以有N个linux命令
但是shell脚本里面要尽可能的是非交互式命令
```
![](../../Images/Pasted%20image%2020231019154323.png)
# 五 | 管道

```
| 管道的左右两边都有命令
| 管道的左边命令的输出是右边命令的输入
| 管道右边的命令总是接受输入的命令
```
![](../../Images/Pasted%20image%2020231019160051.png)
## 5.1 xargs

```
| xargs 将|管道左边命令的输出作为参数传给|管道右面的命令
[shuaiqijun@localhost ~]$ ls | xargs cat
```
![](../../Images/Pasted%20image%2020231019162712.png)
## 5.2 grep

抓取一个文件的内容，配合管道，可以抓取任何内容ls 
```
[shuaiqijun@localhost ~]$ grep root /etc/passwd
```
![](../../Images/Pasted%20image%2020231019163008.png)
```
-i 不区分大小写
-v 反向抓取（抓取除指定字符的以外的）
-A 打印文本及其前面N行
-B 打印文本及其后面N行
-n 显示行号
```
![](../../Images/Pasted%20image%2020231019170127.png)

# 六 正则表达式

```
^ 表示以什么开头，^$表示空行
$ 表示以什么结尾
. 表示匹配任意一个非空字符 ， .*表示匹配任意非空字符串，表示1-n个
* 表示匹配任意个1-n个  
？ 表示可以重复前面指定的字符1次或0次，.?理解为俩个点
```


![](../../Images/Pasted%20image%2020231019182253.png)
![](../../Images/Pasted%20image%2020231019182237.png)

```shell
[shuaiqijun@rehc9 ~]$ grep ^# /etc/chrony.conf -v | grep ^$ -n -v
```

![](../../Images/Pasted%20image%2020231019183930.png)
# 六 linux快捷键

```
ctrl + l 清理屏幕 clear
ctrl + a 将光标移动到最左侧
ctrl + e 将光标移动到最右侧
↑        能列出上次使用的命令
↓        和上相反
ctrl + u 删除光标所在位置到最左侧
ctrl + y 还原删除操作
ctrl + w 删除光标左侧一个word
tap      按俩下tap键补全，linux支持path的补全，支持基础的命令补全
```
# 七 linux用户管理

```
用户管理在linux中使用的频率并不高
对于一个标准的linux系统来说，就是一个普通用户，一个root用户

用户信息都是存放在/etc/passwd
用户密码信息存放在/etc/shadow
用户组信息存放在/etc/group
用户组密码信息存放在/etc/gshadow

```
## 7.1 用户的增删改查
### useradd 增加用户命令

```shell
[root@rehc9 ~]# useradd shuaijinyu
[root@rehc9 ~]# grep shuaijinyu /etc/passwd
shuaijinyu:x:1001:1001::/home/shuaijinyu:/bin/bash
```
![](../../Images/Pasted%20image%2020231019204036.png)
```
使用useradd命令添加用户，会在/etc/passwd里面产生信息
/etc/passwd里面的信息分为7列，被6个:隔开
第一列表示username（login name）
第二列表示密码列，但是该列已被移除，存放在/etc/shadow文件，用x表示
第三列表示UID（user id），绝对不能重复
第四列表示用户所属组的ID，用户的private group ID，任何用户都要属于一个用户组
private group，primary group，attached group
第五列表示描述信息
第六列表示用户的家目录
第七列表示用户的登录shell
useradd创建用户成功之后的默认行为是创建这个用户的家目录和邮箱
```

```
[root@rehc9 ~]# useradd shuai -u 2023 -d /home/shuaige -s /bin/sh
[root@rehc9 ~]# grep shuai /etc/passwd
shuaiqijun:x:1000:1000::/home/shuaiqijun:/bin/bash
shuaijinyu:x:1001:1001::/home/shuaijinyu:/bin/bash
shuai:x:2023:2023::/home/shuaige:/bin/sh
```

![](../../Images/Pasted%20image%2020231019205123.png)
### userdel 删除用户的命令

```
[root@rehc9 home]# userdel shuai
userdel删除用户，默认不会删除用户的家目录和邮箱
-r 参数 userdel -r /用户家目录

```
### id 查看用户的命令

```
查看用户 grep username /etc/passwd
        grep 1001 /etc/passwd
        id shuaiqijun

[root@rehc9 home]# id shuaiqijun
uid=1000(shuaiqijun) gid=1000(shuaiqijun) groups=1000(shuaiqijun)
```
![](../../Images/Pasted%20image%2020231019211408.png)

### usermod 修改用户的命令

```
[root@rehc9 ~]# usermod shuai -u 2000 -d /home/sg -s /bin/bash
[root@rehc9 ~]# grep shuai /etc/passwd
shuaiqijun:x:1000:1000::/home/shuaiqijun:/bin/bash
shuaijinyu:x:1001:1001::/home/shuaijinyu:/bin/bash
shuai:x:2000:2023::/home/sg:/bin/bash
```
![](../../Images/Pasted%20image%2020231019205321.png)
```
RHEL系统创建用户是自动创建家目录的，原因是系统参照了/etc/login.defs配置里面的内容对用户创建参数有默认的行为
```
## 7.2 用户组的增删改查

<font color=#38CEFF size=4 foce=宋体>private group(私有组)，primary group(主要组)，attached group(附加组)</font>

```
由于任何用户都必须依赖于用户组才能存在，所以如果创建用户没有指定用户组，那么系统会为该用户创建一个同名的组，这个组叫做该用户的private group（私有组），私有组默认只有一个和该私有组同名的用户，私有组的意义就在于让用户有了一个用户组
如果创建了一个用户，指定了该用户的用户组，那么该用户就没有私有组
/etc/passwd的第四列GID表示该用户属于的primary group（主要组），一个用户可以属于多个组
一个用户只可以属于一个primary group(主要组)，但是可以同时属于多个attached group(附加组)
id查看一个用户时，可以看到uid和gid还有该用户属于的所有组，gid表示该用户的primary group（主要组），除了gid之外的所有组都是attached group(附加组)

/etc/group下存放着组信息
shuaiqijun:x:1000:
第一列组名
第二列组密码，x表示密码存放在/etc/gshadow文件里
第三列表示组ID（GID），不能重复
第四列表示“组成员”

```
### groupadd 增加用户组命令

```shell
[root@rehc9 home]# groupadd hehe
[root@rehc9 home]# grep hehe /etc/group
hehe:x:1002:
[root@rehc9 home]#
-g 参数 指定primary group
-G 参数 指定attached group
```

![](../../Images/Pasted%20image%2020231019213136.png)
### groupdel 删除用户组命令

```shell
[root@rehc9 home]# groupdel hehe
[root@rehc9 home]# grep hehe /etc/group
```

![](../../Images/Pasted%20image%2020231019213438.png)
### groupmod 修改用户组ID命令

```bash
[root@rehc9 home]# groupmod shuaiqijun -g 2000
[root@rehc9 home]# grep shuaiqijun /etc/group
shuaiqijun:x:2000:

[root@rehc9 home]# usermod shuaiqijun -G root
[root@rehc9 home]# id shuaiqijun
uid=1000(shuaiqijun) gid=2000(shuaiqijun) groups=2000(shuaiqijun),0(root)
-a 参数 追加组用  --append  
-aG 参数 追加attached group  a必须在前面
```

![](../../Images/Pasted%20image%2020231019214534.png)
![](../../Images/Pasted%20image%2020231019222703.png)
## 7.3 用户密码的增删改查

```
用户的密码信息存放在/etc/shadow中
第一列是username
第二列是password
第三列是上次修改密码的时间
上次修改密码的时间字段如果编程了0，就表示该用户下次登录必须修改密码

第四列是密码最小有效期
如果是0，就可以无限次的不考虑间隔的修改密码
如果是1，修改密码后必须使用1天后才能再次修改

第五列是密码最大有效期
默认是99999，表示密码99999天就会失效

第六列是密码到期提前多少天告警的时间信息
第七列表示用户密码到期后宽限的日期
第八列表示账号失效日期
第九列保留
```
### 7.3.1 给用户设置密码

```
passwd 用户名
```
### 7.3.2 给用户删除密码

```
passwd -d 用户名
passwd不能设置上次修改密码的时间
```
### 7.3.3 让用户密码失效

```
passwd -e 用户名
```
### 7.3.4 修改用户密码
```
使用chage(change age)来修改用户的密码信息，相比于passwd更灵活
一般来说，针对上次修改的密码的时候，要么不修改，要么设置为0，表示让用户下次登录必须修改密码
普通用户想修改自己的密码，直接passwd就可以
[root@localhost ~]# chage -d 0 -m 2 -M 20 -W 10 -I 7 -E 2024-1-1 shuaiqijun
[root@localhost ~]# grep shuaiqijun /etc/shadow
shuaiqijun:$6$69w70p/sC41nIQiV$newhozq5TR42VXCk8XWtyXtrHx2cEQmriA9eF4Q.3yDKIgDOLDX0CD0AXlG2cOjL0eSf9MXemIhCoOjyV3Iia1:0:2:20:10:7:19723:
[root@localhost ~]#
```
![](../../Images/Pasted%20image%2020231020104029.png)
```bash
passwd --stdin 可以让passwd接受标准输入
echo Abc12345 | passwd --stdin shuaiqijun 直接将shuaiqijun密码修改为Abc12345
[root@localhost ~]# echo Abc12345 | passwd --stdin shuaiqijun
Changing password for user shuaiqijun.
passwd: all authentication tokens updated successfully.
[root@localhost ~]#
```
![](../../Images/Pasted%20image%2020231020105410.png)
## 7.4 用户组密码的增删改查

```
用户组密码信息存放在/etc/gshadow文件
组密码的第二列记录的是组密码
默认的组合默认的用户一样没有密码
对于任何一个用户来说，创建的文件，默认的拥有者就是该用户，默认的所属组就是该用户的primary group（主要组）

组密码的作用是让那些不属于该组的用户，可以切换到该组的一种方式，只要提供正确的组密码即可切换，获得这个组的shell
```

```bash
newgrp groupname，能让一个用户临时切换到另外一个组（前提该用户属于那个组），那么切换成功之后，该用户创建成功的文件都属于切换成功后的组，此时的shell跟之前的shell不是同一个shell
[shuaiqijun@localhost ~]$ newgrp root    //临时切换默认的主要组 primary group
[shuaiqijun@localhost ~]$ touch a
[shuaiqijun@localhost ~]$ ls -la
total 32
drwx------. 3 shuaiqijun shuaiqijun  151 Oct 20 11:08 .
drwxr-xr-x. 3 root       root         24 Oct 18 09:28 ..
-rw-r--r--. 1 shuaiqijun root          0 Oct 20 11:08 a
```

```
修改组密码
gpasswd 组名
```

## 7.5 root密码破解
![](../../Images/Pasted%20image%2020231029134314.png)

```
开机按e,在第一行末尾加上rd.break，按Ctrl+x保存
```

![](../../Images/Pasted%20image%2020231029134624.png)

```shell
mount -o rw,remount /sysroot
chroot /sysroot
passwd root
touch /.autorelabel
exit
exit
```

```
开机按e,在第一行末尾加上single，按Ctrl+x保存 进入维护模式
```
![](../../Images/Pasted%20image%2020231106111851.png)
# 八 权限

<font color=red fontsize= 4>无论考试还是实际应用都非常重要</font>

```
用户管理也是和权限相关的知识点
```
## 8.1 权限的作用

```bash
[shuaiqijun@localhost ~]$ ls -l
total 4
-rw-r--r--. 1 shuaiqijun root         0 Oct 20 11:08 a
-rw-r--r--. 1 shuaiqijun shuaiqijun 182 Oct 19 09:49 hosts
rw-r--r--
文件的权限列
```
### 8.1.1 权限对普通文本文件的作用

```
9列权限，前三列是文件拥有者对该文件拥有的权限，中间三列表示文件的所属组队该文件具有的权限，后三列是其他人对该文件具有的权限。其它人的意思就是既不是拥有者，也不是该文件所属组的用户。
owner权限、group权限、others权限，文件的owner不一定属于该文件的所属组。
文件的权限常见的：r、w、X、-
```

|①|owner|group|others|
|----|----|----|----|
|②|rwx|rw-|r--|
|③|读写执行|读写|读|

#### 对于普通文件来说，rwx权限表达的意义是什么？

```
1. 如果一个普通文件有r权限，就表示该文件的内容可以被看到
2. 如果一个普通文件有w权限，就表示该文件的内容可以被修改
3. 如果一个普通文件有x权限，就表示该文件可以当做脚本一样执行
```

#### 对于目录文件来说，rwx权限表达的意义是什么？

```
1. 如果一个目录文件有r权限，就表示该目录下的文件可以被查看属性（查看文件属性的命令），如果一个目录文件有r权限，不一定能查看这个目录下的普通文件的内容，一个普通文件能否查看它的内容和它所在的目录没有任何关系，而是和它自己是否具备r权限有关系
2. 如果一个目录文件有w权限，就表示可以在该目录下创建文件、删除文件或修改文件属性，如果一个目录文件有w权限，不一定能修改这个目录下的普通文件的内容，一个普通文件是否能修改它的内容和它自己是否具备w权限有关系，而和它是否在具备w权限的目录没有关系
3. 如果一个目录文件有x权限，就表示可以进入该目录，如果一个目录文件连x权限都没有，这个目录是无法进入的。一个目录没有x权限，能不能在该目录下创建删除文件，或者查看文件属性？答案是可以
4. 如果一个目录没有执行权限，那么即使有r权限或者w权限，也表示该目录是一个问题目录
```

```bash
对于目录来说只有3种权限有意义
--- 表示目录没有任何权限
r-x 表示目录有读权限
rwx 表示目录有写权限
```

### 8.1.2 针对一个文件的权限设置

```bash
[root@localhost tmp]# useradd user1
[root@localhost tmp]# useradd user2
[root@localhost tmp]# touch /home/user1/men
[root@localhost tmp]# ll /home/user1/men
-rw-r--r--. 1 root root 0 Oct 20 14:05 /home/user1/men
[root@localhost tmp]# chown user2 /home/user1/men
[root@localhost tmp]# ls -l /home/user1/men
-rw-r--r--. 1 user2 root 0 Oct 20 14:05 /home/user1/men

[root@localhost ~]# chown user1:user2 /home/user1/men
[root@localhost ~]# ls -l /home/user1/men
-rw-r--r--. 1 user1 user2 0 Oct 20 14:05 /home/user1/men
[root@localhost ~]#

[root@localhost home]# su - user2
[user2@localhost ~]$ ll /home/user1/men
ls: cannot access '/home/user1/men': Permission denied

```
![](../../Images/Pasted%20image%2020231020141130.png)
![](../../Images/Pasted%20image%2020231020141642.png)
#### chmod命令 修改文件权限

```bash
chmod u/g/o
u=user
g=group
o=others

[root@localhost ~]# chmod u=rwx,g=rwx,o=r-- /home/user1/men
表示将拥有者的权限设置为rwx,所属组的权限设置为rwx，其他人设置为r权限

[root@localhost ~]# ll /home/user1/men
-rwxrwxr--. 1 user1 user2 0 Oct 20 14:05 /home/user1/men

[root@localhost ~]# chmod u-x,g-wx,o+wx /home/user1/men
表示将拥有者的权限减去x权限，所属组减去wx权限，其他人增加wx权限

[root@localhost ~]# ll /home/user1/men
-rw-r--rwx. 1 user1 user2 0 Oct 20 14:05 /home/user1/men
```

![](../../Images/Pasted%20image%2020231020142345.png)

#### chgrp命令 修改文件所属组
```shell
[root@localhost ~]# ls -lh
total 8.0K
-rw-------. 1 root root 962 Oct 31 16:41 anaconda-ks.cfg
-rwx--x--x. 1 root root 183 Nov  2 08:58 test.sh
[root@localhost ~]# chgrp shuaiqijun test.sh
[root@localhost ~]# ls -lh
total 8.0K
-rw-------. 1 root root       962 Oct 31 16:41 anaconda-ks.cfg
-rwx--x--x. 1 root shuaiqijun 183 Nov  2 08:58 test.sh

chgrp 改变文件的所属用户组
```

#### chown命令 修改文件所有者
```shell
chown 改变文件的所有者
[root@localhost ~]# chown shuaiqijun test.sh
[root@localhost ~]# ls -lh
total 8.0K
-rw-------. 1 root       root       962 Oct 31 16:41 anaconda-ks.cfg
-rwx--x--x. 1 shuaiqijun shuaiqijun 183 Nov  2 08:58 test.sh
```
#### 对于文件的执行权限的解释

```
当执行一个普通文本文件时，相当于将该文件里的每一行都当成linux命令执行
```

#### 十进制权限
```
rwx
000  0
001  1
010  2
011  3
100  4
101  5
110  6
111  7
```
#### Linux的特殊权限

```bash
linux的三种特殊权限，考试只考一种，实际生产环境中，用的并不多

1.set uid
set uid特殊权限应用于可执行的普通文件，当一个文件被设置set UID特殊权限时，任何人一旦执行该文件，都会临时获得该文件拥有人的权限
[shuaiqijun@localhost ~]$ ls -l /bin/passwd
-rwsr-xr-x. 1 root root 32648  8月 10  2021 /bin/passwd
在文件拥有者的权限列的执行权限位置，如果该位置是s或者S，就表示该文件被设置了set uid特殊权限
另外SUID近可用在二进制程序上，不能够用在shell script上面。这是因为shell script只是将很多的二进制执行文件调用执行而已，还有SUID对目录也是无效的
设置SUID特殊权限：
[root@localhost ~]# chmod 4755 test.sh
[root@localhost ~]# ll
-rwsr-xr-x. 1 root root 183 Nov  6 13:22 test.sh
删除SUID特殊权限：
[root@localhost ~]# chmod u-s test.sh
[root@localhost ~]# ll
-rwxrw-rw-. 1 root root 183 Nov  6 13:22 test.sh


2.set gid
set gid特殊权限应用于目录文件，当一个目录被设置成set gid特殊权限时，任何用户在该目录下创建文件，该文件的所属组都会被设置成set gid那个目录的所属组
在文件所属组的权限列的执行位置，如果该位置是s或者S，就表示该文件被设置了set gid特殊权限
设置SGID特殊权限：
[root@localhost ~]# chmod 2755 test.sh
[root@localhost ~]# ll
-rwxr-sr-x. 1 root root 183 Nov  6 13:22 test.sh
删除SGID特殊权限：
[root@localhost ~]# chmod g-s test.sh
[root@localhost ~]# ll
-rwxrw-rw-. 1 root root 183 Nov  6 13:22 test.sh


3.sticky bit（粘置位）
针对有写权限的目录设置的特殊权限位，当一个有写权限的目录被设置了sticky特殊权限时，那么任何人在该目录下创建的文件就只有自己和root可以删除，该特殊权限位，限制了目录写权限
对于目录写权限来说，该权限有点太大了，SBIT就是限制目录写权限的
[shuaiqijun@rehc9 ~]$ ls -ld /tmp
drwxrwxrwt. 11 root root 4096 Oct 20 19:39 /tmp
去掉sticky特殊权限
[root@rehc9 ~]$ chmod o-t /tmp
```

```shell
SUID 4  相当于 u+s
SGID 2  相当于 g+s
SBIT 1  相当于 o+t

[root@localhost ~]# chmod 7755 test.sh
[root@localhost ~]# ll
-rwsr-sr-t. 1 root root 183 Nov  6 13:22 test.sh

[root@localhost ~]# chmod 7766 test.sh
[root@localhost ~]# ll
-rwsrwSrwT. 1 root root 183 Nov  6 13:22 test.sh
```
<font color=red size=4>当设置特殊权限时，执行权限会被“覆盖”，当特殊权限是小写字母时，那么执行权限就还在，如果是大写字母特殊权限，执行权限就不在</font>

### 8.1.3 缺省权限umask

```bash
[shuaiqijun@rehc9 ~]$ umask
0022
[root@rehc9 ~]# umask
0022
一般来说umask只看后3位
创建目录的缺省权限是777
创建普通文件的缺省权限是666

[zhangsan@rehc9 ~]$ mkdir a
[zhangsan@rehc9 ~]$ ls -ld a
drwxr-xr-x. 2 zhangsan zhangsan 6 Oct 20 20:17 a
[zhangsan@rehc9 ~]$ touch b
[zhangsan@rehc9 ~]$ ls -l b
-rw-r--r--. 1 zhangsan zhangsan 0 Oct 20 20:18 b
[root@rehc9 ~]# mkdir a
[root@rehc9 ~]# ls -ld a
drwxr-xr-x. 2 root root 6 Oct 20 20:19 a
[root@rehc9 ~]# touch b
[root@rehc9 ~]# ls -l b
-rw-r--r--. 1 root root 0 Oct 20 20:19 b

umask能帮助用户修改创建文件的默认权限
创建目录的默认权限，就是目录777减去umask的后3位
创建普通文件的默认权限，就是目录666减去umask的后3位

root创建的目录默认权限是755
root创建的普通文件默认权限是644

普通用户创建的目录默认权限是755
普通用户创建的普通文件默认权限是644

rwxrwxrwx减去----w--w- = rwxr-xr-x = 755
rw-rw-rw-减去----w--w- = rw-r--r-- = 644
```
#### 更改umask

```
umask 0033
命令修改只是临时修改，只在当前shell生效，如果想永久将所有普通用户umask设置，编辑/etc/bashrc
```

## 8.2 ACL

```bash
有一个普通文件file，需要对该文件进行权限设置，有3个用户，tgb，Lxs，xzx。
1.要求tgb对file文件有rwx权限
2.要求Lxs对file文件有rw权限
3.要求xzx对file文件有r权限

[root@rehc9 ~]# useradd tgb
[root@rehc9 ~]# useradd lxs
[root@rehc9 ~]# useradd xzx
[root@rehc9 ~]# mkdir /tmp/test
[root@rehc9 ~]# cd /tmp/test
[root@rehc9 test]# ls
[root@rehc9 test]# touch file
[root@rehc9 test]# ls -l
total 0
-rw-r--r--. 1 root root 0 Oct 20 20:56 file

[root@rehc9 test]# chown tgb:lxs file
[root@rehc9 test]# ls -l
total 0
-rw-r--r--. 1 tgb lxs 0 Oct 20 20:56 file
[root@rehc9 test]# chmod 764 file
[root@rehc9 test]# ls -l
total 0
-rwxrw-r--. 1 tgb lxs 0 Oct 20 20:56 file

```

```shell
有一个普通文件file，需要对该文件进行权限设置，有3个用户，tgb，Lxs，xzx。
1.要求tgb对file文件有rwx权限
2.要求Lxs对file文件有rw权限
3.要求xzx对file文件有r权限
4.要求hzz对file文件没有权限

[root@rehc9 ~]# useradd tgb
[root@rehc9 ~]# useradd lxs
[root@rehc9 ~]# useradd xzx
[root@rehc9 ~]# mkdir /tmp/test
[root@rehc9 ~]# cd /tmp/test
[root@rehc9 test]# ls
[root@rehc9 test]# touch file
[root@rehc9 test]# ls -l
total 0
-rw-r--r--. 1 root root 0 Oct 20 20:56 file

[root@rehc9 test]# chown tgb:lxs file
[root@rehc9 test]# ls -l
total 0
-rw-r--r--. 1 tgb lxs 0 Oct 20 20:56 file
[root@rehc9 test]# chmod 764 file
[root@rehc9 test]# ls -l
total 0
-rwxrw-r--. 1 tgb lxs 0 Oct 20 20:56 file

对于超出三类人以上的权限，我们使用文件表面的权限已经无法实现了，为了应对类似这种复杂的权限问题，如何解决呢？
```

```
文件的ACL权限（Access Control List访问控制列表）
ACL就是对访问进行控制的一张表
文件的ACL设置可以通过ACL让指定的某个用户或用户组对某个文件设置特别的权限（后门）
```

### 8.2.1 针对文件设置ACL
#### setfacl命令

```shell
[root@rehc9 test]# setfacl -m u:hzz:--- file
上面的命令的意义就是设置hzz用户对filew文件没有任何权限
-m 参数 表示modify(修改)
u 表示针对用户设置特殊的权限
u 后面的hzz就是被设置特权权限的用户
hzz 后面的---就表示针对hzz用户设置的权限
[root@rehc9 test]# ls -l file
-rwxrw-r--+ 1 tgb lxs 0 Oct 20 20:56 file
权限9列后面多了个+，一旦针对文件设置了ACL权限，此时该文件表面上看到的权限不一定生效，如果想看到文件真实的权限，就用getfacl来查看
```

#### getfacl命令

```shell
[root@rehc9 test]# getfacl file
# file: file
# owner: tgb
# group: lxs
user::rwx
user:hzz:---
group::rw-
mask::rw-
other::r--

如何看一个文件的ACL
# 开头的有三行，分别表示是文件的名字，文件的拥有者，文件的所属组primary group
前三行之后的都是ACL表格的内容
表格的内容主要有两类，一类是user开头，一类是group开头的，user开头的表示改行是针对用户设置的权限
group开头表示改行是针对用户组设置的权限
格式如下：
user:user1:rwx
user:user2:rw
group:group1:rwx
group:group2:rw

如果第一列是user,第二列没有值，就表示该行设置的是owner(tgb)的权限
如果第一列是group,第二列没有值，就表示该行设置的是group(lxs)的权限
如果第一列是other，第二列咩有值，就表示改行设置的是对其他人的权限，other总在最后一行

[root@rehc9 test]# setfacl -m g:hzz:r-- file
[root@rehc9 test]# getfacl file
# file: file
# owner: tgb
# group: lxs
user::rwx
user:hzz:---
group::rw-
group:hzz:r--
mask::rw-
other::r--
[hzz@rehc9 test]$ cat file
cat: file: Permission denied

ACL表由上至下匹配，匹配到之后就停止匹配
```

<font color=red size=4>ACL表由上至下匹配，匹配到之后就停止匹配</font>

#### 删除ACL

```shell
[root@rehc9 ~]# setfacl -x u:hzz: /tmp/test/file
[root@rehc9 ~]# getfacl /tmp/test/file
getfacl: Removing leading '/' from absolute path names
# file: tmp/test/file
# owner: tgb
# group: lxs
user::rwx
group::rw-
group:hzz:r--
mask::rw-
other::r--

-x 参数 删除ACL
-b 参数 移除所有ACL权限包括+号痕迹
```

### 8.2.2 针对目录设置ACL

```
针对目录设置ACL权限意义不大
目录的权限只有3种组合才有意义
---
r-x
rwx
一般我们对目录设置的ACL权限和对普通文件设置的ACL权限意义不一样
我们希望对目录设置的ACL权限是，当一个新的文件在目录中被创建的时候，默认携带ACL权限
对目录设置默认的ACL权限
```

```shell
[root@rehc9 tmp]# setfacl -m d:u:hzz:r-x test/
[root@rehc9 tmp]# getfacl test/
# file: test/
# owner: root
# group: root
user::rwx
group::r-x
other::r-x
default:user::rwx
default:user:hzz:r-x
default:group::r-x
default:mask::r-x
default:other::r-x

[root@rehc9 tmp]# ls -ld test/
drwxr-xr-x+ 2 root root 18 Oct 20 20:56 test/

default开头的所有字段，表示在该目录下创建文件，会继承的ACL权限
--------------------------------------------------------------------------------------
[root@rehc9 tmp]# touch ./test/file2
[root@rehc9 tmp]# getfacl ./test/file2
# file: test/file2
# owner: root
# group: root
user::rw-
user:hzz:r-x                    #effective:r--
group::r-x                      #effective:r--
mask::r--
other::r--

mask表示该文件ACL的最大权限，最default的ACL权限存在下，创建的文件的ACL权限，不能超过mask的权限
mask只能限制非拥有者的权限
```

### 8.2.3 权限委派（生产环境必备）
```
权限委派就是让普通用户能获得管理员权限的一种方式
我们再权限委派部分只会讲/etc/sudoers文件操作，不会讲pam模块高级设计

## Sudoers allows particular users to run various commands as
## the root user, without needing the root password
## Sudoers允许特定用户运行各种命令
## root用户，不需要root密码

shuaiqijun      ALL=(ALL)       ALL
表示shuaiqijun用户能在任何地方运行任何命令
%shuaiqijun      ALL=(ALL)       ALL
表示shuaiqijun用户组内的用户能在任何地方运行任何命令
shuaiqijun  ALL=/sbin/useradd
表示shuaiqijun用户只能运行useradd管理命令
%shuaiqijun      ALL=(ALL)       NOPASSWD: ALL
表示shuaiqijun用户组内的用户能在任何地方运行任何命令且不需要输入shuaiqijun自己的密码

后面降到ansible，所有的被管理主机都不能使用root权限操作，都需要使用普通用户提权到root来进行自动化操作

post installation,都会修改/etc/sudoers
```

![](../../Images/Pasted%20image%2020231021153828.png)
```shell
[shuaiqijun@rehc9 ~]$ sudo useradd shuaiqijun01
[sudo] password for shuaiqijun:
[shuaiqijun@rehc9 ~]$ grep shuaiqijun /etc/passwd
shuaiqijun:x:1000:2000::/home/shuaiqijun:/bin/bash
shuaiqijun01:x:1007:1007::/home/shuaiqijun01:/bin/bash
```
# 九 进程

```
进程就是运行中的程序
进程会占用四类资源，cpu、memory、disk、network
进程至少会占用cpu和memory
```

## 9.1 ps命令
### 参数

```
ps [options] [--help]
- -A 列出所有的进程
- -w 显示加宽可以显示较多的资讯
- -au 显示较详细的资讯
- -aux 显示所有包含其他使用者的进程

```

### 输出格式

```
au(x) 输出格式 :
- USER: 进程拥有者
- PID: pid
- %CPU: 占用的 CPU 使用率
- %MEM: 占用的内存使用率
- VSZ: 占用的虚拟内存大小
- RSS: 占用的内存大小
- TTY: 终端的次要装置号码 (minor device number of tty)
- STAT: 该行程的状态:
    
    - D: 无法中断的休眠状态 (通常 IO 的进程)
    - R: 正在执行中
    - S: 静止状态
    - T: 暂停执行
    - Z: 不存在但暂时无法消除
    - W: 没有足够的内存分页可分配
    - <: 高优先序的行程
    - N: 低优先序的行程
    - L: 有记忆体分页分配并锁在内存 (实时系统或捱A I/O)
- START: 行程开始时间
- TIME: 执行的时间
- COMMAND:所执行的指令
```

![](../../Images/Pasted%20image%2020231021171639.png)
### 实例

#### 查找指定进程
```shell
ps -ef | grep 进程关键字
[shuaiqijun@localhost ~]$ ps -ef | grep mysql
shuaiqi+   51001   50359  0 17:17 pts/1    00:00:00 grep --color=auto mysql
```
#### 显示特定用户进程信息
```bash
[shuaiqijun@localhost ~]$ ps -u shuaiqijun
    PID TTY          TIME CMD
   5593 ?        00:00:00 systemd
   5597 ?        00:00:00 (sd-pam)
```

## 9.2 top命令

使用权限：所有使用者
### 语法
```
top [-] [d delay] [q] [c] [S] [s] [i] [n] [b]
```

### 参数
```
-d <秒数>：指定 top 命令的刷新时间间隔，单位为秒。
-n <次数>：指定 top 命令运行的次数后自动退出。
-p <进程ID>：仅显示指定进程ID的信息。
-u <用户名>：仅显示指定用户名的进程信息。
-H：在进程信息中显示线程详细信息。
-i：不显示闲置（idle）或无用的进程。
-b：以批处理（batch）模式运行，直接将结果输出到文件。
-c：显示完整的命令行而不截断。
-S：累计显示进程的 CPU 使用时间。
```

### 输出格式
```
uptime：系统的运行时间和平均负载。
tasks：当前运行的进程和线程数目。
CPU：总体 CPU 使用率和各个核心的使用情况。
内存（Memory）：总体内存使用情况、可用内存和缓存。

PID：进程的标识符。
USER：运行进程的用户名。
PR（优先级）：进程的优先级。
NI（Nice值）：进程的优先级调整值。
VIRT（虚拟内存）：进程使用的虚拟内存大小。
RES（常驻内存）：进程实际使用的物理内存大小。
SHR（共享内存）：进程共享的内存大小。
%CPU：进程占用 CPU 的使用率。
%MEM：进程占用内存的使用率。
TIME+：进程的累计 CPU 时间。


%us：表示用户空间程序的cpu使用率（没有通过nice调度）

%sy：表示系统空间的cpu使用率，主要是内核程序

%ni：表示用户空间且通过nice调度过的程序的cpu使用率

%id：空闲cpu百分比

%wa：cpu运行时在等待io的时间

%hi：cpu处理硬中断的数量百分比

%si：cpu处理软中断的数量百分比

%st：被虚拟机使用的的cpu百分比
```

### 功能和交互操作
```
按键命令：在 top 运行时可以使用一些按键命令进行操作，如按下 "k" 可以终止一个进程，按下 "h" 可以显示帮助信息等。
排序：可以按照 CPU 使用率、内存使用率、进程 ID 等对进程进行排序。
刷新频率：可以设置 top 的刷新频率，以便动态查看系统信息。
```

## 9.3 pstree命令
#### 语法
```
pstree [-a] [-c] [-h|-Hpid] [-l] [-n] [-p] [-u] [-G|-U] [pid|user]
```

#### 参数
```
-a 显示该进程的完整指令及参数, 如果是被记忆体置换出去的进程则会加上括号
-c 如果有重覆的进程名, 则分开列出（预设值是会在前面加上 *）
-p 显示PID
```

```bash
[shuaiqijun@localhost ~]$ pstree -p | grep vmtools
           |               |-vmtoolsd(5990)-+-{vmtoolsd}(6310)
           |               |                |-{vmtoolsd}(6311)
           |               |                `-{vmtoolsd}(48081)
           |-vmtoolsd(1021)-+-{vmtoolsd}(1073)
           |                |-{vmtoolsd}(1074)
           |                `-{vmtoolsd}(1076)
[shuaiqijun@localhost ~]$
```
#### 实例
```
pstree -apnh //显示进程间的关系
```

```
pstree -u //显示用户名称
```

## 9.4 kill命令
```
Linux kill 命令用于删除执行中的程序或工作。

kill 可将指定的信息送至程序。预设的信息为 SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用 SIGKILL(9) 信息尝试强制删除程序。程序或工作的编号可利用 ps 指令或 jobs 指令查看。
```
### 语法
```
kill [-s <信息名称或编号>][程序]　或　kill [-l <信息编号>]
```
### 参数
```
-l <信息编号> 　若不加<信息编号>选项，则 -l 参数会列出全部的信息名称。
-s <信息名称或编号> 　指定要送出的信息。
[程序] 　[程序]可以是程序的PID或是PGID，也可以是工作编号。

使用 kill -l 命令列出所有可用信号。

最常用的是：
1 (HUP)：重新加载进程。
9 (KILL)：杀死一个进程。
15 (TERM)：正常停止一个进程。

[root@rehc9 ~]# kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX

```

### 实例
```
杀死进程
kill 12345
```

```
强制杀死进程
kill -KILL 123456
```

```
彻底杀死进程
kill -9 123456
```

```
杀死指定用户所有进程
kill -9 $(ps -ef | grep hnlinux) //方法一 过滤出hnlinux用户进程 
kill -u hnlinux //方法二
```

```bash
踢出tty2的用户
pkill -t tty2 

[shuaiqijun@rehc9 ~]$ ps aux | grep shuaiqijun
root        1073  0.0  0.0  12468  6388 ?        Ss   Oct20   0:00 login -- shuaiqijun
root        4336  0.0  0.0  15344  6672 pts/0    S    15:32   0:00 su - shuaiqijun
root        4390  0.0  0.0  15344  6656 pts/0    S    15:36   0:00 su - shuaiqijun
shuaiqi+    4670  0.0  0.0   6408  2156 pts/0    S+   18:31   0:00 grep --color=auto shuaiqijun
[shuaiqijun@rehc9 ~]$ pkill -t pts/0
pkill: killing pid 4291 failed: Operation not permitted
pkill: killing pid 4336 failed: Operation not permitted
pkill: killing pid 4367 failed: Operation not permitted
pkill: killing pid 4390 failed: Operation not permitted

Session terminated, killing shell...[shuaiqijun@rehc9 ~]$
[shuaiqijun@rehc9 ~]$  ...killed.
Terminated

```

## 9.5 作业调度

```
之所以叫做作业调度，作业是以shell为单位的，一个shell建立的作业，不会被另外一个shell看到（包括root)，但是仍然可以看到作业对应的进程
```

### 9.5.1 前台进程

```
运行在用户眼前的进程就是前台进程，当用户眼前运行一个前台进程时，如果运行其他进程，必须关闭当前前台进程，或者将该前台进程放到后台运行
```

### 9.5.1 后台进程

```
后台运行cp
cp file1 file2 &
Ctrl+z 可以将前台进程放入后台运行
bg 可以将前台进程放入后台运行
fg 可以将后台进程放入前台
```

```
jobs命令是一个阉割版的ps，只能查看当前shell运行的后台进程
kill %1   //kill %jobid
```

```shell
后台进程不会影响用户当前shell运行其他进程
并不是所有的进程都能作为后台进程运行在后台的，比如top命令
如何判断一个进程应不应该放在后台运行？
1.运行时间长，用户不想在前台等待，该进程可以运行结束
2.服务service进程，用户想让其永远处于运行状态，也称为守护进程

当前台进程运行时，可以按Ctrl+z将前台进程放入后台运行，当一个进程由前台切换到后台时（Ctrl+z），那么该进程的状态就会变为stop，如果你想继续运行该进程，需要使用kill命令发送让该进程继续运行的信号
[root@rehc9 ~]# kill -18 %1
```

## 9.6 调整进程优先级
```
nice

renice 
```

# 十 服务

```
服务就是进程，进程不一定是服务
服务是具备一定功能的继承，但是有些进程并不具备服务的特征，所以服务一定是进程，进程不一定是服务
```

```
linux里面的第一个进程，是整个系统的父进程
在RHEL6版本之前，包括RHEL6，采用的第一个进程叫做init,第一个进程非常重要，因为他要负责后面所有其他进程的启动，后面其他进程能否启动成功取决于系统能不能正常运行
init有问题，通过init进程启动的后续进程都是串行启动，串行启动就意味着速度慢
在RHEL7，采用了第一个进程叫systemd，该进程相比于init来说，采用并行方式启动后续进程，并行启动就意味着速度快
```

## 10.1 systemd管理服务操作
```shell
基本上较新的linux发行版都支持systemd管理网络服务，Ubuntu、rhel、suse、opensuse、debian
systemd管理的内容不仅仅只有service，systemd管理的单位是unit,service只是unit中的一种
[root@localhost ~]# systemctl list-units
[root@localhost ~]# systemctl list-unit-files
[root@localhost ~]# systemctl status NetworkManager
● NetworkManager.service - Network Manager
     Loaded: loaded (/usr/lib/systemd/system/NetworkManager.service; enabled; preset: >
     Active: active (running) since Wed 2023-10-18 17:17:39 CST; 3 days ago
       Docs: man:NetworkManager(8)
   Main PID: 921 (NetworkManager)
      Tasks: 3 (limit: 151836)
     Memory: 11.0M
        CPU: 2min 37.975s
     CGroup: /system.slice/NetworkManager.service
             └─921 /usr/sbin/NetworkManager --no-daemon

Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1337] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1361] p>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1575] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1622] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1627] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1635] m>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1641] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1651] m>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1657] m>
Oct 18 17:17:43 localhost.localdomain NetworkManager[921]: <info>  [1697620663.7792] p>
```

```shell
systemctl start 服务
systemctl restart 服务
systemctl enable 服务
systemctl disable 服务
systemctl status 服务
systemctl is-active 服务
systemctl is-enabled 服务


[shuaiqijun@localhost ~]$ systemctl restart NetworkManager && echo "The network.service is restart"
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
重新启动“NetworkManager.service”需要认证。
Authenticating as: shuaiqijun
Password:
==== AUTHENTICATION COMPLETE ====
The network.service is restart
[shuaiqijun@localhost ~]$

```

## 10.2 systemd管理target
```shell
target是由服务组成的一类启动目标，systemd可以设置启动目标
如果systemd指定了一个target作为启动目录，那么下次系统启动的时候会启动target里面所有的服务
我们需要了解的target有俩个，一个是multi-user.target ，一个是graphical.target

graphical.target是图形界面的linux系统

systemctl isolate multi-user.target   //将图形界面临时切换到字符界面
systemctl isolate graphical.target   //将字符界面临时切换到图形界面
[shuaiqijun@localhost ~]$ systemctl get-default
graphical.target
[shuaiqijun@localhost ~]$ systemctl set-default multi-user
[root@localhost ~]# systemctl daemon-reload
```

# 十一 RHEL9网络管理
## 11.1 RHEL9 网络管理结构

```
Linux网络管理是最重要的知识
post installation scripts
```

## 11.2 RHEL9 网络管理服务
```
在早期的linux发型版本里几乎所有的网络服务都是network.servie，从RHEL7开始都是NetworManager.service,红帽官方建议使用NetworkManage的方式来配置网络


NetworkManager早期的设计目的是为了统一网络配置，统一网络配置信息的意思就是以后所有网络相关的配置都用NetworkManager来实现
[root@localhost ~]# lshw -class net -businfo
Bus info          Device      Class      Description
====================================================
pci@0000:02:01.0  ens33       network    VMXNET3 Ethernet Controller
[root@localhost ~]#


NetworkManager服务提供了3种工具来让你配置网卡参数，无论哪一种工具，都不需要你去手工的修改网卡配置文件

[root@localhost ~]# systemctl status NetworkManager
● NetworkManager.service - Network Manager
     Loaded: loaded (/usr/lib/systemd/system/NetworkManager.service; enabled; preset: >
     Active: active (running) since Wed 2023-10-18 17:17:39 CST; 3 days ago
       Docs: man:NetworkManager(8)
   Main PID: 921 (NetworkManager)
      Tasks: 3 (limit: 151836)
     Memory: 11.0M
        CPU: 2min 50.474s
     CGroup: /system.slice/NetworkManager.service
             └─921 /usr/sbin/NetworkManager --no-daemon

Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1337] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1361] p>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1575] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1622] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1627] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1635] m>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1641] d>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1651] m>
Oct 18 17:17:42 localhost.localdomain NetworkManager[921]: <info>  [1697620662.1657] m>
Oct 18 17:17:43 localhost.localdomain NetworkManager[921]: <info>  [1697620663.7792] p>
lines 1-21/21 (END)
确认NetworkManager服务是开启的
```

## 11.3 RHEL9 网络管理工具
### 11.3.1 nm-connection-editor（图形终端）

```

```shell
如果是远程操作，即使Linux没有安装图形界面，远程的终端服务器安装了图形服务软件才可以调用出图形
[root@localhost ~]# dnf -y install nm-connection-editor
[root@localhost ~]# nm-connection-editor
```
![](../../Images/Pasted%20image%2020231022165553.png)

### 11.3.2 nmtui（伪图形终端）

```
伪图形终端nmtui
[root@localhost home]# nmtui
```
![](../../Images/Pasted%20image%2020231022170228.png)

### 11.3.3 nmcli (命令行)

```shell
nmcli
1.nmcli查看网卡参数---硬件层面
[root@localhost home]# nmcli device status
DEVICE  TYPE      STATE                   CONNECTION
ens33   ethernet  connected               ens33
ens35   ethernet  connected               Wired connection 1
lo      loopback  connected (externally)  lo
第一列是网卡名称

第二列是网卡类型

第三列是当前网卡的状态（指的是NetworkManager是否接管了这块网卡）

如果第三列是unmanaged，就表示该网卡没有被NetworkManager接管，意味着无法使用NetworkManager管理该网卡
如果第三列是disconnected，意味着该网卡没有使用任何配置文件
如果第三列是connected，意味着该网卡正在使用某个配置文件
如果第三列是connecting，意味着该网卡正在获取IP地址

第四列表示当前网卡使用的配置文件是什么，如果有名字就表示该网卡的配置文件就是那个名字，如果是--就表示该网卡当前没有配置文件

# 让 NetworkManager 管理所有接口
# 编辑 NetworkManager 配置文件
sudo nano /etc/NetworkManager/NetworkManager.conf

ini

[main]
plugins=ifupdown,keyfile

[ifupdown]
managed=true

2.nmcli命令是可以补全的，但是要安装bash-completion.noarch 
[root@rehc9 ~]# nmcli device delete 虚拟网卡
nmcli device delete 只能删除虚拟网卡，无法删除物理网卡
nmcli device disconnect ens160
nmcli device connect ens160  ens160是配置文件
```

```
nmcli管理网卡配置文件
IP address
IP mask
ip gateway
ip dns
ip method (手工配置地址还是DHCP)
ip autoconnect（开机是否自动连接配置文件）
操作网卡配置文件
```


```
[root@rhel8 ~]# nmcli connection
add
clone
delete
edit
help
Load
monitor
show
down
export
import
modify
reload
up
操作网卡配置文件
[root@rhel8 ~]# nmcli connection add
添加一个网卡配置文件
[root@rhel8 ~]# nmcli connection delete
删除一个网卡配置文件
[root@rhel8 ~]# nmcli connection up
激活一个网卡配置文件
[root@rhel8 ~]# nmcli connection down
关闭一个网卡配置文件
[root@rhel8 ~]# nmcli connection show查看一个网卡配置文件
[root@rhel8 ~]# nmcli connection reload重新加载网卡配置文件
```

```shell
我们通过nmcli connection操作的网卡配置文件
默认目录都在[root@rhel8 ~]# Is /etc/sysconfig/network-scripts/
ifcfg-dhcp ifcfg-ens160 ifcfg-ens224
都是以ifcfg-开头的，后面的就是网卡配置文件的名字
if是interface的缩写，cfg是configuration的缩写

[root@rehc9 ~]# nmcli connect show
NAME                UUID                                  TYPE      DEVICE
Wired connection 1  51c47533-a6a2-39f5-8593-4184a803f4c7  ethernet  ens224
ens160              62e2ce6f-d8f5-37e8-b474-a8df460cbfb1  ethernet  ens160
lo                  e4211192-b888-4371-8a1e-efe29b067365  loopback  lo

第一列NAME表示网卡配置文件的名称，该名称可以重复，但是不建议重复第二列表示网卡配置文件的UUID，UUID一定不会重复，当名字重复的时候，UUID不会重复第三列TYPE表示该网卡配置文件的类型，一般都是ethernet第四列表示配置文件服务于哪个网卡 (DEVICE)
``` 

```
[root@rehc9 ~]# nmcli connect add con-name 配置文件的名称 type 配置文件的类型 ifname 配置文件的网卡

[root@rehc9 ~]# nmcli connect add con-name eth1 type ethernet ifname ens224
Connection 'eth1' (9bbb542a-1bae-4ba2-942c-933b7e998c24) successfully added.

[root@rehc9 ~]# nmcli connect add con-name eth1 type ethernet ifname ens224 ipv4.address 192.168.50.136/24 ipv4.gateway 192.168.50.1 ipv4.dns 202.103.24.68,202.103.44.150 ipv4.method manual
```

**![](../../Images/Pasted%20image%2020231022191529.png)

```shell

[root@rehc9 ~]# nmcli connect up eth1
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/5)
[root@rehc9 ~]# nmcli connect show
NAME                UUID                                  TYPE      DEVICE
ens160              62e2ce6f-d8f5-37e8-b474-a8df460cbfb1  ethernet  ens160
eth1                9bbb542a-1bae-4ba2-942c-933b7e998c24  ethernet  ens224
lo                  e4211192-b888-4371-8a1e-efe29b067365  loopback  lo
eth1                ca2f81a4-25e7-4677-8f7d-8c66782a6eb9  ethernet  --
Wired connection 1  51c47533-a6a2-39f5-8593-4184a803f4c7  ethernet  --
[root@rehc9 ~]#
```

![](../../Images/Pasted%20image%2020231022191717.png)

```shell
nmcli connection modify ensp224 ipv4.addresses 192.168.50.100/24

[root@rehc9 ~]# nmcli con modify ens160 ipv4.addresses 192.168.50.92/24 ipv4.dns 202.103.24.68,202.103.44.150 ipv4.gateway 192.168.50.1 connection.autoconnect yes ipv4.method manual

connection.autoconnect表示该网卡配置文件是否下次开机的时候会被自动加载，如果是yes就会自动加载，如果是no就不会自动加载
```

```shell
[root@rehc9 network-scripts]# nmcli connect show ens224
connection.id:                          ens224
connection.uuid:                        38dff8cc-5124-4e6d-ac8a-04f1967c346c
connection.stable-id:                   --
connection.type:                        802-3-ethernet
connection.interface-name:              ens224
connection.autoconnect:                 yes
connection.autoconnect-priority:        0
connection.autoconnect-retries:         -1 (default)
connection.multi-connect:               0 (default)
connection.auth-retries:                -1
connection.timestamp:                   1697977157
connection.read-only:                   no
connection.permissions:                 --
connection.zone:                        --
connection.master:                      --
connection.slave-type:                  --
connection.autoconnect-slaves:          -1 (default)
connection.secondaries:                 --
connection.gateway-ping-timeout:        0
connection.metered:                     unknown
connection.lldp:                        default
connection.mdns:                        -1 (default)
connection.llmnr:                       -1 (default)
connection.dns-over-tls:                -1 (default)
connection.mptcp-flags:                 0x0 (default)
connection.wait-device-timeout:         -1
connection.wait-activation-delay:       -1
802-3-ethernet.port:                    --
802-3-ethernet.speed:                   0
802-3-ethernet.duplex:                  --
802-3-ethernet.auto-negotiate:          no
802-3-ethernet.mac-address:             --
802-3-ethernet.cloned-mac-address:      --
802-3-ethernet.generate-mac-address-mask:--
802-3-ethernet.mac-address-blacklist:   --
802-3-ethernet.mtu:                     auto
802-3-ethernet.s390-subchannels:        --
802-3-ethernet.s390-nettype:            --
802-3-ethernet.s390-options:            --
802-3-ethernet.wake-on-lan:             default
802-3-ethernet.wake-on-lan-password:    --
802-3-ethernet.accept-all-mac-addresses:-1 (default)
ipv4.method:                            auto
ipv4.dns:                               --
ipv4.dns-search:                        --
ipv4.dns-options:                       --
ipv4.dns-priority:                      0
ipv4.addresses:                         --
ipv4.gateway:                           --
ipv4.routes:                            --
ipv4.route-metric:                      -1
ipv4.route-table:                       0 (unspec)
ipv4.routing-rules:                     --
ipv4.replace-local-rule:                -1 (default)
ipv4.ignore-auto-routes:                no
ipv4.ignore-auto-dns:                   no
ipv4.dhcp-client-id:                    --
ipv4.dhcp-iaid:                         --
ipv4.dhcp-timeout:                      0 (default)
ipv4.dhcp-send-hostname:                yes
ipv4.dhcp-hostname:                     --
ipv4.dhcp-fqdn:                         --
ipv4.dhcp-hostname-flags:               0x0 (none)
ipv4.never-default:                     no
ipv4.may-fail:                          yes
ipv4.required-timeout:                  -1 (default)
ipv4.dad-timeout:                       -1 (default)
ipv4.dhcp-vendor-class-identifier:      --
ipv4.link-local:                        0 (default)
ipv4.dhcp-reject-servers:               --
ipv4.auto-route-ext-gw:                 -1 (default)
ipv6.method:                            auto
ipv6.dns:                               --
ipv6.dns-search:                        --
ipv6.dns-options:                       --
ipv6.dns-priority:                      0
ipv6.addresses:                         --
ipv6.gateway:                           --
ipv6.routes:                            --
ipv6.route-metric:                      -1
ipv6.route-table:                       0 (unspec)
ipv6.routing-rules:                     --
ipv6.replace-local-rule:                -1 (default)
ipv6.ignore-auto-routes:                no
ipv6.ignore-auto-dns:                   no
ipv6.never-default:                     no
ipv6.may-fail:                          yes
ipv6.required-timeout:                  -1 (default)
ipv6.ip6-privacy:                       -1 (unknown)
ipv6.addr-gen-mode:                     default
ipv6.ra-timeout:                        0 (default)
ipv6.mtu:                               auto
ipv6.dhcp-duid:                         --
ipv6.dhcp-iaid:                         --
ipv6.dhcp-timeout:                      0 (default)
ipv6.dhcp-send-hostname:                yes
ipv6.dhcp-hostname:                     --
ipv6.dhcp-hostname-flags:               0x0 (none)
ipv6.auto-route-ext-gw:                 -1 (default)
ipv6.token:                             --
proxy.method:                           none
proxy.browser-only:                     no
proxy.pac-url:                          --
proxy.pac-script:                       --
GENERAL.NAME:                           ens224
GENERAL.UUID:                           38dff8cc-5124-4e6d-ac8a-04f1967c346c
GENERAL.DEVICES:                        ens224
GENERAL.IP-IFACE:                       ens224
GENERAL.STATE:                          activated
GENERAL.DEFAULT:                        no
GENERAL.DEFAULT6:                       no
GENERAL.SPEC-OBJECT:                    --
GENERAL.VPN:                            no
GENERAL.DBUS-PATH:                      /org/freedesktop/NetworkManager/ActiveConnection/7
GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/Settings/6
GENERAL.ZONE:                           --
GENERAL.MASTER-PATH:                    --
IP4.ADDRESS[1]:                         192.168.50.207/24
IP4.GATEWAY:                            192.168.50.1
IP4.ROUTE[1]:                           dst = 192.168.50.0/24, nh = 0.0.0.0, mt = 103
IP4.ROUTE[2]:                           dst = 0.0.0.0/0, nh = 192.168.50.1, mt = 103
IP4.DNS[1]:                             192.168.50.1
DHCP4.OPTION[1]:                        dhcp_client_identifier = 01:00:0c:29:51:e8:3b
DHCP4.OPTION[2]:                        dhcp_lease_time = 86400
DHCP4.OPTION[3]:                        dhcp_server_identifier = 192.168.50.1
DHCP4.OPTION[4]:                        domain_name_servers = 192.168.50.1
DHCP4.OPTION[5]:                        expiry = 1698063557
DHCP4.OPTION[6]:                        ip_address = 192.168.50.207
DHCP4.OPTION[7]:                        requested_broadcast_address = 1
DHCP4.OPTION[8]:                        requested_domain_name = 1
DHCP4.OPTION[9]:                        requested_domain_name_servers = 1
DHCP4.OPTION[10]:                       requested_domain_search = 1
DHCP4.OPTION[11]:                       requested_host_name = 1
DHCP4.OPTION[12]:                       requested_interface_mtu = 1
DHCP4.OPTION[13]:                       requested_ms_classless_static_routes = 1
DHCP4.OPTION[14]:                       requested_nis_domain = 1
DHCP4.OPTION[15]:                       requested_nis_servers = 1
DHCP4.OPTION[16]:                       requested_ntp_servers = 1
DHCP4.OPTION[17]:                       requested_rfc3442_classless_static_routes = 1
DHCP4.OPTION[18]:                       requested_root_path = 1
DHCP4.OPTION[19]:                       requested_routers = 1
DHCP4.OPTION[20]:                       requested_static_routes = 1
DHCP4.OPTION[21]:                       requested_subnet_mask = 1
DHCP4.OPTION[22]:                       requested_time_offset = 1
DHCP4.OPTION[23]:                       requested_wpad = 1
DHCP4.OPTION[24]:                       routers = 192.168.50.1
DHCP4.OPTION[25]:                       subnet_mask = 255.255.255.0
IP6.ADDRESS[1]:                         fe80::451c:a6f9:d357:e3e2/64
IP6.GATEWAY:                            fe80::1
IP6.ROUTE[1]:                           dst = fe80::/64, nh = ::, mt = 1024
IP6.ROUTE[2]:                           dst = ::/0, nh = fe80::1, mt = 103

```

## 11.4 ip命令

```
IP命令是新型的网络管理命令，目前已经基本取代了ifconfig
```

```shell
查看网卡信息
[root@rehc9 ~]# ip address show ens160
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:51:e8:31 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.50.62/24 brd 192.168.50.255 scope global noprefixroute ens160
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fe51:e831/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
查看网卡信息   
```

```shell
查看路由
[root@rehc9 ~]# ip route show
default via 192.168.50.1 dev ens160 proto static metric 102
default via 192.168.50.1 dev ens224 proto dhcp src 192.168.50.207 metric 103
192.168.50.0/24 dev ens160 proto kernel scope link src 192.168.50.62 metric 102
192.168.50.0/24 dev ens224 proto kernel scope link src 192.168.50.207 metric 103
[root@rehc9 ~]#
```

```shell
删除IP地址
[root@localhost ~]# ip address flush ens35
[root@localhost ~]# ip address show ens35
3: ens35: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:50:56:ab:cc:78 brd ff:ff:ff:ff:ff:ff
    altname enp2s3
    inet 10.100.7.151/19 brd 10.100.31.255 scope global dynamic noprefixroute ens35
       valid_lft 84815sec preferred_lft 84815sec
    inet6 fe80::9da0:b025:6cd9:8a87/64 scope link noprefixroute
       valid_lft forever preferred_lft forever

```

```shell
添加IP地址
[root@localhost ~]# ip address add 172.16.16.16/24 dev ens35
[root@localhost ~]# ip address show ens35
3: ens35: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:50:56:ab:cc:78 brd ff:ff:ff:ff:ff:ff
    altname enp2s3
    inet 10.100.7.151/19 brd 10.100.31.255 scope global dynamic noprefixroute ens35
       valid_lft 84672sec preferred_lft 84672sec
    inet 172.16.16.16/24 scope global ens35
       valid_lft forever preferred_lft forever
    inet6 fe80::9da0:b025:6cd9:8a87/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

```
开启关闭网卡
ip link set ens35 down/up
```
## 11.5 ifconfig命令

```shell
ifconfig（net-tools）命令是一个早期的网络管理命令，在未来有可能会被移除，在不久的将来会被ip命令取代

[root@rehc9 ~]# ifconfig ens224 192.168.208/24
配置的地址是临时有效的，系统重启后就会自动消失

如果当前网卡有NetworkManager的配置文件，那么ifconfig给网卡配置地址，也不会生效
如果当前网卡没有NetworkManager的配置文件，那么ifconfig给网卡配置地址，NetworkManager会给网卡分配一个配置文件，重启后失效
ifconfig ens35 down/up
开启关闭网卡
```

## 11.6 route命令

```shell
[root@rehc9 ~]# route -ne
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.50.1    0.0.0.0         UG        0 0          0 ens160
0.0.0.0         192.168.50.1    0.0.0.0         UG        0 0          0 ens224
192.168.50.0    0.0.0.0         255.255.255.0   U         0 0          0 ens160
192.168.50.0    0.0.0.0         255.255.255.0   U         0 0          0 ens224
```

## 11.7 netstat
查看Linux中网络系统状态信息

netstat命令 用来打印Linux中网络系统的状态信息，可以让你得知整个Linux系统的网络情况

### 11.7.1 语法
```
netstat 选项
```

### 11.7.2 选项
```
-a或--all 显示所有连线中的Socket。
-A<网络类型>或--<网络类型> 列出该网络类型连线中的相关地址。
-c或--continuous 持续列出网络状态。
-C或--cache 显示路由器配置的快取信息。
-e或--extend 显示网络其他相关信息。
-F或--fib 显示路由缓存。
-g或--groups 显示多重广播功能群组组员名单。
-h或--help 在线帮助。
-i或--interfaces 显示网络界面信息表单。
-l或--listening 显示监控中的服务器的Socket。
-M或--masquerade 显示伪装的网络连线。
-n或--numeric 直接使用IP地址，而不通过域名服务器。
-N或--netlink或--symbolic 显示网络硬件外围设备的符号连接名称。
-o或--timers 显示计时器。
-p或--programs 显示正在使用Socket的程序识别码和程序名称。
-r或--route 显示Routing Table。
-s或--statistics 显示网络工作信息统计表。
-t或--tcp 显示TCP传输协议的连线状况。
-u或--udp 显示UDP传输协议的连线状况。
-v或--verbose 显示指令执行过程。
-V或--version 显示版本信息。
-w或--raw 显示RAW传输协议的连线状况。
-x或--unix 此参数的效果和指定"-A unix"参数相同。
--ip或--inet 此参数的效果和指定"-A inet"参数相同。
```

### 11.7.3 实例

#### 11.7.3.1 显示详细的网络状况
```
netstat -a
```

#### 11.7.3.2 显示当前UDP连接状况
```
netstat -nu
```

#### 11.7.3.3 显示UDP端口号的使用情况
```
netstat -apu
```

#### 11.7.3.4 显示网卡列表
```
netstat -i
```

#### 11.7.3.5 显示组播组的关系
```
netstat -g
```

#### 11.7.3.6 显示网络统计信息
```
netstat -s
```

![](../../Images/Pasted%20image%2020231023144326.png)

```shell
[shuaiqijun@localhost ~]$ netstat -tulnp
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -              
tcp6       0      0 :::22                   :::*                    LISTEN      -              
udp        0      0 127.0.0.1:323           0.0.0.0:*                           -              
udp6       0      0 ::1:323                 :::*   
```

#### 11.7.3.7 IP和TCP分析

查看连接某服务端口最多的的IP地址:

```
netstat -ntu | grep :80 | gwk '{print $5}' | cut -d: -f1 | awk '{++ip[$1]} END {for(i in ip) print ip[i],"\t" ,i}' | sort -nr
```

TCP各种状态列表:

```
netstat -nt | grep -e 127.0.0.1 -e 0.0.0.0 -e ::: -v |  awk '/^tcp/ {++state[$NF]} END {for(i in state) print i,"\t",state[i]}'
```

查看phpcgi进程数，如果接近预设值，说明不够用，需要增加:

```
netstat -anpo | grep "php-cgi" | wc -l
```

## 11.8 ss (sockets statitics)

```
比netstat好用的socket统计信息，iproute2 包附带的另一个工具，允许你查询socket的有关统计信息
```

补充说明:

```
ss命令 用来显示处于活动状态的套接字信息。ss命令可以用来获取socket统计信息，它可以显示和netstat类似的内容。但ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效。

当服务器的socket连接数量变得非常大时，无论是使用netstat命令还是直接 cat /proc/net/tcp ，执行速度都会很慢。可能你不会有切身的感受，但请相信我，当服务器维持的连接达到上万个的时候，使用netstat等于浪费 生命，而用ss才是节省时间。

天下武功唯快不破。ss快的秘诀在于，它利用到了TCP协议栈中tcp_diag。tcp_diag是一个用于分析统计的模块，可以获得Linux内核中第一手的信息，这就确保了ss的快捷高效。当然，如果你的系统中没有tcp_diag，ss也可以正常运行，只是效率会变得稍慢。
```

## 11.9 vlan

```
nmcli connection add con-name ens160-vlan10 ifname ens160-vlan10 type vlan id 10 device ens160 ipv4.address 192.168.10.1/24 ipv4.method manual
```

临时开启路由转发功能

```shell
[root@localhost ipv4]# echo 1 > /proc/sys/net/ipv4/ip_forward
```

永久开启路由转发功能

```
[root@localhost ~]# vim /etc/sysctl.conf

# sysctl settings are defined through files in
# /usr/lib/sysctl.d/, /run/sysctl.d/, and /etc/sysctl.d/.
#
# Vendors settings live in /usr/lib/sysctl.d/.
# To override a whole file, create a new file with the same in
# /etc/sysctl.d/ and put new settings there. To override
# only specific settings, add a file with a lexically later
# name in /etc/sysctl.d/ and put new settings there.
#
# For more information, see sysctl.conf(5) and sysctl.d(5).
net.ipv4.ip_forward = 1
```

## 11.10 链路聚合

```
nmcli connection add con-name bond0 ifname bond0 type bond mode active-backup
nmcli connection add con-name bond0-port1 ifname ens4 type bond-slave master bond0
nmcli connection add con-name bond0-port2 ifname ens5 type bond-slave master bond0

```

```shell
[root@rehc9 ~]# nmcli connection add con-name bond0 ifname bond0 type bond mode active-backup
Connection 'bond0' (163f9865-a168-4cb7-9174-9d8041769930) successfully added.
```

![](../../Images/Pasted%20image%2020231023203253.png)


![](../../Images/Pasted%20image%2020231023204517.png)


![](../../Images/Pasted%20image%2020231023204756.png)
```shell
[root@rehc9 ~]# cat /proc/net/bonding/bond0
Ethernet Channel Bonding Driver: v5.14.0-284.30.1.el9_2.x86_64

Bonding Mode: fault-tolerance (active-backup)
Primary Slave: None
Currently Active Slave: ens224
MII Status: up
MII Polling Interval (ms): 100
Up Delay (ms): 0
Down Delay (ms): 0
Peer Notification Delay (ms): 0

Slave Interface: ens224
MII Status: up
Speed: 10000 Mbps
Duplex: full
Link Failure Count: 0
Permanent HW addr: 00:0c:29:51:e8:3b
Slave queue ID: 0

Slave Interface: ens256
MII Status: up
Speed: 10000 Mbps
Duplex: full
Link Failure Count: 0
Permanent HW addr: 00:0c:29:51:e8:45
Slave queue ID: 0
[root@rehc9 ~]#
```

![](../../Images/Pasted%20image%2020231023211527.png)
# 十二 加密算法
## 介绍

```
加密算法分为对称加密算法和非对称加密算法两类
对称加密算法又叫做私钥算法
非对称加密算法又叫做公钥算法
无论何种加密算法都分为加密和解密两个过程
无论何种加密算法，在加密和解密的时候都需要密钥 (算法的产物)
无论是私钥算法还是公钥算法都有优缺点，一般都是结合两种算法使用
```
## 12.1 对称加密算法--私钥算法

```
对称加密算法很简单：通过算法生成一个密钥，加密数据和解密数据都是用该密钥之所以对称加密算法叫做私钥算法是因为唯一的密钥必须要保持私密性，即不能被任何第三者获取到

DES (Data Encryption Standard)
DES加密共有三种形式，分为DES (40-bit长度加密)，DES (56-bit长度加密)以及3DES (3倍的56bit长度加密，即168-bit长度加密);由于3DES加密长度够长，安全性够高，所以推荐使用3DES

AES(Advanced Encryption Standard)
AES加密共有三种形式，分为AES 128 (128-bit长度加密)AES 192(192-bit长度加密)以及AES256 (256-bit长度加密);由于AES 256密长度够长，安全性够高，所以推荐使用AES 256

除上述算法外还有CAST、IDEA、RC-4、RC-6、Skipjack
CAST:类似于DES，使用的是128位或256位的密钥结构，它不如3DES安全，但是更快
IDEA (内部加密算法):由瑞士联邦物理工学开发，使用128位的密钥结构。它在安全性方面介于CAST和3DES之间，但是速度不是最快的
RC-6和RC-4:由RSA实验室开发，它支持可变长的密钥，最大可以到2040位(RC-6)，RC-4支持40位和128位的密钥，RC-4在软件和硬件加密/解密方面比3DES更快，但是不如3DES安全
Skipjack:由美国国家安全局开发(NSA)，使用80位的密钥结构
```

## 12.2 非对称加密算法-公钥算法

```
非对称加密算法通过算法生成一对密钥，一个是公钥，一个是私钥，公钥加密数据只能被成对的私钥解开，私钥加密数据只能用成对的公钥解开，使用公钥加密和私钥加密数据对应不同的应用场景之所以非对称加密算法叫做公钥算法，原因是一对密钥中的公钥是可以共享出去的
RSA算法
RSA公钥加密算法的名字是发明者的人名: Rivest,Shamir and Adleman，该算法的长度位数不定，由人手工定义
```
## 12.3 HMAC哈希算法（防篡改）

```
每个数据包都会在后面写上一个对数据计算后的校验和(Checksum如果发现自己计算的校验和与数据包附带的校验和不同，便认为数据发生了偏移或错误，因此将数据包丢弃或要求重传

Hash算法的特征在于任何大小的数据计算出的Hash值的长度都是一样的
Hash多用于认证，认证对等体双方在相互认证时，只需要交换密码的Hash值即可

目前Hash算法有:
MD5 (Message Digest 5)
将任何数据通过计算后输出128-bit长度的Hash值
SHA-1 (Secure Hash Algorithm 1)
将任何数据通过计算后输出160-bit长度的Hash值
SHA-1拥有着比MD5更高的安全性
SHA256
SHA512
```

```shell
[shuaiqijun@localhost ~]$ md5sum test
700962a349b641c86198ce6a3f5e0a8c  test
```

```shell
[shuaiqijun@localhost ~]$ sha512sum test
83bc2d8ca36ffb8fb0f95b6718bfc3e55144fbec37efaf05ece6d376ad0090008c3e3ab201d13b3459fe7e05d3791ca
```

## 12.4 数字签名

![](../../Images/Pasted%20image%2020231024150858.png)
# 十三 SSH
## 13.1 修改Linux主机名

```shell
[shuaiqijun@localhost ~]$ hostnamectl set-hostname KMS-SERVER
```

## 13.2 ssh基本格式

```
ssh username@address:port
username表示要远程登录的用户
address表示远程登录的主机
port表示ssh端口号

退出exit
```

```shell
[shuaiqijun@localhost ~]$ ssh root@10.100.10.133
The authenticity of host '10.100.10.133 (10.100.10.133)' can't be established.
ED25519 key fingerprint is SHA256:QCHq5I3pYg1sYcBciJ9ShV2/24P88sOWfqQT9LzMBNM.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
## 13.3 ssh配置目录
```shell
[shuaiqijun@localhost ssh]$ ls
moduli        sshd_config         ssh_host_ecdsa_key.pub    ssh_host_rsa_key
ssh_config    sshd_config.d       ssh_host_ed25519_key      ssh_host_rsa_key.pub
ssh_config.d  ssh_host_ecdsa_key  ssh_host_ed25519_key.pub

默认ssh服务器有3对非对称加密密钥
第一对
ssh_host_ecdsa_key 
ssh_host_ecdsa_key.pub

第二对
ssh_host_rsa_key
ssh_host_rsa_key.pub

第三对
ssh_host_ed25519_key
ssh_host_ed25519_key.pub

服务端是为了适配不同种类的客户端所以有多种非对称加密的密钥

sshd_config是ssh服务端的配置文件
ssh_config是ssh客户端的配置文件

一般Linux系统都是自带服务端和客户端，windows默认不带客户端
```

## 13.4 服务器指纹

```shell
[shuaiqijun@localhost ssh]$ ssh root@10.100.10.133
The authenticity of host '10.100.10.133 (10.100.10.133)' can't be established.
ED25519 key fingerprint is SHA256:QCHq5I3pYg1sYcBciJ9ShV2/24P88sOWfqQT9LzMBNM.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

```shell
服务器指纹
[root@KMS-SERVER ssh]# ssh-keygen -lf ssh_host_ed25519_key
256 SHA256:QCHq5I3pYg1sYcBciJ9ShV2/24P88sOWfqQT9LzMBNM ssh_host_ed25519_key.pub (ED25519)
```

```shell
指定服务器指纹格式
[root@KMS-SERVER ssh]# ssh-keygen -lf ssh_host_ed25519_key -E MD5
256 MD5:4c:fb:28:38:ec:cc:1c:79:f8:88:ee:fa:70:64:3b:e1 ssh_host_ed25519_key.pub (ED25519)
[root@KMS-SERVER ssh]# ssh-keygen -lf ssh_host_ed25519_key -E sha256
256 SHA256:QCHq5I3pYg1sYcBciJ9ShV2/24P88sOWfqQT9LzMBNM ssh_host_ed25519_key.pub (ED25519)
```

```shell
家目录下的.ssh目录下有已知ssh服务端的公钥，如果记录了，就不再检查了指纹了
[shuaiqijun@localhost .ssh]$ pwd
/home/shuaiqijun/.ssh
[shuaiqijun@localhost .ssh]$ cat known_hosts
10.100.10.133 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFj25CmaYhksWAP0GW/izn+O8pd/E5Fpq8ViSSbk8bsp
10.100.10.133 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDN7BiKJFMAw1UU+dJv/VXK857CU2e0XzHVSOIQfSc2FyTqA8yBmlEkEgH9JNFHkem2Nx0/U/kLSzLH8LYUj6GPjJUmmyAYJ8Lr2Q6WOorRdePPWmNCFK3brh0deYNNrLOzGwoPSB9+vRIQ3jrSaA/equCJ6tXsnxpSDsjjbG6kWm/MqYOLjlBddB9yqBDwkg+gctP1wvaO/kz/+ZyRE3hihdaH+h2xThz/7QRW0CWvtsdXK9tRSjAqBbnaNMwuSAeREKfJAFaNcEEksT2e/YyxDTjyG+ZKGUi34YMvxWCglFHghZU/j4tPkgMCeh2fgzZO61pAM14IKssi2YD00qw12HxOx9lS9ad9kV7c1fCYBn3eaHY0phAtIab2/gOjlpPshttXPgNbkRYvCg26RJGH2PQl/+I3RBl9/XW31HlnbVWYPhuNgkkA5uUhgDYmEqAo+mFbHc+0tcI8cfXjpOZqyp7vVJWbfewGZs1ope1aStMGw3g0lguNZqeIPQkVxjU=
10.100.10.133 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBBcMWNYfYXmR1K0evug9pRflbVXo5ouMNU/kFm/foM9WDy4on92N0EeLlmmVpnaHw2KapU/zbR1uGTiD/eUTiD0=
[shuaiqijun@localhost .ssh]$
```

## 13.5 ssh服务端配置文件说明

```
[root@localhost ~]# cat /etc/ssh/sshd_config
#       $OpenBSD: sshd_config,v 1.104 2021/07/02 05:11:21 dtucker Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

# To modify the system-wide sshd configuration, create a  *.conf  file under
#  /etc/ssh/sshd_config.d/  which will be automatically included below
Include /etc/ssh/sshd_config.d/*.conf

# If you want to change the port on a SELinux system, you have to tell
# SELinux about this change.
# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
#
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m

#PermitRootLogin prohibit-password
# 设置是否允许root密码登录，yes支持，no不支持

#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes
# 该参数如果是yes就表示支持基于公钥的认证方式登录，no表示不支持

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile      .ssh/authorized_keys
# 开启公钥认证方式登录，服务端公钥存放的位置


#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
#PasswordAuthentication yes
#PermitEmptyPasswords no

# Change to no to disable s/key passwords
#KbdInteractiveAuthentication yes

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no
#KerberosUseKuserok yes

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no
#GSSAPIEnablek5users no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the KbdInteractiveAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via KbdInteractiveAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and KbdInteractiveAuthentication to 'no'.
# WARNING: 'UsePAM no' is not supported in RHEL and may cause several
# problems.
#UsePAM no

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
#X11Forwarding no
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
#PrintMotd yes
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# override default of no subsystems
Subsystem       sftp    /usr/libexec/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       X11Forwarding no
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server

```

```
修改ssh端口号之后重启前的操作
setenforce 0
systemctl restart firewalld
systemctl restart sshd
```


```shell
[root@rehc9 ~]# cat /var/log/secure
该文件记录了ssh登录的log
```

## 13.6 基于公钥的认证方式

```shell
1.第一步就是要将客户端的公钥传送到服务端

在客户端通过ssh-keygen命令生成非对称加密秘钥
[root@rehc9 ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):  私钥
Enter passphrase (empty for no passphrase):私钥的密码，可以设置为空
Enter same passphrase again:重新输入私钥的密码
Your identification has been saved in /root/.ssh/id_rsa
Your public key has been saved in /root/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:jcnolTwpOvvghaTBo6cHHzMdx8JOnKhxiO1YPSr56A4 root@rehc9 指纹
The key's randomart image is:
+---[RSA 3072]----+
|                 |
|                 |
|.o = o           |
|+.= X o+ *       |
| O+=.=o S .      |
|*.*=o+ o .       |
|E*o+= o          |
|oo+. =           |
|++  o..          |
+----[SHA256]-----+
```

```shell
传到服务器的哪里呢？
AuthorizedKeysFile      .ssh/authorized_keys
# 开启公钥认证方式登录，服务户端公钥存放的位置


2.客户端访问服务端采用公钥的认证方式

[root@rehc9 .ssh]# ssh -o StrictHostKeyChecking=no 192.168.50.60
Activate the web console with: systemctl enable --now cockpit.socket

Last failed login: Tue Oct 24 19:31:42 CST 2023 from 192.168.50.60 on ssh:notty
There were 2 failed login attempts since the last successful login.
Last login: Tue Oct 24 19:29:42 2023 from 192.168.50.62
[root@localhost ~]# ip add
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:f9:41:2e brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.50.60/24 brd 192.168.50.255 scope global noprefixroute ens160
       valid_lft forever preferred_lft forever
    inet6 fe80::20c:29ff:fef9:412e/64 scope link noprefixroute
       valid_lft forever preferred_lft forever

客户端只有将公钥传到服务端里用户的家目录.ssh目录里才能实现该用户的免密登录
```

# 十四 RHEL软件包管理

## 14.1 软件包管理的地位

```
软件包的管理在企业中是非常重要的，因为对于企业来说，可能需要频繁的安装软件，升级软件。
```

```
linux安装软件，正确的渠道是从软件的官网下载软件包安装
```

```
linux的软件包管理，因为linux的操作对象基本上都是专业人员，，所以我们再linux上进行软件安装，可以选择源码包的安装方式或者二进制的方式安装

源码包安装软件的好处就在于你可以更改源码，改成合适你的环境，另外一个源码包安装的好处就是源码包相比于现有的编译好的二进制包更新，功能更多
```

```
我们的课程内容讲的是Linux的二进制包的安装方法

我们的Linux分为多个发行版本，不同的发型版本对于软件包的管理命令或者管理方式是不同的。但是本质上几乎都是管理二进制的软件包。

Linux所有发行版本里面最流行的三个:
RHEL，Cent0S，Fedora: 二进制包后缀名是以rpm结尾
openSUSE，SELS: 二进制包的后缀名是以rpm结尾
Debian，Ubuntu: 二进制包的后缀名是以deb结尾

RHEL能安装deb结尾的二进制包吗?
Ubntu能安装rpm结尾的二进制包吗?

本质上只要软件包的架构和cpu架构匹配就可以安装，而且都是二进制包。唯一不一样的就是可能需要额外安装匹配的软件包管理工具。
```

## 14.2 学会看RPM包

```
当第一眼看见rpm包的时候就应该能了解到一些表面的信息

我们的系统安装光盘就能看到rpm包

xfsprogs-4.19.0-2.el8.i686.rpm
xfsprogs-4.19.0-2.el8.x86_64.rpm
xfsprogs-devel-4.19.0-2.el8.i686.rpm
xfsprogs-devel-4.19.0-2.el8.x86_64.rpm

我们通过rpm包的名字来了解这个软件包的一些基础信息

一般来说软件的名字就是第一个字段，第二个字段表示版本号，版本号之前的，全是软件包的名字

我们判断软件包的名字，是从版本号往前推算的

所以看rpm包，先看版本号，再看名字

一般来说xfsprogs是rpm的主包（主要包），一定要安装，像xfsprogs-devel就是rpm的辅助包，辅助包要不要安装取决于主包是否依赖于辅助包，如果依赖，那么如果想安装主包，就一定要安装辅助包，对于没有依赖的辅助包，可以选择安装

版本号后面的数字代表软件包的发行次数

发行次数后面的".el8"就表示该rpm包适用于哪个操作系统平台
noarch就表示适用于任何cpu架构，基本上其他的linux发行版本也能装上
```

## 14.3 rpm包的软件管理
```shell
1.rpm包的安装
[root@localhost ~]# mkdir /iso
[root@localhost ~]# ls -l /dev/sr0
brw-rw----. 1 root cdrom 11, 0 Oct 25 10:33 /dev/sr0
[root@localhost ~]# mount /dev/sr0 /iso
mount: /iso: WARNING: source write-protected, mounted read-only.
[root@localhost ~]# ls -lh /iso/
total 44K
drwxr-xr-x. 1 2001  987 2.0K Apr 14  2023 AppStream
drwxr-xr-x. 1 2001  987 2.0K Apr 14  2023 BaseOS
drwxrwxr-x. 1 root root 2.0K Apr 14  2023 EFI
-rw-r--r--. 1 2001  987 8.0K Apr 14  2023 EULA
-rw-r--r--. 1 2001  987 1.5K Apr 14  2023 extra_files.json
-rw-r--r--. 1 2001  987  18K Apr 14  2023 GPL
drwxrwxr-x. 1 root root 2.0K Apr 14  2023 images
drwxrwxr-x. 1 root root 2.0K Apr 14  2023 isolinux
-rw-r--r--. 1 2001  987  103 Apr 14  2023 media.repo
-rw-r--r--. 1 2001  987 1.7K Apr 14  2023 RPM-GPG-KEY-redhat-beta
-rw-r--r--. 1 2001  987 3.6K Apr 14  2023 RPM-GPG-KEY-redhat-release
[root@localhost ~]# cd /iso/BaseOS/Packages
[root@localhost Packages]# ls /iso/BaseOS/Packages | wc -l
1155

使用光盘自带的RPM包学习安装
[root@localhost Packages]# rpm -ivh xz-5.2.5-8.el9_0.x86_64.rpm
rpm命令
-i 参数表示install安装
-v 参数表示安装时显示详细信息
-h 参数表示显示安装进度

2.rpm包的卸载
[root@localhost Packages]# rpm -evh xz
error: Failed dependencies:
        xz is needed by (installed) dracut-057-21.git20230214.el9.x86_64

rpm命令
-e 参数表示卸载
-v 参数表示卸载时显示详细信息
-h 参数表示显示卸载进度

rpm包时有依赖性的，安装的依赖性：

树状依赖：
装A软件需要B软件，装B软件需要C软件
装C->装B->装A

环形依赖：
装A需要B，装B需要C，装C需要A
ABC一起装，就可以解决环形依赖

模块依赖：
装A软件，需要B软件里面的某个模块或函数，或函数库lib

卸载依赖：
装A软件需要B软件，装B软件需要C软件
装C->装B->装A
如果卸载C软件，会失败，它会提示你B软件需要C软件，所以C不能被卸载
为了解决依赖性这个问题，我们有自动解决依赖的包管理工具
yum (yellow dog update manager)


3.rpm包的信息
-q表示query查询
-i表示information
-p表示package
rpm -qi 包名 查看已安装的rpm包信息
rpm -qpi 包全名 能查看未安装的rpm包信息
rpm -qa 列出所有安装在系统里rpm包
rpm -qa | grep name 筛选

[root@localhost Packages]# rpm -qi xz
Name        : xz
Version     : 5.2.5
Release     : 8.el9_0
Architecture: x86_64
Install Date: Wed 18 Oct 2023 09:20:09 AM CST
Group       : Unspecified
Size        : 685931
License     : GPLv2+ and Public Domain
Signature   : RSA/SHA256, Mon 06 Jun 2022 04:11:32 PM CST, Key ID 199e2f91fd431d51
Source RPM  : xz-5.2.5-8.el9_0.src.rpm
Build Date  : Tue 31 May 2022 10:30:59 PM CST
Build Host  : x86-64-02.build.eng.rdu2.redhat.com
Packager    : Red Hat, Inc. <http://bugzilla.redhat.com/bugzilla>
Vendor      : Red Hat, Inc.
URL         : https://tukaani.org/xz/
Summary     : LZMA compression utilities
Description :
XZ Utils are an attempt to make LZMA compression easy to use on free (as in
freedom) operating systems. This is achieved by providing tools and libraries
which are similar to use than the equivalents of the most popular existing
compression algorithms.

LZMA is a general purpose compression algorithm designed by Igor Pavlov as
part of 7-Zip. It provides high compression ratio while keeping the
decompression speed fast.
```

```shell
rpm -ql 包名 | grep bin
[root@localhost Packages]# rpm -ql net-tools | grep bin
/usr/bin/netstat
/usr/sbin/arp
/usr/sbin/ether-wake
/usr/sbin/ifconfig
/usr/sbin/ipmaddr
/usr/sbin/iptunnel
/usr/sbin/mii-diag
/usr/sbin/mii-tool
/usr/sbin/nameif
/usr/sbin/plipconfig
/usr/sbin/route
/usr/sbin/slattach

[root@localhost Packages]# rpm -qf /bin/rm
coreutils-8.32-34.el9.x86_64

```

## 14.4 yum rpm包管理工具

```
yum是一个工具，可以理解成是一个数据库客户端工具
yum的底层仍然是rpm，yum的诞生就是为了解决rpm的依赖关系

库概念(repository->repo)
如何提高库的查找效率？
所谓的软件仓库，包含俩个部分，第一个部分就是所有的软件包(rpm)，第二部分指的就是所有软件包的元数据
元数据相当于所有软件包的名字和所有软件包的依赖关系，元数据文件远远小于整个仓库的文件大小

yum就是访问软件仓库的元数据，进而根据元数据里面的记录自动解决软件包的依赖关系
```

## 14.5 yum仓库的搭建

```
yum并没有从0创建一个仓库的能力，仓库的本质就是rpm包+repodata元数据，必须有它们yum才能所谓的搭建一个软件仓库

条件1：rpm包
条件2：repodata
光盘里自带了rpm包和repodata，所以我们可以通过光盘搭建软件仓库，所谓的搭建软件仓库就是repodata放到一个位置，然后yum指定repodata的路径

yum的配置文件是/etc/yum.conf
yum的仓库文件所在目录是在/etc/yum.repos.d/
该目录是存放仓库文件的，仓库文件就是指向repodata所在路径的文件，仓库文件必须以.repo结尾
```

```shell
yum repolist查看yum仓库
[root@localhost yum.repos.d]# yum repolist
Updating Subscription Management repositories.
repo id                                   repo name
redhat                                    shuaiqijun's repo
rhel-9-for-x86_64-appstream-rpms          Red Hat Enterprise Linux 9 for x86_64 - AppStream (RPMs)
rhel-9-for-x86_64-baseos-rpms             Red Hat Enterprise Linux 9 for x86_64 - BaseOS (RPMs)
```

```shell
yum list查看所有软件包，并创建缓存
[root@localhost yum.repos.d]# yum list
```

```
yum search 关键字
搜索关键字的rpm，yum不指定仓库的情况下就是搜索所有仓库
```

```
搜索哪个rpm包提供rm命令
yum provides rm
```

```
安装
yum install 包名
卸载
yum remove 包名
```

```shell
[root@localhost repodata]# yum -y install yum-utils
[root@localhost repodata]# [root@localhost ~]# yum-config-manager --add-repo=https://mirrors-i.tuna.tsinghua.edu.cn/epel/9/Everything/x86_64/
Updating Subscription Management repositories.
Adding repo from: https://mirrors-i.tuna.tsinghua.edu.cn/epel/9/Everything/x86_64/
```

![](../../Images/Pasted%20image%2020231025161837.png)

```shell
rhel系统虽然能链接Internet上的软件仓库，但是安装会有问题
rhel系统还是推荐使用订阅命令去链接redhat官方的软件仓库
EPEL fedora的源

订阅命令：
[root@localhost repodata]# subscription-manager -h
Usage: subscription-manager MODULE-NAME [MODULE-OPTIONS] [--help]

Primary Modules:

  attach         Attach a specified subscription to the registered system, when system does not use Simple
                 Content Access mode
  list           List subscription and product information for this system
  refresh        Pull the latest subscription data from the server
  register       Register this system to the Customer Portal or another subscription management service
  release        Configure which operating system release to use
  remove         Remove all or specific subscriptions from this system
  status         Show status information for this system's subscriptions and products
  unregister     Unregister this system from the Customer Portal or another subscription management service

Other Modules:

  addons         Deprecated, see 'syspurpose'
  auto-attach    Set if subscriptions are attached on a schedule (default of daily)
  clean          Remove all local system and subscription data without affecting the server
  config         List, set, or remove the configuration parameters in use by this system
  environments   Display the environments available for a user
  facts          View or update the detected system information
  identity       Display the identity certificate for this system or request a new one
  import         Import certificates which were provided outside of the tool
  orgs           Display the organizations against which a user can register a system
  plugins        View and configure with 'subscription-manager plugins'
  redeem         Attempt to redeem a subscription for a preconfigured system
  repo-override  Manage custom content repository settings
  repos          List the repositories which this system is entitled to use
  role           Deprecated, see 'syspurpose'
  service-level  Deprecated, see 'syspurpose'
  syspurpose     Convenient module for managing all system purpose settings
  usage          Deprecated, see 'syspurpose'
  version        Print version information
```

## 14.6 局域网仓库的必要性

```shell
仓库同步
[root@localhost ~]# reposync --repo redhat -p /openstack-train/
--repo指的是repo的名称
-p 同步的路径

[root@localhost ~]# yum -y install createrepo
添加元数据
[root@localhost redhat]# createrepo -v /openstack-train/redhat
```

## 14.7 安装teamviewer

```shell
下载
[root@localhost ~]# wget https://download.teamviewer.com/download/linux/teamviewer-host.x86_64.rpm

添加远程仓库
[root@localhost ~]# yum-config-manager --add-repo=https://mirrors-i.tuna.tsinghua.edu.cn/epel/9/Everything/x86_64/

安装
[root@localhost ~]# yum install teamviewer-host.x86_64.rpm
```

```shell
yum history用法
[root@localhost ~]# history undo 3
撤销yum history id为3的操作
```

![](../../Images/Pasted%20image%2020231025170620.png)

## 14.8 安装vnc server

```shell
[root@localhost ~]# dnf -y install tigervnc-server

查看tigervnc安装的软件
[root@localhost ~]# rpm -ql tigervnc-server
/etc/pam.d/tigervnc
/etc/tigervnc/vncserver-config-defaults
/etc/tigervnc/vncserver-config-mandatory
/etc/tigervnc/vncserver.users
/usr/bin/vncserver
/usr/bin/x0vncserver
/usr/lib/.build-id
/usr/lib/.build-id/57
/usr/lib/.build-id/57/db332ebc8b108314c4a0250fdadd4116a9f01c
/usr/lib/.build-id/ec
/usr/lib/.build-id/ec/a569a6375fd238f7551388fa19dbe0e17f8a18
/usr/lib/systemd/system/vncserver@.service  #vnc配置文件
/usr/lib/systemd/system/xvnc.socket
/usr/lib/systemd/system/xvnc@.service
/usr/libexec/vncserver
/usr/libexec/vncsession-restore
/usr/libexec/vncsession-start
/usr/sbin/vncsession
/usr/share/doc/tigervnc/HOWTO.md
/usr/share/man/man1/x0vncserver.1.gz
/usr/share/man/man8/vncserver.8.gz
/usr/share/man/man8/vncsession.8.gz
[root@localhost ~]# vncserver --help

```

## 14.9 dhcp server配置

### 14.9.1.安装

```
dnf -y install dhcp-server
```

### 14.9.2.查看配置文件模板

```
vim /usr/share/doc/dhcp-server/dhcpd.conf.example
```

### 14.9.3.配置dhcp配置文件

```
cp /usr/share/doc/dhcp-server/dhcpd.conf.example /etc/dhcp/dhcpd.conf

详细配置信息：
subnet 10.10.10.0 netmask 255.255.255.0 {
  range 10.10.10.100 10.10.10.254;
  option domain-name-servers 202.103.24.68;
  option routers 10.10.10.1;
  option broadcast-address 10.10.10.255;
  default-lease-time 600;
  max-lease-time 7200;
}

```

### 14.9.4.重启dhcp服务

```
systemctl restart dhcpd
```

### 14.9.5.查看DHCP客户端

```shell
[root@rehc9 ~]# cat /var/lib/dhcpd/dhcpd.leases
# The format of this file is documented in the dhcpd.leases(5) manual page.
# This lease file was written by isc-dhcp-4.4.2b1

# authoring-byte-order entry is generated, DO NOT DELETE
authoring-byte-order little-endian;

server-duid "\000\001\000\001,\313\315\245\000\014)Q\350;";

lease 10.10.10.100 {
  starts 3 2023/10/25 13:07:32;
  ends 3 2023/10/25 13:17:32;
  cltt 3 2023/10/25 13:07:32;
  binding state active;
  next binding state free;
  rewind binding state free;
  hardware ethernet 00:0c:29:f9:41:38;
  uid "\001\000\014)\371A8";
}
```

## 14.10 tftp服务器配置

### 14.10.1.安装tftp-server软件

```shell
[root@rehc9 ~]# dnf -y install tftp-server
[root@rehc9 ~]# rpm -ql tftp-server
/usr/lib/.build-id
/usr/lib/.build-id/32
/usr/lib/.build-id/32/c3fb56f8deb860fe606834661cdac608ba2cdb
/usr/lib/systemd/system/tftp.service
/usr/lib/systemd/system/tftp.socket
/usr/sbin/in.tftpd
/usr/share/doc/tftp-server
/usr/share/doc/tftp-server/CHANGES
/usr/share/doc/tftp-server/README
/usr/share/doc/tftp-server/README.security
/usr/share/man/man8/in.tftpd.8.gz
/usr/share/man/man8/tftpd.8.gz
/var/lib/tftpboot
```

### 14.10.2.启动tftp-server

```
[root@rehc9 ~]# systemctl start tftp
[root@rehc9 ~]# systemctl enable tftp --now
```

### 14.10.3.安装syslinux并将pxeLinux.0拷贝至/var/lib/tftpboot/文件夹下

```
[root@rehc9 share]# dnf -y install syslinux
[root@rehc9 share]# cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/
```

### 14.10.4.更改dhcp-server配置

```shell
[root@rehc9 ~]# vim /etc/dhcp/dhcpd.conf
subnet 10.10.10.0 netmask 255.255.255.0 {
  range 10.10.10.101 10.10.10.254;
  option domain-name-servers 202.103.24.68;
  option routers 10.10.10.1;
  option broadcast-address 10.10.10.255;
  next-server 10.10.10.1;
  filename "pxelinux.0";
  default-lease-time 60000;
  max-lease-time 720000;
}
```

### 14.10.5.重启dhcp服务

```shell
[root@rehc9 ~]# systemctl restart dhcpd
```

### 14.10.6.创建/var/lib/tftpboot/pxelinux.cfg目录
```
[root@rehc9 tftpboot]# mkdir /var/lib/tftpboot/pxelinux.cfg
该目录是pxe客户端在执行完pxelinux.0后会自动请求的一个目录，会请求该目录下的boot menu
```

### 14.10.7.拷贝ldlinux.c32到tftpboot
```
[root@rehc9 ~]# cp /usr/share/syslinux/ldlinux.c32 /var/lib/tftpboot
```

```
[root@rehc9 tftpboot]# cp -rf /usr/share/syslinux/* /var/lib/tftpboot/
```

# 十五 防火墙
## 15.1 防护墙介绍
```
防火墙的分类：

从物理层面上来讲防护墙分物理防火墙和软件防火墙

主机防火墙：针对单个主机进行防护（软件防火墙）
网络防火墙：往往处于网络的分界点，防护内网之外的攻击（硬件防火墙）

Linux本身是不具备防火墙功能的，由Linux内核管控着所有的网络流量
Linux的防火墙功能是通过内核net_filter模块提供的，只要内核有这个模块，那么就有防火墙功能
```
## 15.2 iptables
### 15.2.1 iptables介绍和基础操作

```
iptables是一个客户端，该客户端直接和内核空间的net_filter交互，告诉net_filter什么样的流量放行，什么样的流量阻塞
iptables将用户的命令转换成对应的net_filter里面的过滤规则
```

### 15.2.2  查看iptables的表
```shell
[root@client ~]# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination

iptables -L能产input、output、forward三个规则的链

[root@server ~]# iptables -L -t nat
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination

Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination

iptables -L -t nat能看到prerouting和postrouting

```
### 15.2.3 实例
#### 清空当前的所有规则
```
iptables -F # 清空所有的防火墙规则 
iptables -X # 删除用户自定义的空链 
iptables -Z # 清空计数
```
#### 配置允许ssh端口连接
```shell
iptables -A INPUT -s 192.168.1.0/24 -p tcp --dport 22 -j ACCEPT 
# -A表示添加，INPUT表示添加到的位置，-s 表示源，192.168.1.0/24表示允许这个网段的机器来连接，其它网段的ip地址是登陆不了你的机器的，-p 表示协议，--dport表示目的端口，22表示本机目的端口为22（ssh默认端口）， -j表示动作，ACCEPT表示接受这样的请求

添加
[root@server ~]# iptables -A INPUT -s 10.100.10.136 -p tcp --dport 22 -j REJECT
删除
[root@server ~]# iptables -D INPUT -s 10.100.10.136 -p tcp --dport 22 -j REJECT
```

#### 设置默认规则
```shell
iptables -P INPUT DROP # 配置默认的不让进 
iptables -P FORWARD DROP # 默认的不允许转发 
iptables -P OUTPUT ACCEPT # 默认的可以出去

一般iptables是不会针对output和forward流量进行控制
```

## 15.3 firewalld
### 15.3.1 firewalld介绍
```
firewalld是一个服务，这个服务提供了防火墙的配置工具
NetworkManager是一个服务，这个服务通过了网络配置的工具
只要开启了firewalld服务，那么就可以通过firewalld服务提供的工具来配置防火墙
Linux本身不具备防火墙功能，而是通过内核的net_filter模块来实现软防火墙功能，而且你必须要通过iptables才能和net_filter进行交互
```
### 15.3.2 firewalld命令行工具
```shell
firewall-cmd是firewalld的字符界面管理工具，firewalld最大的好处有两个：支持动态更新，不用重启服务；第二个就是加入了防火墙的“zone”概念。
firewalld跟iptables比起来至少有两大好处：
1. firewalld可以动态修改单条规则，而不需要像iptables那样，在修改了规则后必须得全部刷新才可以生效。
2. firewalld在使用上要比iptables人性化很多，即使不明白“五张表五条链”而且对TCP/IP协议也不理解也可以实现大部分功能。
firewalld自身并不具备防火墙的功能，而是和iptables一样需要通过内核的netfilter来实现，也就是说firewalld和 iptables一样，他们的作用都是用于维护规则，而真正使用规则干活的是内核的netfilter，只不过firewalld和iptables的结 构以及使用方法不一样罢了。

[root@server ~]# firewall-cmd --add-service=http
```

```shell
firewalld提供了zone的概念，zone是区域的意思，firewalld将我们的系统划分到一个个zone里，zone的边界取决于网卡，一个网卡只能属于一个zone，zone边界就是属于该网卡
firewalld的zone里面有网卡，有规则（rule），如果一个网卡属于firewalld的一个zone里面，那么这个zone里面的所有规则都会应用到该zone里面的所有网卡

查看zone
[root@server ~]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens160 ens192
  sources:
  services: cockpit dhcpv6-client http ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
[root@server ~]# firewall-cmd --list-all-zones
block
  target: %%REJECT%%
  icmp-block-inversion: no
  interfaces:
  sources:
  services:
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

dmz
  target: default
  icmp-block-inversion: no
  interfaces:
  sources:
  services: ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

drop
  target: DROP
  icmp-block-inversion: no
  interfaces:
  sources:
  services:
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

external
  target: default
  icmp-block-inversion: no
  interfaces:
  sources:
  services: ssh
  ports:
  protocols:
  forward: yes
  masquerade: yes
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

home
  target: default
  icmp-block-inversion: no
  interfaces:
  sources:
  services: cockpit dhcpv6-client mdns samba-client ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

internal
  target: default
  icmp-block-inversion: no
  interfaces:
  sources:
  services: cockpit dhcpv6-client mdns samba-client ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

nm-shared
  target: ACCEPT
  icmp-block-inversion: no
  interfaces:
  sources:
  services: dhcp dns ssh
  ports:
  protocols: icmp ipv6-icmp
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
        rule priority="32767" reject

public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens160 ens192
  sources:
  services: cockpit dhcpv6-client http ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

trusted
  target: ACCEPT
  icmp-block-inversion: no
  interfaces:
  sources:
  services:
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

work
  target: default
  icmp-block-inversion: no
  interfaces:
  sources:
  services: cockpit dhcpv6-client ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:

[root@server ~]#

```

```shell
[root@server ~]# firewall-cmd --list-interface
ens160 ens192
[root@server ~]# firewall-cmd --list-interface --zone=public
[root@server ~]# firewall-cmd --remove-interface=ens160
success
[root@server ~]# firewall-cmd --add-interface=ens160
success
```

### 15.3.3 firewalld规则rule
#### 15.3.3.1 查看所有规则
```shell
[root@server ~]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens160 ens192
  sources:
  services: cockpit dhcpv6-client http ssh
  ports:
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
  
firewalld有3中规则：
第一种是service规则
第二种是port规则
第三种是rich rule（富规则）

如果你要放行的端口并没有在service规则的xml文件里面定义，那么service规则就无法满足你的条件

如果是复杂的流量的话，你需要通过port规则来放行流量
```

#### 15.3.3.2 添加service规则
```shell
[root@server ~]# firewall-cmd --add-service=https
```
#### 15.3.3.3 删除service规则
```shell
[root@server ~]# firewall-cmd --remove-service=http
```

```shell
[root@server ~]# ls /usr/lib/firewalld
helpers  icmptypes  ipsets  policies  services  zones
[root@server ~]# cd /usr/lib/firewalld/services
[root@server services]# ls
afp.xml                  jenkins.xml                         ptp.xml
amanda-client.xml        kadmin.xml                          pulseaudio.xml
amanda-k5-client.xml     kdeconnect.xml                      puppetmaster.xml
amqps.xml                kerberos.xml                        quassel.xml
amqp.xml                 kibana.xml                          radius.xml
apcupsd.xml              klogin.xml                          rdp.xml
audit.xml                kpasswd.xml                         redis-sentinel.xml
ausweisapp2.xml          kprop.xml                           redis.xml
bacula-client.xml        kshell.xml                          RH-Satellite-6-capsule.xml
bacula.xml               kube-apiserver.xml                  RH-Satellite-6.xml
bb.xml                   kube-api.xml                        rpc-bind.xml
bgp.xml                  kube-controller-manager-secure.xml  rquotad.xml
bitcoin-rpc.xml          kube-controller-manager.xml         rsh.xml
bitcoin-testnet-rpc.xml  kube-control-plane-secure.xml       rsyncd.xml
bitcoin-testnet.xml      kube-control-plane.xml              rtsp.xml
bitcoin.xml              kubelet-readonly.xml                salt-master.xml
bittorrent-lsd.xml       kubelet-worker.xml                  samba-client.xml
ceph-mon.xml             kubelet.xml                         samba-dc.xml
ceph.xml                 kube-nodeport-services.xml          samba.xml
cfengine.xml             kube-scheduler-secure.xml           sane.xml
checkmk-agent.xml        kube-scheduler.xml                  sips.xml
cockpit.xml              kube-worker.xml                     sip.xml
collectd.xml             ldaps.xml                           slp.xml
condor-collector.xml     ldap.xml                            smtp-submission.xml
cratedb.xml              libvirt-tls.xml                     smtps.xml
ctdb.xml                 libvirt.xml                         smtp.xml
dhcpv6-client.xml        lightning-network.xml               snmptls-trap.xml
dhcpv6.xml               llmnr-tcp.xml                       snmptls.xml
dhcp.xml                 llmnr-udp.xml                       snmptrap.xml
distcc.xml               llmnr.xml                           snmp.xml
dns-over-tls.xml         managesieve.xml                     spideroak-lansync.xml
dns.xml                  matrix.xml                          spotify-sync.xml
docker-registry.xml      mdns.xml                            squid.xml
docker-swarm.xml         memcache.xml                        ssdp.xml
dropbox-lansync.xml      minidlna.xml                        ssh.xml
elasticsearch.xml        mongodb.xml                         steam-streaming.xml
etcd-client.xml          mosh.xml                            svdrp.xml
etcd-server.xml          mountd.xml                          svn.xml
finger.xml               mqtt-tls.xml                        syncthing-gui.xml
foreman-proxy.xml        mqtt.xml                            syncthing.xml
foreman.xml              mssql.xml                           synergy.xml
freeipa-4.xml            ms-wbt.xml                          syslog-tls.xml
freeipa-ldaps.xml        murmur.xml                          syslog.xml
freeipa-ldap.xml         mysql.xml                           telnet.xml
freeipa-replication.xml  nbd.xml                             tentacle.xml
freeipa-trust.xml        netbios-ns.xml                      tftp.xml
ftp.xml                  netdata-dashboard.xml               tile38.xml
galera.xml               nfs3.xml                            tinc.xml
ganglia-client.xml       nfs.xml                             tor-socks.xml
ganglia-master.xml       nmea-0183.xml                       transmission-client.xml
git.xml                  nrpe.xml                            upnp-client.xml
gpsd.xml                 ntp.xml                             vdsm.xml
grafana.xml              nut.xml                             vnc-server.xml
gre.xml                  openvpn.xml                         wbem-https.xml
high-availability.xml    ovirt-imageio.xml                   wbem-http.xml
http3.xml                ovirt-storageconsole.xml            wireguard.xml
https.xml                ovirt-vmconsole.xml                 ws-discovery-client.xml
http.xml                 plex.xml                            ws-discovery-tcp.xml
ident.xml                pmcd.xml                            ws-discovery-udp.xml
imaps.xml                pmproxy.xml                         ws-discovery.xml
imap.xml                 pmwebapis.xml                       wsmans.xml
ipfs.xml                 pmwebapi.xml                        wsman.xml
ipp-client.xml           pop3s.xml                           xdmcp.xml
ipp.xml                  pop3.xml                            xmpp-bosh.xml
ipsec.xml                postgresql.xml                      xmpp-client.xml
ircs.xml                 privoxy.xml                         xmpp-local.xml
irc.xml                  prometheus-node-exporter.xml        xmpp-server.xml
iscsi-target.xml         prometheus.xml                      zabbix-agent.xml
isns.xml                 proxy-dhcp.xml                      zabbix-server.xml
jellyfin.xml             ps3netsrv.xml                       zerotier.xml
```

#### 15.3.3.4 添加port规则
```shell
[root@server services]# firewall-cmd --add-port=8080/tcp
success
[root@server services]# firewall-cmd --add-port=8080/udp
success
```
#### 15.3.3.5 删除port规则
```shell
[root@server services]# firewall-cmd --remove-port=8080/udp
success
```

#### 15.3.3.6 增加rich rule规则
```shell
[root@server ~]# firewall-cmd --add-rich-rule="rule family=ipv4 source address=10.10.10.136 port port=8080 protocol=tcp reject"
success

[root@server ~]# firewall-cmd --add-rich-rule="rule family=ipv4 source address=10.100.10.136 service name=ssh reject"
success

上面做的规则都是临时的，如果要变成永久，添加参数 --permanent或[root@server ~]# firewall-cmd --runtime-to-permanent

如何确定是永久的呢？
用firewall-cmd --reload 再去查看如果规则还在就是永久的

```

```shell
[root@server ~]# firewall-cmd --list-all
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: ens160 ens192
  sources:
  services: cockpit dhcpv6-client http https ssh
  ports: 8080/tcp
  protocols:
  forward: yes
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
        rule family="ipv4" source address="10.100.10.136" service name="ssh" reject
        rule family="ipv4" source address="10.10.10.136" port port="8080" protocol="tcp" reject
[root@server ~]#

        
[root@server ~]# firewall-cmd --list-rich
rule family="ipv4" source address="10.10.10.136" port port="8080" protocol="tcp" reject
```

### 15.3.4 规则立即生效

```shell
firewall-cmd --reload
```

## 15.4 SElinux
```

```

### 15.4.1 DAC和MAC
```
SELinux出现之前，Linux上的安全模型叫DAC，全称是Discretionary Access Control，翻译为自主访问控制。DAC的核心思想很简单，就是:进程理论上所拥有的权限与执行它的用户的权限相同。比如，以root用户启动进程，那么该进程就有root用户的权限，在Linux系统上能干任何事情;
MAC(Mandatory Access Control)，强制访问控制，即任何进程想在SELnux系统中于任何事情，都必须先在安全策略配3置文件中赋予权限。凡是没有出现在安全策略配置文件中的权限，进程就没有该权限;

 DAC:
1.自主访问控制
2.主体(Process)的权限Capability决定了它能访问和操作什么ROOT进程可以访问和操作一切!9 3.传统 (legacy) Linux的安全模式，基于UID/GID/Capability

MAC:
1.强制访问控制
2.系统的Policy决定了主体能操作访问哪些客体
3.即便是ROOT进程，系统Policy配置了你能做什么，你只能做什么，在下MAC模式，ROOT进程和普通进程是无区别对待的。
```

```shell
[root@rehc9 ~]# semanage fcontext -l | grep root
```
![](../../Images/Pasted%20image%2020231027205111.png)

```
重新恢复logs目录上下文
restorecon logs/
```

```
添加SElinux自定义上下文类型
semanage fcontext -a -t httpd_sys_content_t '/web(/.*)?'
重置当前目录下的文件上下文
restorecon -Rv .
```

### 15.4.2 SElinux安全端口
```shell
[root@rehc9 ~]# semanage port -l | grep http
http_cache_port_t              tcp      8080, 8118, 8123, 10001-10010
http_cache_port_t              udp      3130
http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000
pegasus_http_port_t            tcp      5988
pegasus_https_port_t           tcp      5989
```

### 15.4.3 绑定SElinux安全端口
```shell
[root@rehc9 ~]# semanage port -a -t http_port_t  -p tcp 12345
```

### 15.4.4 查看SElinux的状态
```shell
[root@rehc9 ~]# getenforce
Enforcing
```

### 15.4.5 设置SElinux(0:半关闭 1:开启)
```shell
[root@rehc9 ~]# setenforce 0
[root@rehc9 ~]# getenforce
Permissive
[root@rehc9 ~]# setenforce 1
[root@rehc9 ~]# getenforce
Enforcing

默认开启，彻底关闭需要更改/etc/selinux/config中SELINUX=enforcing改为disabled
```

### 15.4.6 SElinux布尔值
```
[root@rehc9 ~]# semanage boolean -l | grep samba
samba_create_home_dirs         (off  ,  off)  Allow samba to create home dirs
samba_domain_controller        (off  ,  off)  Allow samba to domain controller
samba_enable_home_dirs         (off  ,  off)  Allow samba to enable home dirs
samba_export_all_ro            (off  ,  off)  Allow samba to export all ro
samba_export_all_rw            (off  ,  off)  Allow samba to export all rw
samba_load_libgfapi            (off  ,  off)  Allow samba to load libgfapi
samba_portmapper               (off  ,  off)  Allow samba to portmapper
samba_run_unconfined           (off  ,  off)  Allow samba to run unconfined
samba_share_fusefs             (off  ,  off)  Allow samba to share fusefs
samba_share_nfs                (off  ,  off)  Allow samba to share nfs
sanlock_use_samba              (off  ,  off)  Allow sanlock to use samba
tmpreaper_use_samba            (off  ,  off)  Allow tmpreaper to use samba
use_samba_home_dirs            (off  ,  off)  Allow use to samba home dirs
virt_use_samba                 (off  ,  off)  Allow virt to use samba
[root@rehc9 ~]#
```

![](../../Images/Pasted%20image%2020231027215235.png)

### 15.4.7 设置SElinux布尔值
```shell
setsebool -P samba_share_nfs on
```

# 十六 linux文件系统

## 16.1 文件系统是什么
```
文件系统，顾名思义，是一个组织文件的“系统(system)”。file system，文件系统是用来组织文件的。
通俗一点理解的话，文件系统是用来存储文件的

硬盘是不能直接存放文件或数据
我们通过将硬盘格式化之后，指定格式化后的文件系统，才可以存放数据

机器语言就是0和1组成的语言。数据存放在文件系统中也是010101010101010这种我们看数据看的是字符。
0~9，a~z

我们只需要知道文件系统是用来做什么的就ok了，这就是运维人员需要知道的

不同的文件系统存放文件的方式也不相同
```

## 16.2 使用硬盘的流程
```
在linux中,SATA硬盘和SCSI硬盘都会被识别成/dev/sd*
IDE硬盘在早期的linux版本中会被识别成/dev/hd*

磁盘是有分区的
第一块磁盘的第一个分区就是/dev/sda1
第一块磁盘的第二个分区就是/dev/sda2
第一块磁盘的第三个分区就是/dev/sda3
第一块磁盘的第四个分区就是/dev/sda4
第一块磁盘的第五个分区就是/dev/sda5
第二块硬盘的第一个分区就是/dev/sdb1
公式就是第X块硬盘的第N个分区就是
/dev/sdXnX表示
a,b,c,d,e,f,g...z
N表示1，2，3，4，5，6....

使用硬盘流程
加硬盘->分区->格式化->挂载
```

## 16.3 磁盘分区（MBR or GPT）
```
如果你采用MBR的方式进行分区就使用fdisk命令
如果你采用GPT的方式进行分区就使用gdisk命令
还有其他分区的命令part

分区最小的单位是sector(扇区)
```

### 16.3.1 手动创建分区
```shell
查看所有磁盘分区的情况
[root@rehc9 ~]# fdisk -l
Disk /dev/nvme0n1: 200 GiB, 214748364800 bytes, 419430400 sectors
Disk model: VMware Virtual NVMe Disk
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x0050510d

Device         Boot   Start       End   Sectors  Size Id Type
/dev/nvme0n1p1 *       2048   2099199   2097152    1G 83 Linux
/dev/nvme0n1p2      2099200 419430399 417331200  199G 8e Linux LVM


Disk /dev/mapper/rhel-root: 70 GiB, 75161927680 bytes, 146800640 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/rhel-swap: 7.86 GiB, 8443133952 bytes, 16490496 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/rhel-home: 121.13 GiB, 130065367040 bytes, 254033920 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

[root@rehc9 ~]# fdisk -l /dev/sda
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

```
对于服务器来说，磁盘从使用目的来说分为3种，第一种是用来存放操作系统，此类硬盘应该只存放操作系统以及系统配置文件，剩下的任何数据都不应该主动存放在此硬盘中。第二种磁盘是用来存放本地大文件，一般这种磁盘我们叫做本地存储盘，第三种磁盘是用来存放本地大文件，但是该磁盘没有在本地，而是使用了网络存储（SAN），一般这种磁盘我们叫做网络存储。
```

```shell
[root@rehc9 ~]# fdisk /dev/sda
Welcome to fdisk (util-linux 2.37.4).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0xfc05ca9c.

Command (m for help):

q退出不保存，w保存

命令(输入 m 获取帮助)：m

帮助：

  DOS (MBR)
   a   开关 可启动 标志
   b   编辑嵌套的 BSD 磁盘标签
   c   开关 dos 兼容性标志

  常规
   d   删除分区
   F   列出未分区的空闲区
   l   列出已知分区类型
   n   添加新分区
   p   打印分区表
   t   更改分区类型
   v   检查分区表
   i   打印某个分区的相关信息

  杂项
   m   打印此菜单
   u   更改 显示/记录 单位
   x   更多功能(仅限专业人员)

  脚本
   I   从 sfdisk 脚本文件加载磁盘布局
   O   将磁盘布局转储为 sfdisk 脚本文件

  保存并退出
   w   将分区表写入磁盘并退出
   q   退出而不保存更改

  新建空磁盘标签
   g   新建一份 GPT 分区表
   G   新建一份空 GPT (IRIX) 分区表
   o   新建一份的空 DOS 分区表
   s   新建一份空 Sun 分区表
```

#### 创建分区
```shell
Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-41943039, default 41943039): 205047

Created a new partition 1 of type 'Linux' and of size 99.1 MiB.


 Command (m for help): n
Partition type
   p   primary (1 primary, 0 extended, 3 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (2-4, default 2): 2
First sector (205048-41943039, default 206848):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (206848-41943039, default 41943039): +10G

Created a new partition 2 of type 'Linux' and of size 10 GiB.
  
命令(输入 m 获取帮助)：n
分区类型
   p   主分区 (0 primary, 0 extended, 4 free)
   e   扩展分区 (逻辑分区容器)
选择 (默认 p)：
```
#### 查看分区
```shell
[root@rehc9 ~]# ls /dev/sda*
/dev/sda  /dev/sda1  /dev/sda2

```
### 16.3.2 自动创建分区
```
fdisk /dev/sda < test &>> fdisk.log
```

## 16.4 格式化分区
```
对于Linux分区来说，只有格式化之后才能使用，不格式化是无法使用的。
Linux分区格式化之后就会变成文件系统，格式化的过程相当于对分区做了一个文件系统。
Linux常见的文件系统有ext系列，ext2，ext3，ext4。还有xfs，还有btrfs
ext4的文件系统限制是，单个文件的大小不能超过1T
xfs的文件系统每个文件系统量最大支持8eb,单个文件可以支持16tb
从centos7和rhe17开始，默认的安装文件系统就是xfs了
```

```shell
[root@rehc9 ~]# mkfs.ext4 /dev/sda1
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 101500 1k blocks and 25376 inodes
Filesystem UUID: 750b9b84-cfa9-469d-8b68-071bc2f5de18
Superblock backups stored on blocks:
        8193, 24577, 40961, 57345, 73729

Allocating group tables: done
Writing inode tables: done
Creating journal (4096 blocks): done
Writing superblocks and filesystem accounting information: done
```

```shell
[root@rehc9 ~]# mkfs.xfs /dev/sda2
meta-data=/dev/sda2              isize=512    agcount=4, agsize=655360 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=2621440, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=2560, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```

```
在Linux操作系统中格式化文件系统的原理是什么呢?
分区的最小单位是sector (扇区)，一个扇区是512B
假如分区可以直接使用，那么存储一个20MB的文件需要多少个扇区呢?
答案是40960，也就是说存储一个20MB的文件需要40960个扇区。
那么读职这个20MB的文件就需要读40960次。效率太低了。

上面只是我们不能直接使用分区的一个原因。还有其他原因
当我们的分区进行格式化之后，会将磁盘的读和写的粒度放大。

格式化的详细操作
1.会立刻分配一部分空间作为inode节点空间
2.刨除inode节点占用的空间，剩下的空间用作划分block，block包含了多个扇区，1个block等于2^n个扇区，如果n等于0.那么一个block就等于1个扇区的大小，如果n=1，那么block就等于2个扇区的大小，如果n=2，那么block就等于4个扇区的大小。单个block越大，就意味着粒度越大
划分block的目的是要将文件以block的数量来存放
block越大对磁盘的读取效果就越好
```
## 16.5 挂载文件系统
### mount挂载
```
linux的mount命令就是挂载文件系统的
mount -t     文件系统类型     文件系统所在的分区路径    文件系统的挂载点

如果是原生的linux文件系统，那么linux是可以识别出这个文件系统的，那么可以不用加-t参数来指定
ext系列、xfs属于linux原生类型
```

```shell
[root@rehc9 ~]# mkdir /mount-point{1..3}
[root@rehc9 ~]# mount /dev/sda1 /mount-point1
[root@rehc9 ~]# mount /dev/sda2 /mount-point2

mount挂载是临时挂载，重启就没了
```

### 持续挂载
```shell
如果你想让你的文件持续的永久的挂载，就需要将挂载的信息写入/etc/fstab
/etc/fstab这个文件非常重要，如果这个文件被删除，或者里面的信息删除或者写法错误都会导致系统无法正常启动

[root@rehc9 mount-point2]# cat /etc/fstab
#
# /etc/fstab
# Created by anaconda on Tue Oct 17 14:48:48 2023
#
# Accessible filesystems, by reference, are maintained under '/dev/disk/'.
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info.
#
# After editing this file, run 'systemctl daemon-reload' to update systemd
# units generated from this file.
#
/dev/mapper/rhel-root   /                       xfs     defaults        0 0
UUID=ef0dcb69-eee7-46db-9763-b1c7d36dbb95 /boot                   xfs     defaults        0 0
/dev/mapper/rhel-home   /home                   xfs     defaults        0 0
/dev/mapper/rhel-swap   none                    swap    defaults        0 0

第一列是文件系统所在的分区路径
第二列是文件系统的挂载点
第三列是文件系统的类型
第四列是挂载参数
第五列和第六列分别写0，只有在一些特殊的文件系统，后俩列才需要改成非0

永久挂载sda2
/dev/sda2 /mount-point2 xfs defaults 0 0
当fstab编辑完成之后，使用mount -a命令自动挂载，但是注意，如果某个文件系统已经挂载，且还在fstab里面记录，那么mount -a并不会将该文件系统卸载，再重新挂载，mount -a会自动忽略
```

```shell
[root@rehc9 ~]# ls /dev/disk/by-uuid -l
total 0
lrwxrwxrwx. 1 root root 10 Oct 28 16:07 101ce2b3-51b8-4362-b7fd-6dd39464cff1 -> ../../sda2
lrwxrwxrwx. 1 root root  9 Oct 28 16:07 2023-04-13-16-58-02-00 -> ../../sr0
lrwxrwxrwx. 1 root root 10 Oct 28 16:07 3f1f3e32-2925-41f1-bf3a-47586512549d -> ../../dm-1
lrwxrwxrwx. 1 root root 10 Oct 28 16:07 750b9b84-cfa9-469d-8b68-071bc2f5de18 -> ../../sda1
lrwxrwxrwx. 1 root root 10 Oct 28 16:07 d4dd9ecb-79ae-4f9e-8930-cd9f6a1ab44a -> ../../dm-0
lrwxrwxrwx. 1 root root 10 Oct 28 16:07 eee3f780-2a97-4889-b751-25a1089d9819 -> ../../dm-2
lrwxrwxrwx. 1 root root 15 Oct 28 16:07 ef0dcb69-eee7-46db-9763-b1c7d36dbb95 -> ../../nvme0n1p1
```

### df命令查看挂载详情
```shell
[root@rehc9 ~]# df -TH
Filesystem            Type      Size  Used Avail Use% Mounted on
devtmpfs              devtmpfs  4.2M     0  4.2M   0% /dev
tmpfs                 tmpfs     8.3G     0  8.3G   0% /dev/shm
tmpfs                 tmpfs     3.3G  9.6M  3.3G   1% /run
/dev/mapper/rhel-root xfs        76G  1.9G   74G   3% /
/dev/nvme0n1p1        xfs       1.1G  232M  832M  22% /boot
/dev/mapper/rhel-home xfs       131G  941M  130G   1% /home
tmpfs                 tmpfs     1.7G     0  1.7G   0% /run/user/0
/dev/sda1             ext4       92M   15k   85M   1% /mount-point1
/dev/sda2             xfs        11G  109M   11G   2% /mount-point2
```

## 16.6 逻辑卷
### 介绍
```
生产环境使用率极高《非常非常非常非常高)

我们之前使用磁盘，步骤是:
1.安装磁盘
2.分区
3.格式化
4.挂载
5.使用
如果对磁盘直接使用fdisk分区，那么这种分区，我们叫做Linux的标准分区，Linux的标准分区如果格式化成文件系统之后g挂载使用，那么一旦文件系统的空间满了，是无法扩容的。

上面的问题促使了逻辑卷的诞生。
逻辑卷是个抽象的概念，我们要记很多新的专有名词
pv(physical volume)物理卷
vg(volume group)卷组
lv(logical volume)逻辑卷

pv的创建，pv的删除(向pv里面加入新的块设备就相当于扩容pv，从pv里面删除块设备，就相当于缩容pv)
vg的创建，vg的删除，vg的扩容
lv的创建，Iv的删除，lv的扩容
```
### 创建pv (physical volume)物理卷
```shell
[root@rehc9 ~]# pvcreate /dev/sda1
  Physical volume "/dev/sda1" successfully created.
[root@rehc9 ~]# pvcreate /dev/sda2
  Physical volume "/dev/sda2" successfully created.

pv可以直接指定一块硬盘

如果没有pvcreate命令，用dnf -y install l2vm安装即可
```

```shell
[root@rehc9 ~]# pvdisplay /dev/sda1
  "/dev/sda1" is a new physical volume of "1.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sda1
  VG Name
  PV Size               1.00 GiB
  Allocatable           NO
  PE Size               0
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               gsD5MZ-3s7a-OH1z-GpMt-25GO-tQut-l1z3fJ
```
### 查看pv
```shell
[root@rehc9 ~]# pvs
  PV             VG   Fmt  Attr PSize    PFree
  /dev/nvme0n1p2 rhel lvm2 a--  <199.00g    0
  /dev/sda1           lvm2 ---     1.00g 1.00g
  /dev/sda2           lvm2 ---     2.00g 2.00g
```
### 删除pv
```shell
[root@rehc9 ~]# pvremove /dev/sda1 /dev/sda2
  Labels on physical volume "/dev/sda1" successfully wiped.
  Labels on physical volume "/dev/sda2" successfully wiped.
  如果pv被某个vg使用，那么将无法删除

[root@rehc9 ~]# pvcreate /dev/sda{1..2}
  Physical volume "/dev/sda1" successfully created.
  Physical volume "/dev/sda2" successfully created.
```

### vg(volume group)卷组的创建

```shell
[root@rehc9 ~]# vgcreate vg1 /dev/sda1
  Volume group "vg1" successfully created
```

### vg的查看
```shell
[root@rehc9 ~]# vgs
  VG   #PV #LV #SN Attr   VSize    VFree
  rhel   1   3   0 wz--n- <199.00g       0
  vg1    1   0   0 wz--n- 1020.00m 1020.00m

[root@rehc9 ~]# vgdisplay vg1
  --- Volume group ---
  VG Name               vg1
  System ID
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  2
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               5.99 GiB
  PE Size               4.00 MiB
  Total PE              1534
  Alloc PE / Size       0 / 0
  Free  PE / Size       1534 / 5.99 GiB
  VG UUID               r1bX4S-9geN-pnFa-lp8Y-TkHU-LJCL-k0iE1M
```

### vg的删除
```shell
[root@rehc9 ~]# vgremove vg1
  Volume group "vg1" successfully removed

如果vg上有逻辑卷在使用，那么vg将无法删除
```

### vg扩容
```shell
[root@rehc9 ~]# vgextend vg1 /dev/sda3
  Physical volume "/dev/sda3" successfully created.
  Volume group "vg1" successfully extended

[root@rehc9 ~]# vgs
  VG   #PV #LV #SN Attr   VSize    VFree
  rhel   1   3   0 wz--n- <199.00g    0
  vg1    2   0   0 wz--n-    5.99g 5.99g
```

### lv(logical volume)逻辑卷的创建
```shell
[root@rehc9 ~]# lvcreate -n lv1 -L 100M vg1
  Logical volume "lv1" created.
[root@rehc9 vg1]# lvcreate -n lv2 -L 500M vg1
  Logical volume "lv2" created.  
  
-n 参数name表示逻辑卷的名称
-L 参数表示逻辑卷的大小
vg1 表示使用卷组vg1创建逻辑卷

```

### lv的查看
```shell
[root@rehc9 ~]# lvs
  LV   VG   Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  home rhel -wi-ao---- 121.13g
  root rhel -wi-ao----  70.00g
  swap rhel -wi-ao----   7.86g
  lv1  vg1  -wi-a----- 100.00m

[root@rehc9 ~]# lvdisplay /dev/vg1/lv1
  --- Logical volume ---
  LV Path                /dev/vg1/lv1
  LV Name                lv1
  VG Name                vg1
  LV UUID                VXyXdc-rDYv-9mYf-MpHK-Jgvh-5Glp-Lqo7MD
  LV Write Access        read/write
  LV Creation host, time rehc9, 2023-10-28 17:21:27 +0800
  LV Status              available
  # open                 0
  LV Size                100.00 MiB
  Current LE             25
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:3


[root@rehc9 ~]# ls /dev/vg1 -lh
total 0
lrwxrwxrwx. 1 root root 7 Oct 28 17:27 lv1 -> ../dm-3

/dev/dm-3就是lv1的本尊

[root@rehc9 ~]# ls /dev/mapper -lh
total 0
crw-------. 1 root root 10, 236 Oct 28 16:54 control
lrwxrwxrwx. 1 root root       7 Oct 28 16:54 rhel-home -> ../dm-2
lrwxrwxrwx. 1 root root       7 Oct 28 16:54 rhel-root -> ../dm-0
lrwxrwxrwx. 1 root root       7 Oct 28 16:54 rhel-swap -> ../dm-1
lrwxrwxrwx. 1 root root       7 Oct 28 17:27 vg1-lv1 -> ../dm-3
```

### lv删除
```shell
[root@rehc9 ~]# lvremove /dev/vg1/lv1
Do you really want to remove active logical volume vg1/lv1? [y/n]: y
  Logical volume "lv1" successfully removed.
```

### 格式化逻辑卷

```shell
[root@rehc9 ~]# mkfs.xfs /dev/vg1/lv1
meta-data=/dev/vg1/lv1           isize=512    agcount=4, agsize=12800 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=51200, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=1368, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0



[root@rehc9 vg1]# mkfs.ext4 /dev/vg1/lv2
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 512000 1k blocks and 128016 inodes
Filesystem UUID: bb6155e5-7528-4b10-9ff4-52d6e8b3131c
Superblock backups stored on blocks:
        8193, 24577, 40961, 57345, 73729, 204801, 221185, 401409

Allocating group tables: done
Writing inode tables: done
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done


[root@rehc9 ~]# ls -l /dev/disk/by-uuid
total 0
lrwxrwxrwx. 1 root root 10 Oct 28 19:56 172dfc77-c171-4c3a-af5f-681f87d56b06 -> ../../dm-3
lrwxrwxrwx. 1 root root  9 Oct 28 16:54 2023-04-13-16-58-02-00 -> ../../sr0
lrwxrwxrwx. 1 root root 10 Oct 28 16:54 3f1f3e32-2925-41f1-bf3a-47586512549d -> ../../dm-1
lrwxrwxrwx. 1 root root 10 Oct 28 16:54 d4dd9ecb-79ae-4f9e-8930-cd9f6a1ab44a -> ../../dm-0
lrwxrwxrwx. 1 root root 10 Oct 28 16:54 eee3f780-2a97-4889-b751-25a1089d9819 -> ../../dm-2
lrwxrwxrwx. 1 root root 15 Oct 28 16:54 ef0dcb69-eee7-46db-9763-b1c7d36dbb95 -> ../../nvme0n1p1
```


### 逻辑卷挂载
```shell
[root@rehc9 vg1]# mount -t xfs /dev/vg1/lv1 /xfs-point
[root@rehc9 vg1]# mount -t ext4 /dev/vg1/lv2 /ext4-point
```

### lv逻辑卷在线扩容
```shell
lv1扩容到1.1G
[root@rehc9 vg1]# lvextend /dev/vg1/lv1 -L 1.1G
  Rounding size to boundary between physical extents: 1.10 GiB.
  Size of logical volume vg1/lv1 changed from 1.00 GiB (256 extents) to 1.10 GiB (282 extents).
  Logical volume vg1/lv1 successfully resized.



lv2扩容到4.8G
[root@rehc9 vg1]# lvextend /dev/vg1/lv2 -L 4.8G
  Rounding size to boundary between physical extents: 4.80 GiB.
  Size of logical volume vg1/lv2 changed from 4.60 GiB (1178 extents) to 4.80 GiB (1229 extents).
  Logical volume vg1/lv2 successfully resized.


扩容后的部分需要格式化后才能使用（xfs用xfs_growfs,ext用resize2fs）
[root@rehc9 vg1]# xfs_growfs /dev/vg1/lv1
meta-data=/dev/mapper/vg1-lv1    isize=512    agcount=4, agsize=12800 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=51200, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=1368, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 51200 to 288768


[root@rehc9 vg1]# resize2fs /dev/vg1/lv2
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/vg1/lv2 is mounted on /ext4-point; on-line resizing required
old_desc_blocks = 4, new_desc_blocks = 39
The filesystem on /dev/vg1/lv2 is now 5033984 (1k) blocks long.

[root@rehc9 vg1]# df -Th
Filesystem            Type      Size  Used Avail Use% Mounted on
devtmpfs              devtmpfs  4.0M     0  4.0M   0% /dev
tmpfs                 tmpfs     7.7G     0  7.7G   0% /dev/shm
tmpfs                 tmpfs     3.1G  9.1M  3.1G   1% /run
/dev/mapper/rhel-root xfs        70G  1.8G   69G   3% /
/dev/nvme0n1p1        xfs      1014M  221M  794M  22% /boot
/dev/mapper/rhel-home xfs       122G  897M  121G   1% /home
tmpfs                 tmpfs     1.6G     0  1.6G   0% /run/user/0
/dev/mapper/vg1-lv1   xfs       1.1G   20M  1.1G   2% /xfs-point
/dev/mapper/vg1-lv2   ext4      4.5G   14K  4.3G   1% /ext4-point

```

```shell
[root@rehc9 ~]# blkid
/dev/mapper/rhel-root: UUID="d4dd9ecb-79ae-4f9e-8930-cd9f6a1ab44a" TYPE="xfs"
/dev/nvme0n1p2: UUID="EJ1FMo-wWZf-4yqB-ubIY-YsBK-NRrh-1pYuvb" TYPE="LVM2_member" PARTUUID="0050510d-02"
/dev/mapper/rhel-swap: UUID="3f1f3e32-2925-41f1-bf3a-47586512549d" TYPE="swap"
/dev/nvme0n1p1: UUID="ef0dcb69-eee7-46db-9763-b1c7d36dbb95" TYPE="xfs" PARTUUID="0050510d-01"
/dev/mapper/vg1-lv2: UUID="bb6155e5-7528-4b10-9ff4-52d6e8b3131c" TYPE="ext4"
/dev/sr0: UUID="2023-04-13-16-58-02-00" LABEL="RHEL-9-2-0-BaseOS-x86_64" TYPE="iso9660" PTUUID="d3d1f9a5" PTTYPE="dos"
/dev/mapper/rhel-home: UUID="eee3f780-2a97-4889-b751-25a1089d9819" TYPE="xfs"
/dev/sda2: UUID="1jG6mF-aIsu-lydo-531u-QJqI-aerS-O63RNO" TYPE="LVM2_member" PARTUUID="fc05ca9c-02"
/dev/sda3: UUID="cpszRI-v6BZ-hZkS-7TLU-01PE-65Op-x2aQfs" TYPE="LVM2_member" PARTUUID="fc05ca9c-03"
/dev/sda1: UUID="gsD5MZ-3s7a-OH1z-GpMt-25GO-tQut-l1z3fJ" TYPE="LVM2_member" PARTUUID="fc05ca9c-01"
/dev/mapper/vg1-lv1: UUID="172dfc77-c171-4c3a-af5f-681f87d56b06" TYPE="xfs"

```
## 16.7 find命令

**find命令** 用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。
```shell
[root@rehc9 ~]# find / -user shuaiqijun 2>>/dev/null -exec cp -a {} /root \;
```
### 语法
```
find (选项)(参数)
```

### 选项
```shell
-amin<分钟>：查找在指定时间曾被存取过的文件或目录，单位以分钟计算；
-anewer<参考文件或目录>：查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录；
-atime<24小时数>：查找在指定时间曾被存取过的文件或目录，单位以24小时计算；
-cmin<分钟>：查找在指定时间之时被更改过的文件或目录；
-cnewer<参考文件或目录>查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；
-ctime<24小时数>：查找在指定时间之时被更改的文件或目录，单位以24小时计算；
-daystart：从本日开始计算时间；
-depth：从指定目录下最深层的子目录开始查找；
-empty：寻找文件大小为0 Byte的文件，或目录下没有任何子目录或文件的空目录；
-exec<执行指令>：假设find指令的回传值为True，就执行该指令；
-false：将find指令的回传值皆设为False；
-fls<列表文件>：此参数的效果和指定“-ls”参数类似，但会把结果保存为指定的列表文件；
-follow：排除符号连接；
-fprint<列表文件>：此参数的效果和指定“-print”参数类似，但会把结果保存成指定的列表文件；
-fprint0<列表文件>：此参数的效果和指定“-print0”参数类似，但会把结果保存成指定的列表文件；
-fprintf<列表文件><输出格式>：此参数的效果和指定“-printf”参数类似，但会把结果保存成指定的列表文件；
-fstype<文件系统类型>：只寻找该文件系统类型下的文件或目录；
-gid<群组识别码>：查找符合指定之群组识别码的文件或目录；
-group<群组名称>：查找符合指定之群组名称的文件或目录；
-help或--help：在线帮助；
-ilname<范本样式>：此参数的效果和指定“-lname”参数类似，但忽略字符大小写的差别；
-iname<范本样式>：此参数的效果和指定“-name”参数类似，但忽略字符大小写的差别；
-inum<inode编号>：查找符合指定的inode编号的文件或目录；
-ipath<范本样式>：此参数的效果和指定“-path”参数类似，但忽略字符大小写的差别；
-iregex<范本样式>：此参数的效果和指定“-regexe”参数类似，但忽略字符大小写的差别；
-links<连接数目>：查找符合指定的硬连接数目的文件或目录；
-lname<范本样式>：指定字符串作为寻找符号连接的范本样式；
-ls：假设find指令的回传值为True，就将文件或目录名称列出到标准输出；
-maxdepth<目录层级>：设置最大目录层级；
-mindepth<目录层级>：设置最小目录层级；
-mmin<分钟>：查找在指定时间曾被更改过的文件或目录，单位以分钟计算；
-mount：此参数的效果和指定“-xdev”相同；
-mtime<24小时数>：查找在指定时间曾被更改过的文件或目录，单位以24小时计算；
-name<范本样式>：指定字符串作为寻找文件或目录的范本样式；
-newer<参考文件或目录>：查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；
-nogroup：找出不属于本地主机群组识别码的文件或目录；
-noleaf：不去考虑目录至少需拥有两个硬连接存在；
-nouser：找出不属于本地主机用户识别码的文件或目录；
-ok<执行指令>：此参数的效果和指定“-exec”类似，但在执行指令之前会先询问用户，若回答“y”或“Y”，则放弃执行命令；
-path<范本样式>：指定字符串作为寻找目录的范本样式；
-perm<权限数值>：查找符合指定的权限数值的文件或目录；
-print：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称前皆有“./”字符串；
-print0：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行；
-printf<输出格式>：假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式可以自行指定；
-prune：不寻找字符串作为寻找文件或目录的范本样式;
-regex<范本样式>：指定字符串作为寻找文件或目录的范本样式；
-size<文件大小>：查找符合指定的文件大小的文件；
-true：将find指令的回传值皆设为True；
-type<文件类型>：只寻找符合指定的文件类型的文件；
-uid<用户识别码>：查找符合指定的用户识别码的文件或目录；
-used<日数>：查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算；
-user<拥有者名称>：查找符和指定的拥有者名称的文件或目录；
-version或——version：显示版本信息；
-xdev：将范围局限在先行的文件系统中；
-xtype<文件类型>：此参数的效果和指定“-type”参数类似，差别在于它针对符号连接检查。
```

### 参数
```
起始目录：查找文件的起始目录。
```


### 实例
```
当前目录搜索所有文件，文件内容 包含 “140.206.111.111” 的内容
find . -type f -name "*" | xargs grep "140.206.111.111"
```

```
根据文件或者正则表达式进行匹配
```

```
列出当前目录及子目录下所有文件和文件夹
find .
```

```
在/home目录下查找以.txt结尾的文件名
find /home -name "*.txt"
```

```
同上，但忽略大小写
find /home -iname "*.txt"
```

```
当前目录及子目录下查找所有以.txt和.pdf结尾的文件
find . \( -name "*.txt" -o -name "*.pdf" \)

或

find . -name "*.txt" -o -name "*.pdf"
匹配文件路径或者文件
```

```
find /usr/ -path "*local*"
基于正则表达式匹配文件路径

find . -regex ".*\(\.txt\|\.pdf\)$"

同上，但忽略大小写
find . -iregex ".*\(\.txt\|\.pdf\)$"
```

```
否定参数
找出/home下不是以.txt结尾的文件
find /home ! -name "*.txt"
```

```shell
根据文件类型进行搜索
find . -type 类型参数

类型参数列表：
f 普通文件
l 符号连接
d 目录
c 字符设备
b 块设备
s 套接字
p Fifo
```

## 16.8 swap分区
```

```

## 16.9 网络文件系统nfs
### 安装nfs-server
```shell
[root@rehc9 ~]# dnf -y install nfs-utils

[root@rehc9 ~]# rpm -ql nfs-utils
/etc/exports.d
/etc/gssproxy/24-nfs-server.conf
/etc/modprobe.d/lockd.conf
/etc/nfs.conf
/etc/nfsmount.conf
/etc/request-key.d/id_resolver.conf

```

### 创建共享文件夹
```shell
[root@rehc9 ~]# mkdir /home/shuaiqijun/nfs-share
[root@server ~]# chmod 777 /home/shuaiqijun/nfs-share
```

### 编辑/etc/exports文件
```shell
/home/shuaiqijun/nfs-share/ 192.168.50.0/24(insecure,rw,async,no_root_squash)
```

### 放行端口
```shell
[root@server ~]# firewall-cmd --add-port=2049/tcp
[root@server ~]# firewall-cmd --add-port=20049/tcp
[root@server ~]# firewall-cmd --add-port=111/tcp
```

### 查看
```shell
[root@rehc9 ~]# exportfs
/home/shuaiqijun/nfs-share 192.168.50.0/24

[root@server ~]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  59527  status
    100024    1   tcp  35223  status
    100005    1   udp  20048  mountd
    100005    1   tcp  20048  mountd
    100005    2   udp  20048  mountd
    100005    2   tcp  20048  mountd
    100005    3   udp  20048  mountd
    100005    3   tcp  20048  mountd
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100021    1   udp  60915  nlockmgr
    100021    3   udp  60915  nlockmgr
    100021    4   udp  60915  nlockmgr
    100021    1   tcp  39215  nlockmgr
    100021    3   tcp  39215  nlockmgr
    100021    4   tcp  39215  nlockmgr

```

### 启动nfs-server服务
```shell 
[root@localhost ~]# systemctl start nfs-server
```
### 客户端挂载
```shell
[root@localhost ~]# mount -t nfs 192.168.50.60:/home/shuaiqijun/nfs-share /nfs-point
客户端也需安装nfs-utils
```


## 16.10 vdo
```shell
[root@server ~]# dnf -y install vdo
[root@server ~]# dnf -y install kmod-kvdo
RHEL9以弃用，取代的是lvmvdo
```

### 创建vdo
```shell
[root@server ~]# pvcreate /dev/sda
  Physical volume "/dev/sda" successfully created.
[root@server ~]# vgcreate vg-vdo /dev/sda
  Volume group "vg-vdo" successfully created
[root@server ~]# lvcreate --type vdo -n lv-vdo -L 18G -V 50G vg-vdo
WARNING: vdo signature detected on /dev/vg-vdo/vpool0 at offset 0. Wipe it? [y/n]: y
  Wiping vdo signature on /dev/vg-vdo/vpool0.
    The VDO volume can address 14 GB in 7 data slabs, each 2 GB.
    It can grow to address at most 16 TB of physical storage in 8192 slabs.
    If a larger maximum size might be needed, use bigger slabs.
  Logical volume "lv-vdo" created.



参考命令
lvcreate --type vdo -n VDOLV -L DataSize -V LargeVirtualSize VG/VDOPoolLV
```

### 查看
```shell
[root@server ~]# fdisk -l
[root@server ~]# ls -l /dev/mapper/vg--vdo-lv--vdo
lrwxrwxrwx. 1 root root 7 Oct 29 11:25 /dev/mapper/vg--vdo-lv--vdo -> ../dm-5

```

### 格式化
```shell
[root@server ~]# mkfs.xfs /dev/vg-vdo/lv-vdo
meta-data=/dev/vg-vdo/lv-vdo     isize=512    agcount=4, agsize=3276800 blks
         =                       sectsz=4096  attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=13107200, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=6400, version=2
         =                       sectsz=4096  sunit=1 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
Discarding blocks...Done.

```

### 挂载
```shell
[root@server ~]# mkdir /vdo-point
[root@server ~]# mount -t xfs /dev/vg-vdo/lv-vdo /vdo-point
[root@server ~]# df -Th
Filesystem                  Type      Size  Used Avail Use% Mounted on
devtmpfs                    devtmpfs  4.0M     0  4.0M   0% /dev
tmpfs                       tmpfs     1.5G  9.2M  1.5G   1% /run
/dev/mapper/rhel-root       xfs        70G  1.8G   69G   3% /
tmpfs                       tmpfs     765M     0  765M   0% /run/user/0
/dev/mapper/vg--vdo-lv--vdo xfs        50G  390M   50G   1% /vdo-point

```

### 查看vdo真实空间
```shell
[root@server ~]# vdostats --human-readable
Device                    Size      Used Available Use% Space saving%
vg--vdo-vpool0-vpool     18.0G      4.0G     14.0G  22%           99%
```

## 16.11 文件归档

```
**zip命令** 可以用来解压缩文件，或者对文件进行打包操作。zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。
```
### 16.11.1 zip
#### 安装zip
```shell
[root@server ~]# dnf -y install zip
```

#### 语法
```
zip(选项)(参数)
zip [-选项] [-b 路径] [-t 日期] [-n 后缀名] [压缩文件列表] [-xi 列表]
```

#### 选项
```
-A：调整可执行的自动解压缩文件；
-b<工作目录>：指定暂时存放文件的目录；
-c：替每个被压缩的文件加上注释；
-d：从压缩文件内删除指定的文件；
-D：压缩文件内不建立目录名称；
-f：此参数的效果和指定“-u”参数类似，但不仅更新既有文件，如果某些文件原本不存在于压缩文件内，使用本参数会一并将其加入压缩文件中；
-F：尝试修复已损坏的压缩文件；
-g：将文件压缩后附加在已有的压缩文件之后，而非另行建立新的压缩文件；
-h：在线帮助；
-i<范本样式>：只压缩符合条件的文件；
-j：只保存文件名称及其内容，而不存放任何目录名称；
-J：删除压缩文件前面不必要的数据；
-k：使用MS-DOS兼容格式的文件名称；
-l：压缩文件时，把LF字符置换成LF+CR字符；
-ll：压缩文件时，把LF+cp字符置换成LF字符；
-L：显示版权信息；
-m：将文件压缩并加入压缩文件后，删除原始文件，即把文件移到压缩文件中；
-n<字尾字符串>：不压缩具有特定字尾字符串的文件；
-o：以压缩文件内拥有最新更改时间的文件为准，将压缩文件的更改时间设成和该文件相同；
-q：不显示指令执行过程；
-r：递归处理，将指定目录下的所有文件和子目录一并处理；
-S：包含系统和隐藏文件；
-t<日期时间>：把压缩文件的日期设成指定的日期；
-T：检查备份文件内的每个文件是否正确无误；
-u：更换较新的文件到压缩文件内；
-v：显示指令执行过程或显示版本信息；
-V：保存VMS操作系统的文件属性；
-w：在文件名称里假如版本编号，本参数仅在VMS操作系统下有效；
-x<范本样式>：压缩时排除符合条件的文件；
-X：不保存额外的文件属性；
-y：直接保存符号连接，而非该链接所指向的文件，本参数仅在UNIX之类的系统下有效；
-z：替压缩文件加上注释；
-$：保存第一个被压缩文件所在磁盘的卷册名称；
-<压缩效率>：压缩效率是一个介于1~9的数值。
```

#### 压缩
```shell
[root@server ~]# zip test.zip test
  adding: test (deflated 98%)
[root@server ~]# ls
anaconda-ks.cfg  test  test.zip
```

#### 解压缩
```shell
[root@server ~]# unzip test.zip
Archive:  test.zip
replace test? [y]es, [n]o, [A]ll, [N]one, [r]ename: r
new name: test1
  inflating: test1
```

### 16.11.2 gizp

**gzip命令** 用来压缩文件。gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。

gzip是在Linux系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和tar命令一起构成Linux操作系统中比较流行的压缩文件格式。据统计，gzip命令对文本文件有60%～70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

#### 语法
```
gzip(选项)(参数)
```

#### 选项
```
-a或——ascii：使用ASCII文字模式；
-d或--decompress或----uncompress：解开压缩文件；
-f或——force：强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：压缩文件时，不保存原来的文件名称及时间戳记；
-N或——name：压缩文件时，保存原来的文件名称及时间戳记；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<压缩字尾字符串>或----suffix<压缩字尾字符串>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
-<压缩效率>：压缩效率是一个介于1~9的数值，预设值为“6”，指定愈大的数值，压缩效率就会愈高；
--best：此参数的效果和指定“-9”参数相同；
--fast：此参数的效果和指定“-1”参数相同。
-num 用指定的数字num调整压缩的速度，-1或--fast表示最快压缩方法（低压缩比），-9或--best表示最慢压缩方法（高压缩比）。系统缺省值为6。
-c或--stdout或--to-stdout：保留原始文件，生成标准输出流（结合重定向使用）。
```

#### 压缩
```
gzip test
```

#### 解压缩
```
gunzip test.gz
```

### 16.11.3 tar
```
tar命令 可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。

为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（gzip bzip2命令）。
```

#### 语法
```
tar [选项...] [FILE]...
```

#### 选项
```
-A, --catenate, --concatenate   追加 tar 文件至归档
-c, --create               创建一个新归档
-d, --diff, --compare      找出归档和文件系统的差异
    --delete               从归档(非磁带！)中删除
-r, --append               追加文件至归档结尾
-t, --list                 列出归档内容
    --test-label           测试归档卷标并退出
-u, --update               仅追加比归档中副本更新的文件
-x, --extract, --get       从归档中解出文件

操作修饰符:

      --check-device         当创建增量归档时检查设备号(默认)
  -g, --listed-incremental=FILE   处理新式的 GNU 格式的增量备份
  -G, --incremental          处理老式的 GNU 格式的增量备份
      --ignore-failed-read
                             当遇上不可读文件时不要以非零值退出
      --level=NUMBER         所创建的增量列表归档的输出级别
  -n, --seek                 归档可检索
      --no-check-device      当创建增量归档时不要检查设备号
      --no-seek              归档不可检索
      --occurrence[=NUMBER]  仅处理归档中每个文件的第 NUMBER
                             个事件；仅当与以下子命令 --delete,
                             --diff, --extract 或是 --list
                             中的一个联合使用时，此选项才有效。而且不管文件列表是以命令行形式给出或是通过
                             -T 选项指定的；NUMBER 值默认为 1
      --sparse-version=MAJOR[.MINOR]
                             设置所用的离散格式版本(隐含
                             --sparse)
  -S, --sparse               高效处理离散文件

 重写控制:

  -k, --keep-old-files       don't replace existing files when extracting,
                             treat them as errors
      --keep-directory-symlink   preserve existing symlinks to directories when
                             extracting
      --keep-newer-files
                             不要替换比归档中副本更新的已存在的文件
      --no-overwrite-dir     保留已存在目录的元数据
      --overwrite            解压时重写存在的文件
      --overwrite-dir        解压时重写已存在目录的元数据(默认)

      --recursive-unlink     解压目录之前先清除目录层次
      --remove-files         在添加文件至归档后删除它们
      --skip-old-files       don't replace existing files when extracting,
                             silently skip over them
  -U, --unlink-first         在解压要重写的文件之前先删除它们
  -W, --verify               在写入以后尝试校验归档

 选择输出流:

      --ignore-command-error 忽略子进程的退出代码
      --no-ignore-command-error
                             将子进程的非零退出代码认为发生错误
  -O, --to-stdout            解压文件至标准输出
      --to-command=COMMAND
                             将解压的文件通过管道传送至另一个程序

 操作文件属性:

      --atime-preserve[=METHOD]
                             在输出的文件上保留访问时间，要么通过在读取(默认
                             METHOD=‘replace’)后还原时间，要不就不要在第一次(METHOD=‘system’)设置时间
      --delay-directory-restore
                             直到解压结束才设置修改时间和所解目录的权限
      --group=名称         强制将 NAME
                             作为所添加的文件的组所有者
      --mode=CHANGES         强制将所添加的文件(符号)更改为权限
                             CHANGES
      --mtime=DATE-OR-FILE   从 DATE-OR-FILE 中为添加的文件设置
                             mtime
  -m, --touch                不要解压文件的修改时间
      --no-delay-directory-restore
                             取消 --delay-directory-restore 选项的效果
      --no-same-owner
                             将文件解压为您所有(普通用户默认此项)
      --no-same-permissions
                             从归档中解压权限时使用用户的掩码位(默认为普通用户服务)
      --numeric-owner        总是以数字代表用户/组的名称
      --owner=名称         强制将 NAME
                             作为所添加的文件的所有者
  -p, --preserve-permissions, --same-permissions
                             解压文件权限信息(默认只为超级用户服务)
      --preserve             与 -p 和 -s 一样
      --same-owner
                             尝试解压时保持所有者关系一致(超级用户默认此项)
  -s, --preserve-order, --same-order
                             member arguments are listed in the same order as
                             the files in the archive

 Handling of extended file attributes:

      --acls                 Enable the POSIX ACLs support
      --no-acls              Disable the POSIX ACLs support
      --no-selinux           Disable the SELinux context support
      --no-xattrs            Disable extended attributes support
      --selinux              Enable the SELinux context support
      --xattrs               Enable extended attributes support
      --xattrs-exclude=MASK  specify the exclude pattern for xattr keys
      --xattrs-include=MASK  specify the include pattern for xattr keys

 设备选择和切换:

  -f, --file=ARCHIVE         使用归档文件或 ARCHIVE 设备
      --force-local
                             即使归档文件存在副本还是把它认为是本地归档
  -F, --info-script=名称, --new-volume-script=名称
                             在每卷磁带最后运行脚本(隐含 -M)
  -L, --tape-length=NUMBER   写入 NUMBER × 1024 字节后更换磁带
  -M, --multi-volume         创建/列出/解压多卷归档文件
      --rmt-command=COMMAND  使用指定的 rmt COMMAND 代替 rmt
      --rsh-command=COMMAND  使用远程 COMMAND 代替 rsh
      --volno-file=FILE      使用/更新 FILE 中的卷数

 设备分块:

  -b, --blocking-factor=BLOCKS   每个记录 BLOCKS x 512 字节
  -B, --read-full-records    读取时重新分块(只对 4.2BSD 管道有效)
  -i, --ignore-zeros         忽略归档中的零字节块(即文件结尾)
      --record-size=NUMBER   每个记录的字节数 NUMBER，乘以 512

 选择归档格式:

  -H, --format=FORMAT        创建指定格式的归档

 FORMAT 是以下格式中的一种:

    gnu                      GNU tar 1.13.x 格式
    oldgnu                   GNU 格式 as per tar <= 1.12
    pax                      POSIX 1003.1-2001 (pax) 格式
    posix                    等同于 pax
    ustar                    POSIX 1003.1-1988 (ustar) 格式
    v7                       old V7 tar 格式

      --old-archive, --portability
                             等同于 --format=v7
      --pax-option=关键字[[:]=值][,关键字[[:]=值]]...
                             控制 pax 关键字
      --posix                等同于 --format=posix
  -V, --label=TEXT           创建带有卷名 TEXT
                             的归档；在列出/解压时，使用 TEXT
                             作为卷名的模式串

 压缩选项:

  -a, --auto-compress        使用归档后缀名来决定压缩程序
  -I, --use-compress-program=PROG
                             通过 PROG 过滤(必须是能接受 -d
                             选项的程序)
  -j, --bzip2                通过 bzip2 过滤归档
  -J, --xz                   通过 xz 过滤归档
      --lzip                 通过 lzip 过滤归档
      --lzma                 通过 lzma 过滤归档
      --lzop
      --no-auto-compress     不使用归档后缀名来决定压缩程序
  -z, --gzip, --gunzip, --ungzip   通过 gzip 过滤归档
  -Z, --compress, --uncompress   通过 compress 过滤归档

 本地文件选择:

      --add-file=FILE        添加指定的 FILE 至归档(如果名字以 -
                             开始会很有用的)
      --backup[=CONTROL]     在删除前备份，选择 CONTROL 版本
  -C, --directory=DIR        改变至目录 DIR
      --exclude=PATTERN      排除以 PATTERN 指定的文件
      --exclude-backups      排除备份和锁文件
      --exclude-caches       除标识文件本身外，排除包含
                             CACHEDIR.TAG 的目录中的内容
      --exclude-caches-all   排除包含 CACHEDIR.TAG 的目录
      --exclude-caches-under 排除包含 CACHEDIR.TAG 的目录中所有内容

      --exclude-tag=FILE     除 FILE 自身外，排除包含 FILE
                             的目录中的内容
      --exclude-tag-all=FILE 排除包含 FILE 的目录
      --exclude-tag-under=FILE   排除包含 FILE 的目录中的所有内容
      --exclude-vcs          排除版本控制系统目录
  -h, --dereference
                             跟踪符号链接；将它们所指向的文件归档并输出
      --hard-dereference
                             跟踪硬链接；将它们所指向的文件归档并输出
  -K, --starting-file=MEMBER-NAME
                             begin at member MEMBER-NAME when reading the
                             archive
      --newer-mtime=DATE     当只有数据改变时比较数据和时间
      --no-null              禁用上一次的效果 --null 选项
      --no-recursion         避免目录中的自动降级
      --no-unquote           不以 -T 读取的文件名作为引用结束
      --null                 -T 读取以空终止的名字，-C 禁用
  -N, --newer=DATE-OR-FILE, --after-date=DATE-OR-FILE
                             只保存比 DATE-OR-FILE 更新的文件
      --one-file-system      创建归档时保存在本地文件系统中
  -P, --absolute-names       不要从文件名中清除引导符‘/’
      --recursion            目录递归(默认)
      --suffix=STRING        在删除前备份，除非被环境变量
                             SIMPLE_BACKUP_SUFFIX
                             覆盖，否则覆盖常用后缀(‘’)
  -T, --files-from=FILE      从 FILE
                             中获取文件名来解压或创建文件
      --unquote              以 -T
                             读取的文件名作为引用结束(默认)
  -X, --exclude-from=FILE    排除 FILE 中列出的模式串

 文件名变换:

      --strip-components=NUMBER   解压时从文件名中清除 NUMBER
                             个引导部分
      --transform=EXPRESSION, --xform=EXPRESSION
                             使用 sed 代替 EXPRESSION
                             来进行文件名变换

 文件名匹配选项(同时影响排除和包括模式串):

      --anchored             模式串匹配文件名头部
      --ignore-case          忽略大小写
      --no-anchored          模式串匹配任意‘/’后字符(默认对
                             exclusion 有效)
      --no-ignore-case       匹配大小写(默认)
      --no-wildcards         逐字匹配字符串
      --no-wildcards-match-slash   通配符不匹配‘/’
      --wildcards            use wildcards (default)
      --wildcards-match-slash
                             通配符匹配‘/’(默认对排除操作有效)

 提示性输出:

      --checkpoint[=NUMBER]  每隔 NUMBER
                             个记录显示进度信息(默认为 10 个)
      --checkpoint-action=ACTION   在每个检查点上执行 ACTION
      --full-time            print file time to its full resolution
      --index-file=FILE      将详细输出发送至 FILE
  -l, --check-links
                             只要不是所有链接都被输出就打印信息
      --no-quote-chars=STRING   禁用来自 STRING 的字符引用
      --quote-chars=STRING   来自 STRING 的额外的引用字符
      --quoting-style=STYLE  设置名称引用风格；有效的 STYLE
                             值请参阅以下说明
  -R, --block-number         每个信息都显示归档内的块数
      --show-defaults        显示 tar 默认选项
      --show-omitted-dirs
                             列表或解压时，列出每个不匹配查找标准的目录
      --show-transformed-names, --show-stored-names
                             显示变换后的文件名或归档名
      --totals[=SIGNAL]      处理归档后打印出总字节数；当此
                             SIGNAL 被触发时带参数 -
                             打印总字节数；允许的信号为:
                             SIGHUP，SIGQUIT，SIGINT，SIGUSR1 和
                             SIGUSR2；同时也接受不带 SIG
                             前缀的信号名称
      --utc                  以 UTC 格式打印文件修改时间
  -v, --verbose              详细地列出处理的文件
      --warning=KEYWORD      警告控制:
  -w, --interactive, --confirmation
                             每次操作都要求确认

 兼容性选项:

  -o                         创建归档时，相当于
                             --old-archive；展开归档时，相当于
                             --no-same-owner

 其它选项:

  -?, --help                 显示此帮助列表
      --restrict             禁用某些潜在的有危险的选项
      --usage                显示简短的用法说明
      --version              打印程序版本

长选项和相应短选项具有相同的强制参数或可选参数。

除非以 --suffix 或 SIMPLE_BACKUP_SUFFIX
设置备份后缀，否则备份后缀就是“~”。
可以用 --backup 或 VERSION_CONTROL 设置版本控制，可能的值为：

  none, off	   从不做备份
  t, numbered     进行编号备份
  nil, existing
如果编号备份存在则进行编号备份，否则进行简单备份
  never, simple   总是使用简单备份

--quoting-style 选项的有效参数为:

  literal
  shell
  shell-always
  c
  c-maybe
  escape
  locale
  clocale

此 tar 默认为:
--format=gnu -f- -b20 --quoting-style=escape --rmt-command=/etc/rmt
--rsh-command=/usr/bin/ssh
```

#### 参数
```
文件或目录：指定要打包的文件或目录列表
```

#### 打包
```shell
[root@server ~]# tar cvf test.tar test*
test
test1
test10
test2
test3
test4
test5
test6
test7
test8
test9
[root@server ~]# du -sh test.tar
12K     test.tar
```

#### 解包
```
[root@server ~]# tar xvf test.tar
test
test1
test10
test2
test3
test4
test5
test6
test7
test8
test9
```

#### 打包加压缩
```
[root@server ~]# tar zcvf test1.tar.gz test*
test
test1
test10
test2
test3
test4
test5
test6
test7
test8
test9
test.tar
[root@server ~]# ls
anaconda-ks.cfg  test1   test1.tar.gz  test3  test5  test7  test9
test             test10  test2         test4  test6  test8  test.tar
```

#### 解压加解包
```shell
[root@server ~]# tar zxvf test1.tar.gz
test
test1
test10
test2
test3
test4
test5
test6
test7
test8
test9
test.tar
```

# 十七 RHEL9虚拟化
## 17.1 VMware-Workstation-Full-17
### 下载VMware-Workstation-Full-17
```shell
[root@server ~]# wget https://download3.vmware.com/software/WKST-1702-LX/VMware-Workstation-Full-17.0.2-21581411.x86_64.bundle

```
### 安装
```shell
[root@server ~]# chmod 755 VMware-Workstation-Full-17.0.2-21581411.x86_64.bundle
[root@server ~]# ./VMware-Workstation-Full-17.0.2-21581411.x86_64.bundle
Extracting VMware Installer...done.
Installing VMware Workstation 17.0.2
    Configuring...
[######################################################################] 100%
Installation was successful.

[root@server ~]# dnf groupinstall "Development Tools"

[root@server ~]# dnf -y install elfutils-libelf-devel
Updating Subscription Management repositories.
Last metadata expiration check: 1:06:25 ago on Sun 29 Oct 2023 02:30:28 PM CST.
Package elfutils-libelf-devel-0.188-3.el9.x86_64 is already installed.
Dependencies resolved.
Nothing to do.
Complete!

```

## 17.2 KVM

### 检查CPU是否支持虚拟化
For Intel CPUs
```
grep -e 'vmx' /proc/cpuinfo
```

For AMD CPUs
```
grep -e 'svm' /proc/cpuinfo
```

```shell
[root@server ~]# lscpu | grep Virtualization
Virtualization:                  VT-x
Virtualization type:             full
```

### 查看是否安装kvm模块
```shell
[root@server ~]# lsmod | grep kvm
kvm_intel             409600  0
kvm                  1134592  1 kvm_intel
irqbypass              16384  1 kvm
```

### 安装管理工具
```shell
virt-install 是一个命令行工具，用于从命令行创建虚拟机。
virt-viewer 应用程序是一个轻量级的 UI 界面，使您能够使用 VNC 或 SPICE 远程桌面协议与 KVM 虚拟机进行交互。

[root@server ~]# dnf install virt-install virt-viewer -y
```
### 安装libvirt虚拟化守护程序
```shell
[root@server ~]# dnf -y install libvirt
```

### 安装Qt图形界面的virt-manager
```shell
virt-manager是一个基于 Qt 的图形界面，用于使用 libvirt 守护程序管理虚拟机
[root@server ~]# dnf -y install virt-manager
```

### 安装其他工具
```shell
[root@server ~]# dnf -y install virt-top libguestfs-tools
```

### 启动并启用libvirt虚拟化守护进程
```
[root@server ~]# systemctl start libvirtd
[root@server ~]# systemctl enable libvirtd
```

```shell
[root@server ~]# nmcli connection show
NAME    UUID                                  TYPE      DEVICE
ens192  e7d2f61d-cac3-3c1c-9b93-031d9568a1b5  ethernet  ens192
ens160  ba0ae421-403c-38a2-9662-e965c61a354e  ethernet  ens160
lo      60d031cd-9be4-4466-ae25-6c784db14ef2  loopback  lo
virbr0  2e67a56f-c4b9-45b7-9ab7-2d83eb040bce  bridge    virbr0


[root@server ~]# nmcli connection add type bridge connection.autoconnect yes con-name kvmbr0 ifname kvmbr0
Connection 'kvmbr0' (9a7aaf23-93c4-4e34-84bf-6e19cb7237ad) successfully added.


[root@server ~]# nmcli connection modify kvmbr0 ipv4.addresses 10.100.10.135/19 ipv4.gateway 10.100.10.1 ipv4.method manual ipv4.dns 218.106.127.114,218.106.127.122

[root@server ~]# nmcli connection del ens192
Connection 'ens192' (e7d2f61d-cac3-3c1c-9b93-031d9568a1b5) successfully deleted.

[root@server ~]# nmcli connection add type bridge-slave autoconnect yes con-name ens192 ifname ens192 master kvmbr0

[root@server ~]# nmcli connection up kvmbr0

```

```
图形可选配置
[root@server ~]# grep X11Forwarding /etc/ssh/sshd_config
#X11Forwarding no
#       X11Forwarding no

[root@server ~]# rpm -qa |grep xorg
xorg-x11-fonts-ISO8859-1-100dpi-7.5-33.el9.noarch

[root@server ~]# ssh -XY root@10.100.10.135
The authenticity of host '10.100.10.135 (10.100.10.135)' can't be established.
ED25519 key fingerprint is SHA256:bXwGQXiHiPO7lFOuEZw/SrT/Z6hJr/OWw4EfTabb6NM.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.100.10.135' (ED25519) to the list of known hosts.
root@10.100.10.135's password:
Last login: Sun Oct 29 16:15:13 2023 from 10.100.10.100
```

# 十八 shell脚本

## 18.1 介绍
```
Shell 脚本（shell script），是一种为 shell 编写的脚本程序，shell 和 shell script 是两个不同的概念
```
## 18.2 shell环境
```
Shell 编程跟 JavaScript、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了

Linux 的 Shell 种类众多，常见的有：

Bourne Shell（/usr/bin/sh或/bin/sh）
Bourne Again Shell（/bin/bash）
C Shell（/usr/bin/csh）
K Shell（/usr/bin/ksh）
Shell for Root（/sbin/sh）
……
我们最关注的是 Bash，也就是 Bourne Again Shell，由于易用和免费，Bash 在日常工作中被广泛使用。同时，Bash 也是大多数Linux 系统默认的 Shell

在一般情况下，人们并不区分 Bourne Shell 和 Bourne Again Shell，所以，像 #!/bin/sh，它同样也可以改为 #!/bin/bash。

#! 告诉系统其后路径所指定的程序即是解释此脚本文件的 Shell 程序。
```

```
#！/bin/bash
echo "hello world"
```
## 18.3 语法
```
chmod +x first-shell.sh # 使脚本具有执行权限

sh first-shell.sh # 执行脚本  解释器 脚本  /bin/sh first-shell.sh

./first-shell.sh # 执行脚本  

指定sh shell解释，不用默认的bash
```

## 18.4 shell变量
```shell
定义变量时，变量名不加美元符号（$，PHP语言中变量需要），如：
username="shuaiqijun"

注意，变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。同时，变量名的命名须遵循如下规则：
命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
中间不能有空格，可以使用下划线 _。
不能使用标点符号。
不能使用bash里的关键字（可用help命令查看保留关键字）。

除了显式地直接赋值，还可以用语句给变量赋值，如：
for file in `ls /etc`
或
for file in $(ls /etc)
```
### 18.4.1 使用变量
```
使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

#!/bin/bash
username="shuaiqijun"
echo $username
echo ${username}

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script"
done
以上脚本输出为：
I am good at AdaScript
I am good at CoffeScript
I am good at ActionScript
I am good at JavaScript
如果不给skill变量加花括号，写成echo "I am good at $skillScript"，解释器就会把$skillScript当成一个变量（其值为空）
推荐给所有变量加上花括号，这是个好的编程习惯

your_name="tom"  
echo $your_name  
your_name="alibaba"  
echo $your_name
这样写是合法的，但注意，第二次赋值的时候不能写$your_name="alibaba"，使用变量的时候才加美元符$
```

### 18.4.2 只读变量
```shell
使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。
下面的例子尝试更改只读变量，结果报错：
#!/bin/bash

myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"

运行结果：
./test.sh: line 34: myUrl: readonly variable
```
### 18.4.3 删除变量
```
使用 unset 命令可以删除变量。语法：
unset variable_name

变量被删除后不能再次使用。unset 命令不能删除只读变量

#!/bin/sh  
  
myUrl="https://www.runoob.com"  
unset myUrl  
echo $myUrl
执行结果：
[root@server ~]# ./test1.sh
./test1.sh: line 4: unset myUrl: command not found
./test1.sh: line 5: echo https://www.runoob.com: No such file or directory
```

### 18.4.4 变量类型
```
运行shell时，会同时存在三种变量：

1.局部变量   局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
2.环境变量   所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。
3.shell变量  shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行
```
### 18.4.5 shell字符串
```
字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。
```
#### 单引号
```shell
单引号
str='this is a string'

单引号字符串的限制：
单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用
```
#### 双引号
```shell
your_name="runoob"
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str

执行输出结果：
Hello, I know you are "runoob"!

双引号的优点：
双引号里可以有变量
双引号里可以出现转义字符
```
#### 拼接字符串
```shell
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1

# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3

执行结果输出：
hello, runoob ! hello, runoob !
hello, runoob ! hello, ${your_name} !
```
#### 获取字符串长度
```shell
string1="abcd"  
echo ${#string1}
# 执行输出结果：
[root@server ~]# ./1.sh
./1.sh: line 3: echo 4: command not found

变量为字符串时，${#string} 等价于 ${#string[0]}

string1="abcd"
echo ${#string1[0]}
# 执行输出结果：
[root@server ~]# ./1.sh
./1.sh: line 3: echo 4: command not found
```
#### 提取子字符串
```shell
# 以下实例从字符串第 2 个字符开始截取 4 个字符：
string="runoob is a great site"
echo ${string:1:4} 
# 执行输出结果：
[root@server ~]# ./1.sh
unoo

**注意**：第一个字符的索引值为 0
```
#### 查找子字符串
```shell
查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)
string="runoob is a great site"
echo `expr index "$string" io`
# 执行输出结果
[root@server ~]# ./1.sh
4

注意： 以上脚本中 `是反引号，而不是单引号'哦
```
## 18.5 shell数组
```
bash支持一维数组（不支持多维数组），并且没有限定数组的大小。

类似于 C 语言，数组元素的下标由 0 开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于 0
```
### 18.5.1 定义数组
```shell
在 Shell中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：
数组名=(值1 值2 ... 值n)
array_name=(value0 value1 value2 value3)
或者
array_name=(
value0
value1
value2
value3
)

还可以单独定义数组的各个分量
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen

可以不使用连续的下标，而且下标的范围没有限制
```
### 18.5.2 读取数组
```shell
读取数组元素值的一般格式是：
${数组名[下标]}
valuen=${array_name[n]}

使用 @ 符号可以获取数组中的所有元素，例如：
echo ${array_name[@]}


#!/bin/sh
user=(
zhangsan
lisi
wangwu
zhaoliu
        )

user[10]="lixiaolong"

echo ${user[0]}
echo ${user[@]}

# 执行输出结果：
[root@server ~]# ./1.sh
zhangsan
zhangsan lisi wangwu zhaoliu lixiaolong
```
## 18.6 shell脚本的特殊变量
```bash
#!/bin/bash

# $0表示脚本文件的执行路径，大多情况会列出脚本的名字
echo "FiTe Name: $0"

# $1表示传给脚本的第一个参数
echo "First Parameter: $1"

# $2表示传给脚本的第二个参数   $n代表第n个参数
echo "Second Parameter: $2"

#$@和$*特殊变量表示传给脚本的所有参数
echo "Quoted Values: $@"
echo "Quoted VaTues: $*" 

: '$* 与 $@ 区别：
- 相同点：都是引用所有参数。
- 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，则 " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）'

# $#表示传给脚本参数的数量
echo "Number of Parameters: $#"
```

![](../../Images/Pasted%20image%2020231030133733.png)

```shell
[root@rehc9 ~]# ./var.sh test1 test2
FiTe Name: ./var.sh
First Parameter: test1
First Parameter: test2
Quoted Values: test1 test2
Quoted VaTues: test1 test2
Number of Parameters: 2
```

## 18.7 shell注释
### 18.7.1 单行注释
```shell
以#开头的行就是注释，会被解释器忽略

##### 用户配置区 开始 #####
#
#
# 这里可以添加脚本描述信息
#
#
##### 用户配置区 结束  #####

```
### 18.7.2 多行注释
```
如果在开发过程中，遇到大段的代码需要临时注释起来，过一会儿又取消注释，怎么办呢？

每一行加个#符号太费力了，可以把这一段要注释的代码用一对花括号括起来，定义成一个函数，没有地方调用这个函数，这块代码就不会执行，达到了和注释一样的效果。
```

```shell
多行注释还可以使用以下格式：
:<<EOF
注释内容...
注释内容...
注释内容...
EOF
```

```
以上例子中，: 是一个空命令，用于执行后面的 Here 文档，<<'EOF' 表示开启 Here 文档，COMMENT 是 Here 文档的标识符，在这两个标识符之间的内容都会被视为注释，不会被执行
EOF 也可以使用其他符号:
```

```shell
: <<'COMMENT'
这是注释的部分。
可以有多行内容。
COMMENT

:<<'
注释内容...
注释内容...
注释内容...
'

:<<!
注释内容...
注释内容...
注释内容...
!
```

```
直接使用 : 号

我们也可以使用了冒号 : 命令，并用单引号 ' 将多行内容括起来。由于冒号是一个空命令，这些内容不会被执行。

格式为：: + 空格 + 单引号。
```

```shell
: '
这是注释的部分。
可以有多行内容。
'
```

## 18.8 shell 运算符
### 18.8.1 介绍
```
Shell 和其他编程语言一样，支持多种运算符，包括：
算数运算符
关系运算符
布尔运算符
字符串运算符
文件测试运算符
原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。
```

```shell
expr 是一款表达式计算工具，使用它能完成表达式的求值操作。
例如，两个数相加(注意使用的是反引号`，而不是单引号')：

#!/bin/bash

val=`expr 2 + 2`
echo "两数之和为 : $val"

# 执行输出结果
[root@server ~]# ./1.sh
两数之和为 : 4

两点注意：
表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2，这与我们熟悉的大多数编程语言不一样
完整的表达式要被 ` ` 包含，注意这个字符不是常用的单引号，在 Esc 键下边
```

### 18.8.2 算数运算符
```
下表列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：
```

![](../../Images/Pasted%20image%2020231030140032.png)
```
注意：条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]
```

```shell
a=10  
b=20  
  
val=`expr $a + $b`  
echo "a + b : $val"  
  
val=`expr $a - $b`  
echo "a - b : $val"  
  
val=`expr $a \* $b`  
echo "a * b : $val"  
  
val=`expr $b / $a`  
echo "b / a : $val"  
  
val=`expr $b % $a`  
echo "b % a : $val"  
  
if [ $a == $b ]  
then  
   echo "a 等于 b"  
fi  
if [ $a != $b ]  
then  
   echo "a 不等于 b"  
fi

# 执行输出结果
[root@server ~]# ./1.sh
a + b : 30
a - b : -10
a * b : 200
b / a : 2
b % a : 0
a 不等于 b

注意：
乘号(*)前边必须加反斜杠(\)才能实现乘法运算；
if...then...fi 是条件语句，后续将会讲解。
在 MAC 中 shell 的 expr 语法是：$((表达式))，此处表达式中的 "*" 不需要转义符号 "\" 。
```

### 18.8.3 关系运算符
```
关系运算符只支持数字，不支持字符串，除非字符串的值是数字。
下表列出了常用的关系运算符，假定变量 a 为 10，变量 b 为 20：
```

![](../../Images/Pasted%20image%2020231030141422.png)

```shell
a=10
b=20

if [ $a -eq $b ]
then
   echo "$a -eq $b : a 等于 b"
else
   echo "$a -eq $b: a 不等于 b"
fi
if [ $a -ne $b ]
then
   echo "$a -ne $b: a 不等于 b"
else
   echo "$a -ne $b : a 等于 b"
fi
if [ $a -gt $b ]
then
   echo "$a -gt $b: a 大于 b"
else
   echo "$a -gt $b: a 不大于 b"
fi
if [ $a -lt $b ]
then
   echo "$a -lt $b: a 小于 b"
else
   echo "$a -lt $b: a 不小于 b"
fi
if [ $a -ge $b ]
then
   echo "$a -ge $b: a 大于或等于 b"
else
   echo "$a -ge $b: a 小于 b"
fi
if [ $a -le $b ]
then
   echo "$a -le $b: a 小于或等于 b"
else
   echo "$a -le $b: a 大于 b"
fi

# 执行输出结果：
[root@server ~]# ./1.sh
10 -eq 20: a 不等于 b
10 -ne 20: a 不等于 b
10 -gt 20: a 不大于 b
10 -lt 20: a 小于 b
10 -ge 20: a 小于 b
10 -le 20: a 小于或等于 b
```

### 18.8.4 布尔运算符
```
下表列出了常用的布尔运算符，假定变量 a 为 10，变量 b 为 20：
```

![](../../Images/Pasted%20image%2020231030141857.png)

```shell
a=10  
b=20  
  
if [ $a != $b ]  
then  
   echo "$a != $b : a 不等于 b"  
else  
   echo "$a == $b: a 等于 b"  
fi  
if [ $a -lt 100 -a $b -gt 15 ]  
then  
   echo "$a 小于 100 且 $b 大于 15 : 返回 true"  
else  
   echo "$a 小于 100 且 $b 大于 15 : 返回 false"  
fi  
if [ $a -lt 100 -o $b -gt 100 ]  
then  
   echo "$a 小于 100 或 $b 大于 100 : 返回 true"  
else  
   echo "$a 小于 100 或 $b 大于 100 : 返回 false"  
fi  
if [ $a -lt 5 -o $b -gt 100 ]  
then  
   echo "$a 小于 5 或 $b 大于 100 : 返回 true"  
else  
   echo "$a 小于 5 或 $b 大于 100 : 返回 false"  
fi

# 执行输出结果：
[root@server ~]# ./1.sh
10 != 20 : a 不等于 b
10 小于 100 且 20 大于 15 : 返回 true
10 小于 100 或 20 大于 100 : 返回 true
10 小于 5 或 20 大于 100 : 返回 false
```
### 18.8.5 逻辑运算符
```
以下介绍 Shell 的逻辑运算符，假定变量 a 为 10，变量 b 为 20:
```

![](../../Images/Pasted%20image%2020231030142245.png)

```shell
a=10
b=20

if [[ $a -lt 100 && $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

if [[ $a -lt 100 || $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

# 执行输出结果
[root@server ~]# ./1.sh
返回 false
返回 true
```

### 18.8.6 字符运算符
```
下表列出了常用的字符串运算符，假定变量 a 为 "abc"，变量 b 为 "efg"：
```

![](../../Images/Pasted%20image%2020231030143647.png)

```shell
a="abc"
b="efg"

if [ $a = $b ]
then
   echo "$a = $b : a 等于 b"
else
   echo "$a = $b: a 不等于 b"
fi
if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a != $b: a 等于 b"
fi
if [ -z $a ]
then
   echo "-z $a : 字符串长度为 0"
else
   echo "-z $a : 字符串长度不为 0"
fi
if [ -n "$a" ]
then
   echo "-n $a : 字符串长度不为 0"
else
   echo "-n $a : 字符串长度为 0"
fi
if [ $a ]
then
   echo "$a : 字符串不为空"
else
   echo "$a : 字符串为空"
fi

# 执行输出结果：
[root@server ~]# ./1.sh
abc = efg: a 不等于 b
abc != efg : a 不等于 b
-z abc : 字符串长度不为 0
-n abc : 字符串长度不为 0
abc : 字符串不为空
```

### 18.8.7 文件测试运算符
```
文件测试运算符用于检测 Unix 文件的各种属性。
属性检测描述如下：
```

![](../../Images/Pasted%20image%2020231030144048.png)

```
其他检查符：

-S: 判断某文件是否 socket。
-L: 检测文件是否存在并且是一个符号链接。
```

```shell
变量 file 表示文件 /root/test.sh，它的大小为 1.3K，root具有 rwx 权限。下面的代码，将检测该文件的各种属性：

file="/root/test.sh"
if [ -r $file ]
then
   echo "文件可读"
else
   echo "文件不可读"
fi
if [ -w $file ]
then
   echo "文件可写"
else
   echo "文件不可写"
fi
if [ -x $file ]
then
   echo "文件可执行"
else
   echo "文件不可执行"
fi
if [ -f $file ]
then
   echo "文件为普通文件"
else
   echo "文件为特殊文件"
fi
if [ -d $file ]
then
   echo "文件是个目录"
else
   echo "文件不是个目录"
fi
if [ -s $file ]
then
   echo "文件不为空"
else
   echo "文件为空"
fi
if [ -e $file ]
then
   echo "文件存在"
else
   echo "文件不存在"
fi

# 执行输出结果
[root@server ~]# ./test.sh
文件可读
文件可写
文件可执行
文件为普通文件
文件不是个目录
文件不为空
文件存在
```

### 18.8.8 test命令
```
Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。
```

![](../../Images/Pasted%20image%2020231030150106.png)

![](../../Images/Pasted%20image%2020231030150140.png)


![](../../Images/Pasted%20image%2020231030150231.png)

```
另外，Shell 还提供了与( -a )、或( -o )、非( ! )三个逻辑操作符用于将测试条件连接起来，其优先级为： ! 最高， -a 次之， -o 最低。
```

![](../../Images/Pasted%20image%2020231030150354.png)

# 十九 计划任务
## 19.1 一次性计划任务

### 19.1.1 创建计划任务
```shell
#!/bin/bash
cp /root/1.sh /root/newfile-`date "+%Y%m%d-%H-%M-%S"`.sh

[root@server ~]# at 14:20
warning: commands will be executed using /bin/sh
at> /root/test.sh
at> <EOT>
job 5 at Tue Oct 31 14:20:00 2023
[root@server ~]#

CTRL+d 提交一次性计划任务，提交成功后显示：
at> <EOT>
job 5 at Tue Oct 31 14:20:00 2023
```

### 19.1.2 查看计划任务
```shell
[root@rehc9 ~]# at 18:40 +5day
warning: commands will be executed using /bin/sh
at> ./root/t.sh
at> <EOT>
job 1 at Sun Nov  5 18:40:00 2023


[root@rehc9 ~]# atq
1       Sun Nov  5 18:40:00 2023 a root

```

### 19.1.3 一次性计划任务使用控制
```
/etc/at.allow  白名单需自己添加，默认没有这个文件，需要自己创建
/etc/at.deny
不建议黑白名单同时使用
一行一个用户名
```

## 19.2 周期性计划任务
```shell
mkdir /opt/yum-repo-backup-dir -p
cp -r /etc/yum.repos.d /opt/yum-repo-backup-dir/yum.repos.d-`date "+%Y%m%d-%H-%M-%S"`.bak

if[`ls /opt/yum-repo-backup-dir/ | wc -l` -ge 10]
then
        for i in `ls -tr /opt/yum-repo-backup-dir/ |head -5`
        do
                rm -rf /opt/yum-repo-backup-dir/$i
        done
        fi


我们针对上面简单的备份脚本进行了一些扩展。加了一个条件判断和循环，实现了保证系统中只有5~9个最新的备份文件存在。这里只以备份文件的数量作为判断依据，并没有考虑到备份文件的大小以及当前磁盘的使用率。这往往是不符合生产环境要求的，但是想到这只是一个示例，我就懒得扩展了，毕竞写的太复杂了，大部分萌新理解起来还会更加痛苦，而且我也懒得写那么多条件判断，注意，自己写脚本一定要在1ab环境上测试，并且是反复测试，而且测试情况必须满足自己所设置的所有条件，没问题了，再在生产环境上使用。且行且珍惜。
上述脚本做了一个条件判断，检查/opt/yum-repo-backup-dir/里面的文件数量，如果大于等于10个则进行for循环操作。for循环读取了/opt/yum-repo-backup-dir/目录下最旧的5个备份文件 (1s -tr会让文件以时间排序，-t参数是以修改时间排序，-下参数是时间的反序)，并将它们分别传入-i参数，然后rm命令删除指定文件。(使用rm命令的时候一定要注意!!!!!!!!!!)
上述脚本在反复运行之后会保证/opt/yum-repo-backup-dir/备份文件数量维持在5~9个。实际自己写脚本的时候一定要考虑分区使用率，要保证分区剩余空间不能影响应用的运行，具体情况具体分析。
```

### 19.2.1 创建周期性计划任务
```shell
创建周期性计划任务使用的是crontab命令，和一次性计划任务一样周期性计划任务也有服务来监控'周期性的计划'，这个服务的名字是crond

[root@rehc9 ~]# systemctl status crond
● crond.service - Command Scheduler
     Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; preset: enabled)
     Active: active (running) since Sun 2023-10-29 18:49:59 CST; 2 days ago
   Main PID: 1140 (crond)
      Tasks: 1 (limit: 100220)
     Memory: 1.5M
        CPU: 133ms
     CGroup: /system.slice/crond.service
             └─1140 /usr/sbin/crond -n


crontab -e 编辑当前shell用户的计划任务。

crontab -e -u gzy 编辑gzy用户的计划任务，只有root用户可以编辑其他人的计划任务

crontab -l 列出当前用户的所有计划任务

crontab -l -u gzy 列出gzy用户的所有计划任务

编辑计划任务的操作和vim编辑一个文件一样，但是要遵循特定的格式才能让计划任务生效，每一行都代表一个计划任务，标准的格式如下:

```

![](../../Images/Pasted%20image%2020231031210052.png)

# 二十 Ansible自动化
## ansible介绍

```
ansible是一个简单的强大的无代理的自动化运维工具
```

## RH294虚拟
```shell
rh294虚拟机的账号和密码：
kiosk rehat
root Asimov

在rh294的机器环境中有7个基于KVM的虚拟机，分别是：
workstation虚拟机(作为ansible control host)
servera，serverb，serverc，serverd (作为ansible managed host)
bastion (提供了一个外部网络)
classroom虚拟机(提供了练习环境脚本，软件仓库，课程材料)
你如果想管理这些教学环境的虚拟机，不需要掌握虚拟化知识。红帽提供了非常方便的管理工具rht tools，red hat training tools

这些虚拟机的启动顺序，先启动classroom，在启动剩下所有的虚拟机。刚开始的环境，虚拟机并没有在环境中存在，需要使用命令拉取虚拟机

[kiosk@foundation0 ~]$ rht-vmctl fullreset classroom
Are you sure you want to full reset classroom? (y/n) y
Powering off classroom..
Full resetting classroom.Creating virtual machine disk overlay for rh294-classroom-vda.gcow2
Starting classroom.

rht-vmctl命令就是rht tools
rht-vmctl fullreset 的意思就是完全重置某个虚拟机
rht-vmctl fullreset classroom
rht-vmctl fullreset all的意思就是完全重置所有虚拟机

classroom启动之后，我们第一次加载环境，需要将其他的虚拟机文件全部加载到环境里
rht-vmctl start classroom

[kiosk@foundation0 ~]$ rht-vmctl status all
bastion RUNNING
workstation RUNNING
servera RUNNING
serverb RUNNING
serverc RUNNING
serverd RUNNING
[kiosk@foundation0 ~]$ rht-vmctl status classroom
classroom RUNNING

```

```shell
[kiosk@foundation0 ~]$ cat /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
### rht-vm-hosts file listing the entries to be appended to /etc/hosts
#
172.25.250.9    workstation.lab.example.com      workstation
172.25.250.10   servera.lab.example.com servera
172.25.250.11   serverb.lab.example.com serverb
172.25.250.12   serverc.lab.example.com serverc
172.25.250.13   serverd.lab.example.com serverd
172.25.250.254  bastion.lab.example.com bastion
[kiosk@foundation0 ~]$ ssh workstation
Activate the web console with: systemctl enable --now cockpit.socket

Last login: Thu Nov  2 21:13:36 2023 from 172.25.250.250

[student@workstation ~]$ ansible --version
ansible 2.8.0
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/student/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python3.6/site-packages/ansible
  executable location = /usr/bin/ansible
  python version = 3.6.8 (default, Apr  3 2019, 17:26:03) [GCC 8.2.1 20180905 (Red Hat 8.2.1-3)]


```

## 如何操作我们的RH294环境
```
我们后面的练习都是通过rh294的物理操作系统连接到workstation来操作
workstation是我们的ansible control节点
servera~d是我们的ansible managed节点
几乎所有的虚拟机的root密码都是redhat
除了root用户之外还有一个叫做student的特权用户，该用户的密码是student
classroom的root密码是Asimov
```

```shell
[student@workstation ~]$ lab intro-install start

Setting up the environment for the exercise:

 · Configuring control node packages...........................  SUCCESS

[student@workstation ~]$ cd /usr/lib/python3.6/site-packages/ansible/modules
[student@workstation modules]$ ls
cloud       files        monitoring    __pycache__        utilities
clustering  identity     net_tools     remote_management  web_infrastructure
commands    __init__.py  network       source_control     windows
crypto      inventory    notification  storage
database    messaging    packaging     system
[student@workstation modules]$ cd network
[student@workstation network]$ ls
a10         cloudengine  exos          ios        netvisor  __pycache__
aci         cloudvision  f5            iosxr      nos       radware
aireos      cnos         files         ironware   nso       restconf
aos         cumulus      fortimanager  itential   nuage     routeros
aruba       dellos10     fortios       junos      nxos      routing
asa         dellos6      frr           layer2     onyx      skydive
avi         dellos9      ftd           layer3     opx       slxos
bigswitch   edgeos       illumos       meraki     ordnance  sros
checkpoint  edgeswitch   ingate        netact     ovs       system
citrix      enos         __init__.py   netconf    panos     voss
cli         eos          interface     netscaler  protocol  vyos
[student@workstation network]$

```

## ansible的inventory文件
```
# inventory文件定义了ansible管理的主机，说白了就是inventory文件中的内容是记录被管理的主机

# inventory文件分为两种，一种是静态inventory文件，一种是动态inventory文件
```
### 静态inventory文件编写
```shell
[student@workstation ~]$ vim inventory
[storage]
servera
serverb
# 一个主机可以属于多个组
[compute]
serverb
serverc
serverd

# 嵌套主机组必须要在后面加上:children
[cloud:children]
storage
compute


192.168.[0:1].[0:255]
server[a:d]



在ansible的inventory文件中有俩个特殊的组，一个是all，一个ungrouped
all主机组表示inventory文件中的所有的主机
ungrouped主机组表示不属于任何主机组的被管理主机
```

### 查看inventory文件
```shell
[student@workstation ~]$ ansible -i /home/student/inventory cloud  --list-hosts
  hosts (4):
    servera
    serverb
    serverc
    serverd

ansible命令-i参数可以指定inventory文件的路径，-i的优先级最高
```

```shell
[student@workstation ~]$ lab deploy-inventory start

Setting up workstation for lab exercise work:

 · Verify ansible is installed on workstation control node.....  SUCCESS
 · Backup /etc/ansible/hosts inventory.........................  SUCCESS

```

```shell
[student@workstation ~]$ sudo vim /etc/ansible/hosts
servera.lab.example.com

[webservers]
serverb.lab.example.com

[student@workstation ~]$ ansible all --list-hosts
  hosts (2):
    servera.lab.example.com
    serverb.lab.example.com
[student@workstation ~]$ ansible ungrouped --list-hosts
  hosts (1):
    servera.lab.example.com
[student@workstation ~]$ ansible webservers --list-hosts
  hosts (1):
    serverb.lab.example.com

```

```shell
[Development]
servera.lab.example.com

[Testing]
serverb.lab.example.com

[Production]
server[c:d].lab.example.com

[Raleigh]
server[a:b].lab.example.com

[MountainView]
serverc.lab.example.com

[London]
serverd.lab.example.com

[webservers:children]
server[a:d].lab.example.com
```

```shell
ansible的配置文件是不是全局的，不同的用户可以有不同的ansible配置文件
ansible在安装的时候就会有一个默认的配置文件/etc/ansible/ansible.cfg
如果你不想使用这个安装自带的ansible配置文件，可以自己创建
一般生产环境中，都是创建一个你自己的目录，然后在该目录下创建自己的ansible配置文件
如果没有任何其他的ansible配置文件，默认就会用/etc/ansible/ansible.cfg

# 如何查看当前使用的ansible配置文件
[student@workstation ~]$ ansible --version
ansible 2.8.0
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/student/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python3.6/site-packages/ansible
  executable location = /usr/bin/ansible
  python version = 3.6.8 (default, Apr  3 2019, 17:26:03) [GCC 8.2.1 20180905 (Red Hat 8.2.1-3)]

家目录下的.ansible.cfg优先级高于/etc/ansible/ansible.cfg
当前目录下的ansible配置文件高于家目录ansible配置文件
export ANSIBLE_CONFIG环境变量设置的配置文件最高

```

```shell
[student@workstation ~]$ grep -v "#" /etc/ansible/ansible.cfg | grep -v "^$"
[defaults]
[inventory]
[privilege_escalation]
[paramiko_connection]
[ssh_connection]
[persistent_connection]
[accelerate]
[selinux]
[colors]
[diff]

ansible的配置文件中是以sector划分的，每一个中括号就表示一个sector

[defaults]
inventory = /etc/ansible/hosts
#表示该配置文件默认使用的Inventory文件是/etc/ansible/hosts
remote user = ergou
#表示该配置文件使用ergou用户来去进行ssh连接
ask pass = false
#表示使用ergou用户去ssh连接的时候不提示输入密码

[privilege_escalation]
# 如果你的remote_user使用的是root用户吗，就不需要配置提权部分，如果你的remote_user不是root，但是不需要做提权操作，那么也可以不用配置这部分，如果是普通用户，但是要做提权操作，那么就需要配置这部分
become=True
# true表示需要提权，false表示不需要提权
become_method=sudo
# 表示提权的方式是sudo提权
become_user=root
# 表示提权到root用户
become_ask_pass=False
# false表示进行sudo操作时不提示输入密码，true表示需要输入密码

不是任何用户作为remote_user，且配置了提权就能真的提权。而必须要在被管理主机里面配置sudoers文件，让这个remote_user有提权的能力才可以

ssh可以设置免密登录，避免remote_user使用ssh登录的时候输入密码
sudoers
```

```shell
[student@workstation ~]$ ansible -i /home/student/inventory all --list-hosts
  hosts (4):
    servera
    serverb
    serverc
    serverd
[student@workstation ~]$ ansible localhost -i /home/student/inventory --list-hosts
  hosts (1):
    localhost
```

```shell
[student@workstation deploy-manage]$ cat > ansible.cfg << END
> [defaults]
> inventory = ./inventory
> END
```

```shell
[student@workstation deploy-manage]$ cat inventory
[myself]
localhost

[intranetweb]
servera.lab.example.com

[internetweb]
serverb.lab.example.com

[web:children]
intranetweb
internetweb

    serverb.lab.example.com
[student@workstation ~]$ cat /etc/ansible/hosts
servera.lab.example.com

[webservers]
serverb.lab.example.com

[student@workstation ~]$ cat inventory
[storage]
servera
serverb

[compute]
serverb
serverc
serverd

[cloud:children]
storage
compute


[student@workstation ~]$ pwd
/home/student
[student@workstation ~]$ ansible -i /home/student/inventory all --list-hosts
  hosts (4):
    servera
    serverb
    serverc
    serverd
[student@workstation ~]$ ansible localhost -i /home/student/inventory --list-hosts
  hosts (1):
    localhost
[student@workstation ~]$ clear
[student@workstation ~]$ lab deploy-manage start

Setting up workstation for lab exercise work:

 · ansible package is installed on workstation.................  SUCCESS

[student@workstation ~]$ ls
deploy-inventory  inventory  shuai
[student@workstation ~]$ mkdir ~/deploy-mange
[student@workstation ~]$ mv deploy-mange deploy-manage
[student@workstation ~]$ ls
deploy-inventory  deploy-manage  inventory  shuai
[student@workstation ~]$ cd deploy-manage
[student@workstation deploy-manage]$ cat > ansible.cfg << END
> [defaults]
> inventory = ./inventory
> END
[student@workstation deploy-manage]$ cat > inventory <<END
[myself]
localhost

[intranetweb]
servera.lab.example.com

> [internetweb]
> serverb.lab.example.com
>
> [web:children]
> intranetweb
> internetweb
> END
[student@workstation deploy-manage]$ ls
ansible.cfg  inventory
[student@workstation deploy-manage]$ cat inventory
[myself]
localhost

[intranetweb]
servera.lab.example.com

cat > inventory <<END
[myself]
localhost

[intranetweb]
servera.lab.example.com


[internetweb]
serverb.lab.example.com

[web:children]
intranetweb
internetweb
[student@workstation deploy-manage]$ vim inventory
[student@workstation deploy-manage]$ cat inventory
[myself]
localhost

[intranetweb]
servera.lab.example.com

[internetweb]
serverb.lab.example.com

[web:children]
intranetweb
internetweb


[student@workstation deploy-manage]$ unset ANSIBLE_CONFIG
# 取消刚才设置的环境变量
```

### ansible ad hoc
```shell
# ad hoc的命令格式
ad hoc的命令格式其实就是
ansible "host-pattern" -m "module" -a "module argument" -i "inventory-path"

[student@workstation deploy-manage]$ ansible intranetweb -m ping
BECOME password:
servera.lab.example.com | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": false,
    "ping": "pong"
}

ping 模块表示在被管理主机上使用ping命令来ping控制节点
如果是success就表示你的被管理主机到控制节点是可达的
```

```shell
[student@workstation ~]$ ansible-doc -l | wc -l
2834

[student@workstation ~]$ ansible -m user -a "name=shuai uid=5000 state=present" intranetweb
 [WARNING]: provided hosts list is empty, only localhost is available. Note that the implicit localhost does
not match 'all'

 [WARNING]: Could not match supplied host pattern, ignoring: intranetweb

[student@workstation ~]$ ls
deploy-manage
[student@workstation ~]$ cd deploy-manage
[student@workstation deploy-manage]$ ls
ansible.cfg  inventory

# 添加用户
[student@workstation deploy-manage]$ ansible -m user -a "name=shuai uid=5000 state=present" intranetweb
BECOME password:
servera.lab.example.com | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": true,
    "comment": "",
    "create_home": true,
    "group": 5000,
    "home": "/home/shuai",
    "name": "shuai",
    "shell": "/bin/bash",
    "state": "present",
    "system": false,
    "uid": 5000
}

```

```shell 
免密登录
[student@workstation deploy-manage]$ cat ansible.cfg
[defaults]
inventory=./inventory
ask_pass=false

[privilege_escalation]
become = true
become_method = sudo
become_user = root
become_ask_pass = false


[student@servera ~]$ sudo vim /etc/sudoers
student ALL=(ALL) NOPASSWD:ALL
```

```shell
ansible有一个特殊的模块叫command
command模块能让你直接通过ansible在被管理主机上敲命令

[student@workstation deploy-manage]$ ansible intranetweb -m command -a "id"
servera.lab.example.com | CHANGED | rc=0 >>
uid=0(root) gid=0(root) groups=0(root) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

```

```shell
使用yum模块给intranetweb组主机安装Nginx
[student@workstation deploy-manage]$ ansible intranetweb -m yum -a "name=nginx state=latest"
servera.lab.example.com | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": true,
    "msg": "",
    "rc": 0,
    "results": [
        "Installed: nginx",
        "Installed: libwebp-1.0.0-1.el8.x86_64",
        "Installed: perl-Carp-1.42-396.el8.noarch",
        "Installed: perl-Errno-1.28-416.el8.x86_64",
        "Installed: gd-2.2.5-6.el8.x86_64",
        "Installed: perl-Exporter-5.72-396.el8.noarch",
        "Installed: perl-File-Path-2.15-2.el8.noarch",
        "Installed: perl-IO-1.38-416.el8.x86_64",
        "Installed: perl-PathTools-3.74-1.el8.x86_64",
        "Installed: libXpm-3.5.12-7.el8.x86_64",
        "Installed: perl-Scalar-List-Utils-3:1.49-2.el8.x86_64",
        "Installed: perl-Socket-4:2.027-2.el8.x86_64",
        "Installed: perl-Text-Tabs+Wrap-2013.0523-395.el8.noarch",
        "Installed: libtiff-4.0.9-13.el8.x86_64",
        "Installed: perl-Unicode-Normalize-1.25-396.el8.x86_64",
        "Installed: perl-constant-1.33-396.el8.noarch",
        "Installed: perl-interpreter-4:5.26.3-416.el8.x86_64",
        "Installed: perl-libs-4:5.26.3-416.el8.x86_64",
        "Installed: perl-macros-4:5.26.3-416.el8.x86_64",
        "Installed: perl-parent-1:0.237-1.el8.noarch",
        "Installed: perl-threads-1:2.21-2.el8.x86_64",
        "Installed: perl-threads-shared-1.58-2.el8.x86_64",
        "Installed: jbigkit-libs-2.1-14.el8.x86_64",
        "Installed: libxslt-1.1.32-3.el8.x86_64",
        "Installed: libjpeg-turbo-1.5.3-7.el8.x86_64",
        "Installed: nginx-1:1.14.1-8.module+el8+2505+fe936cef.x86_64",
        "Installed: nginx-all-modules-1:1.14.1-8.module+el8+2505+fe936cef.noarch",
        "Installed: nginx-filesystem-1:1.14.1-8.module+el8+2505+fe936cef.noarch",
        "Installed: nginx-mod-http-image-filter-1:1.14.1-8.module+el8+2505+fe936cef.x86_64",
        "Installed: nginx-mod-http-perl-1:1.14.1-8.module+el8+2505+fe936cef.x86_64",
        "Installed: nginx-mod-http-xslt-filter-1:1.14.1-8.module+el8+2505+fe936cef.x86_64",
        "Installed: nginx-mod-mail-1:1.14.1-8.module+el8+2505+fe936cef.x86_64",
        "Installed: nginx-mod-stream-1:1.14.1-8.module+el8+2505+fe936cef.x86_64"
    ]
}


```

### ad hoc练习
```shell
[student@workstation ~]$ lab deploy-adhoc start

Setting up workstation for lab exercise work:

 · ansible package is installed on workstation.................  SUCCESS
 · Create exercise directory...................................  SUCCESS
 · Download Ansible configuration..............................  SUCCESS
 · Download Ansible inventory..................................  SUCCESS
```

```shell
[student@workstation ~]$ ls
deploy-adhoc  deploy-manage
```

```shell
[student@workstation ~]$ cd deploy-adhoc/
[student@workstation deploy-adhoc]$ ls
ansible.cfg  inventory
```

```shell
[student@workstation deploy-adhoc]$ cat ansible.cfg
[defaults]
inventory=inventory
```

```shell
[student@workstation deploy-adhoc]$ cat inventory
[control_node]
localhost

[intranetweb]
servera.lab.example.com
```

```shell
[student@workstation deploy-adhoc]$ sudo cat /etc/sudoers.d/devops
[sudo] password for student:
devops ALL=(ALL) NOPASSWD: ALL
```

```shell
[student@workstation deploy-adhoc]$ ansible all -a "id" -u devops
servera.lab.example.com | CHANGED | rc=0 >>
uid=1001(devops) gid=1001(devops) groups=1001(devops) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

localhost | CHANGED | rc=0 >>
uid=1001(devops) gid=1001(devops) groups=1001(devops) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

-u 参数表示remote_user用devops用户
```

### playbook

```
playbook就是个电视剧
play就是电视剧的每一集
task就是每一集的剧情

一个playbook中有多个play，每个play中有多个task

每一个task都是一个ansible的模块
```

### 编辑一个playbook
```shell
[student@workstation deploy-manage]$ vim first.yaml
- name: This is my first play
  hosts: servera
  tasks:
          - name: create a new user
            user:
                    name: shuaige
                    password: 123
                    uid: 5005
                    group: root
                    state: persent

# play > task > module，如果平级缩进就要一样

# 这个playbook，只有一个play，这个play的被管理主机是servera，里面有一个task，这个task的名字叫做create a new user，这个task使用了user模块，创建了shuaige用户，uid是5005，密码是123，所属组是root
```

### 运行playbook
```shell
[student@workstation deploy-manage]$ ansible-playbook first.yaml

PLAY [This is my first play] *********************************************************************************

TASK [Gathering Facts] ***************************************************************************************
ok: [servera]

TASK [create a new user] *************************************************************************************
 [WARNING]: The value ******** (type int) in a string field was converted to '********' (type string). If
this does not look like what you expect, quote the entire value to ensure it does not change.

 [WARNING]: The input password appears not to have been hashed. The 'password' argument must be encrypted for
this module to work properly.

changed: [servera]

PLAY RECAP ***************************************************************************************************
servera                    : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

```shell
[student@workstation ~]$ lab playbook-basic start

Setting up workstation for lab exercise work:

 · Verifying Ansible installation..............................  SUCCESS
 · Creating working directory..................................  SUCCESS
 · Deploying Ansible inventory.................................  SUCCESS
 · Deploying ansible.cfg.......................................  SUCCESS
 · Downloading index.html......................................  SUCCESS
 · Stop firewalld on serverc...................................  SUCCESS
 · Stop firewalld on serverd...................................  SUCCESS


执行lab playbook-basic start命令后会自动创建一个playbook-basic文件夹，里面分别有ansible.cfg和inventory文件及files文件夹，files文件夹里有index.html文件

我们进入到playbook-basic文件夹里新建site.yaml文件，文件内容如下：
[student@workstation playbook-basic]$ vim site.yaml
---
- name: this play for building a web site server
  hosts: web
  tasks:
    - name: use dnf module to install httpd packages
      dnf:
        name: httpd
        state: latest

    - name: use index.html as web server content of page
      copy:
        src: /home/student/playbook-basic/files/index.html
        dest: /var/www/html/index.html

    - name: use service module to set httpd serice as a started state
      service:
        name: httpd
        state: started
        enable: true

```

![](../../Images/Pasted%20image%2020231105103858.png)

```shell
[student@workstation playbook-basic]$ ansible-playbook site.yaml

PLAY [this play for building a web site server] **************************************************************

TASK [Gathering Facts] ***************************************************************************************
ok: [serverc.lab.example.com]
ok: [serverd.lab.example.com]

TASK [use dnf module to install httpd packages] **************************************************************
changed: [serverc.lab.example.com]
changed: [serverd.lab.example.com]

TASK [use index.html as web server content of page] **********************************************************
changed: [serverc.lab.example.com]
changed: [serverd.lab.example.com]

TASK [use service module to set httpd serice as a started state] *********************************************
changed: [serverd.lab.example.com]
changed: [serverc.lab.example.com]

PLAY RECAP ***************************************************************************************************
serverc.lab.example.com    : ok=4    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverd.lab.example.com    : ok=4    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

[student@workstation playbook-basic]$


```

### 多playbook练习
```shell
[student@workstation ~]$ lab playbook-multi start
[student@workstation playbook-multi]$ vim inventory.yaml
        state: present

    - name: web content
      copy:
        content: "this is a first test page"
        dest: /var/www/html/index.html

    - name: firewalld enable
      service:
        name: firewalld
        enabled: true
        state: started

    - name: set firewalld rule
      firewalld:
        service: http
        permanent: true
        immediate: yes
        state: enabled

    - name: start httpd service
      service:
        name: httpd
        enabled: true
        state: started

- name: second play
  hosts: localhost
  become: no
  tasks:
    - name: connect to intranet web server
      uri:
        url: http://servera.lab.example.com
        return_content: yes
        status_code: 200


[student@workstation playbook-multi]$ ansible-playbook inventory.yaml

PLAY [first play] ************************************************************************************

TASK [Gathering Facts] *******************************************************************************
ok: [servera.lab.example.com]

TASK [install pkg] ***********************************************************************************
changed: [servera.lab.example.com]

TASK [web content] ***********************************************************************************
changed: [servera.lab.example.com]
TASK [firewalld enable] ******************************************************************************
ok: [servera.lab.example.com]

TASK [set firewalld rule] ****************************************************************************
changed: [servera.lab.example.com]

TASK [start httpd service] ***************************************************************************
changed: [servera.lab.example.com]

PLAY [second play] ***********************************************************************************

TASK [Gathering Facts] *******************************************************************************
ok: [localhost]

TASK [connect to intranet web server] ****************************************************************
ok: [localhost]

PLAY RECAP *******************************************************************************************
localhost                  : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
servera.lab.example.com    : ok=6    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0


[student@workstation ~]$ lab playbook-multi finish

Cleaning up exercise:

 · Remove firewall configuration...............................  SUCCESS
 · Remove web content..........................................  SUCCESS
 · Remove httpd package........................................  SUCCESS
```

```shell
[student@workstation ~]$ lab playbook-review start

Starting the lab on :

 · Verifying Ansible installation..............................  SUCCESS
 · Creating working directory..................................  SUCCESS
 · Deploying Ansible inventory.................................  SUCCESS
 · Deploying ansible.cfg.......................................  SUCCESS

[student@workstation playbook-review]$ vim internet.yaml

    - name: set firewalld rule to allow httpd service
      firewalld:
        service: http
        immediate: yes
        permanent: yes
        state: enabled

    - name: set httpd enabled and running
      service:
        name: httpd
        enabled: yes
        state: started

    - name: set mariadb enabled and running
      service:
        name: mariadb
        enabled: yes
        state: started

    - name: get web content file
      get_url:
        url: http://materials.example.com/labs/playbook-review/index.php
        dest: /var/www/html

- name: another play
  hosts: localhost
  become: no
  tasks:
    - name: access web server
      uri:
        url: http://serverb.lab.example.com
        status_code: 200



[student@workstation playbook-review]$ ansible-playbook internet.yaml

PLAY [enable internet service] ********************************************************************

TASK [Gathering Facts] ****************************************************************************
ok: [serverb.lab.example.com]

TASK [install some pkgs] **************************************************************************
ok: [serverb.lab.example.com]

TASK [set firewalld enabled and running] **********************************************************
ok: [serverb.lab.example.com]

TASK [set firewalld rule to allow httpd service] **************************************************
ok: [serverb.lab.example.com]

TASK [set httpd enabled and running] **************************************************************
ok: [serverb.lab.example.com]

TASK [set mariadb enabled and running] ************************************************************
ok: [serverb.lab.example.com]

TASK [get web content file] ***********************************************************************
ok: [serverb.lab.example.com]

PLAY [another play] *******************************************************************************

TASK [Gathering Facts] ****************************************************************************
ok: [localhost]

TASK [access web server] **************************************************************************
ok: [localhost]

PLAY RECAP ****************************************************************************************
localhost                  : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=7    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

[student@workstation playbook-review]$ lab playbook-review grade

Grading the student's work on serverb:

 · Verify httpd package installation...........................  PASS
 · Verify firewalld package installation.......................  PASS
 · Verify mariadb-server package installation..................  PASS
 · Verify php package installation.............................  PASS
 · Verify php-mysqlnd package installation.....................  PASS
 · Verify httpd service........................................  PASS
 · Verify firewalld service....................................  PASS
 · Verify mariadb service......................................  PASS
 · Verify firewalld configuration..............................  PASS
 · Verify web site.............................................  PASS
Overall lab grade..............................................  PASS
```

### ansible变量
```shell
---
- name: this is a var test
  hosts: all
  vars:
    user: shuaiqijun
    home: /home/shuaiqijun
  tasks:
    - name: debug
      debug:
        msg: "{{ user }} is very handsome"


[student@workstation playbook-review]$ ansible-playbook test.yaml

PLAY [this is a var test] *************************************************************************

TASK [Gathering Facts] ****************************************************************************
ok: [serverc]
ok: [servera]
ok: [serverb.lab.example.com]
ok: [serverb]

TASK [debug] **************************************************************************************
ok: [serverb.lab.example.com] => {
    "msg": "shuaiqijun is very handsome"
}
ok: [servera] => {
    "msg": "shuaiqijun is very handsome"
}
ok: [serverb] => {
    "msg": "shuaiqijun is very handsome"
}
ok: [serverc] => {
    "msg": "shuaiqijun is very handsome"
}

PLAY RECAP ****************************************************************************************
servera                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverc                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```


### 通过命令行指定变量值
```shell
[student@workstation playbook-review]$ ansible-playbook test.yaml -e "user=shuaige"

PLAY [this is a var test] *************************************************************************

TASK [Gathering Facts] ****************************************************************************
ok: [serverc]
ok: [servera]
ok: [serverb]
ok: [serverb.lab.example.com]

TASK [debug] **************************************************************************************
ok: [serverb.lab.example.com] => {
    "msg": "shuaige is very handsome"
}
ok: [servera] => {
    "msg": "shuaige is very handsome"
}
ok: [serverb] => {
    "msg": "shuaige is very handsome"
}
ok: [serverc] => {
    "msg": "shuaige is very handsome"
}

PLAY RECAP ****************************************************************************************
servera                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverc                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

[student@workstation playbook-review]$
```


```shell
[student@workstation playbook-review]$ vim inventory
serverb.lab.example.com user=shuaib
servera                 user=shuaia
serverb                 user=shuaic
serverc                 user=shuaid


[student@workstation playbook-review]$ vim test.yaml
---
- name: this is a var test
  hosts: all
  vars:
          # user: shuaiqijun
    home: /home/shuaiqijun
  tasks:
    - name: debug
      debug:
        msg: "{{ user }} is very handsome"




[student@workstation playbook-review]$ ansible-playbook test.yaml

PLAY [this is a var test] *************************************************************************

TASK [Gathering Facts] ****************************************************************************
ok: [serverc]
ok: [servera]
ok: [serverb]
ok: [serverb.lab.example.com]

TASK [debug] **************************************************************************************
ok: [serverb.lab.example.com] => {
    "msg": "shuaib is very handsome"
}
ok: [servera] => {
    "msg": "shuaia is very handsome"
}
ok: [serverb] => {
    "msg": "shuaic is very handsome"
}
ok: [serverc] => {
    "msg": "shuaid is very handsome"
}

PLAY RECAP ****************************************************************************************
servera                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverc                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

[student@workstation playbook-review]$

```

### 变量文件
```shell
[student@workstation playbook-review]$ vim test.yaml
---
- name: this is a var test
  hosts: all
  vars_files:
    - vars/vars.yaml
  tasks:
    - name: debug
      debug:
        msg: "{{ user }} is very handsome"


尽量使用相对路径指定vars文件

[student@workstation vars]$ vim vars.yaml
user: shuaiqijun
home: /home/shuaiqijun
```

### 主机组和主机变量
```shell
[student@workstation playbook-review]$ vim inventory
serverb.lab.example.com
servera
serverb
serverc

[production]
servera
serverb

[webserver]
serverc
serverd


[student@workstation playbook-review]$ mkdir group_vars hosts_vars
[student@workstation playbook-review]$ vim group_vars/production
user: shuaiqijun
home: /home/shuaiqijun

[student@workstation playbook-review]$ vim group_vars/webserver
user: root
home: /home/root

[student@workstation playbook-review]$ vim test.yaml
---
- name: this is a var test
  hosts: all
  tasks:
    - name: debug
      debug:
        msg: "{{ user }} is very handsome"

[student@workstation playbook-review]$ ansible-playbook test.yaml

PLAY [this is a var test] ****************************************************************

TASK [Gathering Facts] *******************************************************************
ok: [serverc]
ok: [serverd]
ok: [servera]
ok: [serverb.lab.example.com]
ok: [serverb]

TASK [debug] *****************************************************************************
fatal: [serverb.lab.example.com]: FAILED! => {"msg": "The task includes an option with an undefined variable. The error was: 'user' is undefined\n\nThe error appears to be in '/home/student/playbook-review/test.yaml': line 5, column 7, but may\nbe elsewhere in the file depending on the exact syntax problem.\n\nThe offending line appears to be:\n\n  tasks:\n    - name: debug\n      ^ here\n"}
ok: [servera] => {
    "msg": "shuaiqijun is very handsome"
}
ok: [serverb] => {
    "msg": "shuaiqijun is very handsome"
}
ok: [serverc] => {
    "msg": "root is very handsome"
}
ok: [serverd] => {
    "msg": "root is very handsome"
}

PLAY RECAP *******************************************************************************
servera                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=1    changed=0    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0
serverc                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverd                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

```

### 变量矩阵
```shell
[student@workstation playbook-review]$ vim vars_matrix.yaml
---
- name: vars matrix debug
  hosts: all
  vars_files:
    - vars_matrix
  tasks:
    - name: debug vars matrix zhangsan
      debug:
        var: user.zhangsan.name
    - name: debug vars matrix lisi
      debug:
        var: user['lisi']['name']

# 推荐使用user['lisi']['name']这种写法，user.zhangsan.name写法与python有冲突

[student@workstation playbook-review]$ vim vars_matrix
user:
  zhangsan:
    name: zhangsan
    age: 18
  lisi:
    name: lisi
    age: 18


[student@workstation playbook-review]$ ansible-playbook vars_matrix.yaml
PLAY [vars matrix debug] *****************************************************************

TASK [Gathering Facts] *******************************************************************
ok: [serverc]
ok: [serverd]
ok: [servera]
ok: [serverb.lab.example.com]
ok: [serverb]

TASK [debug vars matrix] *****************************************************************
ok: [serverb.lab.example.com] => {
    "user.zhangsan.name": "zhangsan"
}
ok: [servera] => {
    "user.zhangsan.name": "zhangsan"
}
ok: [serverb] => {
    "user.zhangsan.name": "zhangsan"
}
ok: [serverc] => {
    "user.zhangsan.name": "zhangsan"
}
ok: [serverd] => {
    "user.zhangsan.name": "zhangsan"
}

PLAY RECAP *******************************************************************************
servera                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverb.lab.example.com    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverc                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
serverd                    : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

```

### register变量
```shell
[student@workstation playbook-review]$ vim vars_register.yaml
---
- name: install httpd service
  hosts: servera
  become: yes
  tasks:
    - name: install httpd service
      yum:
        name: httpd
        state: present
      ignore_errors: yes   # 忽略tasks错误
      register: test
    - name:
      debug:
        var: test
    - name:
      debug:
        var: test['rc']



[student@workstation playbook-review]$ ansible-playbook vars_register.yaml

PLAY [install httpd service] *************************************************************

TASK [Gathering Facts] *******************************************************************
ok: [servera]

TASK [install httpd service] *************************************************************
changed: [servera]

TASK [debug] *****************************************************************************
ok: [servera] => {
    "test": {
        "changed": true,
        "failed": false,
        "msg": "",
        "rc": 0,
        "results": [
            "Installed: httpd",
            "Installed: apr-util-openssl-1.6.1-6.el8.x86_64",
            "Installed: httpd-2.4.37-10.module+el8+2764+7127e69e.x86_64",
            "Installed: mod_http2-1.11.3-1.module+el8+2443+605475b7.x86_64",
            "Installed: httpd-filesystem-2.4.37-10.module+el8+2764+7127e69e.noarch",
            "Installed: apr-1.6.3-9.el8.x86_64",
            "Installed: httpd-tools-2.4.37-10.module+el8+2764+7127e69e.x86_64",
            "Installed: redhat-logos-httpd-80.7-1.el8.noarch",
            "Installed: apr-util-1.6.1-6.el8.x86_64",
            "Installed: apr-util-bdb-1.6.1-6.el8.x86_64"
        ]
    }
}

PLAY RECAP *******************************************************************************
servera                    : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

```

### vault
```shell
ansible-vault create test.yaml
ansible-vault view test.yaml
ansible-vault rekey test.yaml
```

### facts变量
```shell
[student@workstation playbook-review]$ ansible servera -m setup
servera | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "172.25.250.10"
        ],
        "ansible_all_ipv6_addresses": [
            "fe80::e6c5:468e:edb6:9b52"
        ],
        "ansible_apparmor": {
            "status": "disabled"
        },
        "ansible_architecture": "x86_64",
        "ansible_bios_date": "04/01/2014",
        "ansible_bios_version": "1.11.1-3.module+el8+2529+a9686a4d",
        "ansible_cmdline": {
            "BOOT_IMAGE": "(hd0,msdos1)/boot/vmlinuz-4.18.0-80.el8.x86_64",
            "console": "ttyS0,115200n8",
            "crashkernel": "auto",
            "no_timer_check": true,
            "ro": true,
            "root": "UUID=884f47c9-a69d-4c5b-915d-6b7c9c74c923"
        },
        "ansible_date_time": {
            "date": "2023-11-08",
            "day": "08",
            "epoch": "1699428309",
            "hour": "15",
            "iso8601": "2023-11-08T07:25:09Z",
            "iso8601_basic": "20231108T152509324238",
            "iso8601_basic_short": "20231108T152509",
            "iso8601_micro": "2023-11-08T07:25:09.324288Z",
            "minute": "25",
            "month": "11",
            "second": "09",
            "time": "15:25:09",
            "tz": "CST",
            "tz_offset": "+0800",
            "weekday": "Wednesday",
            "weekday_number": "3",
            "weeknumber": "45",
            "year": "2023"
        },
        "ansible_default_ipv4": {
            "address": "172.25.250.10",
            "alias": "enp1s0",
            "broadcast": "172.25.250.255",
            "gateway": "172.25.250.254",
            "interface": "enp1s0",
            "macaddress": "52:54:00:00:fa:0a",
            "mtu": 1500,
            "netmask": "255.255.255.0",
            "network": "172.25.250.0",
            "type": "ether"
        },
        "ansible_default_ipv6": {},
        "ansible_device_links": {
            "ids": {},
            "labels": {},
            "masters": {},
            "uuids": {
                "vda1": [
                    "884f47c9-a69d-4c5b-915d-6b7c9c74c923"
                ]
            }
        },
        "ansible_devices": {
            "vda": {
                "holders": [],
                "host": "SCSI storage controller: Red Hat, Inc. Virtio block device (rev 01)",
                "links": {
                    "ids": [],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": null,
                "partitions": {
                    "vda1": {
                        "holders": [],
                        "links": {
                            "ids": [],
                            "labels": [],
                            "masters": [],
                            "uuids": [
                                "884f47c9-a69d-4c5b-915d-6b7c9c74c923"
                            ]
                        },
                        "sectors": "20969439",
                        "sectorsize": 512,
                        "size": "10.00 GB",
                        "start": "2048",
                        "uuid": "884f47c9-a69d-4c5b-915d-6b7c9c74c923"
                    }
                },
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "mq-deadline",
                "sectors": "20971520",
                "sectorsize": "512",
                "size": "10.00 GB",
                "support_discard": "0",
                "vendor": "0x1af4",
                "virtual": 1
            },
            "vdb": {
                "holders": [],
                "host": "SCSI storage controller: Red Hat, Inc. Virtio block device (rev 01)",
                "links": {
                    "ids": [],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": null,
                "partitions": {},
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "mq-deadline",
                "sectors": "10485760",
                "sectorsize": "512",
                "size": "5.00 GB",
                "support_discard": "0",
                "vendor": "0x1af4",
                "virtual": 1
            }
        },
        "ansible_distribution": "RedHat",
        "ansible_distribution_file_parsed": true,
        "ansible_distribution_file_path": "/etc/redhat-release",
        "ansible_distribution_file_search_string": "Red Hat",
        "ansible_distribution_file_variety": "RedHat",
        "ansible_distribution_major_version": "8",
        "ansible_distribution_release": "Ootpa",
        "ansible_distribution_version": "8.0",
        "ansible_dns": {
            "nameservers": [
                "172.25.250.254"
            ],
            "search": [
                "lab.example.com",
                "example.com"
            ]
        },
        "ansible_domain": "lab.example.com",
        "ansible_effective_group_id": 1001,
        "ansible_effective_user_id": 1001,
        "ansible_enp1s0": {
            "active": true,
            "device": "enp1s0",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "on [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "udp_fragmentation_offload": "off",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "172.25.250.10",
                "broadcast": "172.25.250.255",
                "netmask": "255.255.255.0",
                "network": "172.25.250.0"
            },
            "ipv6": [
                {
                    "address": "fe80::e6c5:468e:edb6:9b52",
                    "prefix": "64",
                    "scope": "link"
                }
            ],
            "macaddress": "52:54:00:00:fa:0a",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio1",
            "promisc": false,
            "speed": -1,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_enp2s0": {
            "active": true,
            "device": "enp2s0",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "on [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "udp_fragmentation_offload": "off",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "macaddress": "52:54:00:01:fa:0a",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio2",
            "promisc": false,
            "speed": -1,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_env": {
            "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/1001/bus",
            "HOME": "/home/devops",
            "LANG": "en_US.UTF-8",
            "LESSOPEN": "||/usr/bin/lesspipe.sh %s",
            "LOGNAME": "devops",
            "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.m4a=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.oga=01;36:*.opus=01;36:*.spx=01;36:*.xspf=01;36:",
            "MAIL": "/var/mail/devops",
            "PATH": "/home/devops/.local/bin:/home/devops/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin",
            "PWD": "/home/devops",
            "SELINUX_LEVEL_REQUESTED": "",
            "SELINUX_ROLE_REQUESTED": "",
            "SELINUX_USE_CURRENT_RANGE": "",
            "SHELL": "/bin/bash",
            "SHLVL": "2",
            "SSH_CLIENT": "172.25.250.9 37020 22",
            "SSH_CONNECTION": "172.25.250.9 37020 172.25.250.10 22",
            "SSH_TTY": "/dev/pts/0",
            "TERM": "xterm",
            "USER": "devops",
            "XDG_RUNTIME_DIR": "/run/user/1001",
            "XDG_SESSION_ID": "23",
            "_": "/usr/libexec/platform-python"
        },
        "ansible_fibre_channel_wwn": [],
        "ansible_fips": false,
        "ansible_form_factor": "Other",
        "ansible_fqdn": "servera.lab.example.com",
        "ansible_hostname": "servera",
        "ansible_hostnqn": "",
        "ansible_interfaces": [
            "lo",
            "enp2s0",
            "enp1s0"
        ],
        "ansible_is_chroot": true,
        "ansible_iscsi_iqn": "",
        "ansible_kernel": "4.18.0-80.el8.x86_64",
        "ansible_lo": {
            "active": true,
            "device": "lo",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "on [fixed]",
                "netns_local": "on [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "off [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on [fixed]",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "on [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "off [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "on [fixed]",
                "tx_nocache_copy": "off [fixed]",
                "tx_scatter_gather": "on [fixed]",
                "tx_scatter_gather_fraglist": "on [fixed]",
                "tx_sctp_segmentation": "on",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "on",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "udp_fragmentation_offload": "off",
                "vlan_challenged": "on [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "127.0.0.1",
                "broadcast": "host",
                "netmask": "255.0.0.0",
                "network": "127.0.0.0"
            },
            "ipv6": [
                {
                    "address": "::1",
                    "prefix": "128",
                    "scope": "host"
                }
            ],
            "mtu": 65536,
            "promisc": false,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "loopback"
        },
        "ansible_local": {},
        "ansible_lsb": {},
        "ansible_machine": "x86_64",
        "ansible_machine_id": "88394775ca9147439ae63aab9c500045",
        "ansible_memfree_mb": 341,
        "ansible_memory_mb": {
            "nocache": {
                "free": 591,
                "used": 230
            },
            "real": {
                "free": 341,
                "total": 821,
                "used": 480
            },
            "swap": {
                "cached": 0,
                "free": 0,
                "total": 0,
                "used": 0
            }
        },
        "ansible_memtotal_mb": 821,
        "ansible_mounts": [
            {
                "block_available": 2224556,
                "block_size": 4096,
                "block_total": 2618619,
                "block_used": 394063,
                "device": "/dev/vda1",
                "fstype": "xfs",
                "inode_available": 5196251,
                "inode_total": 5242304,
                "inode_used": 46053,
                "mount": "/",
                "options": "rw,seclabel,relatime,attr2,inode64,noquota",
                "size_available": 9111781376,
                "size_total": 10725863424,
                "uuid": "884f47c9-a69d-4c5b-915d-6b7c9c74c923"
            }
        ],
        "ansible_nodename": "servera.lab.example.com",
        "ansible_os_family": "RedHat",
        "ansible_pkg_mgr": "dnf",
        "ansible_proc_cmdline": {
            "BOOT_IMAGE": "(hd0,msdos1)/boot/vmlinuz-4.18.0-80.el8.x86_64",
            "console": [
                "tty0",
                "ttyS0,115200n8"
            ],
            "crashkernel": "auto",
            "no_timer_check": true,
            "ro": true,
            "root": "UUID=884f47c9-a69d-4c5b-915d-6b7c9c74c923"
        },
        "ansible_processor": [
            "0",
            "GenuineIntel",
            "QEMU Virtual CPU version 2.5+"
        ],
        "ansible_processor_cores": 1,
        "ansible_processor_count": 1,
        "ansible_processor_threads_per_core": 1,
        "ansible_processor_vcpus": 1,
        "ansible_product_name": "KVM",
        "ansible_product_serial": "NA",
        "ansible_product_uuid": "NA",
        "ansible_product_version": "RHEL-7.6.0 PC (Q35 + ICH9, 2009)",
        "ansible_python": {
            "executable": "/usr/libexec/platform-python",
            "has_sslcontext": true,
            "type": "cpython",
            "version": {
                "major": 3,
                "micro": 8,
                "minor": 6,
                "releaselevel": "final",
                "serial": 0
            },
            "version_info": [
                3,
                6,
                8,
                "final",
                0
            ]
        },
        "ansible_python_version": "3.6.8",
        "ansible_real_group_id": 1001,
        "ansible_real_user_id": 1001,
        "ansible_selinux": {
            "config_mode": "enforcing",
            "mode": "enforcing",
            "policyvers": 31,
            "status": "enabled",
            "type": "targeted"
        },
        "ansible_selinux_python_present": true,
        "ansible_service_mgr": "systemd",
        "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBMzl8zujH2mt6wy+3tgViAh/kbAOg/o+5bbNMUqiDX+keObXAIODAEb9EoQLfAcR3ZlEKqYCsweGADkw52HmNCc=",
        "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAICduOpoEOEGzWCiFyWpwOPPzo729ugmYJ+z+Xd2VYxTl",
        "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQDLXT54GJfAGvnIbzAW8flDln+3QAgHrlut7VBIwdus6+Fwf/GKFvMz28VpL2mRJO/Don1LDcyojxWgmRjaI8nOYQxE58zxWH/rQ05sjD9rtVd529921E5RJjUaiydjW4FXf1EsCyKbt2mxEPKKA5Neg6WTQmGdljh4TqPtv9bqDbMjUUj+cwFV2OoY2RmqDtrxW6bggeZQMYMFmgYEaQDcGUc1n3+3gHHIZDOTj8ice4z/fKMUl2QKmcU619zy4A2jwHYawrFx7s+OkeKSVT6gfrcI7wk9+I2PqbINXXa/WsLNlFzDkmiD0JbOL9ZrjBW3WmoX4SIc2G2BH97ZFXqD",
        "ansible_swapfree_mb": 0,
        "ansible_swaptotal_mb": 0,
        "ansible_system": "Linux",
        "ansible_system_capabilities": [
            ""
        ],
        "ansible_system_capabilities_enforced": "True",
        "ansible_system_vendor": "Red Hat",
        "ansible_uptime_seconds": 25750,
        "ansible_user_dir": "/home/devops",
        "ansible_user_gecos": "",
        "ansible_user_gid": 1001,
        "ansible_user_id": "devops",
        "ansible_user_shell": "/bin/bash",
        "ansible_user_uid": 1001,
        "ansible_userspace_architecture": "x86_64",
        "ansible_userspace_bits": "64",
        "ansible_virtualization_role": "guest",
        "ansible_virtualization_type": "kvm",
        "discovered_interpreter_python": "/usr/libexec/platform-python",
        "gather_subset": [
            "all"
        ],
        "module_setup": true
    },
    "changed": false
}

```

### 使用debug调试facts变量
```shell
[student@workstation facts_learn]$ vim site.yaml
---
- name: this play for building a web server
  hosts: webserver
  tasks:
    - name: use debug module test facts
      debug:
        var: ansible_all_ipv4_addresses

```

### 关闭facts变量
```
---
- name：
  gather_facts: no
```

### ansible循环loop
```shell
[student@workstation ~]$ ls
ansible.cfg  inventory  loop.yaml  vars

------------------------------------------------------------------------

[student@workstation ~]$ vim ansible.cfg
[defaults]
inventory=inventory
remote_user=devops
[privilege_escalation]
become=false
becom_method=sudo
becom_user=root
becom_ask_pass=false

-------------------------------------------------------------------------

[student@workstation ~]$ vim inventory
servera
serverb
serverc
serverd

[webserver]
serverc
serverd

[student@workstation ~]$ vim vars/vars.yaml
service_vars:
        - httpd
        - nginx
        - firewalld

pkg_vars:
        - httpd
        - nginx
        - firewalld

-------------------------------------------------------------------------

[student@workstation ~]$ vim loop.yaml
---
- name: Test loop
  hosts: webserver
  vars_files:
    - vars/vars.yaml
  become: true
  tasks:
    - name: install pkg
      yum:
        name: "{{item}}"
        state: latest
      loop: "{{pkg_vars}}"
    - name: enable service
      service:
        name: "{{item}}"
        enabled: true
        state: started
      loop: "{{service_vars}}"

--------------------------------------------------------------------------

[student@workstation ~]$ ansible-playbook loop.yaml

PLAY [Test loop] ***************************************************************************

TASK [Gathering Facts] *********************************************************************
ok: [serverd]
ok: [serverc]

TASK [install pkg] *************************************************************************
ok: [serverd] => (item=httpd)
ok: [serverc] => (item=httpd)
ok: [serverd] => (item=nginx)
ok: [serverc] => (item=nginx)
ok: [serverd] => (item=firewalld)
ok: [serverc] => (item=firewalld)

TASK [enable service] **********************************************************************
changed: [serverd] => (item=httpd)
changed: [serverc] => (item=httpd)
failed: [serverd] (item=nginx) => {"ansible_loop_var": "item", "changed": false, "item": "nginx", "msg": "Unable to start service nginx: Job for nginx.service failed because the control process exited with error code.\nSee \"systemctl status nginx.service\" and \"journalctl -xe\" for details.\n"}
failed: [serverc] (item=nginx) => {"ansible_loop_var": "item", "changed": false, "item": "nginx", "msg": "Unable to start service nginx: Job for nginx.service failed because the control process exited with error code.\nSee \"systemctl status nginx.service\" and \"journalctl -xe\" for details.\n"}
ok: [serverd] => (item=firewalld)
ok: [serverc] => (item=firewalld)

PLAY RECAP *********************************************************************************
serverc                    : ok=2    changed=0    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0
serverd                    : ok=2    changed=0    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0

```