


//sample url from open weather-https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22


// API= d362ec41e6fff7208f6a3f55f7cb3c57


//https://api.openweathermap.org/data/2.5/weather?zip=53590,us&appid=d362ec41e6fff7208f6a3f55f7cb3c57


$("#search_btn").click(function(){
    
    //variables for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'd362ec41e6fff7208f6a3f55f7cb3c57';
    var apiUnits = '&units=imperial';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + apiUnits;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
       console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var condition = responseFromOW.weather[0].description;
        
    $('#city').html(responseFromOW.name);
    $('#temp').html(responseFromOW.main.temp);
        
        if (responseFromOW.weather[0].main === 'Clouds') {
            $('<img>').attr('src', '/img/cloudy.png').appendTo($('#weather_icon'));
//            $('#weather_icon').attr('src', '/img/cloudy.png');
        }  else if (responseFromOW.weather[0].main === 'Sunny') {
             $('#weather_icon').html("background-image", "url(/img/sunny.jpeg)");
        }
    
    $('#description').html(responseFromOW.weather[0].description);
    $('#weather_icon').css("background-image", "url(/img/cloudy.png)");
        
    });
    
    
    
    
});
