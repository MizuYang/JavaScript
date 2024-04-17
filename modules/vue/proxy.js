

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

// proxy.name = 'Jack' // 將 name 屬性修改為 Jack, 我要去更新畫面
// proxy.num = 14         // 偵測不到新增屬性
// delete proxy.age       // 偵測不到刪除屬性

// console.log('person: ', person) // {name: 'Mizu'}

// console.log('proxy: ', proxy) // name: "Mizu", get name: ƒ (), set name: ƒ (value)


// ============= Vue2 Object.defineProperty =============

// ============= 優化 Vue2 Object.defineProperty =============
const proxy2 = {}
const person2 = {
  name: 'Mizu',
  age: 18
}

getProxy()

// console.log('proxy2:', proxy2)
// console.log('person2:', person2)

// proxy2.name = 'Tina' // 將 name 屬性修改為 Tina, 我要去更新畫面
// proxy2.age = 14      // 將 age 屬性修改為 14, 我要去更新畫面
// proxy2.num = 14   // 偵測不到新增屬性
// delete proxy2.age   // 偵測不到刪除屬性


// 寫迴圈把資料賦予到代理物件
function getProxy () {
  Object.keys(person2).forEach(keyName => {
    Object.defineProperty(proxy2, keyName, {
      configurable: true,

      get () {
        return person2[keyName]
      },
      set (value) {
        console.log(`將 ${keyName} 屬性修改為 ${value}, 我要去更新畫面`)
        person2[keyName] = value
      }
    })
  })
}

// ============= 優化 Vue2 Object.defineProperty =============