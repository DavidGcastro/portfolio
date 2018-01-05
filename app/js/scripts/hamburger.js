$('.hamburger').on('click', function (e) {


    $(this).toggleClass("clicked");
    $('nav').toggleClass("open");
    $(".wrapper").toggleClass("wrapperOpen");
    //change to wrapper for push over nav
        e.preventDefault();


})


$("nav li a").on("click", function () {
    $(".hamburger").trigger("click");

});
