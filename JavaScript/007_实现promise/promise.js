/*
 * @Author: lijy
 */
function Promise(executor) {
    // 声明
    this.PromiseState = 'pending'
    this.PromiseResult = null

    // 声明一个函数
    this.callbacks = []

    // 保存 this 值
    let _this = this

    // 创建 resolve 方法
    function resolve(data) {
        // 判断状态是否修改过
        if (_this.PromiseState !== 'pending') return
        // 1. 将状态改为成功【fulfilled】
        _this.PromiseState = 'fulfilled'
        // 2. 修改结果值
        _this.PromiseResult = data
        // 3. 执行成功的回调
        _this.callbacks.forEach = (item => {
            setTimeout(() => {
                item.onResolved(data)
            }, 0);
        })
    }

    // 创建 reject 方法
    function reject(data) {
        // 判断状态是否修改过
        if (_this.PromiseState !== 'pending') return
        // 1. 将状态改为失败【 rejected 】
        _this.PromiseState = 'rejected'
        // 2. 修改结果值
        _this.PromiseResult = data
        // 3. 执行失败的回调
        _this.callbacks.forEach = (item => {
            setTimeout(() => {
                item.onRejected(data)
            }, 0);
        })
    }

    // 调用
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

// 创建 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    // 保存 this 值
    const _this = this

    // 判断回调函数参数
    if (typeof onRejected !== 'function'){
        onRejected = reason => {
            throw reason
        }
    }
    if(typeof onResolved !== 'function'){
        onResolved = value => value
    }

    return new Promise((resolve, reject) => {
        // 封装 callback
        function callback(type) {
            try {
                // 获取回调函数的执行结果
                let result = type(_this.PromiseResult)
                // 判断
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r)
                    })
                } else {
                    // 结果的对象为成功
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }

        // 如果状态为 fulfilled
        if (this.PromiseState === 'fulfilled') {
            setTimeout(() => {
                callback(onResolved)
            }, 0);
        }
        // 如果状态为 rejected
        if (this.PromiseState === 'rejected') {
            setTimeout(() => {
                callback(onRejected)
            }, 0);
        }

        // 如果状态为 pending
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved)
                },
                onRejected: function () {
                    callback(onRejected)
                }
            })
        }
    })

}

// 创建 catch 方法
Promise.prototype.catch = function (onRejected) {
    this.then(undefined, onRejected)
}

// 创建 resolve 方法
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        // 判断 value 是否为 Promise
        if (value instanceof Promise){
            this.then(v => {
                resolve(v)
            },r => {
                reject(r)
            })
        }else{
            resolve(value)
        }
    })
}

// 创建 reject 方法
Promise.reject = function (value) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}

// 创建 all 方法
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        // 遍历
        for(let i = 0; i < promises.length; i++){
            // 声明变量
            let count = 0
            // 声明一个空数组
            let arr = []
            // 判断promise 状态是否为成功
            promises[i].then(v => {
                count++
                // 将成功的放入数组中
                arr[i] = v
                // 如果count 的值为 promises 的长度，说明全部成功
                if(count === promises.length){
                    // 修改状态
                    resolve(arr)
                }
            },r => {
                reject(r)
            })
        }
    })
}

// 创建 race 方法
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        // 遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v)
            },r => {
                reject(r)
            })
            
        }
    })
}