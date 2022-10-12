/*
 * @Author: lijy
 */
var fib = function (n) {
    // 如果n小于2，返回自身
    if(n < 2){
        return n
    }
    let p = 0, q = 0, r = 1
    for (let i = 2; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
}

// console.log(fib(6))