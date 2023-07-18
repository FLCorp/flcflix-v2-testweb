var player;
      var defaultVideoId = 'c5V-qL1HRho'; // URL de la vidéo par défaut
      var currentVideoId = defaultVideoId;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '0',
          width: '0',
          videoId: defaultVideoId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.setVolume(10); // Définit le volume initial à 10%
        event.target.playVideo(); // Lance la lecture automatique
      }
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          done = true;
        }
      }
      function changeVideo(videoId) {
        currentVideoId = videoId;
        player.loadVideoById(currentVideoId); // Charge une nouvelle vidéo
        player.playVideo(); // Lance la lecture automatique
      }
      function resetVideo() {
        currentVideoId = defaultVideoId;
        player.loadVideoById(currentVideoId); // Charge la vidéo par défaut
        player.playVideo(); // Lance la lecture automatique
      }