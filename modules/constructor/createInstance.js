

// 自己創建構造函數

createInstance()

function createInstance() {
  const baCat = new Cat('八貓', 1)
  baCat.使用喵喵叫() // 我是八貓, 我1歲, 喵喵~
  // console.log(baCat) // Cat {name: '八貓', age: 1, 使用喵喵叫: ƒ}
  
  const diDi = new Cat('迪迪', 5)
  diDi.使用喵喵叫() // 我是迪迪, 我5歲, 喵喵~
}

// 建立一個 Cat 構造函數
function Cat(name, age) {
  this.name = name
  this.age = age
  this.使用喵喵叫 = function () {
    // console.log(`我是${this.name}, 我${this.age}歲, 喵喵~`)
  }
}




