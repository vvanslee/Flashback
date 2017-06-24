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

// ----------------------------------------
//              RESULTS PAGE
// ----------------------------------------

	// MUSIC ICON
	// var queMusicURL = "GOOGLE IMG API LINK?"

	// $.ajax({
	// 	url: queMusicURL,
	// 	method: "GET"
	// })

	// .done(function(response) {

		// var musicURL = response.something.something;
		var musicURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png"
		var musicDiv = $("<img>");

		musicDiv.attr("src", musicURL);
		musicDiv.attr("alt", "Popular Music")
		musicDiv.attr("id", "musicIcon")

		$("#icons").append(musicDiv);
	// })

	// FASHION ICON
	// var queFashionURL = "GOOGLE IMG API LINK?"

	// $.ajax({
	// 	url: queFashionURL,
	// 	method: "GET"
	// })

	// .done(function(response) {

		// var fashionURL = response.something.something;
		var fashionURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png"
		var fashionDiv = $("<img>");

		fashionDiv.attr("src", fashionURL);
		fashionDiv.attr("alt", "Popular Fashion")
		fashionDiv.attr("id", "fashionIcon")

		$("#icons").append(fashionDiv);
	// })

	// FOOD ICON
	// var queFoodURL = "GOOGLE IMG API LINK?"

	// $.ajax({
	// 	url: queFoodURL,
	// 	method: "GET"
	// })

	// .done(function(response) {

	// 	var foodURL = response.something.something;
		var foodURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png"
		var foodDiv = $("<img>");

		foodDiv.attr("src", foodURL);
		foodDiv.attr("alt", "Popular Music")
		foodDiv.attr("id", "foodIcon")

		$("#icons").append(foodDiv);
	// })

	// open next page
	$("#musicIcon").on("click", function() {
		console.log("music was clicked af");
	});

	$("#fashionIcon").on("click", function() {
		console.log("fashion was clicked af");
	});

	$("#foodIcon").on("click", function() {
		console.log("food was clicked af");
	});

//-----------------------------------------

});