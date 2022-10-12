/*
 * @Author: lijy
 */
String.prototype.myTrim = function () {
    return this.replace(/\s+/g, '')
}

let arr = ' a cd  ds '
console.log(arr.myTrim())