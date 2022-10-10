<!--
 * @Author: lijy
-->
## 理解 
- 从 MDN 上的话来说，Generator 对象是一个 generator function 返回的，并且它符合可迭代协议和迭代器协议。

## 语法
```
function * gen() {
    yield 1;
    yield 2;
    yield 3;
}
let g = gen()
```

## 方法
```
Generator.prototype.next()    // 返回一个由 yield 表达式生成的值

Generator.prototype.return    // 返回给定的值并结束生成器

Generator.prototype.throw()   // 向生成器抛出一个错误
```

## 核心
- Generator 实现的核心在于上下文的保存，函数并没有真的被挂起，每一次 yield ，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个 context 对象存储上下文，使得每次执行器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样。