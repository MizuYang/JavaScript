

// classes 被視為 constructor 的一種語法糖
// 因為它們本質上仍然使用 constructor functions 來創建物件


class Animal {
  constructor () {
    this.type = '動物'
    // console.log('this', this) // Cat {type: '動物'}
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
// console.log(babaCat)
// babaCat.使用喵喵叫() // 我是八八貓, 喵喵~
// babaCat.使用翻滾() // 八八貓 翻滾!!!
// babaCat.使用翻跟斗() // 八八貓 翻跟斗!!!
// babaCat.移動() // 12歲的八八貓 正在移動



// ======== static 靜態方法 ======== 
class StaticTest {
  constructor () {}
  static test () {
    console.log('測試 static 文字')
  }
}

// 被定義為 Static Method 可以直接以 Constructor 呼叫
// StaticTest.test() // 測試文字

// 但創建出來的 Instance 是無法使用它的
const static實體 = new StaticTest()
// static實體.test() // 錯誤: Uncaught TypeError: static實體.test is not a function

// ======== static 靜態方法 ======== 


// ======== getter, setter ======== 
class GetterSetter {
  constructor (name) {
    this.name = name
  }
  get age () {
    return this._age ? 
      `${this.name}的年齡是${this._age}歲`: 
      `我不知道 ${this.name} 的年齡`
  }
  set age (value) {
    this._age = value
  }
}
const getterSetter = new GetterSetter('Mizu')
// console.log(getterSetter.age) // 我不知道 Mizu 的年齡
getterSetter.age = 18
// console.log(getterSetter.age) // Mizu的年齡是18歲
// console.log(getterSetter._age) // 18 <- 可以讀取到 _age 的值
// console.log('getterSetter', getterSetter)

// ======== getter, setter ======== 


