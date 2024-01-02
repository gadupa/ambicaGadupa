
//---------------------Ocean API call function... -----------------
   
$('#buttonrun3').click(function() {
    
    $.ajax({
        url: "php/nearestOcean.php",
        type: "POST",
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