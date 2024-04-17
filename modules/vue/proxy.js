

// Vue2, Vue3 響應式原理 Object.defineProperty、Proxy


// ============= Vue2 Object.defineProperty =============

const proxy = {} // 代理物件
const person = {
  name: 'Mizu',
  age: 18
}

Object.defineProperty(proxy, 'name', {
  // 可以刪除
  configurable: true,
  
  // 有人讀取屬性時調用
  get () {
    return person.name
  },
  // 有人修改屬性時調用
  set (value) {
    console.log(`將 name 屬性修改為 ${value}, 我要去更新畫面`)
    person.name = value
  }
})
Object.defineProperty(proxy, 'age', {
  // 可以刪除
  configurable: true,
  
  // 有人讀取屬性時調用
  get () {
    return person.age
  },
  // 有人修改屬性時調用
  set (value) {
    console.log(`將 age 屬性修改為 ${value}, 我要去更新畫面`)
    person.age = value
  }
})

proxy.name = 'Jack' // 將 name 屬性修改為 Jack, 我要去更新畫面

// 刪除後, 代理物件的 name 屬性會消失, 但 get, set 讀取不到屬性被刪除
delete proxy.name 

console.log('person: ', person) // {name: 'Mizu'}

console.log('proxy: ', proxy) // name: "Mizu", get name: ƒ (), set name: ƒ (value)


// ============= Vue2 Object.defineProperty =============