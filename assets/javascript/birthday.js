var birthday;

$(document).ready(function() {	

 	// animated logo 
	var logo = $(".logo");


    TweenMax.to(logo, 0.5, { y:"-15", repeat:-1, yoyo:true});

    // datepicker popup
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 126, // Creates a dropdown of 15 years to control year
        min: new Date(1889,12,01),
  		max: new Date(2015,11,31)
    });


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

	var musicArry = [];
	var fashionArry = [];
	var foodArry = [];

	// on click opens music genres page
	$("#musicIcon").on("click", function() {

		$("form").hide();
		$("#results-page").hide();
		$("#music-page").show();
		$(".birthday-display").html(birthday);

		// var musicName = "SOMETHING DYNAMIC FROM API?"
		var musicName = "musicID";
		// var musicURL = response.something.something;

		var playlistDiv = $("<div>DYNAMICALLY GENERATED PLAYLIST</div>");

		playlistDiv.attr("id", "musicPlaylist");

		var musicDiv = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/XQu8TTBmGhA' frameborder='0' allowfullscreen></iframe>");

		// musicDiv.attr("src", musicURL);
		musicDiv.attr("alt", "Music Video");
		musicDiv.attr("id", musicName);

		$("#musicPlaylist").append(playlistDiv);
		$("#musicPlaylist").append(musicDiv);

		// add genreName to genreArry
		musicArry.push(musicName);

		//BUTTON TO RETURN TO RESULTS PAGE?

	});

	// on click opens fashion grid page
	$("#fashionIcon").on("click", function() {
		console.log("fashion was clicked");

		$("form").hide();
		$("#results-page").hide();
		$("#music-page").hide();
		$("#fashions-page").show();
		$(".birthday-display").html(birthday);


		// var fashionName = "SOMETHING DYNAMIC FROM API?"
		var fashionName = "fashionID";
		// var genreURL = response.something.something;
		var fashionDiv = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/XQu8TTBmGhA' frameborder='0' allowfullscreen></iframe>");

		// fashionDiv.attr("src", fashionURL);
		fashionDiv.attr("alt", "Fashion Video");
		fashionDiv.attr("id", fashionName);

		$("#fashionTrends").append(fashionDiv);

		// add genreName to genreArry
		fashionArry.push(fashionName);

		//BUTTON TO RETURN TO RESULTS PAGE?

	});


	// on click opens food grid page
	$("#foodIcon").on("click", function() {
		console.log("food was clicked");

		$("form").hide();
		$("#results-page").hide();
		$("#music-page").hide();
		$("#fashions-page").hide();
		$("#foods-page").show();
		$(".birthday-display").html(birthday);

		// var fashionName = "SOMETHING DYNAMIC FROM API?"
		var foodName = "foodID";

		// var genreURL = response.something.something;
		var foodVid1 = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/XQu8TTBmGhA' frameborder='0' allowfullscreen></iframe>");
		// fashionDiv.attr("src", fashionURL);
		foodVid1.attr("alt", "Food Video");
		foodVid1.attr("id", foodName);

		var foodVid2 = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/XQu8TTBmGhA' frameborder='0' allowfullscreen></iframe>");
		// fashionDiv.attr("src", fashionURL);
		foodVid2.attr("alt", "Food Video");
		foodVid2.attr("id", foodName);


		$("#popularFoods").append(foodVid1);
		$("#popularFoods").append(foodVid2);

		for (var i = 0; i < 6; i++) {

			var foodImgUrl = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png"
			var foodDiv = $("<img>");

			foodDiv.attr("src", foodImgUrl);
			foodDiv.attr("alt", "Food");
			foodDiv.attr("id", "foodImage");

			$("#popularFoods").append(foodDiv);
			
		}

		// add genreName to genreArry
		foodArry.push(foodName);

		//BUTTON TO RETURN TO RESULTS PAGE?
	});

//-----------------------------------------

});