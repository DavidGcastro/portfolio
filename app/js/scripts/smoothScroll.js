var link = $('.arrowLink');
var position = $('.twoCol').offset().top;

$(link).on('click', function (event) {

    $("HTML, BODY").animate({
        scrollTop: position
    }, 1000);

})



$("nav li a").on("click", function () {
    var link = $(this.hash);
    var position = $(this.hash).offset().top;
    $("HTML, BODY").animate({
        scrollTop: position
    }, 1000);

    console.log(this.hash);


})
