$(".m-sub-menu .list-wrap li").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");

	} else {
		$(this).parent().find("li").removeClass("active");
		$(this).addClass("active");
	}

})


$(".m-btn").on('click', function () {
	$(".m-sub-menu").addClass("show");
})

$(".close").on('click', function () {
	$(".m-sub-menu").removeClass("show");
})

$("poster img").click(function () {
	video.play();
})

//动画注入
var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);