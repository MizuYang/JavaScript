

// newWork.js 主線程
// newWorkTestFile.js worker線程


self.addEventListener('message', (e) => {
  // console.log('worker 線程收到訊息: ', e)

  // 模擬執行一些非同步工作
  setTimeout(() => {
    postMessageFn(e.data)
  }, 1000)

  // 引入其他腳本
  importFn()
})

self.addEventListener('err', err => {
  console.log(err)
})

self.addEventListener('messageerror', err => {
  console.log(err)
})

// 關閉 worker 線程
// self.close()


function postMessageFn (message = '') {
  postMessage({
    message
  })
}
// 注意! importScripts 和 ESModule 只能選擇一種方式引入
function importFn () {
  // 1. importScripts('路徑')
  // 記得在 worker 的第二個參數移除 type: 'module', 否則會報錯
  // importScripts('./newWorkImportScripts.js')
  // 使用該腳本的函式 const getMoney = (a, b) => a + b
  // console.log(getMoney(1, 2)) // 3
  
  // 2. ESModule
  // 記得在 worker 的第二個參數帶上 type: 'module' 才能使用 ESModule
  // import { getName } from './newWorkESModule'
  // console.log(getName('mizu')) // 我是mizu
}