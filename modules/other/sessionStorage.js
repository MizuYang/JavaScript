

sessionStorageTest()

function sessionStorageTest () {
  // 設定 sessionStorage 
  sessionStorage.setItem('sessionData', '測試 sessionStorage 文字')

  // 取得 sessionStorage 
  const data = sessionStorage.getItem('sessionData') || ''
  // console.log(data)
  
  // 刪除 sessionStorage
  sessionStorage.removeItem('sessionData')
  // console.log(sessionStorage.getItem('sessionData'))
  
  // 刪除所有 sessionStorage
  sessionStorage.clear()
  // console.log(sessionStorage.getItem('sessionData'))
}