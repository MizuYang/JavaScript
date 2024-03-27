

newAudio()

function newAudio () {
  const audio = new Audio('../assets/other/audio/mp3.mp3')
  // audio.src = '../assets/other/audio/mp3.mp3'

  audio.addEventListener('loadedmetadata', () => {
    // console.log('音樂已載入完畢', audio)
    
    const {duration} = audio
    // console.log('音樂時間長度: ', duration, '秒')
    
    // 音樂播放器需與用戶互動後才能透過 js 播放
    // audio.play()

    // 獲取音樂的播放速率
    var playbackRate = audio.playbackRate;
    // console.log('音樂播放速率：', playbackRate);

    // 獲取音樂是否正在播放
    var isPlaying = !audio.paused;
    // console.log('音樂是否正在播放：', isPlaying);

    // 獲取音樂的音量（範圍：0-1）
    var volume = audio.volume;
    // console.log('音樂音量：', volume);

    // 獲取音樂的當前播放時間（單位：秒）
    var currentTime = audio.currentTime;
    // console.log('當前播放時間：', currentTime, '秒');
  })
}