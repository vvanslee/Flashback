var birthday;
var searchYear;
var searchDecade;
var ytID;

$(document).ready(function() {	

 	// animated logo 
	var logo = $(".logo");
    	TweenMax.to(logo, 0.5, { y:"-15", repeat:-1, yoyo:true});

    $(".toplogo").css('cursor', 'pointer');

    // datepicker popup
    $('.datepicker').pickadate({ 
    	today: '',
    	format: 'mmmm dth, yyyy',
    	formatSubmit: 'mmmm/d/yyyy',
        selectMonths: true,
        selectYears: 120,
        min: new Date(1899,12,01),
  		max: new Date(2016,11,31)
    });

	console.log ("birthday = " + birthday);

	$("form").submit(function(event){

		event.preventDefault();

		birthday = $("input[name='birthday']").val(),
		console.log ("birthday = " + birthday); 

		// convert birthday into search terms
		var tempYear = birthday.slice(-4);
		searchYear = tempYear;
		console.log("search year = " + searchYear);
		var tempDecade = searchYear.slice(0,3) + "0's";
		searchDecade = tempDecade;
		console.log("search decade = " + searchDecade);

		if (birthday === "" || birthday === undefined || birthday === null) {
			$("#error-modal").show();
			$("#error-modal").html("Please enter a valid birth date.");
			$("#error-modal").fadeOut(3000);
		} else { 

			$("#homepage").hide();
			$("#results-page").show();
			$(".birthday-display").html(birthday);
			$(".toplogo").show();
		}
	});

// ----------------------------------------
//              RESULTS PAGE
// ----------------------------------------

	// MUSIC ICON

	var musicURL = "assets/images/music.png"
	var musicDiv = $("<img>");

	musicDiv.attr("src", musicURL);
	musicDiv.attr("alt", "Popular Music");
	musicDiv.attr("id", "musicIcon");
	musicDiv.attr("class", "animated pulse");

	$("#icons").append(musicDiv);
	$("#musicIcon").css('cursor', 'pointer');

	// FASHION ICON

	var fashionURL = "assets/images/fashion.png";
	var fashionDiv = $("<img>");

	fashionDiv.attr("src", fashionURL);
	fashionDiv.attr("alt", "Popular Fashion");
	fashionDiv.attr("id", "fashionIcon");
	fashionDiv.attr("class", "animated pulse");

	$("#icons").append(fashionDiv);
	$("#fashionIcon").css('cursor', 'pointer');

	// FOOD ICON

	var foodURL = "assets/images/food.png";
	var foodDiv = $("<img>");

	foodDiv.attr("src", foodURL);
	foodDiv.attr("alt", "Popular Music");
	foodDiv.attr("id", "foodIcon");
	foodDiv.attr("class", "animated pulse");

	$("#icons").append(foodDiv);
	$("#foodIcon").css('cursor', 'pointer');

	// ----------------------------------------------
	//                    NEXT
	// ----------------------------------------------

	// on click opens music video page
	$("#musicIcon").on("click", function() {

		$("#homepage").hide();
		$("#results-page").hide();
		$("#music-page").show();
		$(".birthday-display").html(birthday);

		ytAPI("music");
	});

	// on click opens fashion grid page
	$("#fashionIcon").on("click", function() {

		$("#homepage").hide();
		$("#results-page").hide();
		$("#music-page").hide();
		$("#fashions-page").show();
		$(".birthday-display").html(birthday);

		bingAPI("fashion");
	});

	// on click opens food grid page
	$("#foodIcon").on("click", function() {

		$("#homepage").hide();
		$("#results-page").hide();
		$("#music-page").hide();
		$("#fashions-page").hide();
		$("#foods-page").show();
		$(".birthday-display").html(birthday);

		bingAPI("food");
	});

	//---------------------------------------------
	// LOGO HOME BUTTON
	//---------------------------------------------

	$(".toplogo").on("click", function() {

		$("#music-page").hide();
		$("#fashions-page").hide();
		$("#foods-page").hide();
		$("#results-page").hide();
		$(".toplogo").hide();
		$("div.imageResults>img").remove();
		$("div#musicPlaylist>iframe").remove();
		$("#homepage").show();	
	});

	//---------------------------------------------
	//                BACK BUTTON 
	//---------------------------------------------

	$("button#goback").on("click", function(){

		$("#music-page").hide();
		$("#fashions-page").hide();
		$("#foods-page").hide();
		$("#results-page").show();
		$("div.imageResults>img").remove();
		$("div#musicPlaylist>iframe").remove();
	});

});

//-------------------------------------------
//              BING API Function
//-------------------------------------------

function bingAPI (category) {

	var params = {
	    // Request parameters
	    "q": searchDecade + " " + category,
	};
	
	$.ajax({
	    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
	    beforeSend: function(xhrObj){
	        // Request headers
	        xhrObj.setRequestHeader("Content-Type","multipart/form-data");
	        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","6fa4daa0986746ff9d29dc25701da10d");
	    },
	    type: "POST",
	    data: "{body}",
	})
	.done(function(data) {
	    for (var j = 0; j < 12; j++) {
	    	$(".imageResults").append('<img src="' + data.value[j].contentUrl + '" id="bingimg" alt="Loading Image...">');
	    }
	})
	.fail(function() {
	    console.log("error with bingAPI");
	});
}

//-----------------------------
//     YOUTUBE API Function
//-----------------------------

function ytAPI (category) {
	$.ajax({
		 cache: false,
		 data: $.extend({
			 key: 'AIzaSyAp2WLyZ5DBiCHyyPJyg6dgHg6BTQgYf6M',
			 q: "top songs of " + searchYear,
			 part: 'snippet',
			 fields: 'items/id/videoId'
		 }, {maxResults:5/*,pageToken:1*/}),
		 dataType: 'json',
		 type: 'GET',
		 timeout: 5000,
		 url: 'https://www.googleapis.com/youtube/v3/search'
	})
	.done(function(data) {
		console.log(data);
		console.log("the yt id: " + data.items[0].id.videoId);
		ytID = data.items[0].id.videoId;
		console.log("is the YT ID an object?");
		console.log(ytID);
		console.log("THE YOUTUBE ID IS ++++ " + ytID);
		if (category == "music") {

			var musicName = "musicID";
			var musicDiv = $("<iframe width='800' height='450' src='https://www.youtube.com/embed/" + ytID + "' frameborder='0' allowfullscreen></iframe>");

			musicDiv.attr("alt", "Loading Music Video...");
			musicDiv.attr("id", musicName);

			$("#musicPlaylist").append(musicDiv);

		} else {
			console.log("there is an error in the category selection of ytAPI");
		}
	})
	.fail(function() {
	    console.log("error with ytAPI");
	})
}