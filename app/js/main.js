$(document).ready(function(){$(document).on("scroll",function(){var o=$(window);$(".fadeMe").each(function(){var i=$(window).scrollTop(),t=$(this).offset().top-o.scrollTop(),n=o.height();t<n&&$(this).css("opacity",t/n),0!==i&&i+n!==$(document).height()||($(".fadeMe").css("opacity",0),$(".fadeMe").css("opacity",t/n),$(".fadeMe").css("opacity",1))})})}),$(".hamburger").on("click",function(o){$(this).toggleClass("clicked"),$("nav").toggleClass("open"),$(".wrapper").toggleClass("wrapperOpen"),o.preventDefault()}),$("nav li a").on("click",function(){$(".hamburger").trigger("click")});var link=$(".arrowLink"),position=$(".twoCol").offset().top;$(link).on("click",function(o){$("HTML, BODY").animate({scrollTop:position},1e3)}),$("nav li a").on("click",function(){$(this.hash);var o=$(this.hash).offset().top;$("HTML, BODY").animate({scrollTop:o},1e3),console.log(this.hash)});