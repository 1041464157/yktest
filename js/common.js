function SelfAdaption() {
	var htmlwidth = $("html").width();
	if(htmlwidth >= 640) {
		$("html").css({
			"font-size" : "40px"
		});
		$(".page,.footer").css({
			"width": "640px"
		})
	} else {
		if(htmlwidth <= 320) {
			$("html").css({
				"font-size" : "20px"
			});
			$(".page,.footer").css({
				"width": "320px"
			})
		} else {
			$("html").css({
				"font-size" : htmlwidth * 40 / 640 + "px"
			});
			$(".page,.footer").css({
				"width": htmlwidth
			})
		}
	} 	
}SelfAdaption();
$(window).resize(function(){
	SelfAdaption()
});
var winHeight = $(window).height();
$(".page").height(winHeight);