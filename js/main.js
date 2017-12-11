	$(document).ready(function(){
		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none',
			
		});	
	
	$('#log a').click(function(){

		$('.doc').css('display','none');
		$('.'+this.id).css('display','block');
		$('#log a').removeClass('active');
		$(this).addClass('active');
		$('.navbar-nav li ').removeClass('active');
		$('.navbar-nav #'+this.id).addClass('active');

	});
	$('.navbar-nav li').click(function(){

		$('.doc').css('display','none');
		$('.'+this.id).css('display','block');
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav #'+this.id).addClass('active');
		$('#log a').removeClass('active');
		$('#log a#'+this.id).addClass('active');

	});
	});
	