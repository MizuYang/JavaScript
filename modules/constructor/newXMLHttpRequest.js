



newXMLHttpRequest()


function newXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  // console.log(xhr)
  
  xhr.addEventListener("progress", updateProgress);
  xhr.addEventListener("load", transferComplete);
  xhr.addEventListener("error", transferFailed);
  xhr.addEventListener("abort", transferCanceled);
  
  xhr.open('GET', 'https://randomuser.me/api/', true)
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 發送請求 ( 參數為 ajax 帶入的 body )
  xhr.send(null)

  // 從伺服器到客戶端的傳輸進度（下載）
  function updateProgress(oEvent) {
    // console.log('oEvent', oEvent)
    // console.log('從伺服器到客戶端的傳輸進度（下載）')
    const res = xhr.response
    // console.log('response: ', JSON.parse(res))

    // if (oEvent.lengthComputable) {
    //   const percentComplete = oEvent.loaded / oEvent.total;
    //   console.log('完成百分比:', percentComplete)
    // } else {
    //   // 由於總大小未知，無法計算進度資訊
    //   console.log('由於總大小未知，無法計算進度資訊!')
    // }
  }

  function transferComplete(evt) {
    // console.log("loading 結束");
  }

  function transferFailed(evt) {
    // console.log("傳輸時發生錯誤!");
  }

  function transferCanceled(evt) {
    // console.log("傳輸作業已被用戶取消!");
  }
}