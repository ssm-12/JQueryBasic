$(document).ready(function(){
	$(".panelBody").hide();

	$("#head1").click(function(){
		if($(this).next().is(":visible"))
		{
			$(this).next().hide(500);
		}
		else
		{
			$(".panelBody").hide(500);
			$(this).next().show(500);
		}
	});

	$("#head2").click(function(){
		if($(this).next().is(":visible"))
		{
			$(this).next().hide(500);
		}
		else
		{
			$(".panelBody").hide(500);
			$(this).next().show(500);
		}
	});

	$("#head3").click(function(){
		if($(this).next().is(":visible"))
		{
			$(this).next().hide(500);
		}
		else
		{
			$(".panelBody").hide(500);
			$(this).next().show(500);
		}
	});

});