(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();let s=`
  <div id="newImage1"></div>
`;a();l();function l(){const e=document.querySelector("#app"),t=document.createElement("div");t.setAttribute("id","newImage"),e.appendChild(t),t.innerHTML=s}function a(){const e=new Image(200,200);e.src="./assets/images/img-1.jpg",e.onload=()=>{console.log("width: ",e.width),console.log("height: ",e.height);const t=document.querySelector("#newImage1");t.innerHTML=`
    <hr />
    <h2>new Image()</h2>
    <p>
    width: ${e.width} <br />
    height: ${e.height} <br />
    </p>
    <hr />
    `},e.onerror=()=>{console.error("圖片加載失敗!!請檢查圖片路徑是否正確!!")}}d();function d(){const e=new Audio("../assets/other/audio/mp3.mp3");e.addEventListener("loadedmetadata",()=>{console.log("音樂已載入完畢",e);const{duration:t}=e;console.log("音樂時間長度: ",t,"秒");var i=e.playbackRate;console.log("音樂播放速率：",i);var n=!e.paused;console.log("音樂是否正在播放：",n);var o=e.volume;console.log("音樂音量：",o);var r=e.currentTime;console.log("當前播放時間：",r,"秒")})}u();function u(){const e=new Array(5);console.log(e),e.fill("mizu"),console.log(e),e.forEach(t=>console.log(t))}
