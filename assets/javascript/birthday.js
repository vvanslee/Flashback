var birthday;

$(document).ready(function() {	

	console.log ("birthday = " + birthday);

	$("form").submit(function(event){
		event.preventDefault();

		birthday = $("input[name='birthday']").val(),
		console.log ("birthday = " + birthday); 

		if (birthday === "" || birthday === undefined || birthday === null) {
			alert("Please enter a valid birth date.");
		} else {
			$("form").hide();
			$("#results-page").show();
			$("#birthday-display").html(birthday);
		}

	});

});