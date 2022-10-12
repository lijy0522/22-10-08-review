/*
 * @Author: lijy
 */
let array = [1, 1, '1', '1']

// 方法一：双重 for 循环
function unique1(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                flag = false;
                break
            }
        }
        if (flag) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique1(array))

// 方法二：for + indexOf（可以检测元素在数组中第一次出现的位置）
function unique2(arr) {
    let res = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique2(array))

// 方法三：for + sort() [数组排序]
function unique3(arr) {
    // 对数组重新排序
    arr = arr.sort()
    let res = []
    // 遍历
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]){
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique3(array))

// 方法四：set 与解构赋值
// Set 函数可以接受一个数组（或类数组对象）作为参数来初始化
function unique4(arr) {
    return [...new Set(arr)]
}
console.log(unique4(array))

// 方法五：Array.from + set
// Array.from 可以将 Set 结构转化为数组结果
function unique5(arr) {
    return Array.from(new Set(arr))
}
console.log(unique5(array))