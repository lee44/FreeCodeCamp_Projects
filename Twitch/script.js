var channels = [{Streamer:'brtt',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/brtt-profile_image-864406f5ebfe4ccd-300x300.jpeg'},{Streamer:'flosd',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/flosd-profile_image-425cca9ea2ca77bb-300x300.png'},{Streamer:'Halo',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/halo-profile_image-997d829e082b3322-300x300.jpeg'},{Streamer:'HSdogdog',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg'},{Streamer:'monstercat',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/monstercat-profile_image-72a449ee382a5425-300x300.png'},{Streamer:'Reckful',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/reckful-profile_image-b22e4d39d3d6e045-300x300.jpeg'},{Streamer:'SaltyBet',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/saltybet-profile_image-cef729d6b1b807ce-300x300.png'},{Streamer:'StreamerHouse',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/streamerhouse-profile_image-ef307bd1a40c75b1-300x300.png'},{Streamer:'Towelliee',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/towelliee-profile_image-f9752afc441702cc-300x300.jpeg'},{Streamer:'TSM-Dyrus',logo:'https://static-cdn.jtvnw.net/jtv_user_pictures/tsm_dyrus-profile_image-65fe199f18b9e0ff-300x300.png'}];

var onlineSrc = 'https://t4.ftcdn.net/jpg/00/33/52/49/160_F_33524989_ZjnZJa6eQRvLoHl0LP125yU09bJPGT7g.jpg';
var offlineSrc = 'https://t4.ftcdn.net/jpg/00/98/52/41/160_F_98524120_H8R6m2YidSrMTzFmdzzBturNVE9cWfbe.jpg';
var url = 'https://api.twitch.tv/kraken/streams/';

channels.forEach(function(channel){
    $.ajax({
    type: 'GET',
    url: url+channel.Streamer,
    headers: {
      'Client-ID': 'bftk540el0simwzn4mkj7xy0j98yx6x'
    },
    success: function(data) {
      if(data.stream != null)
      {
        $('#channelsList').append('<div class="row voffset" style="background-color:silver;"><div class="col-xs-1"><img src="'+data.stream.channel.logo+'" height=57 width=62/></div> <div class="col-xs-4 channels align=center"><a href='+data.stream.channel.url+'>'+channel.Streamer+'</a><h1 style="font-size:13px; margin-top:0px">'+data.stream.channel.status+'</h1></div><div class="col-xs-7"> <img src="'+onlineSrc+'"height=57 width=62/> </div> </div>');console.log(data._links);
      }
      else
      {
       $('#channelsList').append('<div class="row voffset" style="background-color:silver;"><div class="col-xs-1"><img src="'+channel.logo+'" height=57 width=62/></div> <div class="col-xs-4 channels align=center"><a href=https://www.twitch.tv/'+channel.Streamer+'>'+channel.Streamer+'</a><h1 style="font-size:13px; margin-top:0px; color:red">Account Closed or Offline</h1></div><div class="col-xs-7"> <img src="'+offlineSrc+'"height=57 width=62/> </div> </div>');
      }
    }
    
  });
});