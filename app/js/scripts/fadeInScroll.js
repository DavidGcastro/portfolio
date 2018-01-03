$(document).ready(function () {
    var elementToFade = $(".header1")


    $(document).on('scroll', function () {
        var $w = $(window);

        // Basically, we go through each element and check its relative position within the viewport
        $('.fadeMe').each(function () {

            //            var scrollTop = $(window).scrollTop(),
            //                elementOffset = $(".fadeMe").offset().top,
            //                distance = (elementOffset - scrollTop);
            var pos = $(this).offset().top - $w.scrollTop();
            // Get viewport height
            var vh = $w.height();

            if (pos < vh) {
                // If element has past the starting threshold, we fade it
                $(this).css('opacity', pos / (vh));
            } else {
                $(this).css('opacity', 1);
            }


        });




    })


});
