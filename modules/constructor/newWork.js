

// newWork.js 主線程
// newWorkTestFile.js worker線程

newWork.call(this)

// newWork.js 主線程
function newWork() {
  // const worker = new Worker('路徑', 選項)
  const worker = new Worker('modules/constructor/newWorkTestFile.js', {
    // classic(默認) 或 module (用 ESModule 時, 須設定 type: 'module', 用 importScripts 時, 則隱藏 type 屬性)
    // type: 'module',

    // 可選，用以指定 worker 憑證。該值可以是 omit, same-origin，或 include。如果未指定，或 type 是 classic，將使用預設值 omit (不要求憑證)
    // credentials: '',

    // 可選，在 DedicatedWorkerGlobalScope的情況下，用來表示 worker 的 scope 的一個 DOMString值，主要用於除錯目的
    // name: ''

  })

  worker.addEventListener('message', (e) => {
    // console.log('主線程收到訊息: ', e)
  })
  // 當 worker 內部出現錯誤時觸發
  worker.addEventListener('err', err => {
    console.log(err)
  })
  // 當 message 事件接收到無法被反序列化的參數時觸發
  worker.addEventListener('messageerror', err => {
    console.log(err)
  })

  postMessageFn('傳遞資料')

  // 傳遞訊息給 worker 線程
  function postMessageFn (message = '') {
    worker.postMessage({
      message
    })
  }

  // 關閉 worker
  function closeWorker () {
    worker.terminate();
  }

  // postMessage 不可傳遞函式、DOM元素
  function errorPostMessage () {
    // 錯誤示範 1
    // const app = document.querySelector('#app')
    // postMessageFn(app)
    
    // 錯誤示範 2
    // const fn = () => 'text'
    // postMessageFn(fn)
  }
}