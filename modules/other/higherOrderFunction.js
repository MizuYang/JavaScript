




// 高階函式 higherOrderFunction 

// #region 高階函式 => forEach
// const data = [1, 2, 3, 4]

// Array.prototype.myForEach = function (callback) {
//   // console.log(this) // [1, 2, 3, 4]

//   // 整理出傳回去的 forEach 三個參數 (item, index, array)
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i]
//     // console.log(item) // 分別印出: 1, 2, 3, 4

//     const index = i
//     // console.log((index)) // 分別印出: 0, 1, 2, 3

//     const array = this
//     // console.log(array) // [1, 2, 3, 4]
    
//     // 將參數傳回去 callback 讓帶入的函式能夠使用
//     callback(item, index, array)
//   }
// }

// data.myForEach((item, index ,array) => {
//   console.log('item', item);
//   console.log('index', index);
//   console.log('array', array);
// })

// #endregion


// #region 高階函式 => filter
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.prototype.myFilter = function (callback) {
//   const array = []

//   for(let i = 0; i < this.length; i++) {
//     const result = callback(this[i], i, this)
//     // console.log(result) // 會回傳該 item 是否符合條件(true, false)

//     if (result) array.push(this[i])
//   }
//   return array
// }

// const newData = data.myFilter((item) => {
//   return item > 5
// })
// console.log(newData) // [6, 7, 8, 9]

// #endregion



