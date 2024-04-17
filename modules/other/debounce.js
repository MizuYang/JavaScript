



// 防抖 debounce
// 建立一個函式, 呼叫兩秒後才會執行, 而兩秒內如果再度呼叫, 會重新計時

let startTime = 0
let endTime = 0

const 我想摸貓肉球 = debounce(2000, 摸貓肉球)

// 我想摸貓肉球()

// 在時間內連續呼叫函式, 但不會執行, 因為被 debounce 擋住了
// 非同步摸貓肉球(100)
// 非同步摸貓肉球(700)
// 非同步摸貓肉球(3000)
// 非同步摸貓肉球(3500)
// 非同步摸貓肉球(3800)
// 非同步摸貓肉球(4000)

function 非同步摸貓肉球 (time) {
  setTimeout(() => { 我想摸貓肉球()}, time)
}
function 摸貓肉球 () {
  console.log('終於可以摸貓肉球了!!!')

  endTime = Date.now()
  console.log('驗證是在設定的時間執行函式', endTime - startTime) // 2007
}

// 參數: delay:時間, fn: 要執行的函式
function debounce (delay = 0, fn) {
  let timer = null
  
  return function checkTime () {
    clearTimeout(timer)
    startTime = Date.now()

    timer = setTimeout (() => {
      fn()
    }, delay)
  }
}