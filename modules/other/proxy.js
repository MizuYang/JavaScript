

// ============= 代理 Proxy 基本架構 =============

const handler = {
  get (obj, keyName) {
    if (keyName === 'fullName') {
      return `${obj['firstName']} ${obj['lastName']}`
    } else {
      return obj[keyName] || undefined
    }
  },
  set (obj, keyName, value) {
    obj[keyName] = value
    return true
  }
}
const profile = {
  firstName: 'Yang',
  lastName: 'Mizu',
  age: 18
}

// new Proxy(目標物件, 包裝處理函式的物件)
const ref = new Proxy(profile, handler)

// 取得物件屬性時, handle 的 get 函式就會觸發並回傳值
// console.log(ref.age) // 18
// console.log(ref.fullName) // Yang Mizu
// console.log(ref.aefwwegwaeg) // undefined

// ============= 代理 Proxy 基本架構 =============



// ============= Proxy 練習 =============
const data = {
  price: 100,
  quantity: 2,
  discount: 0.8,
  total: 0
}
const handler2 = {
  get (obj, keyName) {
    return obj[keyName] || undefined
  },
  set (obj, keyName, value) {
    if (keyName === 'total') {
      console.error('請不要直接修改總價 XD')
      return 
    } 
    obj[keyName] = value
    obj.total = this.getTotal()

    return true
  },
  getTotal () {
    return data.price * data.quantity * data.discount
  }
}

const ref2 = new Proxy(data, handler2)

// 修改數量
// ref2.quantity = 5
// getTotalConsole() // 100元*5個*0.8折=400元
// ref2.quantity = 15
// getTotalConsole() // 100元*15個*0.8折=1200元

// 修改價格
// ref2.price = 50
// getTotalConsole() // 50元*2個*0.8折=80元

// 修改折扣
// ref2.discount = 0.5
// getTotalConsole() // 100元*2個*0.5折=100元

// ref2.total = 15 // Uncaught Error: 請不要直接修改總價 XD


function getTotalConsole () {
  console.log(
    `${ref2.price}元*${ref2.quantity}個*${ref2.discount}折=${ref2.total}元`
  )
}

// ============= Proxy 練習 =============

