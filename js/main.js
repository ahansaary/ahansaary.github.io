(function() {
	$('.image')
	//.hide()
	.on('click', function() {
		$(this).addClass('tada');
		setTimeout(function() { $('.image').removeClass('tada'); }, 1000);
	});
	$('.name')
	//.hide()
	.on('click', function() {
		$(this).addClass('flip');
		setTimeout(function() { $('.name').removeClass('flip'); }, 1000);
	});
	$('th')
	//.hide()
	.on('mouseover', function() {
		$(this).addClass('animated wobble');
		setTimeout(function() { $('th').removeClass('animated wobble'); }, 1000);
	});
	i=0;
	interval = setInterval(function() {
		if(i==0) {
			$('.image')
			.show()
			.addClass('animated flipInX');
			setTimeout(function() {
				$('.image')
				.removeClass('flipInX')
				.addClass('rubberBand');
				setTimeout(function() { $('.image').removeClass('rubberBand'); }, 1000);
			}, 3000);
			i = i+1;
		} else if(i==1) {
			$('.name')
			.show()
			.addClass('animated flipInY');
			setTimeout(function() { $('.name').removeClass('flipInY'); }, 1000);
			i = i+1;
		} else if(i==2) {
			$('.card')
			.show()
			.addClass('animated flipInY');
			setTimeout(function() { $('.card').removeClass('flipInY'); }, 1000);
			i = i+1;
		} else if(i==3) {
			$('.skills')
			.show()
			.addClass('animated flipInY');
			setTimeout(function() { $('.skills').removeClass('flipInY'); }, 1000);
			i = i+1;
			scroll = setInterval(function() {
				if($(window).scrollTop() == $(document).height() - $(window).height()) {
					clearInterval(scroll);
					$("html, body").animate({scrollTop : 0},800);
				} else {
					$(window).scrollTop($(window).scrollTop() + 1);
				}
			}, 10);
		} else if(i==4) {
			$('.activities')
			.show()
			.addClass('animated flipInY');
			setTimeout(function() { $('.activities').removeClass('flipInY'); }, 1000);
			i = i+1;
		} else {
			clearInterval(interval);
		}
	}, 1000);
	
	$("*").bind("contextmenu",function(){ return false; });
	$("*").on('dragstart', function(event) { event.preventDefault(); });
}());