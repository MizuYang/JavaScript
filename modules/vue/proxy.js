

// Vue2, Vue3 響應式原理 Object.defineProperty、Proxy


// #region Vue2 Object.defineProperty
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

// ============= 優化上方程式，寫迴圈把資料賦予到代理物件 =============
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

// ============= 優化上方程式，寫迴圈把資料賦予到代理物件 =============
// #endregion



// #region Vue3 Proxy
// ============= Vue3 Proxy =============
// 1. 測試物件 reactive({})
// const obj = reactive({
//   name: 'Vue3',
//   age: 18
// })
// console.log(obj) // Proxy(Object) {name: 'Vue3', age: 18}

// 新增屬性
// obj.yy = 'dcard' // 新增 yy: dcard, 處理更新畫面
// 修改屬性
// obj.name = 'mizu' // 修改 name: mizu, 處理更新畫面
// 刪除屬性
// delete obj.age // 刪除 age 屬性, 處理更新畫面


// 2. 測試陣列 reactive([])
// const array = reactive([
//   1, 2, 3
// ])
// console.log(array) // Proxy(Array) {0: 1, 1: 2, 2: 3}

// array[5] = 567 // 新增 5: 567, 處理更新畫面
// array[0] = 123 // 修改 0: 123, 處理更新畫面
// delete array[1] // 刪除 1 屬性, 處理更新畫面
// array.push(999) // 新增 6: 999, 處理更新畫面
// array.splice(1, 1) // 修改 1: 3, 處理更新畫面, 刪除 2 屬性, 處理更新畫面, 修改 length: 2, 處理更新畫面 (執行三次的原因, 註1)

// 3. 測試深層物件 reactive({}) 是否能觸發響應式
const a = reactive({
  b: {
    c: {
      text: 'xxx'
    },
    d: [
      {
        e: {
          f: {
            text: 456
          },
          g: [1, 2, 3]
        }
      }
    ]
  },
  c: [
    {
      text: 'x1'
    },
    [4, 5, 6]
  ],
  h () {},
  i: 'iiiii QQ'
})

// 新增
// a.aa = { prop: '嘿嘿 prop XD' } // aa: Proxy(Object) {prop: '嘿嘿 prop XD'}
// a.aa.prop = '偷偷改看看!!' // 修改 prop: 偷偷改看看!!, 處理更新畫面
// a.ccc = ['你好', '我是', '米知'] // ccc: Proxy(Array) {0: '你好', 1: '我是', 2: '米知'}
// a.ccc[1] = '我不是' // 修改 1: 我不是, 處理更新畫面

// 修改
// a.b.c.text = '有更新' // 修改 text: 有更新, 處理更新畫面
// a.b.d[0].e.f.text = '更新啊 太多層了吧 QQ' // 修改 text: 更新啊 太多層了吧 QQ, 處理更新畫面
// a.b.d[0].e.g[2] = '陣列改改改!!!' // 修改 2: 陣列改改改!!!, 處理更新畫面

// 刪除
// delete a.b.d[0].e.f.text // 刪除 text 屬性, 處理更新畫面

function reactive (data) {
  // 處理物件中的深層屬性 都要是響應式
  Object.keys(data).forEach(keyName => {
    if (typeof data[keyName] === 'object' && typeof data[keyName] !== null) {
      data[keyName] = reactive(data[keyName])
    }
  })


  const handler = {
    // 取得屬性時執行
    get (obj, key) {
      console.log(`有人讀取 ${key} 屬性`)
      return obj[key]
    },
    // 新增、修改屬性時執行
    set (obj, key, value) {
      if (key in obj) {
        console.log(`修改 ${key}: ${value}, 處理更新畫面`)
      } else {
        console.log(`新增 ${key}: ${value}, 處理更新畫面`)
      }
      obj[key] = value

      // 檢查新增、編輯的值是否為物件，是的話要處理成 Proxy 物件
      if (typeof value === 'object' && typeof value !== null) {
        obj[key] = reactive(value)
      }
      return true
    },
    // 刪除屬性時執行
    deleteProperty (obj, key) {
      console.log(`刪除 ${key} 屬性, 處理更新畫面`)
      delete obj[key]
      return true
    }
  }
  const proxy = new Proxy(data, handler)

  return proxy
}


// #region  註1
// 註1: array.splice(1, 1) 會觸發三個 console.log 的原因如下：

// 修改索引 1 的元素值：當你使用 splice 方法刪除陣列元素時，它也會同時修改原陣列中的元素值。在這個情況下，陣列中索引 1 的元素值從 2 變成了 3，因此會觸發一次 console.log，顯示為 修改 1: 3, 處理更新畫面。

// 刪除索引 2 的元素：splice 方法同時會刪除指定範圍內的元素。在這個例子中，你刪除了索引 1 的元素，因此索引 2 的元素也被移動到了索引 1 的位置，這導致了一次刪除操作。所以會觸發第二次 console.log，顯示為 刪除 2 屬性, 處理更新畫面。

// 修改陣列的長度：當你使用 splice 方法修改了陣列的長度時，JavaScript 會自動更新陣列的長度。在這個例子中，刪除了一個元素後，陣列的長度從 3 變成了 2。這個操作也會觸發一次 console.log，顯示為 修改 length: 2, 處理更新畫面。

// 因此，array.splice(1, 1) 會觸發三個 console.log 是因為一次 splice 操作導致了三個不同的更新動作。
// #endregion


// ============= Vue3 Proxy =============
// #endregion
