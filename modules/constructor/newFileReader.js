


newFileReader()

function newFileReader () {
  const app = document.querySelector('#app')
  const div = document.createElement('div')
  const input = document.createElement('input')
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const hr = document.createElement('hr')
  
  div.setAttribute('id', 'newFileReaderDiv')
  img.setAttribute('id', 'newFileReaderImg')
  input.setAttribute('type', 'file')

  h2.textContent = 'new FileReader()'

  input.addEventListener('change', upload)
  
  div.appendChild(h2)
  div.appendChild(input)
  div.appendChild(img)
  div.appendChild(hr)
  app.appendChild(div)
  
  // 檔案上傳
  function upload (e) {
    // console.log('upload', e.target.files[0])
    const file = e.target.files[0]
    // 創建一個新的 FileReader 對象
    const reader = new FileReader();
    reader.readAsDataURL(file)
  
    // 取得 base64Url , 設置當讀取操作完成時的回調函數
    reader.addEventListener('load', e => {
      // 讀取操作完成後，處理讀取的文件內容
      const base64Url = e.target.result;
      // console.log('File base64Url:', base64Url);
      const img = document.querySelector('#newFileReaderImg')
      img.width = 100
      img.height = 100
      img.src = base64Url
    });

  
    // 設置當讀取操作失敗時的回調函數
    reader.addEventListener('error', e => {
      // 讀取操作失敗時，顯示錯誤消息
      // console.error('File reading failed:', e.target.error);
    });
  }
}


