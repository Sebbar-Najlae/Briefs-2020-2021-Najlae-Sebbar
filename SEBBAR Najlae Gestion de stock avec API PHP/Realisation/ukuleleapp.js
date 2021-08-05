$(document).ready(function () {
    var ukulelesList;
    function getall() {
        $(".ukulelesList").html("");
        $.ajax({
            url: "./api/getUkuleles.php",
            method: "GET",
            success: function (data) {
                ukulelesList = JSON.parse(data);
                for (var i = 0; i < ukulelesList.length; i++) {
                    $(".ukulelesList").append(`<tr> 
                    <td>${ukulelesList[i]["image"]}</td>
                   <td>${ukulelesList[i]["name"]}</td>
                   <td>${ukulelesList[i]["brand"]}</td>
                   <td>${ukulelesList[i]["size"]}</td>
                   <td>${ukulelesList[i]["availability"]}</td>
                   <td>${ukulelesList[i]["price"]} (dh) </td>
                   <td><button type="button" class="btn btn-success update-btn" data-toggle="modal" data-target="#exampleModalCenter2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
    </svg>
                 </button></td>
                   <td><button type="button" class="btn btn-danger">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
    </svg>
                 </button></td>
                 <input type="hidden" class="idtd"></input>
                   
                   </tr>`)
                }
            }
        })
    }
    getall();});

      // Add to database
      $(".submit").click(function () {
          var image = $(".image").val();
        var name = $(".name").val();
        var brand = $(".brand").val();
        var size = $(".size").val();
        var availability = $(".availability").val();
        var price = $(".price").val();

        $.ajax({
            url: "api/addUkuleles.php",
            method: "POST",
            data: {
                name: name,
                brand: brand,
                size: size,
                availability: availability,
                price : price,
                image : image,
            },
            success: function (data) {
                getall();
            }
        })
    })

    $(".submit").click(function () {
        $("#exampleModalCenter").modal('hide');
    });


    // Delete 
    $("body").on("click", ".btn-danger", function () {
        var index = $(this).parents("tr").index();
        $(".ukulelesList .idtd").val(ukulelesList[index]["id"]);
        console.log(ukulelesList)
        var ukulelesId = $(".ukulelesList .idtd").val();
        console.log(ukulelesId)

        $.ajax({
            url: "api/deleteUkuleles.php",
            method: "POST",
            data: {
                id: ukulelesId
            },
            success: function (data) {
                $(this).parent().remove();
                getall();
            }
        })
    })
    $(".save-former").click(function () {
        $("#exampleModalCenter2").modal('hide');
    });
    $(".submit").click(function () {
        $("#exampleModalCenter").modal('hide');
    });

})
//edit-btn-on-click
$("body").on("click",".ukulelesList .update-btn",function() {
    
    console.log('show baby')
      $(".edit-form").show();
      var index = $(this).parents("tr").index();
      $(".edit-form .name").val(ukulelesList[index]["name"]);
      $(".edit-form .brand").val(ukulelesList[index]["brand"]);
      $(".edit-form .size").val(ukulelesList[index]["size"]);
      $(".edit-form .availability").val(ukulelesList[index]["availability"]);
      $(".edit-form .price").val(ukulelesList[index]["price"]);
      $(".edit-form .sid").val(ukulelesList[index]["id"]);
    });
