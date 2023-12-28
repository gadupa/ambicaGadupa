
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

        $("#txtA").html(result["data"][0]["stationName"]);
        $("#txtB").html(result["data"][0]["temperature"]);
        $("#txtC").html(result["data"][0]["clouds"]);
        $("#txtD").html(result["data"][0]["humidity"]);

        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Please enter the location")
      }

    });
    
  });