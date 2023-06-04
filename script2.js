var alienImage = document.querySelector('.record');
alienImage.addEventListener('click', function() {
  window.location.href = 'index3.html';
});

 function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: '7jVUH_kEu6U',
      playerVars: {
        autoplay: 0, // 자동 재생 설정
        rel: 0, // 관련 동영상 표시 여부 설정
        controls: 1, // 컨트롤러 표시 여부 설정
        showinfo: 1, // 동영상 정보 표시 여부 설정
        modestbranding: 0, // YouTube 로고 표시 여부 설정
        iv_load_policy: 3 // 애너테이션 표시 여부 설정
      },
      events: {
          onReady: onPlayerReady
      }
  });
}

// 플레이어가 준비되면 오디오로 전환
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute(); // 무음으로 설정하여 오디오만 재생
}