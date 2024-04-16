



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
//   value: '', // 值
//   writable: true, // 可否修改
//   enumerable: true, // 可否列舉
//   configurable: true // 可否刪除
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

// Object.defineProperties() 