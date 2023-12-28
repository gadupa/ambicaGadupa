
//------------Timezone API call function...----------------

$('#buttonrun1').click(function() {

    $.ajax({
      url: "php/getTimeZone.php",
      type: "POST",
      dataType: "json",
      data: {
        longitude: $("#lng").val(),
        latitude: $("#lat").val(),
      },
      success: function(result) {
        console.log(JSON.stringify(result));
  
        if (result.status.name == "ok") {
  
          $("#txtSunrise").html(result["data"][0]["sunrise"]);
          $("#txtSunset").html(result["data"][0]["sunset"]);
          $("#txtCountry").html(result["data"][0]["countryName"]);
          $("#txtTimeZone").html(result["data"][0]["timezoneId"]);
          $("#txtTimeNow").html(result["data"][0]["time"]);
  
        }
      
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Please enter the longitude and latitude values")
      }
    }); 

  });



  
  



    