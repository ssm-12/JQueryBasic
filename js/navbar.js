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

	$("a").click(function(e){
		e.preventDefault();
	});

	$('#dropDownLink').click(function() {
	    $('#dropDownContainer').css({
	        left: $(this).offset().left + 'px',
	        top: ($(this).offset().top + $(this).height()) + 20 + 'px'
	    }).toggle(100);
	});

	$(document).click(function(e){
		if(!$(e.target).is("#dropDownLink"))
		{
			$("#dropDownContainer").hide(100);
		}
	});

});