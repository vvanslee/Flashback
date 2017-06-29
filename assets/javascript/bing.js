var birthday;
var bquery = ["fashion","food"];
var bmonth = ["January","February","March","April","May","June","July","August","September","October","Novemeber","December"];
var bday = [31,29,31,30,31,30,31,31,30,31,30,31];
var monthNum = 0;

$(document).ready(function() {
	// Populate months
	for (var i = 0; i < 12; i++) {
		$("#birth-month").append("<option value='" + bmonth[i] + "'>" + bmonth[i] + "</option>");
	}
	// Populate days
	$("#birth-month").change(function() {
		//console.log($("#birth-month").val());

		// Show the birth-day drop down menu after the month has been selected	
		$("#birth-day").show();

		// Get the numerical value of the month
		$("#birth-month option").each(function( index ) {
			//console.log( index + ": " + $( this ).val() );
			if($(this).val() === $("#birth-month").val()) {
				monthNum = index - 1;
			}
		});
		if ($("#birth-month").val() == 0) {
			// Hide the day if month selection is set back to null
			$("#birth-day").hide();
			console.log("I should hide...");
		} else {
			// Reset list so that the days in the list don't keep growing with every append
			$("#birth-day>option").remove();
			$("#birth-day").append('<option value="0"> - Day - </option>');
			// Append the days according to which month was selected
			for (var j = 1; j <= bday[monthNum]; j++) {
				$("#birth-day").append("<option value='" + j + "'>" + j + "</option>");
			}
		}
	});
	// Populate years
	for (var i = 2010; i > 1889; i--) {
		$("#birth-year").append("<option value='" + i + "'>" + i + "</option>");
	}

/*	$("button").click(function() {
		//a delay is needed between ajax calls, use information from here: https://stackoverflow.com/questions/287188/how-to-know-when-all-ajax-calls-are-complete
		//for (var i = 0; i < 2; i++) {
			var params = {
	            // Request parameters
	            "q": $("#birth-year").val() + " " + bquery[0],
	        };
	      	
	      	console.log(bquery[i]);
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
	            	$("#" + bquery[0] + "-results").append('<img src="' + data.value[j].thumbnailUrl + '" alt="Loading Image" height="200" width="200">');
	            }
	        })
	        .fail(function() {
	            alert("error");
	        });
		//}
	});*/

	//console.log ("birthday = " + birthday);

	$("form").submit(function(event){
		event.preventDefault();

		// console.log("birth year is " + $("#birth-year").val());
		// console.log ("birthday = " + birthday);

		birthday = $("#birth-month").val() + " " + $("#birth-day").val() + ", " + $("#birth-year").val();

		if ($("#birth-month").val() == 0 || $("#birth-day").val() == 0 || $("#birth-year").val() == 0) {
			$("#error-modal").show();
			$("#error-modal").html("Please enter a valid birth date.");
			$("#error-modal").fadeOut(3000);

		} else {
			$("form").hide();
			$("#results-page").show();
			$(".birthday-display").html("Your birthday is " + birthday);
			$(".toplogo").show();

			//bingAPI("fashion");
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
		//var musicURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png"
		var musicURL = "assets/images/musicbox.png"
		var musicDiv = $("<img>");

		musicDiv.attr("src", musicURL);
		musicDiv.attr("alt", "Popular Music");
		musicDiv.attr("id", "musicIcon");
		musicDiv.attr("height", "300");
		musicDiv.attr("width", "300");

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
		//var fashionURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
		var fashionURL = "assets/images/fashionman.png"
		var fashionDiv = $("<img>");

		fashionDiv.attr("src", fashionURL);
		fashionDiv.attr("alt", "Popular Fashion");
		fashionDiv.attr("id", "fashionIcon");
		fashionDiv.attr("height", "300");
		fashionDiv.attr("width", "300");

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
		//var foodURL = "http://www.alfano.com/wp-content/uploads/2014/04/opus-portfolio-placeholder-300x300.png";
		var foodURL = "assets/images/feast.png"
		var foodDiv = $("<img>");

		foodDiv.attr("src", foodURL);
		foodDiv.attr("alt", "Popular Food");
		foodDiv.attr("id", "foodIcon");
		foodDiv.attr("height", "300");
		foodDiv.attr("width", "300");

		$("#icons").append(foodDiv);
	// })

	// ----------------------------------------------
	//         ON TO THE NEXT THANG
	// ----------------------------------------------

	var genreArry = [];
	var fashionArry = [];
	var foodArry = [];

	// on click opens music genres page
	// ** BIRTHDAY WONT SHOW UP...lauren and I couldnt figure it out **
	$("#musicIcon").on("click", function() {
		console.log("music was clicked af");
		bingAPI("music");
		$("form").hide();
		$("#results-page").hide();
		$("#genres-page").show();
		//$(".birthday-display").html(birthday);

/*		for (var i = 0; i < 6; i++) {
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
		}*/

		//BUTTON TO RETURN TO RESULTS PAGE?

	});

	// on click opens fashion grid page
	$("#fashionIcon").on("click", function() {
		console.log("fashion was clicked af");
		bingAPI("fashion");
		// FASHION GRID PAGE GOES HERE
		$("form").hide();
		$("#results-page").hide();
		$("#genres-page").show();
		// RETURN TO RESULTS PAGE?

	});


	// on click opens food grid page
	$("#foodIcon").on("click", function() {
		console.log("food was clicked af");
		bingAPI("food");
		// RECIPE GRID PAGE GOES HERE
		$("form").hide();
		$("#results-page").hide();
		$("#genres-page").show();
		// RETURN TO RESULTS PAGE?
	});

//-----------------------------------------

	$("button#goback").on("click", function(){
		$("#genres-page").hide();
		$("#results-page").show();
		$("#genres>img").remove();
	});
});

function bingAPI (category) {
	//a delay is needed between ajax calls, use information from here: https://stackoverflow.com/questions/287188/how-to-know-when-all-ajax-calls-are-complete
	//for (var i = 0; i < 2; i++) {
	var params = {
	    // Request parameters
	    "q": $("#birth-year").val() + " " + category,
	};
		
	//console.log(category);

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
	    	$("#genres").append('<img src="' + data.value[j].thumbnailUrl + '" alt="Loading Image..." height="300" width="300">');
	    }
	})
	.fail(function() {
	    alert("error");
	});
	//}
}