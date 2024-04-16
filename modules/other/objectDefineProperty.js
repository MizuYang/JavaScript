



const person = {
  name: 'Mizu',
  age: 18,
  hobby: ['codding', 'eat', 'sleep'],
  cat: {
    name: 'baCat',
    age: 3
  }
}
Object.defineProperty(person, 'name', {
  value: '',
  writable: true, // 可否修改
  enumerable: true, // 可否列舉
  configurable: true // 可否刪除
})
console.log(person)
