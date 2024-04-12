




locationFn()

function locationFn () {
  // console.log(location)

  const curPath = location.href

  // ============ 屬性 ============
  // 完整的 url
  // console.log('location.href', location.href)
  
  // 一個字串，其中包含'#'後跟 URL 的片段標識符
  // console.log('location.hash', location.hash)

  // 主機的名稱
  // console.log('location.host', location.host)

  // 網域的名稱
  // console.log('location.hostname', location.hostname)

  // 包含特定位置的起源的規範形式
  // console.log('location.origin', location.origin)

  // '/'包含首字母後面跟著 URL 路徑的字串，不包括查詢字串或片段
  // console.log('location.pathname', location.pathname)

  // 端口號 (埠號)
  // console.log('location.port', location.port)

  // 包含 URL 協定方案的字串，包括最終的':'.
  // console.log('location.protocol', location.protocol)

  // 查詢字串 (query)
  // console.log('location.search', location.search)

  // ============ 方法 ============
  // 載入新的文件
  // location.assign(curPath) 

  // 重新載入當前頁面
  // setTimeout(() => { // 直接寫 location.reload() 會造成無限重載，所以用 setTimeout 包起來
  //   location.reload() 
  // }, 2000)
  
  // 重新導向, 並且不會產生歷史紀錄
  // setTimeout(() => { // 直接寫 location.reload() 會造成無限重載，所以用 setTimeout 包起來
  //   location.replace(curPath) 
  // }, 2000)
}