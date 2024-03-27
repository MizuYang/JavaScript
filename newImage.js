

let content = `
  <img src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=MfXKj8uL1Rjwy4t8SOlT6A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=26.06868&pitch=0&thumbfov=100" alt="" />
`



export function render () {
  const app = document.querySelector('#app')
  const div = document.createElement('div')
  div.setAttribute('id', 'newImage')
  app.appendChild(div)
  div.innerHTML = content
}