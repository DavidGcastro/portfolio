var link = $('.arrowLink');
var position = $('.twoCol').offset().top;

$(link).on('click', function (event) {
    
    $("HTML, BODY").animate({
        scrollTop: position 
    }, 1000);

})

