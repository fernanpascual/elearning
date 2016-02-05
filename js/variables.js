//PAGE Variables
var totalChapters = 8,//change to total chapters
	pagesPerChapter = [9,5,2,10,4,4,16,6], //change to number of pages per chapters separated in commas
	chapterTitles = ["The Introduction to Selling Techniques","Demonstration of a Product","Buyer and Seller","Golden Rule in selling Concept","The Buying Decision Process","The Selling Process Stages","The Steps to Selling","The Brochure or Flyers"],
	pageOfQuiz = [8,5,0,9,4,4,15,5],//number of the page where the quiz start.
	pagesContentHolder = [],
	soundContentHolder = [],
	currentChapterPage =[],
	totalPages = 0,
	currentChapter = 1,
	navigationCurrentPage = [],
	content = "",
	arrowClicked = true,
	audioloaded = false,
	muted = true,
	isPlaying,
	changeChapter = false,
	pageEnd = false,
	isQuiz = false,
	aud = new Audio();

//Element Variables
var next_btn = document.getElementById("next"),
	previous_btn = document.getElementById("previous"),
	play_btn = document.getElementById("play"),
	pause_btn = document.getElementById("pause"),
	mute_btn = document.getElementById("sound-mute"),
	unmute_btn = document.getElementById("sound-unmute"),
	navigation2 = document.getElementById("navi-list2"),
	Iframe = document.getElementById('iframe'),
	progressPage = document.getElementById('progress-page'),
	pageTitle = document.getElementById('progress-title'),
	pointer = document.getElementById('pointer'),
	closeX = document.getElementById('closeX');


//LOADER FOR JS
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var jsLoaded = function() {
	console.log("JS LOADED");
};

loadScript("js/createArray.js", jsLoaded);

