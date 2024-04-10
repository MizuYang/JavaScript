

cookie()

function  cookie() {
  const token1 = '123456'
  const token2 = '456789'

  // 1. 設定 cookie (expires 有效期限可以不填)
  document.cookie = `mizuToken=${token1};`
  document.cookie = `testToken=${token2};`
  // console.log(document.cookie) // mizuToken=123456; testToken=456789

  // 2. 取出 cookie 中的 token
  const mizuToken = document.cookie.replace(/(?:(?:^|.*;\s*)mizuToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  const testToken = document.cookie.replace(/(?:(?:^|.*;\s*)testToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  // console.log('mizuToken: ', mizuToken)
  // console.log('testToken: ', testToken)
  
  // 3. 設定 axios 預設帶上 token 來 call api
  // axios.defaults.headers.common.Authorization = mizuToken
  
  // 4. 刪除 cookie
  setCookie('mizuToken', '', -1)
  // console.log(document.cookie) // testToken=456789 (mizuToken 被刪除了)

  // 讓有效日期變成過期, 就能使 cookie 被刪除
  function setCookie (cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  }
}