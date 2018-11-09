

function initMap() {
  
    var uluru = {lat: 53.6944002, lng: 17.5569252};
  
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
        
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  

