
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

                $("#txtDistance").html(result["data"][0]["distance"]);
                $("#txtGeonameID").html(result["data"][0]["geonameId"]);
                $("#txtName").html(result["data"][0]["name"]);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Please enter a lat or long that is over water.")
           
           }
      }); 
});