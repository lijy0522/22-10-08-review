/*
 * @Author: lijy
 */

// 方法一：

let arr = [1, 2, [3, 4, [5, 6]], 7]

/*
let arr1 = arr.toString()
let arr2 = arr1.split(',')
let arr3 = arr2.map((val) => {
    // console.log(val)
    return parseInt(val)
})

console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)
*/
console.log(arr.toString().split(',').map((val) => {
    return parseInt(val)
}))

// 方法二：falt() 参数默认为一层
console.log(arr.flat(2))