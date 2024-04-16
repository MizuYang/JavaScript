


const handler = {
  get (obj, keyName) {
    return obj[keyName] || undefined
  }
}
const person = {
  name: 'Mizu',
  age: 18
}

// new Proxy(目標物件, 包裝處理函式的物件)
const ref = new Proxy(person, handler)

// 取得物件屬性時, handle 的 get 函式就會觸發並回傳值
console.log(ref.name) // Mizu

