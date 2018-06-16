$(document).ready(function(){
	
	$("#btnTrigger").click(function(){
		$(this).css("display","none");
		$("#divBgImage").css("display","");
		$("#modal").show(600);
	});

	$("#btnCancel, #iconClose").click(function(){
		$("#divBgImage").css("display","none");
		$("#modal").hide(600);
		$("#btnTrigger").css("display","");
	});

	$("body").click(function(e){
		if(!$(e.target).is("#btnTrigger"))
		{
			if (!$(e.target).closest("#modal").length){
		        $("#divBgImage").css("display","none");
				$("#modal").hide(600);
				$("#btnTrigger").css("display","");
	    	}
		}
	});

});