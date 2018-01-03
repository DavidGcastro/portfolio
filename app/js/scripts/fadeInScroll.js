$(document).ready(function () {

    $(document).on('scroll', function () {
        var $w = $(window);

        // Basically, we go through each element and check its relative position within the viewport
        $('.fadeMe').each(function () {

            //var position = $('.twoCol').offset().top;

            var scrollTop = $(window).scrollTop();
            var pos = $(this).offset().top - $w.scrollTop();
            // Get viewport height
            var vh = $w.height();
//            console.log(vh)
//            console.log(pos)
            if (pos < vh) {
                // If element has past the starting threshold, we fade it

      
                $(this).css('opacity', pos / vh);

            }

            if (scrollTop === 0 || scrollTop + vh === $(document).height()) {
                $(".fadeMe").css("opacity", 0);
                $(".fadeMe").css("opacity", pos / vh);
                $(".fadeMe").css("opacity", 1);
            }

        });




    })


});
