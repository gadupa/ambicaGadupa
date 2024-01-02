
//--------------------------Weather API call function... ------------------ 
  
$('#buttonrun2').click(function() {
      
    $.ajax({
      url: "php/weather.php",
      type: "POST",
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