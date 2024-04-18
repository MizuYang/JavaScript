


// 我是父頁面
// 子頁面是: window.html

const app = document.querySelector('#app');
const div = document.createElement('div');
let childWindow =''

const openWindowButton = document.createElement('button');
openWindowButton.type = 'button'
openWindowButton.textContent = '開啟分頁';
openWindowButton.addEventListener('click', openWindow)

const postMsgButton = document.createElement('button');
postMsgButton.type = 'button'
postMsgButton.textContent = '傳遞訊息給子頁面'
postMsgButton.addEventListener('click', postMessage)

const checkChildClosedStateBtn = document.createElement('button');
checkChildClosedStateBtn.type = 'button'
checkChildClosedStateBtn.textContent = '子頁面被關閉了嗎?'
checkChildClosedStateBtn.addEventListener('click', checkChildClosedState)

div.appendChild(openWindowButton);
div.appendChild(postMsgButton);
div.appendChild(checkChildClosedStateBtn);
app.appendChild(div);

function openWindow () {
  // 分頁的 window 物件
  childWindow = window.open('window.html', 'Mizu 的分頁', 'width=200px, height=200px, top=100px, left=100px')
}
function postMessage () {
  // 有開啟分頁才能傳遞訊息
  if (childWindow) {
    const message = {
      now: new Date().toLocaleString(),
      message: '傳遞訊息'
    }
    childWindow.postMessage(message, childWindow.location.href)
  } else {
    alert('請先開啟分頁, 才能傳遞訊息給子頁面')
  }
}
function checkChildClosedState () {
  if (childWindow.closed === undefined) {
    alert('您並沒有開啟過子分頁')
  } else {
    console.log(childWindow.closed ? '已被關閉' : '尚未關閉')
  }
}

// 監聽訊息
window.addEventListener('message', (e) => {
  if (childWindow) console.log(e.data)
})
