
//------------Timezone API call function...----------------

$('#buttonrun1').click(function() {

    $.ajax({
      url: "php/getTimeZone.php",
      type: "POST",
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



  
  



    