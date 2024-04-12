

// 此檔案練習：圖片 url, base64, blob, file 格式互相轉換

formatConversionUtility()

async function formatConversionUtility() {
	const imgUrl = 'https://images.unsplash.com/photo-1712133312537-1b8aea626285?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

	const app = document.querySelector('#app')
	const img = document.createElement('img')
	const div = document.createElement('div')

	img.width = 200
	img.height = 200

	app.appendChild(div)

	
	// 1. url to base64 - 1  (網址轉 Base64)
	const base64UrlTest = await webUrlToDataUrl(imgUrl)
	// console.log(base64UrlTest)
	// img.src = base64UrlTest

	// 2. url to base64 - 2
	const base64 = await urlToBase64(imgUrl)
	// console.log(base64) // base64
	// img.src = base64

	// 3. base64 to file 格式 (此示範的base64由第一個函式來取得)
	const fileFormat = base64ToFile(base64UrlTest, 'xxx.png')
	// console.log(fileFormat) // File {name: 'xxx.png',  size: 1645561, …}

	// 4. url to blob
	const blob = await urlToBlob(imgUrl)
	// console.log(blob) // Blob {size: 1645561, type: 'image/jpeg'}
	// img.src = blob

	// 5. blob to base64
	const newBase64 = await blobToBase64(blob)
	// console.log(newBase64) // base64
	// img.src = newBase64

	// 6. blob to url
	const newUrl = blobToUrl(blob)
	// console.log(newUrl) // blob:http://localhost:5173/5c025da1-5263-41be-9868-f880a68fccd8
	// img.src = newUrl


	// 7. base64 to url
	const newUrl2 = base642Url(base64)
	// console.log('newUrl2: ', newUrl2) // blob:http://localhost:5173/a8ed66af-d1e7-4fae-b418-654cf3ca9507
	// img.src = newUrl2

	div.appendChild(img)


}

// 1. url to base64 - 1 (網址轉 Base64)
function webUrlToDataUrl(url, callback) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			const reader = new FileReader();
			reader.onloadend = function () {
				// callback(reader.result);
				resolve(reader.result) // base64
			};
			reader.readAsDataURL(xhr.response);
		};
		xhr.open("GET", url);
		xhr.responseType = "blob";
		xhr.send();
	})
}
// 2. url to base64 - 2 (使用 canvas 來轉換 base64)
function urlToBase64(url, type = 'image/jpeg') {
	return new Promise((resolve, reject) => {
			const img = new Image()
			const canvas = document.createElement('canvas');
			img.crossOrigin = '*';
			img.onload = function () {
					const width = img.width, height = img.height;
					canvas.width = width;
					canvas.height = height;

					const ctx = canvas.getContext('2d');
					ctx.fillStyle = 'white';
					ctx.fillRect(0, 0, canvas.width, canvas.height);
					ctx.drawImage(img, 0, 0, width, height);
					const base64 = canvas.toDataURL(type);
					resolve(base64);
			};
			img.onerror = function () {
					reject(new Error('message'));
			};
			img.src = url;
	});
}
// 3. base64 轉 file 格式
function base64ToFile(base64Url, filename) {
	const arr = base64Url.split(','); const mime = arr[0].match(/:(.*?);/)[1]
	const bstr = atob(arr[1]); let n = bstr?.length; const u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], filename, { type: mime })
}
// 4. url to blob
function urlToBlob(url) {
	return window.fetch(url).then(response => response.blob());
}
// 5. blob to base64
function blobToBase64(blob) {
	return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
					const base64 = reader.result?.toString() || '';
					resolve(base64);
			});
			reader.addEventListener('error', () => {
					reject(new Error('message'));
			});
			reader.readAsDataURL(blob);
	});
}
// 6. blob to url
function blobToUrl(blob) {
	return URL.createObjectURL(blob);
}
// 7. base64 to url 
// 要先將 base64 轉成 blob 格式，再轉成 url
function base642Url(base64Url) {
	var parts = base64Url.split(';base64,'),
			contentType = parts[0].split(':')[1],
			raw = window.atob(parts[1]),
			length = raw.length,
			arr = new Uint8Array(length);
	for (var i = 0; i < length; i++) {
			arr[i] = raw.charCodeAt(i);
	}
	var blob = new Blob([arr], { type: contentType });
	return URL.createObjectURL(blob);
};
