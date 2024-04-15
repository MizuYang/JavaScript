

// classes 被視為 constructor 的一種語法糖
// 因為它們本質上仍然使用 constructor functions 來創建物件


class Animal {
  constructor () {
    this.type = '動物'
    console.log('this', this) // Cat {type: '動物'}
  }
}
Animal.prototype.移動 = function () {
  console.log(`${this.age}歲的${this.name} 正在移動`)
}

// 將 Cat 繼承 Animal 所有原型屬性和方法
class Cat extends Animal {
  constructor (name, age) {
    // 在使用 this 前要先調用 super 將父層的屬性傳遞進來
    super() // super 是傳遞給 class Animal this指向

    this.name = name
    this.age = age

    // super 調用父類的屬性
    // console.log('type', this.type) 
    // super 調用父類的方法
    // super.移動()

    // 1. 將方法註冊在物件中
    // this.使用喵喵叫 = function () {
    //   console.log(`我是${this.name}, 喵喵~`)
    // }
  }
  // 2. 將方法註冊在 prototype 原型上
  // 使用翻跟斗 () {
  //   console.log(`${this.name} 翻跟斗!!!`)
  // }
}
// 3. 將方法註冊在 prototype 原型上
// Cat.prototype.使用翻滾 = function () {
//   console.log(`${this.name} 翻滾!!!`)
// }

const babaCat = new Cat('八八貓', 12)
console.log(babaCat)
// babaCat.使用喵喵叫() // 我是八八貓, 喵喵~
// babaCat.使用翻滾() // 八八貓 翻滾!!!
// babaCat.使用翻跟斗() // 八八貓 翻跟斗!!!
// babaCat.移動() // 12歲的八八貓 正在移動
