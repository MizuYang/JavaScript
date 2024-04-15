

// 自己創建構造函數


// 建立一個 Cat 構造函數
function Cat(name, age) {
  this.name = name
  this.age = age
  // 1. 將函式定義在 constructor 裡面 (下方有註解說明)
  this.使用喵喵叫 = function () {
    // console.log(`我是${this.name}, 我${this.age}歲, 喵喵~`)
  }
}
// 2. 將函式定義在原型上 (下方有註解說明)
Cat.prototype.使用翻滾 = function () {
  // console.log(`${this.name} 翻滾!!!`)
}

createInstance()

function createInstance() {
  const baCat = new Cat('八貓', 1)
  baCat.使用喵喵叫() // 我是八貓, 我1歲, 喵喵~
  baCat.使用翻滾()
  // console.log(baCat) // Cat {name: '八貓', age: 1, 使用喵喵叫: ƒ}
  
  const diDi = new Cat('迪迪', 5)
  diDi.使用喵喵叫() // 我是迪迪, 我5歲, 喵喵~
  diDi.使用翻滾()
}





// 1. 將函式定義在 constructor 裡面
// function Cat() {
//   this.使用喵喵叫 = function () { ... } // 定義在 constructor 裡面
// }

// - 優點
//     - 定義在 constructor 內部的方法可以直接訪問 constructor 函數中的屬性，這對於需要訪問特定實例屬性的方法可能很有用。
// - 缺點
//     - 每次創建新的實例時，都會重新創建這些方法，這會導致每個實例都有自己的方法副本，造成內存浪費。


// 2. 將函式定義在原型上
// function Cat() { ... }
// Cat.prototype.使用喵喵叫 = function () { ... } // 定義在原型上

// - 優點
//     - 方法被定義在原型上，因此所有由該 constructor 函數創建的實例都共享同一個方法，這樣節省了內存。
// - 缺點
//     - 不能直接訪問 constructor 函數內部的屬性，因為方法定義在原型上，**無法訪問 constructor 函數的內部上下文。**

// 💡 總的來說，將方法添加到原型上通常是更好的做法，因為它可以節省內存並使方法在實例之間共享。然而，如果方法需要訪問 constructor 函數內部的特定屬性，那麼將方法定義在 constructor 內部可能更為合適。在設計中，要根據特定情況和需求來選擇最適合的方法定義方式。

