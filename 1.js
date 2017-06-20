 $(function(){
 $(window).scroll(function() {
 	if ($('body').scrollTop()>200){
 		$('.navbar').addClass('mauxanh');
 	}
 	else{
 		$('.navbar').removeClass('mauxanh');
 	}
 	
 });
 new WOW().init();
 $('.so').counterUp({
                delay: 1,
                time: 3000,
            });
})  
 