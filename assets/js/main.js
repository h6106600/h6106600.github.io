var project = '';
for(var i=1;i<=14;i++){
	project += '<div class="col-md-2 col-sm-4 col-xs-12">';
	project += '<div class="thumbnail">';
	project += '<img src="./assets/img/work/'+i+'.jpg" alt="" width="200" height="150">';
	project += '<br>';
	project += '<p class="text-center"><strong>project'+i+'</strong></p>';
	project += '</div>';
	project += '</div>';
}
$("#slideanim").append(project);

$(window).scroll( function(){
	$("#slideanim").css({"opacity":0,"position":"relative","left":"100px"});
	$('#slideanim').each( function(i){
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
		if( bottom_of_window > bottom_of_object ){
			$(this).animate({'opacity':'1','left':'0'},3000);
		}
	});
});