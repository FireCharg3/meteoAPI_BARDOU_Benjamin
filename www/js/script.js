const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/weather/www/php/weather.php",
    "method": "GET",
    "headers": {}
  };

  $.ajax(settings).done(function (response) {
    response = JSON.parse(response);
  
    console.log(response.data[0]);
  
    var date = new Date();
    var result = date.toLocaleString('Fr-FR', { weekday: 'long', day: 'numeric', month: 'long'});
    $('p.date span').text(result);
  
    $('p.city span').text(response.data[0].city_name);
    $('img.img_temp ').text(response.data[0].code);
    $('p.current_temp span').text(Math.round(response.data[0].temp* 10)/10);
    $('p.wind span').text(Math.round(response.data[0].wind_spd));
    $('p.sunrise span').text(response.data[0].sunrise);
    $('p.sunset span').text(response.data[0].sunset);
    $('p.precip span').text(Math.round(response.data[0].precip));
    console.log(response.data[0].wind_spd);
  });
  

  