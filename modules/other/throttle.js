



const 我想摸貓肉球 = throttle(1000, 摸貓肉球)

我想摸貓肉球()

非同步摸貓肉球(100)
非同步摸貓肉球(150)
非同步摸貓肉球(200)
非同步摸貓肉球(300)
非同步摸貓肉球(500)
非同步摸貓肉球(600)
非同步摸貓肉球(700)
非同步摸貓肉球(1100)
非同步摸貓肉球(1300)
非同步摸貓肉球(1500)
非同步摸貓肉球(1800)
非同步摸貓肉球(1900)
非同步摸貓肉球(2000)
非同步摸貓肉球(2100)
非同步摸貓肉球(3100)

function 非同步摸貓肉球 (time) {
  setTimeout(() => { 我想摸貓肉球()}, time)
}
function 摸貓肉球 () {
  console.log('終於可以摸貓肉球了!!!!')
}
function throttle (delay = 0, fn) {
  let lastTime = 0
  
  return function () {
    // 邏輯
    // delay: 5秒
    // 第一次觸發是 lastTime=10秒 執行函式
    // 第二次觸發式11秒時, 11-10<5, 不執行,
    // 第n次觸發時是20秒, 20-10>5, 執行函式, 將lastTime更新為20秒

    const now = Date.now()
    const elapsedTime = now - lastTime 
    
    // !lastTime: 初次執行時直接觸發
    if (!lastTime || elapsedTime >= delay) {

      lastTime = now
      fn()
    }
  }
}