<!--
 * @Author: lijy
-->
- instanceof 的主要作用是用来判断一个实例是否属于某种类型

- 原理
    - 在查找过程中会遍历左边变量的原型链，直到找到右边变量的 prototype ，如果查找失败，返回 false 。

- 补充【判断类型的其他方法】
    - typeof
    - Object.prototype.toString
    - constructor