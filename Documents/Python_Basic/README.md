# 一 python的介绍

```
Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。

Python 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。

像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。

官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新。

Python 2.7 被确定为最后一个 Python 2.x 版本。

Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。

Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。

Python 是一种解释型语言： 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言。

Python 是交互式语言： 这意味着，您可以在一个 Python 提示符 >>> 后直接执行代码。

Python 是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。

Python 是初学者的语言：Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。
```

## 1.1 查看python的版本

```shell
python -V 或者python --version

[root@localhost ~]# python -V
Python 3.9.18
[root@localhost ~]# python --version
Python 3.9.18
```

## 1.2 编写一个hello world程序

```shell
[root@localhost ~]# vim hello.py
#!/usr/bin/python
print('hello world')
[root@localhost ~]# chmod +x hello.py
```

```shell
[root@localhost ~]# ./hello.py
hello world

[root@localhost ~]# python hello.py
hello world
```

## 1.3 python的字面量

在编程中，字面量（Literal）是表示特定类型的数据的值，是一种直接写入程序的数据值的方式。在 Python 中，有许多类型的字面量，以下是一些常见的 Python 字面量：
1. **整数字面量：** 表示整数值的字面量，可以是正整数或负整数。
```python
x = 42   # 正整数字面量 y = -23  # 负整数字面量
```

2. **浮点数字面量：** 表示浮点数值的字面量，可以是小数或科学计数法表示。
```python
a = 3.14     # 小数字面量 b = 2.5e-3   # 科学计数法表示
```

3. **字符串字面量：** 表示文本数据的字面量，可以使用单引号或双引号。
```python
name = 'Alice'    # 使用单引号的字符串字面量 message = "Hello, World!"  # 使用双引号的字符串字面量
```

4. **布尔字面量：** 表示布尔值的字面量，只有两个值：`True` 和 `False`。
```python
is_true = True is_false = False
```

5. **None 字面量：** 表示空值或缺失值的字面量。
```python
empty_value = None
```

6. **列表字面量：** 表示列表的字面量，用于创建包含多个元素的可变序列。
```python
numbers = [1, 2, 3, 4, 5]
```

7. **元组字面量：** 表示元组的字面量，用于创建包含多个元素的不可变序列。
```python
coordinates = (3.14, 2.5)
```

8. **字典字面量：** 表示字典的字面量，用于创建键值对的集合。
```python
person = {'name': 'Alice', 'age': 30, 'city': 'Wonderland'}
```

9. **集合字面量：** 表示集合的字面量，用于创建无序且元素唯一的集合。
```python
unique_numbers = {1, 2, 3, 4, 5}
```

这些字面量是构建 Python 程序中数据的基本构建块，它们直接表示了不同类型的值。在实际编程中，你会经常使用这些字面量来初始化变量、数据结构等。

## 1.4 python的注释

在 Python 中，注释是一种用于解释代码的文本，不会被解释器执行。注释是程序员向其他人（或自己）解释代码的一种方式，有助于提高代码的可读性和可维护性。在 Python 中，有两种方式可以添加注释：
### 单行注释

使用 `#` 符号可以在代码中添加单行注释。`#` 后的内容将被视为注释，直到行末。

```python
# 这是一个单行注释 print("Hello, World!")  # 这也是一个单行注释
```
### 多行注释

Python 中没有官方的多行注释语法，但可以使用三个单引号 `'''` 或三个双引号 `"""` 来实现多行注释的效果。这是因为 Python 将三个单引号或双引号之间的内容视为字符串，而这个字符串如果不被使用，就相当于注释。

```python
''' 这是一个多行注释 它可以跨越多行 ''' print("Hello, World!")
```

或者使用三个双引号：

```python
""" 这也是一个多行注释 它可以跨越多行 """ print("Hello, World!")
```

虽然使用三个引号的方式可以实现多行注释的效果，但一般来说，单行注释更常用于解释代码的目的。如果要添加详细的文档注释，通常使用 docstring，即在函数或类的开头使用三个单引号或双引号来添加多行注释。

```python
def my_function():     
	"""     
	这是一个函数的文档字符串（docstring）     
	它可以包含更详细的文档信息     
	"""     
	print("Hello, World!")
```
在这个例子中，函数 `my_function` 的文档字符串可以通过 `help(my_function)` 或其他文档工具来查看，提供了更详细的说明。
## 1.5 python的变量

在Python中，变量是用来存储数据值的标识符。以下是Python中的一些变量规则：

1. **变量命名规则：**
    - 变量名可以包含字母、数字和下划线 `_`，但不能以数字开头。
    - 变量名对大小写敏感，例如，`myVar`和`myvar`是两个不同的变量。
    - 避免使用Python关键字（reserved words）作为变量名，如 `if`、`else`、`while`等。
3. **变量赋值：**
    - 使用等号 `=` 来给变量赋值。例如：`x = 5`。
    - 可以同时为多个变量赋相同的值：`a = b = c = 10`。
3. **多个赋值：
    - 可以在一行上为多个变量赋值，例如：`a, b, c = 1, 2, "hello"`。
4. **删除变量：**
    - 使用 `del` 语句可以删除一个变量，例如：`del myVar`。
5. **变量类型：**
    - Python是动态类型语言，不需要显式地声明变量的类型。
    - 变量的类型由其所存储的值决定，可以随时改变。
6. **命名规范：**
    - 遵循命名规范，使用有意义的变量名，以提高代码可读性。
    - 使用驼峰命名法（Camel Case）或下划线分隔命名法（Snake Case）。例如：`myVariable` 或 `my_variable`。
7. **变量作用域：**
    - 变量的作用域由其声明的位置决定。
    - 在函数内声明的变量为局部变量，而在函数外声明的变量为全局变量。
8. **常量：**
    - Python没有真正的常量，但通常将全大写的变量名视为常量，表示这个值不应该被修改。
    
```shell
[root@localhost ~]# vim python.py
#!/usr/bin/env python
name = 'jack'
age = 18
username = 'jack'
HelloWorld = 'hello world'
hello_world = 'hello world'

print(name, age, username, HelloWorld, hello_world)

[root@localhost ~]# python python.py
jack 18 jack hello world hello world
```

## 1.6 数据类型转换

在Python中，你可以使用一些内置的函数进行不同数据类型之间的转换。以下是一些常见的数据类型转换函数：

1. **整数转换（int）:**
    - `int(x)`：将x转换为整数。例如，`int('123')`将字符串'123'转换为整数123。

2. **浮点数转换（float）:**
    - `float(x)`：将x转换为浮点数。例如，`float('3.14')`将字符串'3.14'转换为浮点数3.14。

3. **字符串转换（str）:**
    - `str(x)`：将x转换为字符串。例如，`str(123)`将整数123转换为字符串'123'。

4. **布尔值转换（bool）:**
    - `bool(x)`：将x转换为布尔值。例如，`bool(0)`将整数0转换为False，而`bool(1)`将整数1转换为True。

5. **列表、元组、集合转换:**
    - `list(x)`：将x转换为列表。
    - `tuple(x)`：将x转换为元组。
    - `set(x)`：将x转换为集合。
    - 例如，`list("hello")`将字符串'hello'转换为列表`['h', 'e', 'l', 'l', 'o']`。

6. **字典转换:**
    - `dict(x)`：将x转换为字典。
    - 例如，`dict([('a', 1), ('b', 2)])`将包含两个元组的列表转换为字典`{'a': 1, 'b': 2}`。

7. **整数、浮点数四舍五入:**
    - `round(x)`：将浮点数x四舍五入为最接近的整数。

8. **其他类型转换为布尔值:**
    - 使用`bool()`函数，可以将其他数据类型转换为布尔值。一般规则是，空对象、零值和一些特殊值会被转换为False，而其他值会被转换为True。

这些函数可以帮助你在不同数据类型之间进行灵活的转换。在进行转换时，要确保数据的类型兼容，否则可能会引发类型错误。

## 1.7 python运算符
在Python中，运算符是用来执行操作的符号。Python支持多种类型的运算符，包括算术运算符、比较运算符、逻辑运算符等。以下是一些常见的Python运算符：
### 算术运算符：
- `+`：加法
- `-`：减法
- `*`：乘法
- `/`：除法
- `%`：取余
- `//`：取整除
- `**`：幂运算
```python
a = 10 
b = 3  
print(a + b)   # 输出：13 
print(a - b)   # 输出：7 
print(a * b)   # 输出：30 
print(a / b)   # 输出：3.3333333333333335 
print(a % b)   # 输出：1 
print(a // b)  # 输出：3 
print(a ** b)  # 输出：1000
```
### 比较运算符：

- `==`：等于
- `!=`：不等于
- `<`：小于
- `>`：大于
- `<=`：小于等于
- `>=`：大于等于
```python
x = 5 
y = 10  
print(x == y)  # 输出：False 
print(x != y)  # 输出：True 
print(x < y)   # 输出：True 
print(x > y)   # 输出：False 
print(x <= y)  # 输出：True 
print(x >= y)  # 输出：False
```
### 逻辑运算符：
- `and`：与
- `or`：或
- `not`：非
```python
p = True 
q = False  
print(p and q)  # 输出：False 
print(p or q)   # 输出：True 
print(not p)    # 输出：False
```

### 成员运算符：
- `in`：在序列中
- `not in`：不在序列中
```python
my_list = [1, 2, 3, 4, 5]  
print(3 in my_list)      # 输出：True 
print(6 not in my_list)  # 输出：True
```

这只是一些运算符的例子，Python还支持其他类型的运算符，例如位运算符、身份运算符等。运算符的选择取决于你要执行的操作。

###  赋值运算符
在Python中，赋值运算符用于将值分配给变量。以下是一些常见的赋值运算符：
1. **等号赋值（=）:**
    - 将右边的值赋给左边的变量。
```python
x = 5 y = 10
```

2. **加法赋值（+=）:**
    - 将左边的变量与右边的值相加，并将结果赋给左边的变量。
```python
x = 5 x += 3  # 等价于 x = x + 3
```

3. **减法赋值（-=）:**
    - 将左边的变量减去右边的值，并将结果赋给左边的变量。
```python
y = 10 y -= 4  # 等价于 y = y - 4
```

4. **乘法赋值（*=）:**
    - 将左边的变量与右边的值相乘，并将结果赋给左边的变量。
```python
z = 3 z *= 2  # 等价于 z = z * 2
```

5. **除法赋值（/=）:**
    - 将左边的变量除以右边的值，并将结果赋给左边的变量。
```python
w = 8 w /= 4  # 等价于 w = w / 4
```
    
6. **取余赋值（%=）:**
    - 将左边的变量除以右边的值并取余，并将结果赋给左边的变量。
```python
a = 17 a %= 5  # 等价于 a = a % 5
```
    
7. **取整除赋值（//=）:**
    - 将左边的变量除以右边的值并取整数部分，并将结果赋给左边的变量。
```python
b = 25 b //= 4  # 等价于 b = b // 4
```
    
8. **幂赋值（**=）:**
    - 将左边的变量的值作为底数，右边的值作为指数，计算幂，并将结果赋给左边的变量。
```python
c = 2 c **= 3  # 等价于 c = c ** 3
```
这些赋值运算符使得在操作变量时更加方便和简洁。

## 1.8 字符串拼接
在Python中，有多种方法可以进行字符串拼接。以下是一些常见的字符串拼接方法：
1. **使用 `+` 运算符:**
```python
str1 = "Hello" 
str2 = "World" 
result = str1 + " " + str2 
print(result) # Hello World
```
 
2. **使用 `,` 在 `print` 语句中:**
```python
str1 = "Hello" 
str2 = "World" 
print(str1, str2) # Hello World
```
注意：使用`,`在`print`语句中可以自动在字符串之间添加一个空格。
 
3. **使用 `str.format()`:**
```python
str1 = "Hello" 
str2 = "World" 
result = "{} {}".format(str1, str2) 
print(result) # Hello World
```

4. **使用 f-string（Python 3.6及以上版本支持）:**
```python
str1 = "Hello" 
str2 = "World" 
result = f"{str1} {str2}" 
print(result) # Hello World
```
在 f-string 中，通过在字符串前加上 `f` 或 `F` 前缀，可以在字符串中直接引用变量。

5. **使用 `join` 方法:**
```python
words = ["Hello", "World"] 
result = " ".join(words) 
print(result) # Hello World
```
`join` 方法可以将列表中的字符串连接起来，指定连接符号（这里是空格）。
这些方法中的选择通常取决于个人偏好、代码上下文和性能需求。在大多数情况下，f-string 提供了一种简洁而直观的方法，而 `join` 方法则在连接大量字符串时更加高效。

## 1.9 占位符
在Python中，你可以使用占位符来创建格式化字符串。占位符是一种特殊的标记，它告诉Python在运行时用具体的值替换它。以下是一些常见的占位符：

1. **百分号 `%` 占位符:**
    - `%s`: 字符串占位符
    - `%d`: 整数占位符
    - `%f`: 浮点数占位符
```python
name = "John" 
age = 25 
height = 5.9  
print("Name: %s, Age: %d, Height: %.2f" % (name, age, height))
```

2. **`format()` 方法:**
    - 使用 `{}` 占位符，并在 `format` 方法中传递相应的值。
```python
name = "John" 
age = 25 
height = 5.9  
print("Name: {}, Age: {}, Height: {:.2f}".format(name, age, height))
```
    
3. **f-string（Python 3.6及以上版本支持）:**
    - 在字符串前加上 `f` 或 `F` 前缀，然后在字符串中直接引用变量。
```python
name = "John" 
age = 25 
height = 5.9  
print(f"Name: {name}, Age: {age}, Height: {height:.2f}")
# Name: John, Age: 25, Height: 5.90  :.2f表示保留几位小数
```
这些占位符和格式化方法使得字符串的创建更加灵活和方便。选择使用哪种方法通常取决于你的个人偏好和代码上下文。 f-string 是一种简洁而直观的方法，但在某些情况下，使用 `%` 占位符或 `format()` 方法可能更为合适。

## 1.10 表达式

在编程中，表达式是由操作数和运算符组成的组合，它们用于执行某种操作并产生一个值。以下是一些常见的Python表达式的例子：
1. **算术表达式:**
```python
x = 5 
y = 3 
result = x + y * 2  
# 等价于 x + (y * 2)`
```

2. **比较表达式:**
```python
a = 10 
b = 15 
is_greater = a > b 
# Fales
```

3. **逻辑表达式:**
```python
is_sunny = True 
is_warm = False 
enjoy_day = is_sunny and not is_warm 
# True
```

4. **成员运算符:**
```python
my_list = [1, 2, 3, 4, 5] 
is_present = 3 in my_list 
# True
```

5. **函数调用:**
```python
length = len("Hello, World!")
```

6. **列表推导式:**
```python
squares = [x**2 for x in range(5)]  
# [0, 1, 4, 9, 16]
```

7. **字典访问:**
```python
my_dict = {'a': 1, 'b': 2, 'c': 3} 
value_of_b = my_dict['b'] 
# 2
```

8. **三元表达式:**
```python
x = 10 
y = 5 
result = x if x > y else y
# 10
```

9. **字符串拼接:**
```python
greeting = "Hello" 
name = "Alice" 
message = greeting + ", " + name + "!"
# Hello, Alice!
```
这些例子展示了不同类型的表达式，包括算术、比较、逻辑运算，成员运算符，函数调用等。表达式在编程中用于执行各种操作，产生结果并推动程序的执行。

## 1.11 练习题1

```python
name = 'kpd'  
stock_price = 10  
stock_code = 600000  
stock_price_daily_growth_factor = 1.2  
growth_days = 7  
print(f'公司：{name},股票代码：{stock_code},当前股价：{stock_price:.0f}\n', "每日增长系数是%.2f,经过%d天的增长后，股价达到了：%f" % (  
    stock_price_daily_growth_factor, growth_days, stock_price_daily_growth_factor ** growth_days * stock_price))
# 公司：kpd,股票代码：600000,当前股价：10
# 每日增长系数是1.20,经过7的增长后，股价达到了：35.831808
```
## 1.12 input
  
在Python中，`input()` 函数用于从用户获取输入。它允许程序在运行时等待用户输入，并将用户输入作为字符串返回给程序。下面是一个简单的示例：

```python
# 获取用户输入并存储在变量中 
user_input = input("请输入一些文本: ")  
# 打印用户输入 
print("你输入的是:", user_input)`
```

在这个例子中，`input()` 函数接受一个字符串参数，用于提示用户输入。用户输入的文本将被存储在 `user_input` 变量中，并通过 `print()` 函数输出。

请注意，`input()` 函数返回的是一个`字符串`，如果需要使用输入的数值，你可能需要将其转换为相应的数据类型。例如，如果你期望用户输入一个整数，可以使用 `int()` 函数进行转换：

```python
# 获取用户输入并将其转换为整数 
user_input = input("请输入一个整数: ") 
user_input = int(user_input)  
# 打印用户输入 
print("你输入的整数是:", user_input)
```

这样，用户输入的文本将被转换为整数类型。请注意，如果用户输入的不是一个合法的整数，这样的转换可能引发 `ValueError` 异常。你可能需要添加一些错误处理来处理这种情况。

要处理用户输入可能引发的错误，你可以使用异常处理机制。在上面的例子中，如果用户输入的内容不能被转换为整数，`int()` 函数将引发 `ValueError` 异常。你可以使用 `try` 和 `except` 语句来捕获并处理这个异常。

下面是一个带有错误处理的例子：

```python
while True:  
    try:  
        # 获取用户输入并将其转换为整数  
        user_input = input("请输入一个整数: ")  
        user_input = int(user_input)  
        # 打印用户输入  
        print("你输入的整数是:", user_input)  
        break  
    except ValueError:  
        # 处理值错误异常  
        print("无效的输入。请确保输入的是一个整数。")
```

在这个例子中，如果用户输入的内容不能被转换为整数，程序将捕获 `ValueError` 异常并执行 `except` 语句中的代码块。在这里，我们简单地打印一条错误消息，告诉用户输入无效。你可以根据需要扩展这个错误处理，以适应你的具体情况。
## 1.13 if语句
在Python中，`if` 语句用于根据条件执行不同的代码块。基本的 `if` 语句结构如下：

```python
if 条件:     
	# 如果条件为真，执行这里的代码块     
	语句1     
	语句2     
	# ... 
elif 另一种条件:    
	# 如果第一个条件为假，但另一条件为真，执行这里的代码块     
	语句3     
	语句4     
	# ... 
else:     
	# 如果以上条件都为假，执行这里的代码块     
	语句5     
	语句6     
	# ...
```

其中，`elif` 和 `else` 部分是可选的，你可以根据需要选择性地包含它们。下面是一个简单的例子：

```python
# 示例：判断一个数字的正负和奇偶性  
while True:  
    try:  
        number = int(input("请输入一个整数: "))  
        if number > 0 & isinstance(number, int):  
            print("这是一个正数。")  
            if number % 2 == 0:  
                print("这是一个偶数。")
                break  
            else:  
                print("这是一个奇数。")
                break  
        elif number == 0:  
            print("这是零。")  
            break
        else:  
            print("这是一个负数。")  
            break
    except ValueError:  
        # 处理值错误异常  
        print("无效的输入。请确保输入的是一个整数。")
```

在这个例子中，程序通过嵌套的 `if` 语句来判断输入的数字是正数还是负数，并在正数的情况下判断它是奇数还是偶数。你可以根据需要嵌套多个 `if` 语句来处理更复杂的条件逻辑。
请注意，Python中的代码块是通过缩进来表示的，而不是使用花括号或其他分隔符。因此，缩进对于代码的结构和执行非常重要。
## 1.14 while循环
  
在Python中，`while` 循环用于重复执行一段代码块，直到指定的条件不再满足为止。`while` 循环的基本语法如下：

```python
while 条件:     
	# 在条件为真的情况下执行这里的代码块     
	语句1     
	语句2     
	# ...
```

在每次循环迭代时，都会检查指定的条件是否为真。只要条件为真，就会继续执行循环内的代码块。如果条件在某次迭代后变为假，循环将终止，程序将继续执行循环后的代码。

下面是一个简单的例子，演示如何使用 `while` 循环计算一个数的阶乘：

```python
# 示例：计算阶乘  
try:  
    number = int(input("请输入一个正整数: "))  
    result = 1  
    counter = 1  
    while counter <= number:  
        result *= counter  
        counter += 1  
    print(f"{number} 的阶乘是 {result}")  
except ValueError:  
    # 处理值错误异常  
    print("无效的输入。请确保输入的是一个整数。")
    
# 求1-100的和  
sum = 0  
counter = 0  
while counter <= 100:  
    sum += counter  
    counter += 1  
print(f"1-100的和是{sum}")

# 99乘法表  
i = 1  
while i <= 9:  
    j = 1  
    while j <= i:  
        sum = i * j  
        print(f"{i}*{j}={sum}\t", end="" )  
        j += 1  
    i += 1  
    print()
```

在这个例子中，`while` 循环不断地将 `counter` 乘到 `result` 中，直到 `counter` 大于输入的数字 `number` 为止。这样，程序就计算出了 `number` 的阶乘。

请注意，要小心确保循环条件最终会变为假，以防止进入无限循环。在上面的例子中，循循环条件 `counter <= number` 最终会不再满足，因为每次循环 `counter` 都会递增。

## 1.15 for循环

`for` 循环是Python中用于迭代遍历可迭代对象的一种循环结构。它的语法形式为：
```python
for 变量 in 可迭代对象:     
	# 在每次迭代中执行这里的代码块     
	语句1     
	语句2     
	# ...
```
- `变量` 是在每次迭代中取得可迭代对象的元素的变量名。
- `可迭代对象` 是一个包含多个元素的对象，例如列表、元组、字符串等。

下面通过几个例子来详细讲解 `for` 循环：
### 1. 遍历列表

```python
fruits = ["苹果", "香蕉", "橙子", "草莓"]  
for fruit in fruits:     
	print(fruit)
```
在这个例子中，`for` 循环遍历列表 `fruits` 中的每个元素，将当前元素赋值给变量 `fruit`，然后执行循环体中的代码块，即打印水果的名字。

### 2. 遍历字符串

```python
word = "Python"  
for char in word:     
	print(char)`
```
这个例子中，`for` 循环遍历字符串中的每个字符，将当前字符赋值给变量 `char`，然后打印出来。
### 3. 遍历字典

```python
person = {"name": "Alice", "age": 30, "city": "Wonderland"}
for key, value in person.items():     
	print(f"{key}: {value}")
```
在这个例子中，`for` 循环遍历字典 `person` 中的键值对。`items()` 方法返回一个包含字典所有键值对的视图，然后 `for` 循环每次迭代时将键赋值给 `key`，值赋值给 `value`，然后执行循环体中的代码块。
### 4. 使用 `range()` 函数

```python
for i in range(5):     
	print(i)
```
`range(5)` 创建了一个包含 0 到 4 的整数序列，`for` 循环遍历这个序列，将当前元素赋值给变量 `i`，然后打印出来。
### 5. 嵌套循环

```python
for i in range(3):     
	for j in range(2):         
		print(f"({i}, {j})")
```
这个例子演示了嵌套的 `for` 循环。外部循环遍历 `i`，内部循环遍历 `j`。在每次内部循环完成后，外部循环迭代一次。

总之，`for` 循环是Python中用于迭代遍历可迭代对象的一种强大的循环结构，可以用于处理多种数据结构和迭代需求。
## 1.16 continue和break
在Python中，`break` 和 `continue` 是两个用于控制循环流程的关键字，它们在循环结构（如 `for` 和 `while` 循环）中起着不同的作用。
1. **break：**
    - `break` 语句用于立即终止循环，不再执行循环内剩余的代码，跳出整个循环体。
    - 当在循环体中遇到 `break` 语句时，程序将跳出循环，开始执行循环后面的代码。
    
 示例：
```python
[root@localhost ~]# vim python.py
#!/usr/bin/env python
for i in range(5):
    if i == 3:
        print("Breaking the loop at i =", i)
        break
    print(i)
```
执行:
```python
[root@localhost ~]# python python.py
0
1
2
Breaking the loop at i = 3
```

**2.continue：**
- `continue` 语句用于结束当前迭代，并跳到下一次迭代的开头。
- 当在循环体中遇到 `continue` 语句时，程序会立即停止执行当前迭代中 `continue` 后面的代码，然后开始下一次循环。
示例：
```python
[root@localhost ~]# vim python.py
#!/usr/bin/env python
for i in range(5):
    if i == 2:
        print("Skipping i =", i)
        continue
    print(i)
```
执行:
```python
[root@localhost ~]# python python.py
0
1
Skipping i = 2
3
4
```
总结：
- `break` 用于终止整个循环。
- `continue` 用于结束当前迭代，跳到下一次迭代的开头。
# 二 函数

在Python中，函数是一段可重复使用的代码块，用于完成特定的任务。函数通过提高代码的模块化和可维护性，使得代码更易读、理解和重用。以下是关于Python函数的详细讲解：
### **1. 函数的定义：**

```python
def function_name(parameters):     
	"""     函数文档字符串，用于描述函数的功能和参数。     """     
	# 函数体，包含具体的代码逻辑     
	statement1     
	statement2     
	# ...     
	return result  
	# 可选，用于返回值
```
- `def`：定义函数的关键字。
- `function_name`：函数的名称，遵循命名规则。
- `parameters`：函数的参数，可以是零个或多个。
- `"""..."""`：文档字符串，用于描述函数的作用、参数和返回值等信息。
- `return`：可选，用于返回函数的结果。

### **2. 函数的调用：**

```python
result = function_name(arguments)
```
- `function_name`：函数的名称。
- `arguments`：传递给函数的实际参数。

### **3. 函数的参数：**

- **位置参数：** 位置参数是最常见的参数传递方式，参数的传递顺序与函数定义时的参数顺序一致。
```python
def add(x, y):     
	return x + y
```

- **关键字参数：** 使用关键字参数可以不考虑参数的传递顺序，直接通过参数名指定传递的值。
```python
def greet(name, greeting="Hello"):     
	return f"{greeting}, {name}!"
```

- **默认参数：** 默认参数允许在函数定义时给参数设置默认值，在调用函数时如果没有传递该参数，则使用默认值。
```python
def power(base, exponent=2):     
	return base ** exponent
```
 
- **可变长参数：** 可变长参数允许函数接受不定数量的参数。在函数定义中，使用 `*args` 表示接受任意数量的位置参数，使用 `**kwargs` 表示接受任意数量的关键字参数。
```python
def sum_all(*args):     
	return sum(args)  
	
def print_info(**kwargs):     
	for key, value in kwargs.items():         
	print(f"{key}: {value}")`
```
 
 **强制位置参数：**
在Python 3.8及更高版本中，可以使用 `/` 将函数参数划分为强制位置参数和其他参数。
```python
def func(a, b, /, c, d, *args, **kwargs):     
	print(a, b, c, d, args, kwargs)  

func(1, 2, 3, 4, 5, 6, x=7, y=8) # 输出：1 2 3 4 (5, 6) {'x': 7, 'y': 8}`
```
在这个例子中，`a` 和 `b` 是强制位置参数，必须通过位置传递；`c` 和 `d` 可以通过位置或关键字传递；`args` 接受任意数量的位置参数；`kwargs` 接受任意数量的关键字参数。

### **4. 返回值：**

函数通过 `return` 语句返回一个值，如果没有明确的 `return`，函数默认返回 `None`。
```python
def add(x, y):     
	return x + y  
	result = add(3, 4) 
	print(result)  # 输出 7
```

### **5. 函数的文档字符串：**

文档字符串用于描述函数的作用、参数、返回值等信息，可以通过 `help()` 函数或 `.__doc__` 属性查看。
```python
def greet(name):     
	"""     
	问候函数，返回一个问候消息。          
	参数：     name (str): 要问候的人的名字。          
	返回：     str: 包含问候消息的字符串。     
	"""
	return f"Hello, {name}!"  
	# 查看文档字符串 print(help(greet))  
	# 或者 
	print(greet.__doc__)
```

### **6. 函数的分类：**

- **内置函数：** Python自带的函数，无需导入模块。
```python
len(), 
print(), 
range(), 
etc.
```
    
- **自定义函数：** 用户根据需求编写的函数。
```python
def my_function():     
	# 代码逻辑
```
    
- **匿名函数（Lambda函数）：** 使用 `lambda` 关键字定义的小型匿名函数。
```python
add = lambda x, y: x + y
```
    
- **递归函数：** 在函数内部调用自身的函数。
```python
def factorial(n):     
	if n == 0 or n == 1:         
		return 1     
	else:         
		return n * factorial(n-1)
```
### **7. 函数的用途：**
- **封装代码：** 将一段代码封装成函数，提高代码的模块化和可读性。
- **提高代码的复用性：** 可以在不同的地方调用同一个函数。
- **参数传递：** 通过参数向函数传递信息，实现灵活的功能。
- **返回值：** 函数可以返回计算结果，供调用者使用。
- **模块化编程：** 将程序拆分成小的功能块，每个块都是一个函数，降低程序的复杂性。

### **8. 函数的实例：**
#### **示例1：计算平均值**
```python
def calculate_average(numbers):     
"""计算列表中元素的平均值"""     
	if not numbers:         
		return None     
		return sum(numbers) / len(numbers)  
numbers = [2, 4, 6, 8, 10] 
average = calculate_average(numbers) 
print(f"平均值: {average}")
```
#### **示例2：判断奇偶数**
```python
def is_even(number):     
	"""判断是否为偶数"""     
	return number % 2 == 0  
num = 7 
if is_even(num):     
	print(f"{num} 是偶数。") 
else:     
	print(f"{num} 是奇数。")`
```
#### **示例3：生成斐波那契数列**
```python
def fibonacci(n):     
	"""生成斐波那契数列"""     
	fib_seq = [0, 1]     
	while len(fib_seq) < n:         
		fib_seq.append(fib_seq[-1] + fib_seq[-2])     
	return fib_seq  
result = fibonacci(10) 
print(result)
```
这些例子展示了函数在不同场景下的应用，从简单的平均值计算到更复杂的斐波那契数列生成。函数可以根据需求实现各种功能，提高代码的可维护性和可读性。
### **9. 函数的作用域：**

在 Python 中，作用域（Scope）是指变量的可访问性和生命周期的范围。Python 中有两种主要的作用域：

1. **全局作用域（Global Scope）:**
    - 全局作用域是指在整个程序中都可访问的范围。
    - 在全局作用域中定义的变量通常是在程序的顶层，或者说不在任何函数或类的内部。
    - 全局变量可以被程序中的任何地方访问，包括函数内部。 
    **示例：**
```python
global_variable = 10  
def my_function():     
	print(global_variable)  
my_function()  # 输出 10
```

2. **局部作用域（Local Scope）:**
    - 局部作用域是指在函数内部定义的变量的范围。
    - 在函数内定义的变量只能在该函数内部访问，称为局部变量。
    - 局部变量的生命周期仅在函数执行期间。
    **示例：**
```python
def my_function():     
	local_variable = 20     
	print(local_variable)  
my_function()  # 输出 20  
# 尝试在函数外部访问局部变量将导致错误 
# print(local_variable)  
# 会引发 NameError
```

3. **嵌套作用域（Enclosing Scope）:** 
    - 嵌套作用域是指在函数内部嵌套的函数所形成的作用域。
    - 内部函数可以访问外部函数的变量，但反过来则不成立。
    **示例：**
```python
def outer_function():     
	outer_variable = 30      
	def inner_function():         
		print(outer_variable)      
	inner_function()  
outer_function()  # 输出 30
```

在 Python 中，当在函数内部引用一个变量时，解释器首先查找该变量的作用域。它按照以下顺序查找：
1. **局部作用域（Local Scope）：** 函数内部的局部变量。
2. **嵌套作用域（Enclosing Scope）：** 包围在当前作用域外部的函数内部的变量。
3. **全局作用域（Global Scope）：** 程序顶层的全局变量。
4. **内建作用域（Built-in Scope）：** 包含内建函数和变量的作用域，如 `print()`、`len()` 等。
如果在当前作用域找不到变量，解释器将向上一级作用域查找，直到找到为止。如果在全局作用域中都找不到，最后会在内建作用域中查找。这被称为 LEGB 规则（Local, Enclosing, Global, Built-in）。
### **10. 匿名函数：**
Python的匿名函数是一种没有名字的简单函数，它使用`lambda`关键字来定义，后面跟着一个或多个参数，然后是一个冒号，最后是一个表达式。匿名函数的返回值就是表达式的结果。匿名函数通常用于作为其他函数的参数，或者赋值给一个变量，以便重复使用。匿名函数是一种简单的、一行的函数定义方式，适用于一些简单的操作。Lambda函数可以接受任意数量的参数，但只能有一个表达式。下面是一些匿名函数的例子：

- 一个没有参数的匿名函数，返回一个字符串：
```python
f = lambda: "Hello, world!"
print(f()) # 输出 Hello, world!
```

- 一个有一个参数的匿名函数，返回参数的平方：
```python
g = lambda x: x**2
print(g(5)) # 输出 25
```

- 一个有两个参数的匿名函数，返回两个参数的和：
```python
h = lambda x, y: x + y
print(h(3, 4)) # 输出 7
```

- 一个匿名函数作为map函数的参数，将一个列表中的每个元素乘以2：
```python
my_list = [1, 2, 3, 4, 5]
new_list = list(map(lambda x: x * 2, my_list))
print(new_list) # 输出 [2, 4, 6, 8, 10]

"""  
使用map()函数  
map()函数用于将指定序列中的所有元素作为参数调用到指定函数，并将结果构成一个新的序列返回。map函数的语法如下：  
结果序列 = map(映射函数, 序列1, 序列2,…) 在map()函数的参数中，可以有多个序列，这取决于映射函数的参数数量。序列1、序列2等序列中元素会按顺序作为映射函数的参数，映射函数的返回值  
"""
```

- 一个匿名函数作为filter函数的参数，筛选出一个列表中的奇数：
```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8]
odd_list = list(filter(lambda x: x % 2 == 1, my_list))
print(odd_list) # 输出 [1, 3, 5, 7]

"""  
filter()函数  
filter()函数可以对指定序列执行过滤操作，具体定义如下：  
filter(函数function, 序列sequence) 函数function接受一个参数，返回布尔值True或False。序列sequence可以是列表、元祖或字符串。  
filter()函数以序列参数sequence中的每个元素为参数调用function函数，调用结果为True的元素最后将作为filter()函数的结果返回。  
"""
```

```python
"""  
reduce()函数  
reduce()函数用于将指定序列中的所有元素作为参数按一定的规则调用指定函数。reduce函数的语法如下：  
计算结果= reduce(映射函数, 序列) 映射函数的必须有2个参数。reduce()函数首先以序列的第1个和第2个元素为参数调用映射函数，然后将返回结果与序列的第3个元素为参数调用映射函数。以此类推，直至应用到序列的最后一个元素，将计算结果作为reduce()函数的返回结果。  
从Python 3.0开始，reduce()函数不再被集成在Python内置函数中，需要使用西面的语句引用functools模块，才能调用reduce()函数.  
"""  
  
  
def add(x, y): return x + y  
  
  
sum = reduce(add, range(1, 11))  
print(sum)
```

```python
def test_func(compute):  
    result = compute(1, 2)  
    print(f"结果是：{result}")  
  
  
test_func(lambda a, b: a + b)
```

Python匿名函数的自执行是指定义一个匿名函数并立即调用它，而不需要将其赋值给一个变量或者作为其他函数的参数。这样可以节省命名空间，避免函数名冲突，也可以实现一些简单的功能。自执行的匿名函数的语法是：
```python
(lambda 参数列表: 表达式)(实参列表)
```

其中，lambda是关键字，表示匿名函数，参数列表是可选的，表达式是函数体，实参列表是传入的参数。例如，下面的代码定义了一个自执行的匿名函数，用于计算两个数的和：
```python
(lambda x, y: x + y)(3, 4) # 输出 7
```

自执行的匿名函数可以与其他函数一起使用，例如，下面的代码使用了自执行的匿名函数作为sorted函数的key参数，用于对一个列表按照元素的绝对值进行排序：
```python
my_list = [3, -5, 2, -1, 4]
sorted(my_list, key=lambda x: abs(x)) # 输出 [1, 2, 3, 4, 5]

"""
Python中的sorted函数是一个内置函数，它可以对任何可迭代的对象进行排序操作，返回一个新的排序后的列表。您可以指定排序的规则，例如按照升序或降序，或者按照自定义的键函数。下面是一些sorted函数的使用说明：

sorted函数的基本语法是：
sorted(iterable, key=None, reverse=False)
其中，iterable是要排序的可迭代对象，例如列表，元组，字典，集合，字符串等。key是一个可选的参数，它是一个函数，用于指定排序的依据。reverse是一个布尔值，用于指定排序的顺序，False表示升序（默认），True表示降序。

- sorted函数会返回一个新的排序后的列表，而不会改变原来的可迭代对象。如果要对原来的列表进行排序，可以使用列表的sort方法，它的语法和sorted函数类似，但是没有返回值，而是直接修改列表本身。

- sorted函数可以使用key参数来自定义排序的依据，key参数是一个函数，它接受一个可迭代对象中的一个元素作为输入，返回一个用于比较的值。例如，如果要按照元组或列表中的第二个值进行排序，可以使用lambda函数作为key参数
t = [(2, "b"), (1, "a"), (3, "c")]
print(sorted(t, key=lambda x: x[1])) # 输出 [(1, 'a'), (2, 'b'), (3, 'c')]

- sorted函数可以使用reverse参数来指定排序的顺序，reverse参数是一个布尔值，False表示升序（默认），True表示降序。例如，如果要按照数字的降序进行排序，可以设置reverse参数为True
"""
```

匿名函数的优点是简洁，不需要定义函数名，节省了命名空间。匿名函数的缺点是可读性较差，只能有一个表达式，不能包含复杂的逻辑。

# 三 数据容器
Python 提供了多种数据容器（Data Containers），它们用于存储和组织数据。以下是 Python 中常见的几种数据容器：
## **1 列表（List）:**
    - **特点：** 有序、可变（Mutable），元素可以是不同类型。
    - **创建：** 使用方括号 `[]`。
    - **示例：**
```python
my_list = [1, 2, 3, 'a', 'b', 'c']
```

Python 中的列表（List）是一种有序、可变的数据容器，提供了丰富的方法来操作和处理数据。以下是一些常用的 Python 列表方法：

 **append(x)：**
    - 在列表末尾添加元素 `x`。
```python
my_list = [1, 2, 3] 
my_list.append(4) # 现在 my_list 是 [1, 2, 3, 4]
```
 
2. **`extend(iterable)`：**
    - 将可迭代对象中的元素逐一添加到列表末尾。
```python
my_list = [1, 2, 3] 
my_list.extend([4, 5, 6]) # 现在 my_list 是 [1, 2, 3, 4, 5, 6]
```

3. **`insert(i, x)`：**
    - 在指定索引 `i` 处插入元素 `x`。
```python
my_list = [1, 2, 3] 
my_list.insert(1, 4) # 现在 my_list 是 [1, 4, 2, 3]
```

4. **`remove(x)`：**
    - 移除列表中第一个值为 `x` 的元素。
```python
my_list = [1, 2, 3, 2] 
my_list.remove(2) # 现在 my_list 是 [1, 3, 2]
```

5. **`pop([i])`：**
    - 移除并返回指定索引 `i` 处的元素，如果未提供索引，则移除并返回最后一个元素。
```python
my_list = [1, 2, 3] 
popped_element = my_list.pop(1) # popped_element 是 2，现在 my_list 是 [1, 3]`
```
 
6. **`index(x[, start[, end]])`：**
    - 返回第一个值为 `x` 的元素的索引。
```python
my_list = [1, 2, 3, 2] 
index = my_list.index(2) # index 是 1
```

7. **`count(x)`：**
    - 返回值为 `x` 的元素在列表中出现的次数。
```python
my_list = [1, 2, 3, 2] 
count = my_list.count(2) # count 是 2
```
   
8. **`sort(key=None, reverse=False)`：**
    - 对列表进行排序，默认升序。可以通过 `key` 参数指定排序依据，通过 `reverse` 参数指定降序。
```python
my_list = [3, 1, 4, 1, 5, 9, 2] 
my_list.sort() # 现在 my_list 是 [1, 1, 2, 3, 4, 5, 9]
```

9. **`reverse()`：**
    - 将列表中的元素倒序排列。
```python
my_list = [1, 2, 3] 
my_list.reverse() # 现在 my_list 是 [3, 2, 1]
```

10. **`copy()`：**
    - 返回列表的浅拷贝（复制），即创建一个新列表，但其中的元素仍然是原列表中元素的引用。
```
original_list = [1, 2, 3] 
copied_list = original_list.copy()
```
这些方法使得 Python 列表非常灵活且易于使用，可以满足各种数据处理和操作的需求。
##  **2 元组（Tuple）:**
    - **特点：** 有序、不可变（Immutable），元素可以是不同类型。
    - **创建：** 使用圆括号 `()`。
    - **示例：**
```python
my_tuple = (1, 2, 3, 'a', 'b', 'c')
```

##   **3 集合（Set）:**
    - **特点：** 无序、可变，元素不能重复。
    - **创建：** 使用花括号 `{}` 或者 `set()` 构造函数。
    - **示例：**
```python
my_set = {1, 2, 3, 'a', 'b', 'c'}
```
集合的内置方法：
- `add (x)`：向集合中添加元素 x，如果 x 已存在，则不做任何操作。
- `clear ()`：清空集合中的所有元素。
- `copy ()`：返回集合的一个浅拷贝。
- `difference (other)`：返回一个新集合，包含当前集合中有，但 other 集合中没有的元素。也可以用 `-` 运算符表示。
- `difference_update (other)`：在当前集合中移除和 other 集合中共有的元素。没有返回值。
- `discard (x)`：移除集合中的元素 x，如果 x 不存在，则不报错。
- `intersection (other)`：返回一个新集合，包含当前集合和 other 集合中都有的元素。也可以用 `&` 运算符表示。
- `intersection_update (other)`：在当前集合中只保留和 other 集合中共有的元素。没有返回值。
- `isdisjoint (other)`：判断当前集合和 other 集合是否没有共同的元素，如果是，返回 True，否则返回 False。
- `issubset (other)`：判断当前集合是否是 other 集合的子集，如果是，返回 True，否则返回 False。也可以用 `<=` 运算符表示。
- `issuperset (other)`：判断当前集合是否是 other 集合的超集，如果是，返回 True，否则返回 False。也可以用 `>=` 运算符表示。
- `pop ()`：随机返回并移除集合中的一个元素，如果集合为空，抛出 KeyError 异常。
- `remove (x)`：移除集合中的元素 x，如果 x 不存在，抛出 KeyError 异常。
- `symmetric_difference (other)`：返回一个新集合，包含当前集合和 other 集合中不同时存在的元素。也可以用 `^` 运算符表示。
- `symmetric_difference_update (other)`：在当前集合中保留和 other 集合中不同时存在的元素。没有返回值。
- `union (other)`：返回一个新集合，包含当前集合和 other 集合中的所有元素。也可以用 `|` 运算符表示。
- `update (other)`：将 other 集合中的元素添加到当前集合中，如果有重复的元素，则忽略。没有返回值。
下面是一个使用集合方法的示例代码：
```python
# 创建两个集合
set1 = {"a", "b", "c", "d"}
set2 = {"c", "d", "e", "f"}

# 计算集合的并集
set3 = set1.union (set2)
print (set3) # {'a', 'b', 'c', 'd', 'e', 'f'}

# 计算集合的交集
set4 = set1.intersection (set2)
print (set4) # {'c', 'd'}

# 计算集合的差集
set5 = set1.difference (set2)
print (set5) # {'a', 'b'}

# 计算集合的对称差集
set6 = set1.symmetric_difference (set2)
print (set6) # {'a', 'b', 'e', 'f'}

# 判断集合是否相离
print (set1.isdisjoint (set2)) # False
print (set1.isdisjoint ({"x", "y", "z"})) # True

# 判断集合是否包含或被包含
print (set1.issubset (set3)) # True
print (set1.issuperset (set4)) # True

# 向集合中添加或移除元素
set1.add ("g")
print (set1) # {'a', 'b', 'c', 'd', 'g'}
set1.discard ("g")
print (set1) # {'a', 'b', 'c', 'd'}
set1.remove ("d")
print (set1) # {'a', 'b', 'c'}
set1.pop ()
print (set1) # {'b', 'c'}

# 清空集合
set1.clear ()
print (set1) # set()

```

##   **4 字典（Dictionary）:**
    - **特点：** 无序（从 Python 3.7 开始，字典有序）、可变，键值对存储。
    - **创建：** 使用花括号 `{}`，每对键值之间用冒号分隔。
    - **示例：**
```python
my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}
```
Python里的字典是一种非常常用和强大的数据结构，它可以存储任意类型的键值对，方便快速地查找和修改数据。字典的创建、访问、更新和删除等操作都很简单，而且有很多内置的方法可以对字典进行高级的处理。字典的应用场景非常广泛，例如：

- 用字典来存储一些配置信息，如数据库的连接参数，服务器的端口号等。
- 用字典来实现一些数据结构，如哈希表、树、图等。
- 用字典来统计一些数据的频率，如单词的出现次数，用户的访问次数等。
- 用字典来缓存一些计算结果，以提高性能，如斐波那契数列，阶乘等。

下面我将详细介绍一下字典的基本用法，以及一些常用的字典方法。

字典的创建：
创建字典有多种方式，最常见的是使用大括号 `{}`，并用冒号 `:` 分隔键和值，用逗号 `,` 分隔每个键值对，例如：
```python
# 创建一个空字典
d = {}

# 创建一个包含三个键值对的字典
d = {'name': 'Alice', 'age': 18, 'gender': 'female'}
```
也可以使用 `dict()` 函数从其他序列或映射类型创建字典，例如：
```python
# 从列表或元组创建字典，每个元素是一个键值对
d = dict([('name', 'Alice'), ('age', 18), ('gender', 'female')])

# 从关键字参数创建字典，每个参数名是一个键，参数值是一个值
d = dict(name='Alice', age=18, gender='female')
```
还可以使用 `dict.fromkeys()` 方法从一个可迭代对象创建字典，该方法会将可迭代对象中的每个元素作为键，值默认为 `None`，也可以指定一个默认值，例如：
```python
# 从一个字符串创建字典，每个字符是一个键，值默认为 None
d = dict.fromkeys('abc')

# 从一个列表创建字典，每个元素是一个键，值为 0
d = dict.fromkeys(['name', 'age', 'gender'], 0)

```

字典的访问
访问字典中的值有两种方式，一种是使用方括号 `[]`，并传入键作为索引，例如：
```python
# 创建一个字典
d = {'name': 'Alice', 'age': 18, 'gender': 'female'}

# 使用方括号访问字典中的值
print(d['name']) # Alice
print(d['age']) # 18
```
另一种是使用 `get()` 方法，该方法也是传入键作为参数，但是如果键不存在，不会抛出异常，而是返回 `None`，也可以指定一个默认值，例如：
```python
# 使用 get() 方法访问字典中的值
print(d.get('name')) # Alice
print(d.get('height')) # None
print(d.get('height', 160)) # 160

```
访问字典中的键有两种方式，一种是使用 `keys()` 方法，该方法会返回一个包含所有键的可迭代对象，例如：
```python
# 使用 keys() 方法访问字典中的键
print(d.keys()) # dict_keys(['name', 'age', 'gender'])
```
另一种是直接使用 `for` 循环遍历字典，该循环会默认迭代字典中的键，例如：
```python
# 使用 for 循环访问字典中的键
for k in d:
    print(k) # name, age, gender
```
访问字典中的值有两种方式，一种是使用 `values()` 方法，该方法会返回一个包含所有值的可迭代对象，例如：
```python
# 使用 values() 方法访问字典中的值
print(d.values()) # dict_values(['Alice', 18, 'female'])
```
另一种是使用 `for` 循环遍历字典中的键，然后通过方括号或 `get()` 方法获取对应的值，例如：
```python
# 使用 for 循环访问字典中的值
for k in d:
    print(d[k]) # Alice, 18, female

```
访问字典中的键值对有两种方式，一种是使用 `items()` 方法，该方法会返回一个包含所有键值对的可迭代对象，每个键值对是一个元组，例如：
```python
# 使用 items() 方法访问字典中的键值对
print(d.items()) # dict_items([('name', 'Alice'), ('age', 18), ('gender', 'female')])

```
另一种是使用 `for` 循环遍历字典中的键值对，可以使用两个变量来接收键和值，例如：
```python
# 使用 for 循环访问字典中的键值对
for k, v in d.items():
    print(k, v) # name Alice, age 18, gender female
```

字典的更新
更新字典中的值有两种方式，一种是使用方括号 `[]`，并传入键作为索引，然后赋值给新的值，例如：
```python
# 使用方括号更新字典中的值
d['name'] = 'Bob'
print(d) # {'name': 'Bob', 'age': 18, 'gender': 'female'}
```
另一种是使用 `update()` 方法，该方法可以传入一个字典或一个可迭代对象，然后将其合并到原字典中，如果有重复的键，会覆盖原来的值，例如：
```python
# 使用 update() 方法更新字典中的值
d.update({'age': 20, 'height': 180})
print(d) # {'name': 'Bob', 'age': 20, 'gender': 'female', 'height': 180}

```
更新字典中的键有两种方式，一种是先删除原来的键值对，然后添加新的键值对，例如：
```python
# 删除原来的键值对
del d['gender']

# 添加新的键值对
d['sex'] = 'male'

print(d) # {'name': 'Bob', 'age': 20, 'height': 180, 'sex': 'male'}

```
另一种是使用 `pop()` 方法，该方法可以传入一个键作为参数，然后返回并删除该键对应的值，然后再添加新的键值对，例如：
```python
# 使用 pop() 方法返回并删除原来的键值对
v = d.pop('sex')

# 添加新的键值对
d['gender'] = v

print(d) # {'name': 'Bob', 'age': 20, 'height': 180, 'gender': 'male'}

```

字典的删除
删除字典中的值有两种方式，一种是使用 `del` 语句，并传入键作为索引，例如：
```python
# 使用 del 语句删除字典中的值
del d['height']
print(d) # {'name': 'Bob', 'age': 20, 'gender': 'male'}

```
另一种是使用 `pop()` 方法，该方法可以传入一个键作为参数，然后返回并删除该键对应的值，例如：
```python
# 使用 pop
```

Python里的字典是一种非常常用和灵活的数据结构，它可以存储任意类型的键值对，实现快速的查找、更新和删除操作。字典的方法有很多，这里我简单介绍一些常见的方法和应用场景，并给出一些示例代码。

- `dict()`：这是创建字典的内置函数，它可以从其他序列类型（如列表、元组）或关键字参数来构造字典。例如：
```python
# 从列表或元组构造字典
lst = [("name", "Alice"), ("age", 20), ("gender", "female")]
dic = dict(lst)
print(dic) # {'name': 'Alice', 'age': 20, 'gender': 'female'}

# 从关键字参数构造字典
dic = dict(name="Bob", age=25, gender="male")
print(dic) # {'name': 'Bob', 'age': 25, 'gender': 'male'}

```

- `dict.fromkeys()`：这是一个类方法，它可以从一个可迭代对象（如列表、元组、字符串）来创建一个字典，其中每个元素作为键，值默认为None，也可以指定一个默认值。这个方法常用于初始化一个字典。例如：
```python
# 从列表创建一个字典，值为None
lst = ["name", "age", "gender"]
dic = dict.fromkeys(lst)
print(dic) # {'name': None, 'age': None, 'gender': None}

# 从字符串创建一个字典，值为0
s = "abc"
dic = dict.fromkeys(s, 0)
print(dic) # {'a': 0, 'b': 0, 'c': 0}

```
- `dict.get()`：这是一个实例方法，它可以根据给定的键来获取字典中的值，如果键不存在，可以返回一个默认值，而不会抛出异常。这个方法常用于避免键错误。例如：
```python
# 从字典中获取值，如果键不存在，返回None
dic = {"name": "Alice", "age": 20, "gender": "female"}
print(dic.get("name")) # Alice
print(dic.get("height")) # None

# 从字典中获取值，如果键不存在，返回指定的默认值
print(dic.get("height", 160)) # 160

```
- `dict.setdefault()`：这是一个实例方法，它可以根据给定的键来获取字典中的值，如果键不存在，可以在字典中插入这个键和一个默认值，并返回这个默认值。这个方法常用于在字典中设置默认值。例如：
```python
# 从字典中获取值，如果键不存在，设置默认值并返回
dic = {"name": "Alice", "age": 20, "gender": "female"}
print(dic.setdefault("name", "Bob")) # Alice
print(dic.setdefault("height", 160)) # 160
print(dic) # {'name': 'Alice', 'age': 20, 'gender': 'female', 'height': 160}

```
- `dict.update()`：这是一个实例方法，它可以从另一个字典或可迭代对象中更新当前字典的键值对，如果有重复的键，会覆盖原来的值。这个方法常用于合并两个字典。例如：
```python
# 从另一个字典更新当前字典
dic1 = {"name": "Alice", "age": 20, "gender": "female"}
dic2 = {"name": "Bob", "height": 180, "weight": 70}
dic1.update(dic2)
print(dic1) # {'name': 'Bob', 'age': 20, 'gender': 'female', 'height': 180, 'weight': 70}

# 从可迭代对象更新当前字典
lst = [("name", "Charlie"), ("hobby", "coding")]
dic1.update(lst)
print(dic1) # {'name': 'Charlie', 'age': 20, 'gender': 'female', 'height': 180, 'weight': 70, 'hobby': 'coding'}

```
- `dict.pop()`：这是一个实例方法，它可以根据给定的键来删除字典中的键值对，并返回被删除的值，如果键不存在，可以返回一个默认值，或者抛出异常。这个方法常用于移除字典中的某个元素。例如：
```python
# 从字典中删除键值对，并返回被删除的值
dic = {"name": "Alice", "age": 20, "gender": "female"}
print(dic.pop("name")) # Alice
print(dic) # {'age': 20, 'gender': 'female'}

# 从字典中删除键值对，如果键不存在，返回指定的默认值
print(dic.pop("height", 160)) # 160
print(dic) # {'age': 20, 'gender': 'female'}

# 从字典中删除键值对，如果键不存在，抛出异常
print(dic.pop("height")) # KeyError: 'height'

```
- `dict.popitem()`：这是一个实例方法，它可以随机删除字典中的一个键值对，并以元组的形式返回被删除的键和值，如果字典为空，会抛出异常。这个方法常用于在不关心键的顺序的情况下，逐个移除字典中的元素。例如：
```python
# 从字典中随机删除一个键值对，并返回被删除的键和值
dic = {"name": "Alice", "age": 20, "gender": "female"}
print(dic.popitem()) # ('gender', 'female')
print(dic) # {'name': 'Alice', 'age': 20}

# 从字典中随机删除一个键值对，如果字典为空，抛出异常
dic = {}
print(dic.popitem()) # KeyError: 'popitem(): dictionary is empty'

```
- `dict.keys()`：这是一个实例方法，它可以返回一个包含字典中所有键的可迭代对象，可以用 list() 函数将其转换为列表。这个方法常用于遍历字典中的键。例如：
```python
# 返回一个包含字典中所有键的可迭代对象
dic = {"name": "Alice", "age": 20, "gender": "female"}
print(dic.keys()) # dict_keys(['name', 'age', 'gender'])

# 将可迭代对象转换为列表
lst = list(dic.keys())
print(lst) # ['name', 'age', 'gender']

# 遍历字典中的键
for key in dic.keys():
    print(key) # name, age, gender

```

```python
# 创建一个空字典
dic = {}

# 创建一个包含一些键值对的字典
dic = {"name": "Alice", "age": 18, "gender": "female"}

# 用 dict 函数从一个序列创建一个字典
lst = [("name", "Bob"), ("age", 20), ("gender", "male")]
dic = dict(lst)

# 用 fromkeys 方法从一个序列创建一个字典，指定默认值
keys = ["name", "age", "gender"]
dic = dict.fromkeys(keys, "unknown")

# 访问字典中的值，用键作为索引
print(dic["name"]) # unknown

# 修改字典中的值，用键作为索引
dic["name"] = "Charlie"

# 添加字典中的键值对，用键作为索引
dic["score"] = 90

# 删除字典中的键值对，用 del 语句
del dic["gender"]

# 遍历字典中的键值对，用 items 方法
for key, value in dic.items():
    print(key, value)

# 判断字典中是否存在某个键，用 in 运算符
print("name" in dic) # True
print("gender" in dic) # False

# 获取字典中的值，如果键不存在，返回默认值，用 get 方法
print(dic.get("name")) # Charlie
print(dic.get("gender")) # None
print(dic.get("gender", "N/A")) # N/A

# 获取字典中的所有键，用 keys 方法
print(dic.keys()) # dict_keys(['name', 'age', 'score'])

# 获取字典中的所有值，用 values 方法
print(dic.values()) # dict_values(['Charlie', 'unknown', 90])

# 获取字典中的键值对的数量，用 len 函数
print(len(dic)) # 3

# 清空字典中的所有键值对，用 clear 方法
dic.clear()
print(dic) # {}

```
##  **5 字符串（String）:**
    - **特点：** 有序、不可变（字符串是不可变的序列）。
    - **创建：** 使用单引号 `''` 或双引号 `""`。
    - **示例：**
```python
my_string = 'Hello, World!'
```  

这些数据容器提供了不同的功能和特性，你可以根据具体的需求选择合适的容器类型。此外，Python 还提供了一些内建的模块和数据类型，如 `collections` 模块中的 `namedtuple`、`deque` 等，以及 NumPy 提供的 `array` 等，用于更复杂和特定的数据处理需求。
# 四 文件操作

## 1 编码
Python文件编码是指Python源代码文件在存储和传输时采用的字符编码方式，它决定了Python解释器如何读取和处理文件中的字符。Python文件编码有以下几个方面：

- Python文件的编码声明：就是经常在文件开头看到的 `# -*- coding: utf-8 -*-` 或者 `# coding=utf-8`，它用于告诉Python解释器该文件采用的编码格式。如果没有显式声明，Python2默认使用ASCII格式，Python3默认使用UTF-8格式。如果文件中包含非ASCII字符，例如中文，就需要在头部指定编码，否则会出现语法错误。
- Python文件的存储编码：就是文件本身在物理介质上的存储格式，通常有ASCII、GBK、UTF-8等格式。Python文件的存储编码应该与编码声明保持一致，否则会出现解码错误。如果使用编辑器，可以在设置中选择文件的存储编码，例如在Pycharm中，可以在File > Settings > Editor > File Encodings中设置IDE Encoding和Project Encoding为UTF-8。
- Python文件的传输编码：就是文件在网络上传输时采用的编码格式，通常也是UTF-8格式。Python文件的传输编码应该与存储编码保持一致，否则会出现乱码。如果使用HTTP协议，可以在响应头中指定文件的传输编码，例如`Content-Type: text/html; charset=utf-8`。

Python文件编码的目的是为了保证Python源代码文件在不同的平台和环境中能够正确地被读取和执行，避免出现编码不一致导致的错误和乱码。Python文件编码的原则是尽量使用统一的编码格式，通常是UTF-8格式，因为它具有以下优点：

- 可以处理任何Unicode字符，支持多种语言和符号。
- 与ASCII编码兼容，ASCII字符串也是合法的UTF-8文本。
- 相对紧凑，大多数常用字符只占用一两个字节。
- 面向字节，避免了字节顺序的问题。

## 2  文件的读取
Python的文件操作是指使用Python的内置函数或模块来对文件进行读写、修改、删除等操作。Python的文件操作主要涉及以下几个方面：

- 文件的打开和关闭：使用 open() 函数来打开一个文件，返回一个文件对象，然后使用 close() 函数来关闭文件。打开文件时需要指定文件名和打开模式，例如 ‘r’ 表示只读模式， ‘w’ 表示写入模式， ‘a’ 表示追加模式， ‘b’ 表示二进制模式等。打开文件时还可以指定编码方式和错误处理方式，例如 encoding=‘utf-8’ 和 errors=‘ignore’ 。打开文件后，一定要记得关闭文件，以释放资源和避免数据丢失。为了简化文件的打开和关闭，可以使用 with 语句来自动管理文件对象的生命周期，例如：
```python
f = open("D:/测试.txt", "r", encoding="utf-8")

with open('test.txt', 'r') as f:
    # do something with f

```

- 文件的读写操作：使用文件对象的 read() 、 write() 、 readline() 、 readlines() 、 writelines() 等方法来对文件进行读写操作。 read() 方法可以一次读取文件的全部内容，或者指定读取的字节数。 write() 方法可以向文件中写入字符串或字节流。 readline() 方法可以每次读取一行内容。 readlines() 方法可以一次读取所有内容并按行返回列表。 writelines() 方法可以将一个字符串列表写入文件。读写文件时，需要注意文件的编码方式和换行符的处理，以避免出现乱码或格式错误的问题。例如：
```python
with open('test.txt', 'r', encoding='utf-8') as f:
    for line in f:
        print(line.strip()) # 去掉换行符

```
### 2.1 read()方法
Python读取文件read的方法是用来从文件中读取指定的字节数，如果未给定或为负则读取所有。这个方法返回一个字符串，包含文件的内容。使用read方法时，需要先用open函数打开一个文件对象，然后调用文件对象的read方法，最后关闭文件对象。例如：
```python
# 打开文件
f = open('test.txt', 'r', encoding='utf-8')
# 读取文件内容
content = f.read()
# 打印文件内容
print(content)
# 关闭文件
f.close()
```

read方法有一个可选的参数size，表示要读取的字节数。如果不指定size，或者指定为负数，那么就会读取整个文件。如果指定了size，那么就会读取文件的前size个字节。例如：
```python
# 打开文件
f = open('test.txt', 'r', encoding='utf-8')
# 读取文件的前10个字节
content = f.read(10)
# 打印文件内容
print(content)
# 关闭文件
f.close()

```

read方法的返回值是一个字符串，如果文件是二进制文件，那么就需要用’b’模式打开文件，然后用decode方法将字节流转换为字符串。例如：
```python
# 打开文件
f = open('test.jpg', 'rb')
# 读取文件内容
content = f.read()
# 将字节流转换为字符串
content = content.decode('utf-8')
# 打印文件内容
print(content)
# 关闭文件
f.close()

```

read方法的缺点是，如果文件很大，那么一次性读取所有内容可能会占用很多内存，影响程序的性能。因此，如果文件很大，建议使用其他的方法来读取文件，例如readline或readlines。
### 2.2 readline()方法
Python读取文件readline的方法是用来从文件中读取一行内容，包括换行符"\n"。如果指定了一个非负数的参数size，那么就会返回该行的前size个字节。这个方法返回一个字符串，包含读取的内容。使用readline方法时，需要先用open函数打开一个文件对象，然后调用文件对象的readline方法，最后关闭文件对象。例如：
```python
# 打开文件
f = open('test.txt', 'r', encoding='utf-8')
# 读取文件的第一行
line = f.readline()
# 打印文件内容
print(line)
print(type(line))  # <class 'str'>
# 关闭文件
f.close()

```
readline方法的优点是，可以逐行读取文件，避免一次性读取过多的内容占用内存。readline方法的缺点是，如果文件的每行内容很长，那么读取速度可能会很慢，而且可能会读取不完整的数据。因此，使用readline方法时，需要注意文件的格式和大小，以及循环和异常的处理。
```python
# 打开文件  
f = open('test.txt', 'r', encoding='utf-8')  
# 读取文件的所有行  
lines = f.readlines()  
# 打印文件内容  
print(lines)  
print(type(lines))  # <class 'list'>
# 关闭文件  
f.close()
```
readlines方法有一个可选的参数hint，表示要返回的字节数。如果不指定hint，或者指定为负数，那么就会返回所有行。如果指定了hint，那么就会返回文件的前hint个字节所包含的行，可能不完整。例如：
```python
# 打开文件
f = open('test.txt', 'r', encoding='utf-8')
# 读取文件的前33个字节所包含的行
lines = f.readlines(33)
# 打印文件内容
print(lines)
# 关闭文件
f.close()

```
readlines方法的优点是，可以一次性读取文件的所有行，并且可以方便地用for循环来遍历每一行。readlines方法的缺点是，如果文件很大，那么一次性读取所有内容可能会占用很多内存，影响程序的性能。因此，使用readlines方法时，需要注意文件的大小和格式，以及异常的处理。

### 2.3 python中的with语句
Python的with语句是一种用于简化资源管理和异常处理的语法糖。它可以让我们在执行一些操作时，自动调用上下文管理器对象的 **enter** 和 **exit** 方法，以实现资源的初始化和释放，以及异常的捕获和处理。with语句的一般形式是：
```python
with expression as target:
    # do something

```
其中，expression 是一个返回上下文管理器对象的表达式，target 是一个可选的变量，用于接收 expression 的 **enter** 方法的返回值。上下文管理器对象是一个实现了 **enter** 和 **exit** 方法的对象，它可以定义 with 语句块的进入和退出的行为。例如，文件对象就是一个内置的上下文管理器对象，它可以用 with 语句来打开和关闭，如：
```python
with open('test.txt', 'r') as f:
    # do something with f
```
这样，我们就不需要手动调用 f.close() 方法来关闭文件，而是由 with 语句自动调用 f.**exit** 方法来完成。如果 with 语句块中发生了异常，那么 with 语句也会自动调用 f.**exit** 方法，并将异常信息作为参数传递给它，以便进行异常处理。如果 f.**exit** 方法返回 True，那么 with 语句会忽略异常，否则 with 语句会重新抛出异常，让外部的代码来处理。

除了内置的上下文管理器对象，我们也可以自定义上下文管理器类，只要实现 **enter** 和 **exit** 方法即可。例如，我们可以定义一个计时器类，用于统计 with 语句块的执行时间，如：
```python
import time

class Timer(object):
    def __init__(self):
        self.start = None
        self.end = None
        self.elapsed = None
    
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time.time()
        self.elapsed = self.end - self.start
        print(f'Elapsed time: {self.elapsed:.3f} seconds')
        return False # 不忽略异常

```
然后，我们可以用 with 语句来使用这个计时器类，如：
```python
with Timer() as t:
    # do something
    time.sleep(1)

```
这样，我们就可以在 with 语句块结束后，自动打印出执行时间，而不需要手动计算和输出。如果 with 语句块中发生了异常，那么计时器类的 **exit** 方法也会被调用，并将异常信息作为参数传递给它，以便进行异常处理。如果我们想忽略异常，我们可以在 **exit** 方法中返回 True，否则我们可以返回 False 或 None，让 with 语句重新抛出异常，让外部的代码来处理。

## 3 文件的写入
Python中文件的写入操作是指使用Python的内置函数或模块来向文件中写入数据，例如字符串、字节流、列表等。Python中文件的写入操作主要涉及以下几个方面：

- 文件的打开和关闭：使用 open() 函数来打开一个文件，返回一个文件对象，然后使用 close() 函数来关闭文件。打开文件时需要指定文件名和打开模式，例如 ‘w’ 表示写入模式， ‘a’ 表示追加模式， ‘b’ 表示二进制模式等。打开文件时还可以指定编码方式和错误处理方式，例如 encoding=‘utf-8’ 和 errors=‘ignore’ 。打开文件后，一定要记得关闭文件，以释放资源和避免数据丢失。为了简化文件的打开和关闭，可以使用 with 语句来自动管理文件对象的生命周期，例如：
```python
with open('test.txt', 'w') as f:
    # do something with f
```

- 文件的写入操作：使用文件对象的 write() 、 writelines() 等方法来向文件中写入数据。 write() 方法可以向文件中写入字符串或字节流。 writelines() 方法可以将一个字符串列表写入文件。写入文件时，需要注意文件的编码方式和换行符的处理，以避免出现乱码或格式错误的问题。例如：
```python
with open('test.txt', 'w', encoding='utf-8') as f:
    f.write('Hello, world!\n') # 写入一行字符串
    f.writelines(['This is Python\n', 'This is Bing\n']) # 写入多行字符串

```

- 文件的定位操作：使用文件对象的 seek() 、 tell() 、 truncate() 等方法来对文件进行定位操作。 seek() 方法可以移动文件指针到指定的位置，接受两个参数，一个是偏移量，一个是起始位置（0表示文件开头，1表示当前位置，2表示文件末尾）。 tell() 方法可以返回文件指针的当前位置。 truncate() 方法可以截断文件到指定的大小。定位操作可以实现对文件的随机写入，但是需要注意文件的打开模式和编码方式，以免造成数据损坏。例如：
```python
with open('test.txt', 'r+', encoding='utf-8') as f:
    f.seek(10, 0) # 移动到文件开头的第10个字节处
    print(f.tell()) # 输出当前位置
    f.write('Python') # 写入字符串
    f.truncate(20) # 截断文件到20个字节

```

- 文件的其他操作：使用 os 模块或 shutil 模块来对文件进行其他操作，例如重命名、删除、复制、移动、压缩等。 os 模块提供了一些基本的文件操作函数，例如 os.rename() 、 os.remove() 、 os.path.exists() 等。 shutil 模块提供了一些高级的文件操作函数，例如 shutil.copy() 、 shutil.move() 、 shutil.make_archive() 等。使用这些模块时，需要注意文件的路径和权限，以及异常的处理。例如：
```python
import os
import shutil

# 重命名文件
os.rename('test.txt', 'new_test.txt')

# 删除文件
os.remove('new_test.txt')

# 复制文件
shutil.copy('test.txt', 'copy_test.txt')

# 移动文件
shutil.move('copy_test.txt', 'test_dir')

# 压缩文件
shutil.make_archive('test_zip', 'zip', 'test_dir')

```

# 五 python的异常处理

Python的异常处理机制是一种用于在程序运行时检测和处理错误的机制。Python提供了`try`和`except`语句来捕获和处理异常，以及`finally`和`else`语句来执行一些必要的或可选的操作。Python的异常是一种对象，它包含了错误的类型、信息和回溯。Python内置了许多异常类，它们都继承自`BaseException`或`Exception`类。一些常见的内置异常有：

`ArithmeticError`：数值运算错误的基类，包括`OverflowError`（数值运算超出最大限制）、`ZeroDivisionError`（除或取模零）和`FloatingPointError`（浮点运算错误）1。
`AttributeError`：当对象没有这个属性或不能进行属性赋值时引发1。
`EOFError`：当input()函数未读取任何数据即达到文件结束条件时引发1。
`ImportError`：当import语句尝试加载模块失败时引发1。
`IndexError`：当序列中没有这个索引时引发1。
`KeyError`：当映射中没有这个键时引发1。
`NameError`：当未声明或初始化对象时引发1。
`SyntaxError`：当Python语法错误时引发1。
`TypeError`：当对类型无效的操作时引发1。
`ValueError`：当传入无效的参数时引发1。

Python的异常处理机制的语法如下2：
```python
try:
    # 可能会引发异常的代码
except Exception1 as e1:
    # 处理Exception1类型的异常
except Exception2 as e2:
    # 处理Exception2类型的异常
...
except ExceptionN as eN:
    # 处理ExceptionN类型的异常
else:
    # 如果没有异常发生，执行这个代码块
finally:
    # 无论是否发生异常，都会执行这个代码块
```

举例说明，假设我们有一个函数，它接受两个数作为参数，并返回它们的商
```python
def divide(x, y):
    return x / y

```

如果我们调用这个函数，传入一个非数值类型的参数，或者传入0作为除数，就会引发异常：
```python
>>> divide(10, 2)
5.0
>>> divide(10, 'a')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 2, in divide
TypeError: unsupported operand type(s) for /: 'int' and 'str'
>>> divide(10, 0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 2, in divide
ZeroDivisionError: division by zero

```

为了避免程序因为异常而终止，我们可以使用try和except语句来捕获和处理异常：
```python
try:
    x = int(input("请输入被除数："))
    y = int(input("请输入除数："))
    result = divide(x, y)
    print("结果是：", result)
except ValueError:
    print("输入的值必须是数值类型")
except ZeroDivisionError:
    print("除数不能为0")
except Exception as e:
    print("发生了其他异常：", e)
else:
    print("没有发生异常")
finally:
    print("程序结束")

```

这样，当我们输入无效的值或0时，程序不会崩溃，而是会显示相应的错误信息，并继续执行finally代码块：
```python
请输入被除数：10
请输入除数：a
输入的值必须是数值类型
程序结束
>>> 
请输入被除数：10
请输入除数：0
除数不能为0
程序结束
```

# 六 python的模块和包
## 1 python模块
Python的模块是一个包含了Python对象定义和语句的文件，它可以被其他Python程序导入和使用。Python的模块可以提高代码的复用性和可维护性，也可以扩展Python的功能和库。Python的模块有三种类型：标准库模块、第三方库模块和自定义模块。

- 标准库模块是Python自带的一些常用模块，例如math、os、datetime等，它们可以直接使用import语句导入，无需安装额外的包。标准库模块提供了一些基本的功能和数据类型，例如数学运算、文件操作、日期和时间处理等。
- 第三方库模块是由其他开发者或组织提供的一些扩展模块，例如pandas、numpy、matplotlib等，它们可以通过pip或conda等工具安装，然后使用import语句导入。第三方库模块提供了一些高级的功能和应用，例如数据分析、科学计算、图形绘制等。
- 自定义模块是由用户自己编写的一些模块，它们可以保存在.py文件中，然后在同一目录下或者添加到sys.path中的目录下使用import语句导入。自定义模块可以实现用户自己的逻辑和需求，也可以方便地在不同的程序中复用。

以下是一些使用Python模块的应用实例：

- 使用math模块计算圆的周长和面积。math模块是一个标准库模块，它包含了一些数学常数和函数，例如pi、sin、cos等。我们可以使用math.pi来获取圆周率的值，然后根据公式计算圆的周长和面积。代码如下：
```python
# 导入math模块
import math

# 定义一个函数，计算圆的周长
def circumference(r):
    # 周长 = 2 * pi * 半径
    return 2 * math.pi * r

# 定义一个函数，计算圆的面积
def area(r):
    # 面积 = pi * 半径的平方
    return math.pi * r ** 2

# 测试
r = 10 # 半径为10
print("周长 =", circumference(r)) # 输出周长
print("面积 =", area(r)) # 输出面积

```
- 使用pandas模块创建和处理数据框。pandas模块是一个第三方库模块，它是一个强大的数据分析工具，可以方便地处理各种格式的数据，例如表格、时间序列、文本等。pandas模块的核心数据结构是DataFrame，它是一个二维的表格，可以存储不同类型的数据，并提供了一系列的操作和分析方法。我们可以使用pandas.DataFrame()函数来创建一个数据框，然后使用pandas模块的方法和属性来访问和修改数据框。代码如下：
```python
# 导入pandas模块
import pandas as pd

# 创建一个数据框，包含姓名、年龄和性别三列
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35],
    "Gender": ["F", "M", "M"]
}
df = pd.DataFrame(data)

# 输出数据框
print(df)

# 访问数据框的某一列
print(df["Name"])

# 访问数据框的某一行
print(df.loc[0])

# 修改数据框的某个值
df.loc[0, "Age"] = 26
print(df)

# 添加数据框的一列
df["City"] = ["Beijing", "Shanghai", "Guangzhou"]
print(df)

# 删除数据框的一列
df.drop("City", axis=1, inplace=True)
print(df)
```
- 使用自定义模块实现斐波那契数列。斐波那契数列是一个由0和1开始，后面每一项都是前两项之和的数列，例如0, 1, 1, 2, 3, 5, 8, 13, 21, 34…。我们可以编写一个自定义模块，包含两个函数，一个用于打印斐波那契数列，一个用于返回斐波那契数列。我们可以把这个模块保存在fibo.py文件中，然后在其他程序中导入和使用它。代码如下：
```python
# fibo.py文件

# 定义一个函数，打印斐波那契数列
def fib(n):
    # n是数列的最大值
    a, b = 0, 1 # 初始化两个变量
    while a < n: # 循环条件
        print(a, end=" ") # 打印当前值
        a, b = b, a + b # 更新两个变量
    print() # 换行

# 定义一个函数，返回斐波那契数列
def fib2(n):
    # n是数列的最大值
    result = [] # 初始化一个空列表
    a, b = 0, 1 # 初始化两个变量
    while a < n: # 循环条件
        result.append(a) # 把当前值添加到列表中
        a, b = b, a + b # 更新两个变量
    return result # 返回列表

```

```python
# main.py文件

# 导入fibo模块
import fibo

# 调用fibo模块中的函数
fibo.fib(100) # 打印斐波那契数列
print(fibo.fib2(100)) # 返回斐波那契数列

```
## 2 python自定义模块
Python的自定义模块是一个包含了Python对象定义和语句的文件，它可以被其他Python程序导入和使用。Python的自定义模块可以提高代码的复用性和可维护性，也可以实现用户自己的逻辑和需求。创建一个自定义模块的步骤如下：

- 用文本编辑器创建一个以.py为后缀的文件，例如mymodule.py。
- 在文件中编写Python对象定义和语句，例如变量、函数、类等。例如，可以在mymodule.py中定义一个求和的函数：
```python
# mymodule.py

def sum(a, b):
    return a + b
```
- 保存文件到一个合适的目录，例如当前目录或者sys.path中的某个目录。
- 在其他Python程序中，使用import语句导入自定义模块，例如`import mymodule`。这样就可以使用mymodule中定义的对象了，例如mymodule.sum(1, 2)。
- 如果只想导入自定义模块中的某些对象，可以使用from … import …语句，例如`from mymodule import sum`。这样就可以直接使用sum(1, 2)而不需要加模块名前缀了。
- 如果想给自定义模块或者其中的对象起一个别名，可以使用as语句，例如`import mymodule as mm`或者`from mymodule import sum as s`。这样就可以使用mm.sum(1, 2)或者s(1, 2)了。
以下是一个使用自定义模块的示例
```python
# test.py

# 导入自定义模块mymodule
import mymodule

# 调用mymodule中的sum函数
result = mymodule.sum(1, 2)
print(result)

# 导入自定义模块mymodule中的sum函数，并起别名为s
from mymodule import sum as s

# 调用s函数
result = s(3, 4)
print(result)
```
## 3 `__name__`和`__main__`

Python中的`__name__`和`__main__`是两个与模块相关的特殊变量，它们可以用来判断模块是被直接执行还是被导入到其他模块中。下面我将详细的解释它们的含义，用途，使用方法及注意事项。
`__name__`是一个内置的变量，它表示当前模块的名称。如果一个模块是被直接执行的，那么它的`__name__`的值就是"main"，这是一个字符串常量。如果一个模块是被导入到其他模块中的，那么它的`__name__`的值就是它的模块名，也就是文件名去掉.py后缀。例如，如果有一个模块叫做hello.py，那么它的`__name__`的值就是"hello"。
`__main__`是一个特殊的模块，它表示当前执行的模块。当我们在命令行中运行一个模块时，比如python hello.py，那么Python解释器会把hello.py当作`__main__`模块来执行。当我们使用-m参数运行一个模块时，比如python -m hello，那么Python解释器也会把hello模块当作`__main__`模块来执行。当我们在交互式解释器中输入Python代码时，那么`__main__`模块就是我们所在的环境。在以上情况中，`__main__`模块的`__name__`的值都是"main"。
`__name__`和`__main__`的用途是可以让我们区分模块是作为主程序还是作为子模块来运行的。这样我们可以在模块中编写一些只有在主程序中才需要执行的代码，比如解析命令行参数，打印输出，测试代码等。我们可以使用if name == 'main’语句来判断模块是否在主程序中运行，如果是，就执行if语句下面的代码块，如果不是，就跳过。这样我们可以保证模块在被导入时不会影响其他模块的功能，也可以方便地测试模块的功能。
`__name__`和`__main__`的使用方法很简单，只需要在模块的末尾添加以下代码即可：
```python
if __name__ == '__main__':
    # 这里写你想在主程序中执行的代码
```
`__name__`和`__main__`的注意事项有以下几点：
`__name__`和`__main__`都是以双下划线开头和结尾的变量，这表示它们是Python的保留字，不要用它们作为自己的变量名，以免造成冲突。
`__name__`和`__main__`的值都是字符串，所以在比较它们时要用双等号`==`，而不是单等号=，后者表示赋值。
`__name__`和`__main__`的判断应该放在模块的最后，以确保模块中的其他代码都已经被定义和执行。
`__name__`和`__main__`的判断可以嵌套在函数或类中，但是通常不建议这样做，因为这样会增加代码的复杂度和不可读性，也可能导致逻辑错误。最好是把主程序的代码封装在一个名为main的函数中，然后在`__name__`和`__main__`的判断中调用这个函数，这样可以提高代码的清晰度和可维护性。

## 4 `__all__`

Python的`__all__`是一个特殊的变量，它可以用来控制模块中哪些对象可以被导入到其他模块中。`__all__`的值是一个列表，它包含了模块中想要暴露给外部的对象的名称，例如变量、函数、类等。当我们使用`from … import *`语句导入一个模块时，只有`__all__`列表中的对象才会被导入，其他的对象则不会被导入。如果模块中没有定义`__all__`变量，那么使用`from … import *`语句导入时，会导入模块中所有不以下划线开头的对象。

`__all__`的用途是可以让模块的作者明确地指定模块的公开接口，以避免不必要的对象被导入，也可以防止命名空间的污染和冲突。`__all__`也可以提高代码的可读性和可维护性，因为它可以清楚地显示模块中哪些对象是对外可用的，哪些对象是内部实现的细节。

`__all__`的使用方法很简单，只需要在模块的开头或者结尾定义一个`__all__`变量，然后把想要导出的对象的名称作为字符串放在一个列表中赋值给它。例如，如果有一个模块叫做mymodule.py，它包含了两个函数foo和bar，一个类Foo，一个变量x，一个私有函数_baz，那么我们可以在模块中定义`__all__`变量如下：

```python
# mymodule.py

def foo():
    # do something
    pass

def bar():
    # do something
    pass

class Foo:
    # define a class
    pass

x = 10 # a variable

def _baz():
    # a private function
    pass

# define __all__ variable
__all__ = ["foo", "bar", "Foo"]
```
这样，当我们在其他模块中使用`from mymodule import *`语句导入mymodule时，只有foo、bar和Foo三个对象会被导入，而x和_baz则不会被导入。如果我们想要导入x或者_baz，我们需要使用`from mymodule import x`或者`from mymodule import _baz`语句，或者使用`import mymodule`语句，然后使用`mymodule.x`或者`mymodule._baz`来访问它们。
`__all__`的注意事项有以下几点：
`__all__`变量的值必须是一个列表，列表中的元素必须是字符串，字符串的内容必须是模块中已经定义的对象的名称，否则会引发NameError异常。
`__all__`变量只对`from … import *`语句有效，对于其他导入语句，比如import …或者from … import …，`__all__`变量不起作用，可以导入模块中的任何对象。
`__all__`变量可以在模块的任何位置定义，但是通常建议在模块的开头或者结尾定义，以便于阅读和维护。
`__all__`变量可以在包的__init__.py文件中定义，用来控制包中哪些子模块可以被导入。例如，如果有一个包叫做mypackage，它包含了三个子模块a、b和c，那么我们可以在mypackage的__init__.py文件中定义__all__变量如下：
```python
# mypackage/__init__.py

# define __all__ variable
__all__ = ["a", "b"]
```
这样，当我们在其他模块中使用`from mypackage import *`语句导入mypackage时，只有a和b两个子模块会被导入，而c则不会被导入。如果我们想要导入c，我们需要使用`from mypackage import c`或者`import mypackage.c`语句

## 5 python包
在Python中，一个包（Package）是一种组织代码的方式，用于将相关的模（Module）组织在一起。一个包实际上是一个包含特殊文件__init__.py的目录。这个目录下可以包含子包（子目录），也可以包含模块（单个的Python文件）。

1. 包的创建和结构
要创建一个包，你可以按照以下的目录结构创建文件和子目录：
```python
my_package/
|-- __init__.py
|-- module1.py
|-- module2.py
|-- subpackage/
|   |-- __init__.py
|   |-- module3.py
```
`__init__.py` 文件是一个空文件，但它告诉Python这个目录应该被认为是一个Python包。module1.py、module2.py、module3.py 是模块文件，包含了相关的代码。

2. 包的导入
你可以使用import语句导入包或者模块。例如：
```python
import my_package.module1
from my_package.subpackage import module3
```
3. `__init__.py` 文件
`__init__.py` 文件可以包含包的初始化代码。这些代码在包被导入时会执行。例如，你可以在 `__init__.py` 中定义一些变量、函数或者执行一些初始化操作。

4. 包的嵌套
包可以嵌套，形成多层次的结构。在上面的例子中，subpackage 就是 my_package 的子包。

5. `__init__.py` 的作用
定义__all__变量：如果在__init__.py中定义了一个名为__all__的变量，它应该是一个包含了包中所有应该被导入的模块名的列表。
```python
# __init__.py
__all__ = ['module1', 'subpackage.module3']
```
这样，在导入包时，只有__all__中指定的模块会被导入，其他的模块不会被引入。

6. 包的相对导入
在包内部，你可以使用相对导入来引用同一包中的其他模块。例如，在module1.py中，可以这样引用module2.py：
```python
# module1.py
from . import module2
```

7. 使用 `__init__.py` 来自动加载模块
在`__init__.py`中，你可以通过代码来自动加载模块，使得导入包的时候相关的模块自动被引入。
```python
# __init__.py
from . import module1
from .subpackage import module3
```
这样，当你导入my_package时，module1 和 module3 会被自动导入。

8. 使用pip安装第三方包
```python
pip install pymysql
```
Python生态系统中有许多强大、广泛使用的第三方包，涵盖了几乎所有领域。以下是一些Python比较有名的第三方包：

`NumPy`: 用于科学计算的核心库，提供了支持大型、多维数组和矩阵的高性能数学函数库。

`Pandas`: 数据分析和处理的库，提供了高性能、易用的数据结构，如DataFrame。

`Matplotlib`: 用于绘制图表和可视化数据的二维绘图库。

`TensorFlow` 和 `PyTorch`: 用于机器学习和深度学习的两个最流行的框架。

`Scikit-learn`: 机器学习的简单而有效的工具，提供了许多经典的机器学习算法和数据处理工具。

`Django`: 用于构建Web应用程序的高级Web框架，提供了强大的数据库模型、视图和模板系统。

`Flask`: 轻量级Web框架，适用于构建小型到中型的Web应用程序。

`Requests`: HTTP请求库，使得发送HTTP请求变得简单而直观。

`Beautiful Soup`: 用于从HTML和XML文件中提取信息的库，常用于网页爬虫。

`SQLAlchemy`: SQL工具包和对象关系映射（ORM）库，用于与数据库交互。

`Pygame`: 用于编写游戏和多媒体应用程序的库。

`Flask-RESTful` 和 `Django REST framework`: 分别是基于Flask和Django的RESTful API开发框架。

`pytest`: 灵活且强大的测试框架，用于编写和执行单元测试。

`Celery`: 分布式任务队列，用于异步任务处理。

`Twisted`: 事件驱动网络引擎，用于构建异步网络应用。

# 七 JSON
`JSON（JavaScript Object Notation）`是一种轻量级的数据交换格式，易于阅读和编写。它是一种基于文本的数据格式，独立于语言，广泛应用于Web应用程序中的数据交换。

JSON 基础
JSON 使用键值对的形式组织数据，数据由逗号分隔，而键值对由冒号分隔。JSON 数据的基本结构包括对象（Object）和数组（Array）：

**对象（Object）**： 由花括号 {} 包裹，包含键值对。每个键值对中，键是字符串，值可以是字符串、数字、布尔值、对象、数组或 null。
```python
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "grades": [90, 85, 92],
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}
```

**数组（Array）：** 由方括号 `[]` 包裹，包含值。值可以是字符串、数字、布尔值、对象、数组或 `null`。
```python
[
  "apple",
  "banana",
  "orange",
  {
    "name": "grape",
    "color": "purple"
  }
]
```

Python 的 `json` 模块提供了一组用于处理 JSON 数据的方法，包括将 Python 对象转换为 JSON 字符串（序列化）以及将 JSON 字符串转换为 Python 对象（反序列化）。以下是 `json` 模块的一些主要方法和用法：

### 1 `json.dumps()` 将 Python 对象转换为 JSON 字符串
```python
import json

data = {
    "name": "John",
    "age": 30,
    "isStudent": False,
    "grades": [90, 85, 92],
    "address": {
        "city": "New York",
        "zipcode": "10001"
    }
}

# 将 Python 对象转换为 JSON 字符串
json_string = json.dumps(data, indent=2)
print(json_string)
```
参数 `indent` 用于指定缩进空格数，使得生成的 JSON 字符串更易读。

### 2 `json.dump()`将 Python 对象写入 JSON 文件
```python
# 将 Python 对象写入 JSON 文件
with open('data.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)
```

### 3 `json.loads()`将 JSON 字符串解析为 Python 对象
```python
json_data = '''
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "grades": [90, 85, 92],
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}
'''

# 将 JSON 字符串解析为 Python 对象
python_obj = json.loads(json_data)
print(python_obj)
```

### 4 `json.load()`从 JSON 文件中读取数据并解析为 Python 对象
```python
# 从文件中读取 JSON 数据
with open('data.json', 'r') as json_file:
    loaded_data = json.load(json_file)
    print(loaded_data)
```

### 5 处理异常
在处理 JSON 数据时，可能会遇到 `json.JSONDecodeError` 异常，通常在解析不合法的 JSON 字符串时会触发。
```python
json_data = '{"name": "John", "age": 30, "isStudent": false}'

try:
    python_obj = json.loads(json_data)
    print(python_obj)
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
```

### 6 自定义对象的 JSON 序列化和反序列化
如果需要对自定义对象进行 JSON 序列化和反序列化，可以通过指定 `default` 参数和 `object_hook` 参数来实现。
- `default`: 用于指定如何序列化非基本数据类型的对象。
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

def default_encoder(obj):
    if isinstance(obj, Person):
        return {"name": obj.name, "age": obj.age}
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")

person = Person("Alice", 25)
json_string = json.dumps(person, default=default_encoder)
print(json_string)

```
- `object_hook`: 用于指定如何反序列化 JSON 对象。
```python
def object_decoder(obj):
    if 'name' in obj and 'age' in obj:
        return Person(obj['name'], obj['age'])
    return obj

json_data = '{"name": "Alice", "age": 25}'

python_obj = json.loads(json_data, object_hook=object_decoder)
print(python_obj.name, python_obj.age)

```

# 八 class类
## 1 类的介绍
Python的类是一种用来定义自己的数据类型的语法结构，它可以封装数据和操作，实现抽象和封装。类的使用场景有很多，比如：
- 当我们需要创建一些具有相同属性和行为的对象时，可以使用类来定义它们的共同特征，然后根据类来创建不同的实例对象，这样可以避免重复的代码和数据。
- 当我们需要实现一些复杂的功能或逻辑时，可以使用类来组织和管理代码，将相关的数据和方法放在一起，提高代码的可读性和可维护性。
- 当我们需要继承或扩展一些已有的数据类型或功能时，可以使用类来实现继承或多态，利用父类的属性和方法，同时添加或重写自己的属性和方法，实现代码的复用和扩展。
举例说明，假设我们要编写一个程序，管理一个图书馆的图书信息，我们可以使用类来定义图书这个数据类型，如下：
```python
# 定义一个图书类
class Book(object):
    # 定义一个类属性，记录图书的总数
    count = 0

    # 定义一个初始化方法，为每个实例对象赋予属性
    def __init__(self, title, author, price):
        self.title = title # 图书的标题
        self.author = author # 图书的作者
        self.price = price # 图书的价格
        Book.count += 1 # 每创建一个实例，图书总数加一

    # 定义一个类方法，返回图书的总数
    @classmethod
    def get_count(cls):
        return cls.count

    # 定义一个实例方法，打印图书的信息
    def show_info(self):
        print(f"图书的标题是{self.title}，作者是{self.author}，价格是{self.price}元。")

```

```python
# 创建三个图书对象
book1 = Book("Python编程", "张三", 59.9)
book2 = Book("Java编程", "李四", 69.9)
book3 = Book("C++编程", "王五", 79.9)

# 调用实例方法，打印图书信息
book1.show_info()
book2.show_info()
book3.show_info()

# 调用类方法，打印图书总数
print(f"图书总数是{Book.get_count()}本。")

```

输出结果：
```python
图书的标题是Python编程，作者是张三，价格是59.9元。
图书的标题是Java编程，作者是李四，价格是69.9元。
图书的标题是C++编程，作者是王五，价格是79.9元。
图书总数是3本。
```

在Python中，类是一种用于创建对象的蓝图或模板。对象是类的实例，它具有类定义的属性和方法。
```python
class Dog:
    # 类变量
    species = "Canis familiaris"

    # 构造函数
    def __init__(self, name, age):
        # 实例变量
        self.name = name
        self.age = age

    # 实例方法
    def bark(self):
        print("Woof!")

    def describe(self):
        print(f"{self.name} is {self.age} years old.")

# 创建类的实例
my_dog = Dog(name="Buddy", age=3)

# 访问实例变量
print(f"{my_dog.name} is {my_dog.age} years old.")

# 调用实例方法
my_dog.bark()
my_dog.describe()

```
## 2 实例化
Python类的构造函数和实例化是两个相关的概念，我将分别为你解释。
Python类的构造函数是一种特殊的方法，用于在创建类的实例对象时进行初始化操作。构造函数的名称是__init__，它的第一个参数是self，表示实例对象本身，后面可以跟其他参数，用于给实例对象的属性赋值。例如，下面的代码定义了一个Student类，它的构造函数接受name和age两个参数，并将它们赋值给实例对象的属性：
```python
class Student:
    def __init__(self, name, age):
        self.name = name # 实例属性
        self.age = age # 实例属性
```

Python类的实例化是指通过类来创建实例对象的过程。实例化的方法是在类名后面加上一对括号，并传入构造函数所需的参数。例如，下面的代码使用Student类来创建了两个实例对象，分别是tom和jerry：
```python
tom = Student("Tom", 18) # 实例化
jerry = Student("Jerry", 20) # 实例化
```
Python类的构造函数和实例化的关系是，构造函数是实例化过程中被自动调用的方法，它负责给实例对象分配内存空间，并初始化实例对象的属性。实例化是通过构造函数来创建实例对象的操作，它返回一个属于该类的新对象。

## 3 类的方法
在Python中，类具有许多特性，包括实例方法、类方法、静态方法、属性装饰器等。以下是关于这些特性的详细说明：

1. **实例方法（Instance Methods）:**
    - 实例方法是最常见的类成员。它们通过 `self` 参数访问实例的属性和其他方法。
    - 示例：
```python
class MyClass:
    def instance_method(self):
        print("This is an instance method.")

obj = MyClass()
obj.instance_method()
```

**类方法（Class Methods）:**
- 类方法使用 `@classmethod` 装饰器定义，并通过 `cls` 参数引用类本身而不是实例。
- 示例：
```python
class MyClass:
    class_variable = 0

    @classmethod
    def class_method(cls):
        cls.class_variable += 1
        print(f"This is class method. Class variable: {cls.class_variable}")

MyClass.class_method()
```

**静态方法（Static Methods）:**
- 静态方法使用 `@staticmethod` 装饰器定义，它们与类和实例无关。静态方法不能访问类变量或实例变量。
- 示例：
```python
class MyClass:
    @staticmethod
    def static_method():
        print("This is a static method.")

MyClass.static_method()
```

**属性装饰器（Property Decorators）:**
- 使用 `@property`, `@<property_name>.setter`, 和 `@<property_name>.deleter` 可以创建属性，允许对属性进行更高级别的控制。
- 示例：
```python
class MyClass:
    def __init__(self):
        self._value = 0

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, new_value):
        if new_value >= 0:
            self._value = new_value
        else:
            print("Value must be non-negative.")

    @value.deleter
    def value(self):
        print("Deleting the value.")
        del self._value

obj = MyClass()
obj.value = 42
print(obj.value)
del obj.value

# 这个例子中，`value` 被定义为一个属性，有一个 getter 方法、一个 setter 方法和一个 deleter 方法。
```

## 4 类方法和实例方法的区别
在Python中，类方法和实例方法之间有一些关键的区别：
1. **参数不同：**
    - 实例方法的第一个参数是 `self`，它表示实例本身。通过这个参数，实例方法可以访问和修改实例的属性。
    - 类方法的第一个参数是 `cls`，它表示类本身。通过这个参数，类方法可以访问和修改类级别的属性。

2. **调用方式不同：**
    - 实例方法通过实例调用，实例会被自动传递给 `self` 参数。例如：`obj.instance_method()`
    - 类方法通过类调用，类会被自动传递给 `cls` 参数。例如：`MyClass.class_method()`

3. **作用域不同：**
    - 实例方法主要用于操作实例的状态和行为。可以访问和修改实例的属性。
    - 类方法主要用于操作类级别的状态和行为。可以访问和修改类变量，但不能直接访问实例变量。

4. **装饰器不同：**
    - 实例方法没有装饰器，通过简单的声明就可以定义。
    - 类方法使用 `@classmethod` 装饰器来标识。
示例：
```python
class MyClass:
    class_variable = 0

    def __init__(self, instance_variable):
        self.instance_variable = instance_variable

    def instance_method(self):
        print(f"Instance method called with {self.instance_variable}")

    @classmethod
    def class_method(cls):
        cls.class_variable += 1
        print(f"Class method called. Class variable: {cls.class_variable}")

# 创建实例
obj = MyClass(instance_variable=42)

# 调用实例方法
obj.instance_method()

# 调用类方法
MyClass.class_method()

# 在这个例子中，`instance_method` 是实例方法，可以访问实例变量。`class_method` 是类方法，可以访问类变量。
```

## 5 魔术方法
Python中的魔术方法是一些以双下划线开头和结尾的特殊方法，它们可以让你自定义类的行为和功能。魔术方法不需要显式地调用，而是在某些情况下自动触发，比如运算符重载，属性访问，对象创建和销毁等。Python中有很多魔术方法，我将为你介绍一些常用的魔术方法，以及它们的作用和用法。

- `__init__(self, ...)`是类的初始化方法，它在创建类的实例对象时自动调用，用于给实例对象的属性赋值。它的第一个参数是`self`，表示实例对象本身，后面可以跟其他参数，根据需要进行定义。例如，下面的代码定义了一个`Student`类，它的初始化方法接受`name`和`age`两个参数，并将它们赋值给实例对象的属性：

```python
class Student:
    def __init__(self, name, age):
        self.name = name # 实例属性
        self.age = age # 实例属性
```

- `__new__(cls, ...)`是类的构造方法，它在实例化对象时自动调用，用于分配内存空间并返回实例对象。它的第一个参数是`cls`，表示类本身，后面可以跟其他参数，根据初始化方法参数决定。它的返回值必须是一个类的实例，如果没有返回值，则实例化对象的结果为`None`。通常情况下，我们不需要重写这个方法，除非我们想要控制对象的创建过程，比如实现单例模式，或者继承不可变类型。例如，下面的代码定义了一个`Singleton`类，它的构造方法保证了只有一个实例对象存在，如果已经存在实例对象，则直接返回，否则创建并返回：

```python
class Singleton:
    _instance = None # 类属性，用于存储实例对象
    def __new__(cls, *args, **kwargs):
        if cls._instance is None: # 如果没有实例对象
            cls._instance = super().__new__(cls) # 调用父类的构造方法创建实例对象
        return cls._instance # 返回实例对象
```

- `__del__(self)`是类的析构方法，它在销毁对象时自动调用，用于释放资源或执行清理操作。它的唯一参数是`self`，表示实例对象本身。它没有返回值。对象的销毁时机不一定是在`del`语句执行后，而是在对象的引用计数为零时，即没有任何变量或者数据结构引用该对象时。例如，下面的代码定义了一个`File`类，它的析构方法用于关闭文件对象：

```python
class File:
    def __init__(self, name, mode):
        self.file = open(name, mode) # 打开文件
    def __del__(self):
        self.file.close() # 关闭文件
```

- `__str__(self)`是类的字符串方法，它在使用`str()`函数或者`print()`函数打印对象时自动调用，用于返回对象的字符串表示。它的唯一参数是`self`，表示实例对象本身。它的返回值必须是一个字符串。如果没有定义这个方法，那么打印对象时会显示对象的类名和内存地址。例如，下面的代码定义了一个`Point`类，它的字符串方法用于返回点的坐标：

```python
class Point:
    def __init__(self, x, y):
        self.x = x # x坐标
        self.y = y # y坐标
    def __str__(self):
        return f"({self.x}, {self.y})" # 返回点的字符串表示
```

- `__repr__(self)`是类的表示方法，它在使用`repr()`函数或者交互式解释器打印对象时自动调用，用于返回对象的代码表示。它的唯一参数是`self`，表示实例对象本身。它的返回值必须是一个字符串。如果没有定义这个方法，那么打印对象时会显示对象的类名和内存地址。通常情况下，我们希望这个方法返回的字符串能够用于重新创建对象，即`eval(repr(obj)) == obj`。例如，下面的代码定义了一个`Point`类，它的表示方法用于返回点的构造代码：

```python
class Point:
    def __init__(self, x, y):
        self.x = x # x坐标
        self.y = y # y坐标
    def __repr__(self):
        return f"Point({self.x}, {self.y})" # 返回点的构造代码
```

- `__call__(self, ...)`是类的调用方法，它在将把类的实例对象当作函数调用时自动触发，用于实现对象的可调用性。它的第一个参数是`self`，表示实例对象本身，后面可以跟其他参数，根据需要进行定义。它的返回值根据情况而定。如果没有定义这个方法，那么对象不能像函数一样调用，而要用对象.方法的形式调用对象的方法。例如，下面的代码定义了一个`Adder`类，它的调用方法用于实现两个数的加法：
```python
class Adder:
    def __call__(self, x, y):
        return x + y # 返回两个数的和
```

- call 方法是 Python 中一个特殊的方法，它可以让一个类的实例（对象）像函数一样被调用。也就是说，当一个对象被当作函数使用时，会自动执行 call 方法中的代码。

- call 方法的作用是可以让对象的行为更加灵活和统一，也可以实现一些高级的功能，如装饰器、元类、函数式编程等。

- call 方法的语法是这样的：
```python
class ClassName:
    def __call__(self, *args, **kwargs):
        # do something
```

- **call** 方法的参数是可变的，可以根据需要传入任意数量和类型的参数。**call** 方法的返回值也是可变的，可以根据需要返回任意类型的值。

- 为了判断一个对象是否可以被调用，可以使用内置的 callable() 函数，它会返回一个布尔值，表示对象是否有 call 方法。

- 为了演示 **call** 方法的用法，我将给出一个简单的例子，定义一个类，它的实例可以像计数器一样被调用，每次调用时会增加一个计数，并打印出来：
```python
# 定义一个类，它的实例可以像计数器一样被调用
class Counter:
    # 在初始化时，设置一个初始值为 0 的计数属性
    def __init__(self):
        self.count = 0

    # 在 __call__ 方法中，每次调用时，增加计数属性的值，并打印出来
    def __call__(self):
        self.count += 1
        print(self.count)

# 创建一个类的实例
c = Counter()
# 判断实例是否可以被调用
print(callable(c)) # True
# 调用实例
c() # 1
c() # 2
c() # 3
```

- `__len__(self)`是类的长度方法，它在使用`len()`函数获取对象的长度时自动触发，用于返回对象的长度。它的唯一参数是`self`，表示实例对象本身。它的返回值必须是一个整数。如果没有定义这个方法，那么对象没有长度，使用`len()`函数会报错。例如，下面的代码定义了一个`Stack`类，它的长度方法用于返回栈的大小：

```python
class Stack:
    def __init__(self):
        self.items = [] # 使用列表模拟栈
    def __len__(self):
        return len(self.items) # 返回栈的大小
```

- `__getitem__(self, key)`是类的索引方法，它在使用对象[key]的形式访问对象的元素时自动触发，用于返回对象的元素。它的第一个参数是`self`，表示实例对象本身，第二个参数是`key`，表示索引或者切片。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持索引操作。例如，下面的代码定义了一个`Matrix`类，它的索引方法用于返回矩阵的元素：

```python
class Matrix:
    def __init__(self, data):
        self.data = data # 使用嵌套列表存储矩阵
    def __getitem__(self, key):
        return self.data[key] # 返回矩阵的元素
```

Python中的`__getitem__`方法是一个特殊的魔法方法，它可以让一个类的实例对象支持通过方括号[]来访问和修改其中的元素。这个方法的参数是一个键，可以是整数、字符串、切片或者其他任意类型。当实例对象做p[key]运算时，就会调用类中的__getitem__方法，并把key作为参数传递给它。`__getitem__`方法的返回值就是p[key]的结果。

`__getitem__`方法的使用场景有很多，比如实现自定义的序列、映射、迭代器等。下面举几个例子来说明：

- 实现一个斐波那契数列的类，可以通过索引来访问任意一项：
```python
class Fib:
    def __init__(self):
        self.cache = {0: 0, 1: 1} # 用一个字典来缓存已经计算过的项

    def __getitem__(self, n):
        if isinstance(n, int): # 如果n是整数，就返回第n项
            if n not in self.cache: # 如果没有缓存，就递归计算并存入缓存
                self.cache[n] = self[n-1] + self[n-2]
            return self.cache[n]
        elif isinstance(n, slice): # 如果n是切片，就返回一个列表
            start = n.start or 0 # 切片的起始位置，默认为0
            stop = n.stop or 0 # 切片的结束位置，默认为0
            step = n.step or 1 # 切片的步长，默认为1
            result = [] # 结果列表
            for i in range(start, stop, step): # 遍历切片范围
                result.append(self[i]) # 把每一项加入结果列表
            return result
        else: # 如果n是其他类型，就抛出异常
            raise TypeError("Invalid key type")

f = Fib() # 创建一个Fib类的实例
print(f[10]) # 输出第10项，即55
print(f[2:5]) # 输出第2到第4项的列表，即[1, 2, 3]
print(f["a"]) # 抛出异常，TypeError: Invalid key type
```

- 实现一个二维数组的类，可以通过行列坐标来访问和修改其中的元素：
```python
class Matrix:
    def __init__(self, data):
        self.data = data # 用一个嵌套的列表来存储数据
        self.rows = len(data) # 行数
        self.cols = len(data[0]) if data else 0 # 列数

    def __getitem__(self, pos):
        if isinstance(pos, tuple) and len(pos) == 2: # 如果pos是一个二元组，就表示行列坐标
            row, col = pos # 解包行列坐标
            if isinstance(row, int) and isinstance(col, int): # 如果行列坐标都是整数，就返回对应的元素
                return self.data[row][col]
            elif isinstance(row, slice) or isinstance(col, slice): # 如果行列坐标有一个是切片，就返回一个子矩阵
                return Matrix([row[col] for row in self.data[row]]) # 用列表推导式来提取子矩阵
            else: # 如果行列坐标有其他类型，就抛出异常
                raise TypeError("Invalid position type")
        else: # 如果pos不是一个二元组，就抛出异常
            raise TypeError("Invalid position type")

m = Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) # 创建一个3x3的矩阵
print(m[1, 2]) # 输出第1行第2列的元素，即6
print(m[0:2, 1:3]) # 输出第0行到第1行，第1列到第2列的子矩阵，即[[2, 3], [5, 6]]
print(m[1, "a"]) # 抛出异常，TypeError: Invalid position type
```

- 实现一个字典的类，可以通过任意类型的键来访问和修改其中的值：
```python
class MyDict:
    def __init__(self):
        self.data = {} # 用一个内置的字典来存储数据

    def __getitem__(self, key):
        return self.data.get(key, None) # 如果键存在，就返回对应的值，否则返回None

    def __setitem__(self, key, value):
        self.data[key] = value # 设置键和值的映射关系

d = MyDict() # 创建一个MyDict类的实例
d["name"] = "Alice" # 设置name键的值为Alice
d[1] = 100 # 设置1键的值为100
print(d["name"]) # 输出Alice
print(d[1]) # 输出100
print(d["age"]) # 输出None
```

- `__setitem__(self, key, value)`是类的赋值方法，它在使用对象[key] = value的形式给对象的元素赋值时自动触发，用于修改对象的元素。它的第一个参数是`self`，表示实例对象本身，第二个参数是`key`，表示索引或者切片，第三个参数是`value`，表示要赋的值。它没有返回值。如果没有定义这个方法，那么对象的元素不可修改。例如，下面的代码定义了一个`Matrix`类，它的赋值方法用于修改矩阵的元素：

```python
class Matrix:
    def __init__(self, data):
        self.data = data # 使用嵌套列表存储矩阵
    def __setitem__(self, key, value):
        self.data[key] = value # 修改矩阵的元素
```

`__delitem__(self, key)`是类的删除方法，它在使用`del`语句删除对象的元素时自动触发，用于移除对象的元素。它的第一个参数是`self`，表示实例对象本身，第二个参数是`key`，表示索引或者切片。它没有返回值。如果没有定义这个方法，那么对象的元素不可删除。例如，下面的代码定义了一个`Matrix`类，它的删除方法用于移除矩阵的元素：

```python
class Matrix:
    def __init__(self, data):
        self.data = data # 使用嵌套列表存储矩阵
    def __delitem__(self, key):
        del self.data[key] # 移除矩阵的元素
```

- `__add__(self, other)`是类的加法方法，它在使用`+`运算符对对象进行加法运算时自动触发，用于返回对象的加法结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与运算的对象。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持加法运算。例如，下面的代码定义了一个`Vector`类，它的加法方法用于返回向量的加法结果：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x # x分量
        self.y = y # y分量
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y) # 返回向量的加法结果
```

- `__sub__(self, other)`是类的减法方法，它在使用`-`运算符对对象进行减法运算时自动触发，用于返回对象的减法结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与运算的对象。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持减法运算。例如，下面的代码定义了一个`Vector`类，它的减法方法用于返回向量的减法结果：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x # x分量
        self.y = y # y分量
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y) # 返回向量的减法结果
```

- `__mul__(self, other)`是类的乘法方法，它在使用`*`运算符对对象进行乘法运算时自动触发，用于返回对象的乘法结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与运算的对象。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持乘法运算。例如，下面的代码定义了一个`Vector`类，它的乘法方法用于返回向量的数乘结果：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x # x分量
        self.y = y # y分量
    def __mul__(self, other):
        return Vector(self.x * other, self.y * other) # 返回向量的数乘结果
```

- `__truediv__(self, other)`是类的除法方法，它在使用`/`运算符对对象进行除法运算时自动触发，用于返回对象的除法结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与运算的对象。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持除法运算。例如，下面的代码定义了一个`Vector`类，它的除法方法用于返回向量的数除结果：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x # x分量
        self.y = y # y分量
    def __truediv__(self, other):
        return Vector(self.x / other, self.y / other) # 返回向量的数除结果
```

- `__pow__(self, other)`是类的幂运算方法，它在使用`**`运算符对对象进行幂运算时自动触发，用于返回对象的幂运算结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与运算的对象。它的返回值根据情况而定。如果没有定义这个方法，那么对象不支持幂运算。例如，下面的代码定义了一个`Complex`类，它的幂运算方法用于返回复数的幂运算结果：

```python
class Complex:
    def __init__(self, real, imag):
        self.real = real # 实部
        self.imag = imag # 虚部
    def __pow__(self, other):
        return Complex(self.real ** other, self.imag ** other) # 返回复数的幂运算结果
```

- `__eq__(self, other)`是类的等于方法，它在使用`==`运算符对对象进行等于比较时自动触发，用于返回对象的等于比较结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与比较的对象。它的返回值必须是一个布尔值。如果没有定义这个方法，那么对象的等于比较结果是基于对象的内存地址进行的。例如，下面的代码定义了一个`Point`类，它的等于方法用于返回点的坐标是否相等：

```python
class Point:
    def __init__(self, x, y):
        self.x = x # x坐标
        self.y = y # y坐标
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y # 返回点的坐标是否相等
```

- `__ne__(self, other)`是类的不等于方法，它在使用`!=`运算符对对象进行不等于比较时自动触发，用于返回对象的不等于比较结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与比较的对象。它的返回值必须是一个布尔值。如果没有定义这个方法，那么对象的不等于比较结果是基于对象的内存地址进行的。例如，下面的代码定义了一个`Point`类，它的不等于方法用于返回点的坐标是否不相等：

```python
class Point:
    def __init__(self, x, y):
        self.x = x # x坐标
        self.y = y # y坐标
    def __ne__(self, other):
        return self.x != other.x or self.y != other.y # 返回点的坐标是否不相等
```

- `__lt__(self, other)`是类的小于方法，它在使用`<`运算符对对象进行小于比较时自动触发，用于返回对象的小于比较结果。它的第一个参数是`self`，表示实例对象本身，第二个参数是`other`，表示另一个参与比较的对象。它的返回值必须是一个布尔值。如果没有定义这个方法，那么对象不支持小于比较。例如，下面的代码定义了一个`Student`类，它的小于方法用于返回学生的年龄是否小于另一个学生的年龄：

```python
class Student:
    def __init__(self, name, age):
        self.name = name # 姓名
        self.age = age # 年龄
    def __lt__(self, other):
        return self.age < other.age # 返回学生
```
## 6 封装

Python的封装是一种把类或者函数中的某些属性或方法隐藏起来，只在类的内部使用、外部无法访问，或者留下少量接口（函数）供外部访问的编程技巧。封装的目的是保护数据的隐私，隔离复杂度，提高代码的可读性和可维护性。Python中实现封装的方法很简单，只要在属性或方法的名字前加上两个下划线`（__）`，就可以把它们变成私有的，即只能在类内部访问，外部无法通过类名或者实例名来访问。例如：
```python
# 定义一个Person类
class Person:
    def __init__(self, name, age):
        self.__name = name # 私有属性
        self.__age = age # 私有属性

    def __say_hello(self): # 私有方法
        print(f"Hello, I am {self.__name}, {self.__age} years old.")

    def introduce(self): # 公开方法
        self.__say_hello() # 在类内部可以调用私有方法

p = Person("Tom", 18)
p.introduce() # 可以调用公开方法
# p.__say_hello() # 无法调用私有方法
# print(p.__name) # 无法访问私有属性
```

输出结果：
```
Hello, I am Tom, 18 years old.
```

Python的封装的应用场景有很多，比如：

- 当我们需要创建一些具有相同属性和行为的对象时，可以使用类来定义它们的共同特征，然后根据类来创建不同的实例对象，这样可以避免重复的代码和数据。我们可以把类中不需要对外暴露的属性和方法封装起来，只提供必要的接口给外部使用，这样可以保护类的内部逻辑，防止外部的误操作或者恶意修改。
- 当我们需要实现一些复杂的功能或逻辑时，可以使用类来组织和管理代码，将相关的数据和方法放在一起，提高代码的可读性和可维护性。我们可以把类中的一些细节或者辅助功能封装起来，只暴露主要的功能给外部使用，这样可以简化类的使用，降低类的复杂度。
- 当我们需要继承或扩展一些已有的数据类型或功能时，可以使用类来实现继承或多态，利用父类的属性和方法，同时添加或重写自己的属性和方法，实现代码的复用和扩展。我们可以把类中的一些不想被子类覆盖或者修改的属性和方法封装起来，只在父类内部使用，这样可以保护父类的完整性，防止子类的误操作或者恶意修改。

举例说明，假设我们要编写一个程序，管理一个图书馆的图书信息，我们可以使用类来封装图书的属性和方法，如下：
```python
# 定义一个图书类
class Book(object):
    # 定义一个类属性，记录图书的总数
    count = 0

    # 定义一个初始化方法，为每个实例对象赋予属性
    def __init__(self, title, author, price):
        self.title = title # 图书的标题
        self.author = author # 图书的作者
        self.price = price # 图书的价格
        self.__status = "available" # 图书的状态，私有属性，只能在类内部访问
        Book.count += 1 # 每创建一个实例，图书总数加一

    # 定义一个类方法，返回图书的总数
    @classmethod
    def get_count(cls):
        return cls.count

    # 定义一个实例方法，打印图书的信息
    def show_info(self):
        print(f"图书的标题是{self.title}，作者是{self.author}，价格是{self.price}元。")

    # 定义一个实例方法，借阅图书
    def borrow(self):
        if self.__status == "available": # 如果图书的状态是可借的
            self.__status = "borrowed" # 修改图书的状态为已借
            print(f"你已成功借阅{self.title}，请按时归还。")
        else: # 如果图书的状态是已借的
            print(f"对不起，{self.title}已被借走，无法借阅。")

    # 定义一个实例方法，归还图书
    def return_book(self):
        if self.__status == "borrowed": # 如果图书的状态是已借的
            self.__status = "available" # 修改图书的状态为可借
            print(f"你已成功归还{self.title}，感谢你的合作。")
        else: # 如果图书的状态是可借的
            print(f"对不起，{self.title}并没有被借走，无法归还。")
```

然后，我们可以根据图书类来创建不同的图书对象，如下：
```python
# 创建三个图书对象
book1 = Book("Python编程", "张三", 59.9)
book2 = Book("Java编程", "李四", 69.9)
book3 = Book("C++编程", "王五", 79.9)

# 调用实例方法，打印图书信息
book1.show_info()
book2.show_info()
book3.show_info()

# 调用类方法，打印图书总数
print(f"图书总数是{Book.get_count()}本。")

# 调用实例方法，借阅图书
book1.borrow()
book2.borrow()
book3.borrow()

# 调用实例方法，归还图书
book1.return_book()
book2.return_book()
book3.return_book()
```

输出结果：
```python
图书的标题是Python编程，作者是张三，价格是59.9元。
图书的标题是Java编程，作者是李四，价格是69.9元。
图书的标题是C++编程，作者是王五，价格是79.9元。
图书总数是3本。
你已成功借阅Python编程，请按时归还。
你已成功借阅Java编程，请按时归还。
你已成功借阅C++编程，请按时归还。
你已成功归还Python编程，感谢你的合作。
你已成功归还Java编程，感谢你的合作。
你已成功归还C++编程，感谢你的合作。
```
这样，我们就可以使用类来封装图书的信息和操作，方便地创建和管理图书对象，而不需要为每本图书单独定义变量和函数。我们也可以把图书的状态属性封装起来，只在类内部访问和修改，防止外部的误操作或者恶意修改。

## 7 继承

Python的继承是一种面向对象编程的特性，它允许我们定义一个类，从另一个类继承其属性和方法。继承的使用方法、使用场景、需要注意的要点，以及举例说明如下：

- 继承的使用方法：要创建一个从其他类继承的类，我们只需要在定义子类时，将父类作为参数传递给子类的类名。例如，`class Student(Person):`表示定义一个名为Student的子类，它继承自Person类。我们可以在子类中添加或重写父类的属性和方法，以实现子类的特殊功能。我们也可以使用`super()`函数来调用父类的属性和方法，以避免重复代码或保持父类的功能。例如，`super().__init__(name, age)`表示调用父类的初始化方法，给子类的实例对象赋予name和age属性。
- 继承的使用场景：继承可以用于实现代码的复用和扩展，以及实现多态的效果。当我们需要创建一些具有相同或相似特征的对象时，我们可以使用继承来定义它们的共同属性和方法，然后根据不同的对象来添加或修改它们的特殊属性和方法。这样可以避免重复的代码，提高代码的可读性和可维护性。当我们需要实现一些复杂的功能或逻辑时，我们可以使用继承来分解问题，将问题抽象为不同层次的类，然后通过继承关系来组合和解决问题。这样可以降低问题的复杂度，提高代码的灵活性和可扩展性。当我们需要实现多态的效果时，我们可以使用继承来定义一个父类，然后让不同的子类继承并重写父类的方法，以实现不同的行为。这样可以提高代码的通用性和多样性，使得同一个方法可以根据不同的对象而表现出不同的效果。
- 继承的需要注意的要点：在使用继承时，我们需要注意以下几点：
    - 在Python中，我们可以实现单继承和多继承。单继承是指一个子类只继承一个父类，多继承是指一个子类继承多个父类。在多继承中，我们需要注意父类之间的继承顺序，以及可能出现的菱形继承问题。菱形继承是指一个子类继承了两个父类，而这两个父类又继承了同一个祖父类，这样会导致子类继承了两份祖父类的属性和方法，可能会产生冲突或覆盖的问题。为了解决这个问题，Python采用了C3算法来确定继承的顺序，即按照广度优先的原则，从左到右，从下到上，依次继承父类的属性和方法。我们可以使用`__mro__`属性或者`mro()`方法来查看一个类的继承顺序。
    - 在Python中，我们可以实现单层继承和多层继承。单层继承是指一个子类直接继承一个父类，多层继承是指一个子类继承一个父类，而这个父类又继承另一个父类，以此类推，形成一个继承链。在多层继承中，我们需要注意子类和父类之间的关系，以及可能出现的重复继承问题。重复继承是指一个子类继承了多个父类，而这些父类又有共同的祖先类，这样会导致子类继承了多份祖先类的属性和方法，可能会产生冲突或覆盖的问题。为了解决这个问题，Python采用了同样的C3算法来确定继承的顺序，即按照广度优先的原则，从左到右，从下到上，依次继承父类的属性和方法。我们可以使用`__mro__`属性或者`mro()`方法来查看一个类的继承顺序。
    - 在Python中，我们可以实现覆盖和重载。覆盖是指一个子类重写了父类的方法，以实现不同的功能。重载是指一个类定义了多个同名的方法，以实现不同的功能。在Python中，我们可以通过参数的个数或类型来实现重载，但是Python并不支持严格意义上的重载，即不能根据返回值的类型来实现重载。在Python中，我们可以使用`@overload`装饰器来标记重载的方法，但是这只是为了方便类型检查和文档生成，并不会影响实际的运行结果。在Python中，我们可以使用`super()`函数来调用被覆盖的父类的方法，以实现协作或扩展的功能。
- 继承的举例说明：假设我们要编写一个程序，管理一个动物园的动物信息，我们可以使用继承来定义不同种类的动物，如下：

```python
# 定义一个动物类，作为父类
class Animal:
    # 定义一个初始化方法，为每个实例对象赋予属性
    def __init__(self, name, age):
        self.name = name # 动物的名字
        self.age = age # 动物的年龄

    # 定义一个实例方法，打印动物的信息
    def show_info(self):
        print(f"动物的名字是{self.name}，年龄是{self.age}岁。")

    # 定义一个实例方法，模拟动物的叫声
    def make_sound(self):
        print("动物正在发出叫声。")

# 定义一个狗类，继承自动物类
class Dog(Animal):
    # 定义一个初始化方法，为每个实例对象赋予属性
    def __init__(self, name, age, color):
        super().__init__(name, age) # 调用父类的初始化方法，赋予name和age属性
        self.color = color # 狗的颜色

    # 定义一个实例方法，打印狗的信息
    def show_info(self):
        print(f"狗的名字是{self.name}，年龄是{self.age}岁，颜色是{self.color}。")

    # 定义一个实例方法，模拟狗的叫声
    def make_sound(self):
        print("狗正在汪汪叫。")

# 定义一个猫类，继承自动物类
class Cat(Animal):
    # 定义一个初始化方法，为每个实例对象赋予属性
    def __init__(self, name, age, breed):
        super().__init__(name, age) # 调用父类的初始化方法，赋予name和age属性
        self.breed = breed # 猫的品种

    # 定义一个实例方法，打印猫的信息
    def show_info(self):
        print(f"猫的名字是{self.name}，年龄是{self.age}岁，品种是{self.breed}。")

    # 定义一个实例方法，模拟猫的叫声
    def make_sound(self):
        print("猫正在喵喵叫。")

# 创建一个动物
animal = Animal(“小白”, 3)

# 创建一个狗
dog = Dog(“旺财”, 2, “黑色”)

# 创建一个猫
cat = Cat(“咪咪”, 1, “波斯猫”)

# 调用实例方法，打印动物的信息
animal.show_info() dog.show_info() cat.show_info()

# 调用实例方法，模拟动物的叫声
animal.make_sound() dog.make_sound() cat.make_sound()
```

## 8 类的作用域

Python类里的作用域是指在类中定义的变量或方法的可见范围，即在哪些地方可以访问或修改这些变量或方法。Python类里的作用域有以下几种：

- 类作用域：类作用域是指在类的定义中，不在任何方法内的部分，也就是类的顶层。类作用域中定义的变量或方法属于类属性或类方法，可以通过类名或类的实例来访问或调用。例如：

```python
class Person:
    count = 0 # 类属性，属于类作用域
    def __init__(self, name):
        self.name = name # 实例属性，属于实例作用域
        Person.count += 1 # 访问类属性
    @classmethod
    def get_count(cls): # 类方法，属于类作用域
        return cls.count # 访问类属性
```

- 实例作用域：实例作用域是指在类的初始化方法（`__init__`）中，或者在其他方法中使用`self`参数定义的部分。实例作用域中定义的变量或方法属于实例属性或实例方法，可以通过实例对象来访问或调用。例如：

```python
class Person:
    def __init__(self, name):
        self.name = name # 实例属性，属于实例作用域
    def show_name(self): # 实例方法，属于实例作用域
        print(self.name) # 访问实例属性
```

- 局部作用域：局部作用域是指在类的方法中，不使用`self`参数定义的部分。局部作用域中定义的变量或方法属于局部变量或局部函数，只能在方法内部访问或调用，方法结束后就会被销毁。例如：

```python
class Person:
    def __init__(self, name):
        self.name = name # 实例属性，属于实例作用域
    def show_name(self): # 实例方法，属于实例作用域
        greeting = "Hello, " # 局部变量，属于局部作用域
        print(greeting + self.name) # 访问局部变量和实例属性
```

- 私有作用域：私有作用域是指在类的属性或方法的名字前加上两个下划线（`__`）的部分。私有作用域中定义的变量或方法属于私有属性或私有方法，只能在类的内部访问或调用，外部无法通过类名或实例名来访问或调用。私有作用域的目的是保护类的内部数据和逻辑，防止外部的误操作或恶意修改。例如：

```python
class Person:
    def __init__(self, name, age):
        self.__name = name # 私有属性，属于私有作用域
        self.__age = age # 私有属性，属于私有作用域
    def __show_info(self): # 私有方法，属于私有作用域
        print(f"Name: {self.__name}, Age: {self.__age}") # 访问私有属性
    def introduce(self): # 公开方法，属于实例作用域
        self.__show_info() # 调用私有方法
```

Python类里的作用域的查找顺序是：局部作用域 -> 实例作用域 -> 类作用域 -> 全局作用域 -> 内置作用域。如果在所有的作用域中都找不到变量或方法的名字，就会抛出NameError异常。如果想要在类的方法中修改全局变量或类属性，就需要使用global或nonlocal关键字。如果想要在子类中访问或调用父类的属性或方法，就需要使用super()函数或父类的名字。

## 9 多态

Python中的多态是指不同类型的对象可以使用相同的方法名，但是具有不同的行为或功能。多态的作用是提高代码的灵活性和可扩展性，使得不同的对象可以适应同一种接口或者函数。Python中的多态有以下几种形式：

- **运算符的多态**：Python中的运算符可以根据操作数的类型执行不同的操作，例如`+`运算符可以用于整数、浮点数、字符串、列表等类型，但是具有不同的含义，如算术加法、字符串拼接、列表合并等。这是Python中最简单的多态现象之一。¹

- **函数的多态**：Python中有一些内置的函数可以与多种数据类型兼容，例如`len()`函数可以用于字符串、列表、元组、字典、集合等类型，但是返回的是不同的信息，如字符个数、元素个数、键值对个数等。这种函数的多态性使得我们可以用同一个函数名处理不同类型的数据。¹

- **类的多态**：Python中的类可以实现多态的概念，即不同的类可以具有相同的方法名，但是具有不同的功能或实现。这样，我们可以用同一个方法名调用不同类的对象，而不需要关心对象的具体类型。Python中的类多态有两种方式：

    - **鸭子类型**：Python中的鸭子类型是一种动态类型的风格，它不关心对象的类型，而只关心对象的行为。也就是说，如果一个对象具有某种方法或属性，那么就可以把它当作某种类型来使用，而不管它实际上是什么类型。这种方式的多态性不依赖于继承或接口，而是依赖于文档、清晰的代码和测试来确保正确使用。²³

    - **继承与重写**：Python中的继承是一种创建新类的方式，它可以从一个或多个父类中继承方法和属性。我们可以在子类中重写父类的方法或属性，以实现不同的功能或行为。这种方式的多态性使得我们可以用父类的类型来引用子类的对象，而调用的方法或属性是子类中重写的那个。¹⁴

下面是一些Python中多态的例子和说明：

- **运算符的多态**：
```python
# +运算符的多态
num1 = 1
num2 = 2
print(num1 + num2) # 输出3，执行算术加法

str1 = "Hello"
str2 = "World"
print(str1 + str2) # 输出HelloWorld，执行字符串拼接

list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(list1 + list2) # 输出[1, 2, 3, 4, 5, 6]，执行列表合并
```

- **函数的多态**：
```python
# len()函数的多态
print(len("Python")) # 输出6，返回字符串的字符个数
print(len([1, 2, 3])) # 输出3，返回列表的元素个数
print(len({"a": 1, "b": 2})) # 输出2，返回字典的键值对个数
```

- **类的多态**：
```python
# 鸭子类型的多态
class Duck:
    def quack(self):
        print("Quack quack!")

class Dog:
    def quack(self):
        print("Woof woof!")

def make_quack(obj):
    # 不检查对象的类型，只检查对象是否有quack()方法
    obj.quack()

duck = Duck()
dog = Dog()

make_quack(duck) # 输出Quack quack!
make_quack(dog) # 输出Woof woof!
```

```python
# 继承与重写的多态
class Animal:
    def make_sound(self):
        print("Animal sound")

class Cat(Animal):
    # 重写父类的方法
    def make_sound(self):
        print("Meow")

class Dog(Animal):
    # 重写父类的方法
    def make_sound(self):
        print("Bark")

def play_with_animal(animal):
    # 使用父类的类型来引用子类的对象
    animal.make_sound()

cat = Cat()
dog = Dog()

play_with_animal(cat) # 输出Meow
play_with_animal(dog) # 输出Bark
```
## 10 元类

Python元类是一种可以创建类的特殊类，它们继承自type类，也是type类的实例。元类可以控制类的定义和行为，比如修改类的属性、方法、继承关系等。元类的使用方法是在类定义时，通过metaclass参数指定元类，或者通过继承一个已有的元类来创建新的元类。

元类的应用场景有以下几种：
- 实现单例模式，即保证一个类只有一个实例。这可以通过在元类的__call__方法中缓存类的实例来实现，如果已经存在实例，就直接返回，否则就创建一个新的实例。

- 实现ORM框架，即对象关系映射，将数据库表和类对应起来。这可以通过在元类的__new__或__init__方法中，根据类的属性和注解，自动为类生成对应的数据库表名、字段名、主键等信息，以及增删改查的方法。

- 实现动态调用方法，即在类定义时，根据一些规则或配置，自动为类添加一些方法，这些方法可以在运行时动态调用。这可以通过在元类的__new__或__init__方法中，使用反射或装饰器等技术，为类添加方法。这种技术被广泛应用于框架和库的开发中。

下面是一些元类的使用示例：

- 使用元类实现单例模式：
```python
class Singleton(type):
    _instances = {} # 用于存储类的实例
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances: # 如果不存在实例，就创建一个
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls] # 返回实例

class MyClass(metaclass=Singleton): # 指定元类为Singleton
    pass

# 测试
a = MyClass()
b = MyClass()
print(a is b) # 输出True
```

- 使用元类实现ORM框架：
```python
class Field: # 用于表示数据库表的字段
    def __init__(self, name, primary=False):
        self.name = name # 字段名
        self.primary = primary # 是否为主键

class ModelMeta(type): # 元类，用于创建类和数据库表的映射
    def __new__(cls, name, bases, attrs):
        # 判断是否为 Model 类本身，如果是，则直接返回
        if name == 'Model':
            return super().__new__(cls, name, bases, attrs)
        # 从类属性中提取字段信息，并将其保存到 __mappings__、__fields__ 和 __table__ 中
        table_name = attrs.get('__table__', name.lower()) # 数据库表名，默认为类名的小写
        mappings = {} # 用于存储字段名和Field对象的映射
        fields = [] # 用于存储字段名的列表
        primary = None # 用于存储主键的字段名
        for k, v in attrs.items():
            if isinstance(v, Field): # 如果属性是Field对象，就提取其信息
                mappings[k] = v # 保存映射关系
                fields.append(k) # 保存字段名
                if v.primary: # 如果是主键，就保存其字段名
                    primary = k
        # 避免这些属性被误认为是数据表的字段而产生冲突
        for k in mappings.keys():
            attrs.pop(k)
        # 将提取的信息保存到类的属性中
        attrs['__primary__'] = primary
        attrs['__mappings__'] = mappings
        attrs['__table__'] = table_name
        attrs['__fields__'] = fields
        return super().__new__(cls, name, bases, attrs)

class Model(metaclass=ModelMeta): # 基类，用于继承和实现通用的方法
    def select(self, **kwargs):
        # 生成 SELECT 语句
        fields = ','.join(self.__fields__) # 字段列表
        table = self.__table__ # 表名
        conditions = [] # 条件列表
        for k, v in kwargs.items(): # 遍历关键字参数，生成条件
            if k in self.__mappings__: # 如果参数是字段名，就生成条件
                field = self.__mappings__[k].name # 获取字段名
                conditions.append(f" {field}='{v}'") # 生成条件
        if conditions: # 如果有条件，就拼接 WHERE 子句
            where = ' AND '.join(conditions)
            sql = f"SELECT {fields} FROM {table} WHERE {where}"
        else: # 如果没有条件，就直接查询所有
            sql = f"SELECT {fields} FROM {table}"
        # 打印 SQL 语句
        print(sql)

    def selectById(self, value):
        # 生成 SELECT 语句，根据主键查询
        if self.__primary__ is None: # 如果没有主键，就抛出异常
            raise ValueError('no primary key for table: %s' % self.__table__)
        sql = f"SELECT {','.join(self.__fields__)} FROM {self.__table__} WHERE {self.__primary__}='{value}'"
        # 打印 SQL 语句
        print(sql)

class User(Model): # 用户类，继承自Model类
    # 定义数据库表名和字段信息
    __table__ = 'users'
    id = Field('id', True)
    name = Field('name')
    age = Field('age')

# 创建一个 User 对象，并设置属性
user = User()
user.id = 1
user.name = 'Alice'
user.age = 18

# 查询
user.select(name='Alice', age=18)
user.selectById(1)
```

- 使用元类实现动态调用方法：
```python
class MyMeta(type): # 元类，用于创建类和动态方法的映射
    def __new__(cls, name, bases, attrs):
        # 判断是否为 MyMeta 类本身，如果是，则直接返回
        if name == 'MyMeta':
            return super().__new__(cls, name, bases, attrs)
        # 从类属性中提取动态方法的配置，并将其保存到 __methods__ 中
        methods = attrs.get('__methods__', {}) # 动态方法的配置，是一个字典，键为方法名，值为方法的实现
        # 避免这些属性被误认为是类的方法而产生冲突
        for k in methods.keys():
            attrs.pop(k)
        # 将提取的信息保存到类的属性中
        attrs['__methods__'] = methods
        return super().__new__(cls, name, bases, attrs)

    def __init__(cls, name, bases, attrs):
        # 在类初始化时，根据动态方法的配置，为类添加方法
        for k, v in cls.__methods__.items(): # 遍历动态方法的配置
            setattr(cls, k, v) # 为类设置方法

class Foo(metaclass=MyMeta): # Foo类，指定元类为MyMeta
    # 定义动态方法的配置
    __methods__ = {
        'hello': lambda self: print('Hello, %s' % self.name), # hello方法，打印名字
        'bye': lambda self: print('Bye, %s' % self.name) # bye方法，打印名字
    }

    def __init__(self, name):
        self.name = name # 设置名字

# 创建一个 Foo 对象，并设置名字
foo = Foo('Bob')

# 调用动态方法
foo.hello()
foo.bye()
```

元类的type用法是指使用type函数来动态地创建类，而不是使用class语句。type函数接收三个参数：类名，父类的元组，和包含属性和方法的字典。使用type函数可以实现一些高级的功能，比如元编程，单例模式，ORM框架等。下面是一些元类的type用法的举例：

- 使用元类的type用法实现元编程，即在运行时动态地修改或创建类。例如，下面的代码使用type函数根据一个配置文件，为每个类添加一个方法，这个方法可以打印出类的属性和值：
```python
# 假设有一个配置文件config.txt，内容如下：
# [Foo]
# name = foo
# age = 18
# [Bar]
# name = bar
# gender = male

# 读取配置文件，解析成一个字典
config = {}
with open('config.txt') as f:
    for line in f:
        line = line.strip()
        if line.startswith('[') and line.endswith(']'):
            # 如果是类名，就创建一个新的字典
            class_name = line[1:-1]
            config[class_name] = {}
        elif '=' in line:
            # 如果是属性，就添加到当前的字典中
            key, value = line.split('=')
            key = key.strip()
            value = value.strip()
            config[class_name][key] = value

# 定义一个函数，用来打印类的属性和值
def show(self):
    for k, v in self.__dict__.items():
        print(f'{k} = {v}')

# 使用type函数，根据配置文件，动态地创建类，并为每个类添加show方法
for class_name, attrs in config.items():
    # 创建类
    cls = type(class_name, (object,), attrs)
    # 添加方法
    cls.show = show
    # 将类赋值给全局变量
    globals()[class_name] = cls

# 测试
foo = Foo()
foo.show()
# 输出
# name = foo
# age = 18

bar = Bar()
bar.show()
# 输出
# name = bar
# gender = male
```

- 使用元类的type用法实现单例模式，即保证一个类只有一个实例。例如，下面的代码使用type函数创建一个元类Singleton，它重写了__call__方法，使得每次调用类时，都返回同一个实例：
```python
# 定义一个元类Singleton，继承自type
class Singleton(type):
    # 定义一个字典，用来存储类和实例的映射
    _instances = {}
    # 重写__call__方法，使得每次调用类时，都返回同一个实例
    def __call__(cls, *args, **kwargs):
        # 如果类没有对应的实例，就创建一个
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        # 返回实例
        return cls._instances[cls]

# 使用type函数，创建一个类Foo，指定元类为Singleton
Foo = type('Foo', (object,), {'__metaclass__': Singleton})

# 测试
foo1 = Foo()
foo2 = Foo()
print(foo1 is foo2) # 输出True
```

- 使用元类的type用法实现ORM框架，即对象关系映射，将数据库表和类对应起来。例如，下面的代码使用type函数创建一个元类ModelMeta，它重写了__new__方法，使得每个类都有对应的数据库表名，字段名，主键等信息，以及增删改查的方法：
```python
# 定义一个元类ModelMeta，继承自type
class ModelMeta(type):
    # 重写__new__方法，使得每个类都有对应的数据库表名，字段名，主键等信息，以及增删改查的方法
    def __new__(cls, name, bases, attrs):
        # 如果是Model类本身，就直接返回
        if name == 'Model':
            return super().__new__(cls, name, bases, attrs)
        # 从类属性中提取数据库表名，如果没有指定，就用类名的小写
        table_name = attrs.get('__table__', name.lower())
        # 从类属性中提取字段信息，如果是Field对象，就保存到mappings字典中
        mappings = {}
        for k, v in attrs.items():
            if isinstance(v, Field):
                mappings[k] = v
        # 避免这些属性被误认为是数据表的字段而产生冲突
        for k in mappings.keys():
            attrs.pop(k)
        # 从mappings中提取主键，如果没有，就抛出异常
        primary = None
        for k, v in mappings.items():
            if v.primary:
                primary = k
                break
        if primary is None:
            raise ValueError('No primary key for table: %s' % table_name)
        # 将提取的信息保存到类的属性中
        attrs['__table__'] = table_name
        attrs['__mappings__'] = mappings
        attrs['__primary__'] = primary
        # 为类添加增删改查的方法
        attrs['select'] = lambda cls, **kwargs: cls._select(**kwargs)
        attrs['insert'] = lambda self: self._insert()
        attrs['update'] = lambda self: self._update()
        attrs['delete'] = lambda self: self._delete()
        # 返回创建的类
        return super().__new__(cls, name, bases, attrs)

# 定义一个基类Model，继承自object，指定元类为ModelMeta
class Model(object, metaclass=ModelMeta):
    # 定义一个构造函数，接收关键字参数，设置对应的属性
    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)
    # 定义一个_select方法，根据条件查询数据
    @classmethod
    def _select(cls, **kwargs):
        # 生成SELECT语句
        fields = ','.join(cls.__mappings__.keys()) # 字段列表
        table = cls.__table__ # 表名
        conditions = [] # 条件列表
        for k, v in kwargs.items(): # 遍历关键字参数，生成条件
            if k in cls.__mappings__: # 如果参数是字段名，就生成条件
                field = cls.__mappings__[k].name # 获取字段名
                conditions.append(f" {field}='{v}'") # 生成条件
        if conditions: # 如果有条件，就拼接WHERE子句
            where = ' AND '.join(conditions)
            sql = f"SELECT {fields} FROM {table} WHERE {where}"
        else: # 如果没有条件，就直接查询所有
            sql = f"SELECT {fields} FROM {table}"
        # 打印SQL语句
        print(sql)
        # 模拟查询结果，返回一个列表，每个元素是一个字典，表示一条记录
        result = [{'id': 1, 'name': 'Alice', 'age': 18}, {'id': 2, 'name': 'Bob', 'age': 20}]
        return result
    # 定义一个_insert方法，插入数据
    def _insert(self):
        # 生成INSERT语句
        fields = [] # 字段列表
        values = [] # 值列表
        for k, v in self.__mappings__.items(): # 遍历字段信息，获取字段名和值
            field = v.name # 获取字段名
            value = getattr(self, k, None) # 获取值
            fields.append(field) # 添加到字段列表
            values.append(str(value)) # 添加到值列表
        sql = f"INSERT INTO {self.__table__} ({','.join(fields)}) VALUES ({','.join(values)})"
        # 打印SQL语句
        print(sql)
        # 模拟插入结果，返回影响的行数
        return 1
    # 定义一个_update方法，更新数据
    def _update(self):
        # 生成UPDATE语句
        fields = [] # 字段列表
        for k, v in self.__mappings__.items(): # 遍历字段信息，获取字段名和值
            field = v.name # 获取字段名
            value = getattr(self, k, None) # 获取值
            fields.append(f"{field}='{value}'") # 添加到字段列表
        primary = self.__primary__ # 获取主键
```

```python
class Singleton(type):
    _instances = {}  # 用于存储类的实例

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:  # 如果不存在实例，就创建一个
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]  # 返回实例


class MyClass(metaclass=Singleton):  # 指定元类为Singleton
    pass


# 测试  Myclass类其实是Singleton的对象，所以MyClass()会执行Singleton类里的__call__方法
a = MyClass()
b = MyClass()
print(a is b)  # 输出True
```
这是一个使用type元类实现的单例模式的例子，单例模式是一种设计模式，它保证一个类只有一个实例，并提供一个全局访问点。在这个例子中：

- 定义了一个Singleton类，它继承自type，因此它是一个元类，可以用来创建其他类。

- 在Singleton类中，定义了一个类属性_instances，用于存储类的实例，它是一个字典，键是类，值是实例。

- 在Singleton类中，重写了__call__方法，这是一个魔术方法，它会在类被调用时执行，也就是在实例化对象时执行。在这个方法中，首先判断类是否在_instances字典中，如果不在，就调用父类的__call__方法，创建一个实例，并将其存入_instances字典中，如果在，就直接返回_instances字典中的实例。这样就保证了每个类只有一个实例。

- 定义了一个MyClass类，它指定了元类为Singleton，这意味着MyClass类是由Singleton类创建的，因此它会继承Singleton类的属性和方法，包括__call__方法。

- 测试了MyClass类的实例化，分别创建了两个对象a和b，然后打印它们的身份，发现它们是同一个对象，说明MyClass类只有一个实例，实现了单例模式。

上面这个代码中的def **call**(cls, *args, **kwargs): 这一句中的cls是什么

这一句中的cls是一个参数，它表示类本身，也就是Singleton类。在Python中，类也是对象，它们是由元类创建的，因此类也可以作为参数传递给函数或方法。在这个例子中，当我们调用MyClass()时，实际上是调用了Singleton类的__call__方法，而Singleton类就是MyClass类的元类，所以cls参数就是MyClass类。这样，我们就可以在__call__方法中使用cls参数来创建或获取MyClass类的实例。

它为什么不是self，是因为self是一个约定俗成的参数名，它表示实例本身，而cls是一个约定俗成的参数名，它表示类本身。在Python中，当我们定义一个类方法时，我们通常使用@classmethod装饰器，这样就可以将第一个参数自动绑定到类上，而不是实例上，这个参数就通常叫做cls。例如：
```python
class MyClass:
    @classmethod
    def hello(cls):
        print(f"Hello, I am {cls.__name__}.")

MyClass.hello()  # 输出：Hello, I am MyClass.
```

在这个例子中，我们定义了一个类方法hello，它使用@classmethod装饰器，这样就可以直接用类名来调用它，而不需要创建实例。在hello方法中，我们使用cls参数来获取类的名称，这样就可以显示出类的身份。如果我们使用self参数，就会报错，因为self参数是用来表示实例的，而我们没有创建实例。例如：
```python
class MyClass:
    @classmethod
    def hello(self):
        print(f"Hello, I am {self.__name__}.")

MyClass.hello()  # 报错：AttributeError: type object 'MyClass' has no attribute '__name__'
```
在这个例子中，我们使用self参数来获取类的名称，但是这是错误的，因为self参数是用来表示实例的，而类对象没有__name__属性，所以会报错。所以，当我们定义类方法时，我们通常使用cls参数来表示类本身，而不是self参数。这是一种编程习惯，也是一种规范，可以提高代码的可读性和一致性。当然，你也可以使用其他的参数名，比如class或者type，但是这可能会引起混淆或者冲突，所以不建议这样做。

## 11 type

Python中，type函数除了可以用来查看某个对象的类型，还可以用来动态地创建类。type函数有两种语法格式：

- type(object)：返回object的类型，相当于调用object.**class**。
- type(name, bases, dict)：返回一个新的类型对象，相当于定义一个类。

第二种语法格式中，name是类的名称，是一个字符串；bases是一个元组，表示类的基类，可以有多个；dict是一个字典，表示类的属性和方法，键是属性或方法的名称，值是属性的值或方法的函数对象。

例如，我们可以用type函数来创建一个Person类，代码如下：

```python
# 定义一个函数，作为Person类的方法
def say_hello(self):
    print(f'Hello, I am {self.name}.')

# 使用type函数，创建一个Person类
Person = type('Person', (object,), {'name': 'Alice', 'age': 20, 'say_hello': say_hello})

# 查看Person类的类型
print(type(Person)) # <class 'type'>

# 查看Person类的基类
print(Person.__bases__) # (<class 'object'>,)

# 查看Person类的属性和方法
print(Person.__dict__) # {'name': 'Alice', 'age': 20, 'say_hello': <function say_hello at 0x7f9c3c4f1e50>, '__module__': '__main__', '__dict__': <attribute '__dict__' of 'Person' objects>, '__weakref__': <attribute '__weakref__' of 'Person' objects>, '__doc__': None}

# 创建一个Person类的实例
p = Person()

# 调用实例的方法
p.say_hello() # Hello, I am Alice.
```
使用type函数创建类的好处是，可以根据不同的情况，动态地生成不同的类，而不需要提前定义好类的结构。这样可以提高代码的灵活性和可扩展性。

## 12 多态工厂模式

多态工厂模式是一种设计模式，它可以根据不同的参数，返回不同类型的实例对象。这样可以实现一个工厂类，可以创建多种产品类，而不需要为每种产品类都定义一个专门的工厂类。多态工厂模式的优点是可以提高代码的复用性和灵活性，缺点是可能增加代码的复杂度和维护难度。

举例说明，假设我们要实现一个图形类，它可以根据用户的输入，生成不同的图形，比如圆形，正方形，三角形等。我们可以使用多态工厂模式来实现这个功能，代码如下：
```python
# 定义一个抽象的图形类，提供一个抽象的draw方法
class Shape(object):
    def draw(self):
        raise NotImplementedError

# 定义一个圆形类，继承自图形类，实现draw方法
class Circle(Shape):
    def draw(self):
        print("画一个圆形")

# 定义一个正方形类，继承自图形类，实现draw方法
class Square(Shape):
    def draw(self):
        print("画一个正方形")

# 定义一个三角形类，继承自图形类，实现draw方法
class Triangle(Shape):
    def draw(self):
        print("画一个三角形")

# 定义一个多态工厂类，提供一个静态的create_shape方法，根据参数返回不同的图形对象
class ShapeFactory(object):
    @staticmethod
    def create_shape(shape_type):
        # 如果参数是circle，返回一个圆形对象
        if shape_type == "circle":
            return Circle()
        # 如果参数是square，返回一个正方形对象
        elif shape_type == "square":
            return Square()
        # 如果参数是triangle，返回一个三角形对象
        elif shape_type == "triangle":
            return Triangle()
        # 如果参数是其他，返回None
        else:
            return None

# 测试
# 创建一个圆形对象
circle = ShapeFactory.create_shape("circle")
# 调用圆形对象的draw方法
circle.draw() # 画一个圆形

# 创建一个正方形对象
square = ShapeFactory.create_shape("square")
# 调用正方形对象的draw方法
square.draw() # 画一个正方形

# 创建一个三角形对象
triangle = ShapeFactory.create_shape("triangle")
# 调用三角形对象的draw方法
triangle.draw() # 画一个三角形
```
从上面的代码可以看出，我们只需要一个ShapeFactory类，就可以根据不同的参数，创建不同的图形对象，而不需要为每种图形都定义一个专门的工厂类。这样就实现了多态工厂模式。

如果你想在__new__方法里扩展多态工厂模式的功能，你可以这样做：

- 在__new__方法里，根据不同的参数，返回不同类型的实例对象，而不需要定义一个工厂类。
- 你可以使用type函数，动态地创建不同类型的类，并为它们添加相应的属性和方法。
- 你可以使用isinstance函数，判断参数是否是某个类型的实例，从而返回相应的对象。

例如，你可以用__new__方法来实现一个图形类，它可以根据用户的输入，生成不同的图形，比如圆形，正方形，三角形等，代码如下：
```python
# 定义一个抽象的图形类，提供一个抽象的draw方法  
class Shape(object):  
    def draw(self):  
        raise NotImplementedError  
  
    # 重写__new__方法，实现多态工厂模式的功能  
    def __new__(cls, shape_type) -> object():  
        # 如果参数是circle，返回一个圆形对象  
        if shape_type == "circle":  
            # 使用type函数，动态地创建一个圆形类，继承自图形类，实现draw方法  
            Circle = type("Circle", (), {"draw": lambda self: print("画一个圆形")})  
            # 返回一个圆形类的实例  
            return Circle()  
        # 如果参数是square，返回一个正方形对象  
        elif shape_type == "square":  
            # 使用type函数，动态地创建一个正方形类，继承自图形类，实现draw方法  
            Square = type("Square", (), {"draw": lambda self: print("画一个正方形")})  
            # 返回一个正方形类的实例  
            return Square()  
        # 如果参数是triangle，返回一个三角形对象  
        elif shape_type == "triangle":  
            # 使用type函数，动态地创建一个三角形类，继承自图形类，实现draw方法  
            Triangle = type("Triangle", (), {"draw": lambda self: print("画一个三角形")})  
            # 返回一个三角形类的实例  
            return Triangle()  
        # 如果参数是其他，返回None  
        else:  
            return None  
  
  
# 测试  
# 创建一个圆形对象  
circle = Shape("circle")  
print(circle)  
print(circle.__dict__)  
# 调用圆形对象的draw方法  
circle.draw()  # 画一个圆形  
  
# 创建一个正方形对象  
square = Shape("square")  
# 调用正方形对象的draw方法  
square.draw()  # 画一个正方形  
  
# 创建一个三角形对象  
triangle = Shape("triangle")  
# 调用三角形对象的draw方法  
triangle.draw()  # 画一个三角形
```
这样，你就可以用__new__方法来实现多态工厂模式的功能，而不需要定义一个工厂类。

# 九 变量和函数的类型注解

Python的类型注解是一种在代码中指定变量、函数参数和返回值的类型的方式，它可以帮助编辑器和类型检查器发现代码中的类型错误，提高代码的可读性和可维护性。类型注解是在Python 3.5之后引入的，它不会影响程序的运行，只是作为一种元数据供工具使用。下面是一些类型注解的例子和说明：
## 1 变量的类型注解

- 变量的类型注解：可以在变量名后面加上冒号和类型来注解变量的类型，例如：
```python
name: str = "Alice" # name是字符串类型
age: int = 20 # age是整数类型
```

## 2 函数的类型注解

- 函数的类型注解：可以在函数定义中用冒号和类型来注解函数参数和返回值的类型，例如：
```python
def add(x: int, y: int) -> int:
    # x和y是整数类型，返回值也是整数类型
    return x + y
```

## 3 容器的类型注解

- 容器的类型注解：可以用typing模块中提供的泛型类型来注解容器（如列表、字典、元组等）中元素的类型，例如
```python
from typing import List, Dict, Tuple

# scores是一个元素为整数的列表
scores: List[int] = [90, 80, 70]

# ages是一个键为字符串，值为整数的字典
ages: Dict[str, int] = {"Alice": 20, "Bob": 21}

# point是一个包含两个浮点数的元组
point: Tuple[float, float] = (1.0, 2.0)
```

## 4 可选的类型注解

- 可选的类型注解：可以用typing模块中的Optional来注解可选的类型，即可能为None的类型，例如：
```python
from typing import Optional

# name是一个可选的字符串类型，可以为None
name: Optional[str] = None
```
## 5 联合的类型注解

- 联合的类型注解：可以用typing模块中的Union来注解多种可能的类型，例如：
```python
from typing import Union

# value是一个联合类型，可以是整数或者字符串
value: Union[int, str] = 10
value = "hello"
```

## 6 类型别名

- 类型别名：可以用type语句或者TypeAlias标记来定义类型的别名，以便简化复杂的类型或者提高类型的可读性，例如：
```python
from typing import TypeAlias

# Vector是一个类型别名，表示一个元素为浮点数的列表
type Vector = List[float]
Vector: TypeAlias = List[float]

# Matrix是一个类型别名，表示一个元素为Vector的列表
type Matrix = List[Vector]
Matrix: TypeAlias = List[Vector]
```

# 十 闭包、递归、装饰器、迭代器、生成器
## 1 闭包

Python的闭包是一种特殊的函数，它可以访问外部函数的局部变量，并且在外部函数返回后，这些局部变量仍然保持在内存中，不会被垃圾回收机制清除。闭包的创建需要满足以下三个条件：

- 必须有一个嵌套函数（函数内部的函数）；
- 嵌套函数必须引用外部函数的局部变量；
- 外部函数必须返回嵌套函数。

闭包的应用场景有很多，比如：
- 可以用来实现装饰器，对原有函数进行功能扩展或性能优化，而不改变原有函数的代码
- 可以用来实现柯里化，把一个多参数的函数转换成一个单参数的函数，从而实现参数的预设或延迟计算
- 可以用来实现私有属性或方法，通过闭包来封装一些内部状态，防止外部访问或修改
- 可以用来实现类似于面向对象的编程，通过闭包来模拟类的实例对象，保存一些属性和方法
- 可以用来实现一些特殊的功能，比如计数器，缓存，记忆化等

下面是一些闭包的示例代码：
- 用闭包实现一个装饰器，用来统计函数的运行时间：

```python
import time

def timer(func):
    # 定义一个嵌套函数，用来包装原函数
    def wrapper(*args, **kwargs):
        # 记录开始时间
        start = time.time()
        # 调用原函数
        result = func(*args, **kwargs)
        # 记录结束时间
        end = time.time()
        # 打印运行时间
        print(f"{func.__name__} ran in {end - start} seconds")
        # 返回原函数的结果
        return result
    # 返回嵌套函数
    return wrapper

# 使用装饰器
@timer
def add(x, y):
    time.sleep(1) # 模拟耗时操作
    return x + y

# 调用函数
print(add(3, 4))
# 输出：
# add ran in 1.0005402565002441 seconds
# 7
```

- 用闭包实现一个柯里化函数，用来求两个数的乘积：

```python
def multiply(x):
    # 定义一个嵌套函数，用来接收第二个参数
    def inner(y):
        # 返回两个参数的乘积
        return x * y
    # 返回嵌套函数
    return inner

# 调用闭包函数
double = multiply(2) # 预设第一个参数为2
triple = multiply(3) # 预设第一个参数为3
print(double(5)) # 输出：10
print(triple(5)) # 输出：15
```

- 用闭包实现一个私有属性，用来存储用户的密码：

```python
def user(name):
    # 定义一个局部变量，用来存储密码
    password = "123456"
    # 定义一个嵌套函数，用来验证密码
    def login(pwd):
        # 如果密码正确，返回欢迎信息
        if pwd == password:
            return f"Welcome, {name}!"
        # 如果密码错误，返回错误信息
        else:
            return "Wrong password!"
    # 返回嵌套函数
    return login

# 创建一个闭包对象
alice = user("Alice")
# 调用闭包函数
print(alice("123456")) # 输出：Welcome, Alice!
print(alice("654321")) # 输出：Wrong password!
# 无法直接访问或修改密码
print(alice.password) # 报错：AttributeError: 'function' object has no attribute 'password'
alice.password = "654321" # 无效的赋值
print(alice("123456")) # 仍然输出：Welcome, Alice!
```

- 用闭包实现一个类似于面向对象的编程，用来模拟一个计数器：

```python
def counter():
    # 定义一个局部变量，用来存储计数值
    count = 0
    # 定义一个嵌套函数，用来增加计数值
    def increase():
        # 声明使用外部函数的变量
        nonlocal count
        # 计数值加一
        count += 1
        # 返回计数值
        return count
    # 返回嵌套函数
    return increase

# 创建一个闭包对象
c = counter()
# 调用闭包函数
print(c()) # 输出：1
print(c()) # 输出：2
print(c()) # 输出：3
```

- 用闭包实现一个缓存功能，用来存储斐波那契数列的结果：

```python
def fibonacci():
    # 定义一个字典，用来存储已经计算过的结果
    cache = {}
    # 定义一个嵌套函数，用来计算斐波那契数列
    def fib(n):
        # 如果n在缓存中，直接返回结果
        if n in cache:
            return cache[n]
        # 如果n为0或1，返回n
        if n == 0 or n == 1:
            result = n
        # 否则，递归计算结果
        else:
            result = fib(n-1) + fib(n-2)
        # 把结果存入缓存中
        cache[n] = result
        # 返回结果
        return result
    # 返回嵌套函数
    return fib

# 创建一个闭包对象
f = fibonacci()
# 调用闭包函数
print(f(10)) # 输出：55
print(f(20)) # 输出：6765
print(f(30)) # 输出：832040
```

## 2 递归

Python的递归是一种编程技巧，它可以让一个函数在内部调用自身，从而解决一些复杂的问题。Python的递归有以下几个特点：

- 递归函数必须有一个明确的终止条件，也就是递归的出口，否则会导致无限循环或者栈溢出。
- 递归函数通常需要传递一个或多个参数，用来表示问题的规模或状态，每次递归调用时，参数应该有所变化，向着终止条件靠近。
- 递归函数可以把一个大问题分解成小问题，通过不断地调用自身，来求解小问题，最终得到大问题的答案。
- 递归函数的代码通常比较简洁和优雅，但是递归函数的效率不高，因为每次递归都需要创建新的栈帧，占用内存空间和时间。

Python的递归可以应用于很多场景，比如：
- 求解数学问题，如阶乘，斐波那契数列，汉诺塔，幂运算等。
- 处理数据结构，如链表，树，图等，可以用递归来遍历，查找，排序，插入，删除等。
- 实现算法，如二分查找，快速排序，深度优先搜索，回溯法，动态规划等。
- 解决一些有趣的问题，如八皇后，走迷宫，数独，括号匹配，汉字拆分等。

下面是一些递归函数的示例代码：
- 用递归函数求解阶乘问题：
```python
def factorial(n):
    # 终止条件：n为0或1时，返回1
    if n == 0 or n == 1:
        return 1
    # 递归调用：n乘以n-1的阶乘
    else:
        return n * factorial(n - 1)

# 测试
print(factorial(5)) # 输出：120
```

- 用递归函数求解斐波那契数列问题：
```python
def fibonacci(n):
    # 终止条件：n为0或1时，返回n
    if n == 0 or n == 1:
        return n
    # 递归调用：返回前两项的和
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# 测试
print(fibonacci(10)) # 输出：55
```

- 用递归函数求解汉诺塔问题：
```python
def hanoi(n, a, b, c):
    # 终止条件：n为0时，不需要移动
    if n == 0:
        return
    # 递归调用：分三步移动
    else:
        # 第一步：把n-1个盘子从a移动到b，借助c
        hanoi(n - 1, a, c, b)
        # 第二步：把第n个盘子从a移动到c
        print(f"Move {n} from {a} to {c}")
        # 第三步：把n-1个盘子从b移动到c，借助a
        hanoi(n - 1, b, a, c)

# 测试
hanoi(3, 'A', 'B', 'C')
# 输出：
# Move 1 from A to C
# Move 2 from A to B
# Move 1 from C to B
# Move 3 from A to C
# Move 1 from B to A
# Move 2 from B to C
# Move 1 from A to C
```

```python
import os  
  
path = "D:/OneDrive/Python/pythonProject/递归"  
  
  
def test_os(file_path):  
    print(os.listdir(file_path))  
    print(os.path.isdir(file_path))  
    print(os.path.exists(file_path))  
  
  
def get_files_recursion_from_dir(path):  
    file_list = []  
    if os.path.exists(path):  
        for f in os.listdir(path):  
            new_path = path + "/" + f  
            if os.path.isdir(new_path):  
                file_list += get_files_recursion_from_dir(new_path)  
            else:  
                file_list.append(new_path)  
    else:  
        print(f"指定的目录{path}不存在")  
        return []  
    return file_list  
  
  
if __name__ == "__main__":  
    fl = get_files_recursion_from_dir(path)  
    print(fl)  
    test_os(path)
```

## 3 装饰器

Python装饰器是一种特殊的函数，它可以在不修改原函数的代码和调用方式的情况下，给原函数增加一些额外的功能。Python装饰器的使用方法是在原函数的定义前面加上@decorator，其中decorator是一个返回函数的函数，它接收原函数作为参数，并返回一个包装了原函数的新函数。Python装饰器的使用场景有很多，比如：

- 可以用来实现日志记录，性能测试，权限验证，缓存管理等功能；
- 可以用来实现单例模式，静态方法，类方法，抽象方法等特殊的类函数；
- 可以用来实现函数重载，函数注解，函数注册等元编程技术；
- 可以用来实现一些有趣的效果，比如打印彩色字体，显示进度条，模拟打字机等 。

下面是一些装饰器的示例代码：
- 用装饰器实现一个日志记录的功能，可以在函数执行前后打印出函数的名称，参数，返回值和运行时间：
```python
import time
import logging

# 定义一个日志记录的装饰器
def log(func):
    # 定义一个包装函数
    def wrapper(*args, **kwargs):
        # 获取当前时间
        start = time.time()
        # 调用原函数，并获取返回值
        result = func(*args, **kwargs)
        # 获取结束时间
        end = time.time()
        # 计算运行时间
        duration = end - start
        # 打印日志信息
        logging.info(f"Function {func.__name__} was called with args: {args}, kwargs: {kwargs}, returned: {result}, took: {duration} seconds")
        # 返回原函数的返回值
        return result
    # 返回包装函数
    return wrapper

# 使用装饰器
@log
def add(x, y):
    time.sleep(1) # 模拟耗时操作
    return x + y

# 调用函数
print(add(3, 4))
# 输出：
# 7
# INFO:root:Function add was called with args: (3, 4), kwargs: {}, returned: 7, took: 1.0005402565002441 seconds
```

- 用装饰器实现一个单例模式的功能，可以保证一个类只有一个实例对象，如果已经存在实例对象，就直接返回，否则就创建一个新的实例对象：

```python
# 定义一个单例模式的装饰器
def singleton(cls):
    # 定义一个字典，用来存储已经创建的实例对象
    instances = {}
    # 定义一个包装函数
    def wrapper(*args, **kwargs):
        # 如果类在字典中，就直接返回实例对象
        if cls in instances:
            return instances[cls]
        # 否则，就创建一个新的实例对象，并存入字典中
        else:
            instance = cls(*args, **kwargs)
            instances[cls] = instance
            return instance
    # 返回包装函数
    return wrapper

# 使用装饰器
@singleton
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# 创建对象
p1 = Person("Alice", 20)
p2 = Person("Bob", 25)
# 比较对象是否相同
print(p1 is p2) # 输出：True
print(p1.name, p1.age) # 输出：Alice 20
print(p2.name, p2.age) # 输出：Alice 20
```

单例模式的装饰器是一种用来实现单例模式的技术，单例模式是指一个类只能有一个实例对象，如果多次创建该类的对象，都会返回同一个实例对象。单例模式的装饰器可以在不修改原类的代码的情况下，给原类增加单例的功能，也就是说，只要在原类的定义前面加上@singleton，就可以把原类变成一个单例类。

单例模式的装饰器的实现原理是这样的：
- 首先，定义一个装饰器函数singleton，它接收一个类作为参数，然后返回一个内部函数get_instance。
- 其次，定义一个字典instances，用来存储已经创建的单例对象，键是类，值是对象。
- 然后，定义一个内部函数get_instance，它也接收一个类作为参数，以及其他的参数和关键字参数，然后判断该类是否在字典instances中，如果在，就直接返回字典中的对象，如果不在，就用传入的参数和关键字参数创建一个新的对象，并把它存入字典中，然后返回该对象。
- 最后，当我们用@singleton装饰一个类时，相当于把该类替换成了get_instance函数，所以当我们创建该类的对象时，实际上是调用了get_instance函数，从而实现了单例的效果。

下面是一个简单的例子，用单例模式的装饰器来实现一个计数器类，每次创建该类的对象时，都会返回同一个对象，并且计数值会增加一。
```python
# 定义单例模式的装饰器
def singleton(cls):
    # 定义一个字典，用来存储已经创建的单例对象
    instances = {}
    # 定义一个内部函数，用来获取单例对象
    def get_instance(*args, **kwargs):
        # 判断该类是否在字典中，如果在，就直接返回字典中的对象
        if cls in instances:
            return instances[cls]
        # 如果不在，就用传入的参数和关键字参数创建一个新的对象，并把它存入字典中
        else:
            instance = cls(*args, **kwargs)
            instances[cls] = instance
            return instance
    # 返回内部函数
    return get_instance

# 使用装饰器，把Counter类变成一个单例类
@singleton
class Counter:
    # 定义一个类属性，用来存储计数值
    count = 0
    # 定义一个初始化方法，每次创建对象时，计数值加一
    def __init__(self):
        Counter.count += 1
    # 定义一个显示方法，用来打印计数值
    def show(self):
        print(f"The count is {Counter.count}")

# 创建三个Counter对象
c1 = Counter()
c2 = Counter()
c3 = Counter()
# 显示计数值
c1.show() # 输出：The count is 3
c2.show() # 输出：The count is 3
c3.show() # 输出：The count is 3
# 比较对象是否相同
print(c1 is c2) # 输出：True
print(c2 is c3) # 输出：True
```

## 4 迭代器

Python 的迭代器是一种可以在迭代过程中记住遍历位置的对象，它实现了迭代器协议，即定义了 **iter** 和 **next** 两个方法。**iter** 方法返回迭代器本身，**next** 方法返回容器中的下一个元素，如果没有更多元素，则抛出 StopIteration 异常。迭代器可以用于 for 循环或 next 函数来遍历容器中的元素。

迭代器的应用场景有很多，例如：

- 读取大文件时，可以使用迭代器按行读取，避免一次性加载整个文件到内存中，节省内存空间。
- 生成斐波那契数列时，可以使用迭代器按需生成下一个数，而不需要提前计算所有的数，提高效率。
- 使用 itertools 模块中的迭代器工具，可以实现各种复杂的迭代操作，如排列组合、无限循环、链式迭代等。

下面是一个使用迭代器实现斐波那契数列的例子，您可以运行它看看效果：
```python
# 定义一个斐波那契数列的迭代器
class Fibonacci:
    def __init__(self, n):
        self.a = 0
        self.b = 1
        self.n = n
        self.count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.count < self.n:
            self.a, self.b = self.b, self.a + self.b
            self.count += 1
            return self.a
        else:
            raise StopIteration

# 创建一个迭代器对象
fib = Fibonacci(10)

# 使用 for 循环迭代
for num in fib:
    print(num, end=" ")
```

## 5 生成器

生成器是 Python 中用于迭代的特殊类型的函数。它们以一种惰性（lazy）的方式生成值，逐个产生并返回，而不是一次性生成一个大的序列。这意味着生成器在处理大型数据集时非常高效，因为它们不需要占用大量内存。

生成器最常见的形式是使用函数定义，其中包含一个或多个 yield 语句。yield 是一个关键字，用于定义生成器函数，生成器函数是一种特殊的函数，可以在迭代过程中逐步产生值，而不是一次性返回所有结果。

当在生成器函数中使用 yield 语句时，函数的执行将会暂停，并将 yield 后面的表达式作为当前迭代的值返回。然后，每次调用生成器的 next () 方法或使用 for 循环进行迭代时，函数会从上次暂停的地方继续执行，直到再次遇到 yield 语句。这样，生成器函数可以逐步产生值，而不需要一次性计算并返回所有结果。

生成器的应用场景有很多，例如：

- 读取大文件时，可以使用生成器按行读取，避免一次性加载整个文件到内存中，节省内存空间。
- 生成斐波那契数列时，可以使用生成器按需生成下一个数，而不需要提前计算所有的数，提高效率。
- 使用`itertools`模块中的生成器工具，可以实现各种复杂的迭代操作，如排列组合、无限循环、链式迭代等。

下面是一个使用生成器实现斐波那契数列的例子，您可以运行它看看效果：
```python
# 定义一个斐波那契数列的生成器
def fibonacci(n):
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a + b

# 创建一个生成器对象
fib = fibonacci(10)

# 使用 for 循环迭代生成器
for num in fib:
    print(num, end=" ")
```

## 6 编程设计模式

- 编程的设计模式是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。

- 编程的设计模式通常分为三大类：创建型模式、结构型模式和行为型模式。创建型模式用于创建对象，结构型模式用于组合对象，行为型模式用于控制对象的交互。

- Python 是一种面向对象的编程语言，它支持多种编程范式，如函数式、命令式、过程式等。Python 也可以使用各种设计模式来提高代码的质量和效率。

- 为了用 Python 举例说明编程的设计模式，我将选择三个常用的模式：单例模式、适配器模式和观察者模式。这些模式分别属于创建型模式、结构型模式和行为型模式，它们的定义和代码示例如下：
    - 单例模式是一种创建型模式，它保证一个类只有一个实例，并提供一个全局访问点。这种模式可以用于控制资源的共享，如数据库连接、配置文件等。在 Python 中，可以使用元类、装饰器或模块来实现单例模式，例如：
    ```python
    # 使用元类实现单例模式
    class SingletonMeta(type):
        # 用于存储单例实例的字典
        _instances = {}
    
        # 重写 __call__ 方法，使得每次调用类时都返回同一个实例
        def __call__(cls, *args, **kwargs):
            # 如果类没有实例化过，就创建一个实例并存入字典
            if cls not in cls._instances:
                cls._instances[cls] = super().__call__(*args, **kwargs)
            # 否则直接返回已有的实例
            return cls._instances[cls]
    
    # 使用元类创建一个单例类
    class Singleton(metaclass=SingletonMeta):
        # 可以定义一些属性和方法
        def __init__(self, value):
            self.value = value
    
        def do_something(self):
            print(self.value)
    
    # 测试单例模式
    s1 = Singleton("Hello")
    s2 = Singleton("World")
    print(s1 is s2) # True
    s1.do_something() # Hello
    s2.do_something() # Hello
    ```
    
    - 适配器模式是一种结构型模式，它允许两个不兼容的接口通过一个转换类来协作。这种模式可以用于解决旧接口和新接口的不匹配问题，或者为一些已有的类提供一些额外的功能，而不影响它们的原有行为。在 Python 中，可以使用继承或组合的方式来实现适配器模式，例如：
    
    ```python
    # 使用继承的方式实现适配器模式
    # 假设有一个旧的接口，它可以计算两个数的和
    class OldCalculator:
        def add(self, x, y):
            return x + y
    
    # 假设有一个新的接口，它可以计算两个数的和、差、积、商
    class NewCalculator:
        def add(self, x, y):
            return x + y
    
        def sub(self, x, y):
            return x - y
    
        def mul(self, x, y):
            return x * y
    
        def div(self, x, y):
            return x / y
    
    # 定义一个适配器类，它继承了旧的接口，但是内部使用了新的接口
    class Adapter(OldCalculator):
        # 在初始化时，创建一个新接口的实例
        def __init__(self):
            self.calculator = NewCalculator()
    
        # 重写旧接口的方法，调用新接口的方法
        def add(self, x, y):
            return self.calculator.add(x, y)
    
        # 定义一些额外的方法，调用新接口的方法
        def sub(self, x, y):
            return self.calculator.sub(x, y)
    
        def mul(self, x, y):
            return self.calculator.mul(x, y)
    
        def div(self, x, y):
            return self.calculator.div(x, y)
    
    # 测试适配器模式
    adapter = Adapter()
    print(adapter.add(1, 2)) # 3
    print(adapter.sub(1, 2)) # -1
    print(adapter.mul(1, 2)) # 2
    print(adapter.div(1, 2)) # 0.5
    ```
    
    - 观察者模式是一种行为型模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听一个主题对象，当主题对象的状态发生变化时，它会通知所有观察者对象，使它们能够自动更新自己。这种模式可以用于实现事件驱动的系统，如新闻服务、股票行情等。在 Python 中，可以使用内置的模块或自定义的类来实现观察者模式，例如：
    
    ```python
    # 使用内置的模块实现观察者模式
    # 导入模块
    from abc import ABC, abstractmethod
    from observable import Observable
    
    # 定义一个抽象的观察者类，它有一个更新的方法
    class Observer(ABC):
        @abstractmethod
        def update(self, observable, message):
            pass
    
    # 定义一个具体的观察者类，它继承了观察者类，实现了更新的方法
    class NewsReader(Observer):
        # 在初始化时，给观察者一个名字
        def __init__(self, name):
            self.name = name
    
        # 在更新时，打印观察者的名字和收到的消息
        def update(self, observable, message):
            print(f"{self.name} received: {message}")
    
    # 定义一个具体的主题类，它继承了 Observable 类，可以添加、删除和通知观察者
    class NewsPublisher(Observable):
        # 在初始化时，创建一个空的消息列表
        def __init__(self):
            self.messages = []
    
        # 定义一个发布消息的方法，它会把消息添加到列表中，并通知所有的观察者
        def publish(self, message):
            self.messages.append(message)
            self.notify_observers(message)
    
    # 测试观察者模式
    # 创建一个主题对象
    publisher = NewsPublisher()
    # 创建三个观察者对象，并让它们订阅主题对象
    reader1 = NewsReader("Alice")
    reader2 = NewsReader("Bob")
    reader3 = NewsReader("Charlie")
    publisher.add_observer(reader1)
    publisher.add_observer(reader2)
    publisher.add_observer(reader3)
    # 主题对象发布一条消息
    publisher.publish("Breaking News: Python is awesome!")
    # 观察者对象收到消息并更新自己
    # Alice received: Breaking News: Python is awesome!
    # Bob received: Breaking News: Python is awesome!
    # Charlie received: Breaking News: Python is awesome!
    ```
