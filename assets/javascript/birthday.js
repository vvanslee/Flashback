var birthday;

$(document).ready(function() {	

 	// animated logo 
	var logo = $(".logo");


    TweenMax.to(logo, 0.5, { y:"-15", repeat:-1, yoyo:true});

    // datepicker popup
    $('.datepicker').pickadate({ 
    	today: '',
    	format: 'mmmm d yyyy',
    	formatSubmit: 'mmmm/d/yyyy',
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

		// convert birthday into search term
        var tempDate = birthday.slice(-4);
        console.log("tempDate = " + tempDate);
        searchTerm = tempDate.slice(0, 3) + "0's";
        console.log("search year = " + searchTerm);

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
		bingAPI("music");
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

		$(".fotorama").append(fashionDiv);

		// add genreName to genreArry
		fashionArry.push(fashionName);

		//BUTTON TO RETURN TO RESULTS PAGE?
		bingAPI("fashion");
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

			$(".fotorama").append(foodDiv);
			
		}

		// add genreName to genreArry
		foodArry.push(foodName);

		//BUTTON TO RETURN TO RESULTS PAGE?
		bingAPI("food");
	});

//-----------------------------------------
	$("button.goback").on("click", function(){
		$("#music-page").hide();
		$("#fashions-page").hide();
		$("#foods-page").hide();
		$("#results-page").show();
		$("div.genres>img").remove();
	});

});

function bingAPI (category) {
	//a delay is needed between ajax calls, use information from here: https://stackoverflow.com/questions/287188/how-to-know-when-all-ajax-calls-are-complete
	//for (var i = 0; i < 2; i++) {
	var params = {
	    // Request parameters
	    "q": searchTerm + " " + category,
	};
	
	//console.log(category);
	console.log(params.q);

	$.ajax({
	    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
	    beforeSend: function(xhrObj){
	        // Request headers
	        xhrObj.setRequestHeader("Content-Type","multipart/form-data");
	        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","6fa4daa0986746ff9d29dc25701da10d");
	    },
	    type: "POST",
	    // Request bodyconsole.log(data);
	    data: "{body}",
	})
	.done(function(data) {
	    //console.log(data);
	    //console.log(data.value[0].thumbnailUrl);
	    for (var j = 0; j < 6; j++) {
	    	//$("#" + category + "Genres").append('<img src="' + data.value[j].thumbnailUrl + '" alt="Loading Image..." height="300" width="300">');
	    	$("div.genres").append('<img src="' + data.value[j].thumbnailUrl + '" alt="Loading Image..." height="300" width="300">');
	    }
	})
	.fail(function() {
	    alert("error");
	});
	//}
}