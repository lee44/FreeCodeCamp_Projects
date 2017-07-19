$(document).ready(function() {
  var lat,lon,temp, tempF, tempC;
  var farenheit = true;
  
  $('#far').show();
  $('#cel').hide();
  
  $.getJSON("http://ip-api.com/json", function(data2) { 
    lat = data2.lat;
    lon = data2.lon;
  });
  $('#get').click(function(){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=936e860c72edb8cb527707e7d59da1ea", function(data) {
     var city = data.name;
     temp = Math.round(data.main.temp - 273);
     tempF = Math.round(((temp * 1.8) + 32)*10)/10;
     tempC = Math.round((tempF - 32) * .5556*10)/10;
     var weather = data.weather[0].description;
     var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      
     $('#weatherIcon').attr("src", icon);
     $('#temp').text(tempF);
     $('#city').text(city);
      
    });
  });
  $('#convert').click(function(){
    if(farenheit)
    { 
      farenheit = false;
      $('#convert').text('Convert to Farenheit');
      $("#temp").text(tempC);
      $('#far').hide();
      $('#cel').show();
    }
    else
    {
      farenheit = true;
      $('#convert').text('Convert to Celsius');
      $("#temp").text(tempF);
      $('#far').show();
      $('#cel').hide();
    }
  });
});
