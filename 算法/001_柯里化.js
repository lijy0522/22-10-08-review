/*
 * @Author: lijy
 */
// 是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

var curry = fn => 
    judge = (...args) => 
        args.length === fn.length ? fn(...args) : (...arg) => judge(...args, ...arg)

function _add(x, y, z, a) {
    return x + y + z + a
}
const add = curry(_add)
console.log(add(1,2,3,4))
console.log(add(1)(2)(3)(4))