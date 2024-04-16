



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


// getter, setter
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

