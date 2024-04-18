



// #region 防抖 2024.4.18 09:00
// 防抖
// 用戶每次點擊都會重新設定計時器
// 當計時器到指定的時間後，才會執行函數
// const app = document.querySelector('#app')
// const div = document.createElement('div')
// const button = document.createElement('button')
// const 我要摸貓肉球 = debounce(1000, 摸貓肉球)

// div.id = `debounce-${Math.random()}`
// button.textContent = '防抖按鈕'
// button.type = 'button'
// button.addEventListener('click', 我要摸貓肉球)
// div.appendChild(button)
// app.appendChild(div)

// function debounce (delay, callback) {
//   let timer = null
  
//   return function () {
//     clearTimeout(timer)
//     let startTime = Date.now()
    
//     timer = setTimeout(() => {
//       const endTime = Date.now()
//       callback()
//       console.log(`經過了 ${endTime - startTime} 毫秒`)
//     }, delay)
//   }
// }
// function 摸貓肉球 () {
//   console.log('終於摸到貓肉球了')
// }
// #endregion

// #region 防抖 2024.4.18 23:00-23:11
// 每次執行都會重新設定計時器, 並在最後一次執行時, 在指定的時間之後執行函式

// const app = document.querySelector('#app')
// const div = document.createElement('div')

// const debounceDoSomething = debounce(1000, doSomething)

// const button = document.createElement('button')
// button.textContent = '防抖按鈕'
// button.addEventListener('click', debounceDoSomething)

// div.appendChild(button)
// app.appendChild(div)


// function doSomething () {
//   console.log('函式執行')
// }

// function debounce (delay, callback) {
//   let timer = null
  
//   return function () {
//     clearTimeout(timer)
//     let startTime = Date.now()

//     timer = setTimeout(() => {
//       callback()
//       const endTime = Date.now()
//       console.log(`經過了 ${endTime - startTime} 毫秒`)
//     }, delay)
//   }
// }
// #endregion













