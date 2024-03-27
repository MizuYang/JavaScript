(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();let c=`
  <div id="newImage1"></div>
`;a();l();function l(){const e=document.querySelector("#app"),r=document.createElement("div");r.setAttribute("id","newImage"),e.appendChild(r),r.innerHTML=c}function a(){const e=new Image(200,200);e.src="./assets/images/img-1.jpg",e.onload=()=>{console.log("width: ",e.width),console.log("height: ",e.height);const r=document.querySelector("#newImage1");r.innerHTML=`
    <hr />
    <h2>new Image()</h2>
    <p>
    width: ${e.width} <br />
    height: ${e.height} <br />
    </p>
    <hr />
    `},e.onerror=()=>{console.error("圖片加載失敗!!請檢查圖片路徑是否正確!!")}}d();function d(){const e=new Audio;e.src="../assets/other/audio/mp3.mp3",e.addEventListener("loadedmetadata",()=>{console.log("音樂已載入完畢",e);const{duration:r}=e;console.log("音樂時間長度: ",r,"秒");var i=e.playbackRate;console.log("音樂播放速率：",i);var n=!e.paused;console.log("音樂是否正在播放：",n);var o=e.volume;console.log("音樂音量：",o);var t=e.currentTime;console.log("當前播放時間：",t,"秒")})}
