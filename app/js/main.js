$(document).ready(function(){$(document).on("scroll",function(){var o=$(window);$(".fadeMe").each(function(){var e=$(window).scrollTop(),t=$(this).offset().top-o.scrollTop(),i=o.height();t<i&&$(this).css("opacity",t/i),0!==e&&e+i!==$(document).height()||($(".fadeMe").css("opacity",0),$(".fadeMe").css("opacity",t/i),$(".fadeMe").css("opacity",1))})})}),$(".hamburger").on("click",function(o){o.preventDefault(),$(this).toggleClass("clicked"),$("nav").toggleClass("open"),$(".wrapper").toggleClass("wrapperOpen"),$(".wrapper").on("click",function(o){o.preventDefault(),$(".hamburger").trigger("click")})}),$("nav li a").on("click",function(o){o.preventDefault(),$(".hamburger").trigger("click")});var link=$(".arrowLink"),position=$(".twoCol").offset().top;$(link).on("click",function(o){$("HTML, BODY").animate({scrollTop:position},1e3)}),$("nav li a").on("click",function(){$(this.hash);var o=$(this.hash).offset().top;$("HTML, BODY").animate({scrollTop:o},1e3),console.log(this.hash)});