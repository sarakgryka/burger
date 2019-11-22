$(function () {

    $(".create-form").on("submit", function (event) {


        // event.preventDefault();

        let newBurger = $("#burg").val().trim();
        let newBurgerObj = { burger_name: newBurger };

        // console.log(newBurger)
        $
            .post("/api/burgers", newBurgerObj)
            .then(function (response) {

                location.reload();

            })
           

    })

    $(".devour").on("click", function () {
        let id = $(this).attr("data-id")

        // console.log(id);
        $.ajax(`/api/burgers/${id}`, {

            type: "PUT",
            success: function (data, status) {

                console.log("this is data" + data)
               

            }
         
            
        })

        location.reload();
        
    })















})