




// #region forEach 2024.4.18 23:36-23:39
// Array.prototype.mizuForEach = function (callback) {
//   console.log(callback)

//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this)
//   }
// }
// const data = [1, 2, 3, 4]
// data.mizuForEach((item, idx, arr) => {
//   console.log(item, idx, arr)
// })

// #endregion

// #region filter 2024.4.18 23:39-23:43
// Array.prototype.mizuFilter = function (callback) {
//   const ary = []

//   for (let i = 0;i < this.length; i++) {
//     const result = callback(this[i], i, this)
//     if(result) ary.push(this[i])
//   }
//   return ary
// }
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const newData = data.mizuFilter((item, idx, arr) =>{
//   return item < 10 && item >= 5
// })
// console.log(newData)

// #endregion

