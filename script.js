//Lettering.js
$(".polaroid-lenstext").lettering();
$('.polaroid-lenstext2').lettering();

//Shot... things

$('#shot').click(function(){
	$('#shot').removeClass('returncamera');
	$('#shot').addClass('animationsh');
	$('#shot').addClass('afterclickshotposition');
	$('#shot').removeClass('beforepullout');
	$('#shot').removeClass('startingposition');
	$('#shot').addClass('afterpullout');

	$('.areashot').delay(1000).queue(function() {
		$('a.backbutton').removeClass('invisible');
		$(".areashot").removeClass('bot_1').dequeue();
	});
});

$('.backbutton').click(function(){
	$('.areashot').delay(1000).queue(function() {
		$('a.backbutton').addClass('invisible');
		$(".areashot").addClass('bot_1').dequeue();
	});
	$('#shot').addClass('returncamera');
	$('#shot').removeClass('animationsh');
	$('#shot').removeClass('afterclickshotposition');
	$('#shot').addClass('beforepullout');
	$('#shot').addClass('startingposition');
	$('#shot').removeClass('afterpullout');
});