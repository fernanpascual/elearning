if(totalChapters>8){
	document.querySelector('section aside.chapters').style.width = "19%";
	document.querySelector('nav').style.overflow = "auto";
}
document.querySelector('nav').innerHTML = content;
document.querySelector('nav a:nth-child(1) span').classList.add("selected");
document.querySelector('nav a:nth-child(1)').classList.add("selected");

// for (var i = 1; i <= totalChapters; i++) { 
// 	document.querySelector("nav a:nth-child("+ i +") span").style.pointerEvents = "none";
// }

pageTitle.innerHTML = chapterTitles[0];
progressPage.innerHTML = 1 + "/" + pagesPerChapter[0];
aud.src = 'audio/audio1.mp3';
playSound();

