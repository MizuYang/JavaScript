




// #region 節流 2024.4.18 09:51 - 10:03
// 函式執行後在指定時間內不會再次被執行

// const app = document.querySelector('#app');
// const div = document.createElement('div');
// const button = document.createElement('button');
// const 我要摸貓肉球 = throttle(1000, 摸貓肉球);
// let startTime = Date.now()
// button.type = 'button';
// button.textContent = '節流按鈕';
// button.addEventListener('click', 我要摸貓肉球)

// div.appendChild(button);
// app.appendChild(div);

// function throttle (delay, callback) {
//   let lastTime = Date.now()

//   return function () {
//     const now = Date.now()
//     if (now - lastTime > delay) {
//       lastTime = Date.now()
//       startTime = Date.now()
//       callback()
//     } else {
//       console.log(`還剩 ${delay - (Date.now() - startTime)} 毫秒才能點擊`)
//     }
//   }
// }
// function 摸貓肉球 () {
//   console.log('終於摸到貓肉球了')
// }
// #endregion

// #region 節流 2024.4.18 23:14 - 23:35
// 執行函式後, 在指定時間內都不會再次執行

// const app = document.querySelector('#app')
// const div = document.createElement('div')
// let startTime = Date.now()


// const throttleDoSomething = throttle(1000, doSomething)
// const button = document.createElement('button')
// button.type = 'button'
// button.textContent = '節流按鈕'
// button.addEventListener('click', throttleDoSomething)

// div.appendChild(button)
// app.appendChild(div)


// function doSomething () {
//   console.log('執行嚕~')
// }
// function throttle (delay, callback) {
//   let lastTime = Date.now()
//   return function () {
//     const now = Date.now()
    
//     if (now - lastTime >= delay ) {
//       lastTime = Date.now()
//       startTime = Date.now()
//       callback()
//     } else {
//       console.log(`還剩 ${delay - (Date.now() - startTime)} 毫秒才能點擊`)
//     }
//   }
// }

// #endregion

