
//------------Timezone API call function...----------------

$('#buttonrun1').click(function() {

    $.ajax({
      url: "php/getTimeZone.php",
      type: "GET",
      dataType: "json",
      data: {
        latitude: $("#lat").val(),
        longitude: $("#lng").val(),
      },
      success: function(result) {
        console.log(JSON.stringify(result));
  
        if (result.status.name == "ok") {

          $("#txtSunrise").html("Sunrise: " + result["data"]["sunrise"]);
          $("#txtSunset").html("Sunset: " + result["data"]["sunset"]);
          $("#txtTimeZone").html("Timezone: " + result["data"]["timezoneId"]);
          $("#txtCountry").html("Country: " + result["data"]["countryName"]);
          $("#txtTimeNow").html("Time Now: " + result["data"]["time"]);

        }
      
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Please enter the longitude and latitude values")
      }
    }); 

  });



//--------------------------Weather API call function... ------------------ 
  
$('#buttonrun2').click(function() {
      
    $.ajax({
      url: "php/weather.php",
      type: "GET",
      dataType: "json",
      data: {
        north: $("#north").val(),
        south: $("#south").val(),
        east: $("#east").val(),
        west: $("#west").val(),
      },
      success: function(result) {
        console.log(JSON.stringify(result));
        if (result.status.name == "ok") {

        $("#txtStationName").html("StationName: " + result["data"][0]["stationName"]);
        $("#txtTemperature").html("Temperature: " + result["data"][0]["temperature"]);
        $("#txtClouds").html("Clouds: " + result["data"][0]["clouds"]);
        $("#txtHumidity").html("Humidity: " + result["data"][0]["humidity"]);

        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Please enter the location")
      }

    });
    
  });

  
//---------------------Ocean API call function... -----------------
   
$('#buttonrun3').click(function() {
    
    $.ajax({
        url: "php/nearestOcean.php",
        type: "GET",
        dataType: "json",
        data: {
            lat: $("#oceanlat").val(),
            lng: $("#oceanlng").val(),
        },
        success: function(result) {
          
            console.log(JSON.stringify(result));
             if (result.status.name == "ok") {

                $("#txtDistance").html("Distance: " + result["data"]["distance"]);
                $("#txtGeonameId").html("Ocean Id: " + result["data"]["geonameId"]);
                $("#txtName").html("Ocean Name: " + result["data"]["name"]);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Please enter a valid latitude or longitude that is over water.")
           
           }
      }); 
});
  
  



    