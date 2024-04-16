



const person = {
  name: 'Mizu',
  age: 18,
  hobby: ['codding', 'eat', 'sleep'],
  cat: {
    name: 'baCat',
    age: 3
  }
}
// 1. 基本架構
// Object.defineProperty(person, 'name', {
  // value: '', // 值
  // writable: true, // 可否修改
  // enumerable: true, // 可否列舉
  // configurable: true // 可否刪除
// })
// console.log(person)


// 2. value 值
Object.defineProperty(person, 'name', {
  value: 'Jack'
})
// console.log(person.name) // Jack


// 3. writable 可否修改
Object.defineProperty(person, 'age', {
  writable: false
})
// person.age = 30 // 報錯


// 4. enumerable 可否列舉
Object.defineProperty(person, 'hobby', {
  enumerable: false
})
// console.log(Object.keys(person)) // ['name', 'age', 'cat']
for (const key in person) {
  // console.log('列舉',  key);   // 列舉: name, age, cat
}


// 5. configurable 可否刪除
Object.defineProperty(person, 'cat', {
  configurable: false
})
// delete person.cat // 報錯
// delete person.name // 成功刪除


// 6. 新增屬性
Object.defineProperty(person, 'job', {
  value: 'coder'
})
// console.log(person.job) // coder


// 7. Object.defineProperties() 一次定義多個屬性特徵
const person2 = {
  name: 'Mizu',
  age: 18
}
Object.defineProperties(person2, {
  name: {
    value: '', // 值
    writable: true, // 可否修改
    enumerable: true, // 可否列舉
    configurable: true // 可否刪除
  },
  age: {
    value: '', // 值
    writable: true, // 可否修改
    enumerable: true, // 可否列舉
    configurable: true // 可否刪除
  }
})


// getter, setter - 基本用法
const person3 = {
  name: 'Mizu',
  age: 18
}
Object.defineProperty(person3, 'name', {
  get () {
    return this._name
  },
  set (value) {
    // console.log('value', value) // Jack
    this._name = `Hi~ 我是 ${value.toLowerCase()}`
  }
})
person3.name = 'Jack'
// console.log(person3.name) // Hi~ 我是 jack


// getter, setter - 小練習
function todoList () {
  this._todoName = ''
  const todoData = []
  Object.defineProperty(this, 'todoName', {
    get () {
      return this._todoName;
    },
    set (value) {
      this._todoName = value;
      todoData.push({ val: this._todoName });
    },
  })
  this.getTodoList = function () {
    return todoData
  }
}

const todo = new todoList()
todo.todoName = '買菜'
todo.todoName = '去 ATM 領錢'
todo.todoName = '汽車保養'
// console.log(todo)

// console.log(todo.todoData) // undefined 外部無法讀取
// console.log(todo.getTodoList()) // [{…}, {…}, {…}]


// ============== 屬性特徵的限制 ==============
const person4 = {
  a: {}
}
// Object.defineProperty 只能設定該屬性的特徵，無法設定物件內部的屬性特徵
Object.defineProperty(person4, 'a', {
  writable: false
})

// 屬性特徵的限制只能限制該屬性的特徵，無法限制物件內部的屬性特徵
person4.a.name = 'Mizu'

// writable: false 無法修改該屬性
// person4.a = 'Jack' // 報錯

// 雖 writable: false 無法修改該屬性,但仍可在該屬性中編輯屬性
// console.log(person4.a)  // {name: 'Mizu'}


// ============== 屬性特徵的限制 ==============



// ============== 物件的 getter, setter ==============
const obj = {
  get age () {
    return this._age
  },
  set age (value) {
    this._age = value
  },
  getAge () {
    return this._age
  }
}
obj.age = 18
// console.log(obj) // {_age: 18, getAge: ƒ}
// console.log('getAge: ', obj.getAge()) // 18

// ============== 物件的 getter, setter ==============



// ============== preventExtensions 防止擴展 ==============
const obj2 = { a: 1, b: {}, c: 3}

// preventExtensions 防止擴展: 新增(X)、刪除(O)、修改(O)
Object.preventExtensions(obj2)

// obj2.d = 4 // 報錯 禁止新增

// 防止擴展後物件底下的屬性, 仍可在該屬性中新增
// obj2.b.name = 'Mizu' // 新增成功

Object.preventExtensions(obj2.b)
// obj2.b.name = 'Mizu' // 報錯 禁止新增

// console.log(obj2)
// ============== preventExtensions 防止擴展 ==============



// ============== seal 封裝 ==============
const obj3 = { a: 1, b: { bb: 123}, c: 3}

// seal 封裝: 新增(X)、刪除(X)、修改(O)
Object.seal(obj3)

// obj3.d = 4 // 報錯 禁止新增
// delete obj3.b // 報錯 刪除失敗

// 封裝後物件底下的屬性, 仍可在該屬性中新增、刪除
// obj3.b.age = 4 // 新增成功
// delete obj3.b.bb // 刪除成功

Object.preventExtensions(obj3.b)
// obj3.b.age = 4 // 新增失敗
// delete obj3.b.bb // 刪除失敗

// console.log(obj3)

// ============== seal 封裝 ==============



// ============== freeze 凍結 ==============
const obj4 = { a: 1, b: { bb: 123}, c: 3}

// freeze 凍結: 新增(X)、刪除(X)、修改(X)
Object.freeze(obj4)

// obj4.d = 1 // 報錯 禁止新增
// obj4.a = 123 // 報錯 禁止修改
// delete obj4.a // 報錯 禁止刪除

// 凍結後物件底下的屬性, 仍可在該屬性中新增、刪除
// obj4.b.cc = 123 // 新增成功
// obj4.b.bb = 456 // 編輯成功
// delete obj4.b.bb  // 刪除成功

Object.freeze(obj4.b)
// obj4.b.cc = 123 // 新增失敗
// obj4.b.bb = 456 // 編輯失敗
// delete obj4.b.bb  // 刪除失敗

// console.log(obj4.b)

// ============== freeze 凍結 ==============



// ============== 解除 preventExtensions, seal, freeze 的方法 ==============
const obj5 = { a: 1, b: 2 }
Object.freeze(obj5)

// obj5.c = 123 // 新增失敗
// obj5.a = 123 // 編輯失敗
// delete obj5.a // 刪除失敗

// 使用深層拷貝解除凍結
const newObj5 = JSON.parse(JSON.stringify(obj5))
// newObj5.c = 123 // 新增成功
// newObj5.a = 123 // 編輯成功
// delete newObj5.a // 刪除成功

// console.log(newObj5)

// ============== 解除 preventExtensions, seal, freeze 的方法 ==============