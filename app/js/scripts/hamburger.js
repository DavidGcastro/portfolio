$('.hamburger').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass("clicked");
    $('nav').toggleClass("open");
    $(".wrapper").toggleClass("wrapperOpen");
    //change to wrapper for push over nav

    $(".wrapper").on("click", function (e) {
        e.preventDefault();
        $(".hamburger").trigger("click");

    });



})


$("nav li a").on("click", function (e) {
    e.preventDefault();
    $(".hamburger").trigger("click");

});
