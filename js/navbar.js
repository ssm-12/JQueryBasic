$(document).ready(function(){
	
	$("#expandMenu").click(function(){
		if($("#navbar").attr("class") === "topNav")
		{
			$("#navbar").addClass("responsive");
		}
		else
		{
			$("#navbar").attr("class","topNav")	;
		}
	});

});