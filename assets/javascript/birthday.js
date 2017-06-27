var birthday;

$(document).ready(function() {	

	console.log ("birthday = " + birthday);

	$("form").submit(function(event){
		event.preventDefault();

		birthday = $("input[name='birthday']").val(),
		console.log ("birthday = " + birthday); 

		if (birthday === "" || birthday === undefined || birthday === null) {
			$("#error-modal").show();
			$("#error-modal").html("Please enter a valid birth date.");
			$("#error-modal").fadeOut(3000);

		} else {
			$("form").hide();
			$("#results-page").show();
			$(".birthday-display").html(birthday);
			$(".toplogo").show();
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
		musicDiv.attr("alt", "Popular Music");
		musicDiv.attr("id", "musicIcon");

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
		var fashionURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
		var fashionDiv = $("<img>");

		fashionDiv.attr("src", fashionURL);
		fashionDiv.attr("alt", "Popular Fashion");
		fashionDiv.attr("id", "fashionIcon");

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
		var foodURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
		var foodDiv = $("<img>");

		foodDiv.attr("src", foodURL);
		foodDiv.attr("alt", "Popular Music");
		foodDiv.attr("id", "foodIcon");

		$("#icons").append(foodDiv);
	// })

	// ----------------------------------------------
	//                    NEXT
	// ----------------------------------------------

	var genreArry = [];
	var fashionArry = [];
	var foodArry = [];

	// on click opens music genres page
	$("#musicIcon").on("click", function() {

		$("form").hide();
		$("#results-page").hide();
		$("#genres-page").show();
		$(".birthday-display").html(birthday);

		for (var i = 0; i < 6; i++) {

			// var genreName = "SOMETHING DYNAMIC FROM API?"
			var genreName = "genreID";
			// var genreURL = response.something.something;
			var genreURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
			var genreDiv = $("<img>");

			genreDiv.attr("src", genreURL);
			genreDiv.attr("alt", "Genre");
			genreDiv.attr("id", genreName);

			$("#musicGenres").append(genreDiv);

			// add genreName to genreArry
			genreArry.push(genreName);
		}

		//BUTTON TO RETURN TO RESULTS PAGE?

	});

	// on click opens fashion grid page
	$("#fashionIcon").on("click", function() {
		console.log("fashion was clicked af");

		$("form").hide();
		$("#results-page").hide();
		$("#genres-page").hide();
		$("#fashions-page").show();
		$(".birthday-display").html(birthday);

		for (var i = 0; i < 6; i++) {

			// var fashionName = "SOMETHING DYNAMIC FROM API?"
			var fashionName = "fashionID";
			// var genreURL = response.something.something;
			var fashionURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
			var fashionDiv = $("<img>");

			fashionDiv.attr("src", fashionURL);
			fashionDiv.attr("alt", "Fashion");
			fashionDiv.attr("id", fashionName);

			$("#fashionTrends").append(fashionDiv);

			// add genreName to genreArry
			fashionArry.push(fashionName);
		}

		//BUTTON TO RETURN TO RESULTS PAGE?

		// FASHION GRID PAGE GOES HERE
		// RETURN TO RESULTS PAGE?

	});


	// on click opens food grid page
	$("#foodIcon").on("click", function() {
		console.log("food was clicked af");

		// RECIPE GRID PAGE GOES HERE
		// RETURN TO RESULTS PAGE?
	});

//-----------------------------------------

});