

let content = `
  <div id="newImage1"></div>
`

newImage()
render()

function render () {
  const app = document.querySelector('#app')
  const div = document.createElement('div')

  div.setAttribute('id', 'newImage')
  app.appendChild(div)
  div.innerHTML = content
}
function newImage() {
  // 1. 使用 Image 对象
  const img = new Image(200, 200)
  img.src = './assets/images/img-1.jpg'

  // 2. 使用 createElement 创建 img 标签
  // const img = document.createElement('img')
  // img.src = './assets/images/img-1.jpg'
  // img.width = 200
  // img.height = 200
  
  // 圖片加載完畢
  img.onload = () => {
    // console.log('width: ', img.width)
    // console.log('height: ', img.height)
    const el = document.querySelector('#newImage1')
    el.innerHTML = `
    <hr />
    <h2>new Image()</h2>
    <p>
    width: ${img.width} <br />
    height: ${img.height} <br />
    </p>
    <hr />
    `
  }
  // 圖片加載錯誤
  img.onerror = () => {
    console.error('圖片加載失敗!!請檢查圖片路徑是否正確!!');
  };
}