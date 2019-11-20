$(function() {

    $(".create-form").on("submit", function(event){




        event.preventDefault();

        let newBurger = $("#burg").val().trim();


        $
        .post("/api/burgers", newBurger)
        .then(function(response){


            console.log(response)
        })

    })




























})