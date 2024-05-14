
function changeLanguage(lang) {
 
  switch(lang) {
      case 'en':
         
          alert("Language changed to English");
          break;
      case 'fr':
          
          alert("Language changed to French");
          break;
      case 'de':
      
          alert("Language changed to German");
          break;
      case 'es':
          
          alert("Language changed to Spanish");
          break;
      default:
         
          alert("Unsupported language");
          break;
  }
}

    var player; 

  
    function playDemo() {
    
        var videoId = 'YOUR_VIDEO_ID';
        
        player = new YT.Player('videoPlayer', {
            height: '360',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo(); 
    }






  


  