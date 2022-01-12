document.addEventListener("DOMContentLoaded", function () {

	$('a[href*="#"]').on("click", function (e) {
		var a = $(this);
		return $("html, body").stop().animate({
			scrollTop: $(a.attr("href")).offset().top - 30
		}, 600), e.preventDefault(), !1
	}), $(window).scroll(function () {
		50 < $(window).scrollTop() ? $("header").addClass("header-scrol") : $("header").removeClass("header-scrol")
	})

});