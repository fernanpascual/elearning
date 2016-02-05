"use strict";
(function(){
	var currentProgress;
	var pageShowed = false;

	var Preload = function(path) {
		this.path = path;
		this.queue = new createjs.LoadQueue(true);
		this.queue.on('complete', this.onComplete);
		this.queue.on('error', this.onError);
		this.queue.on('fileload', this.onFileLoad);
		this.queue.on('fileprogress', this.onFileProgress);
		this.queue.on('progress', this.onProgress);
	}

	Preload.prototype.setPreload = function(){
		this.items = [
			{id:'images/background_final.png',src:this.path+'images/background_final.png'},
			{id:'images/bgpapers.png',src:this.path+'images/bgpapers.png'},
			{id:'images/close.png',src:this.path+'images/close.png'},
			{id:'images/hand-pointer.png',src:this.path+'images/hand-pointer.png'},
			{id:'images/mrlee.png',src:this.path+'images/mrlee.png'},
			{id:'images/next.png',src:this.path+'images/next.png'},
			{id:'images/pause_button.png',src:this.path+'images/pause_button.png'},
			{id:'images/play_button.png',src:this.path+'images/play_button.png'},
			{id:'images/prev.png',src:this.path+'images/prev.png'},
			{id:'images/sound_mute.png',src:this.path+'images/sound_mute.png'},
			{id:'images/sound_unmute.png',src:this.path+'images/sound_unmute.png'},
			{id:'images/thumblock.png',src:this.path+'images/thumblock.png'},
			{id:'pages/images/cognizant.png',src:this.path+'pages/images/cognizant.png'},
			{id:'pages/images/page03img01.png',src:this.path+'pages/images/page03img01.png'},
			{id:'pages/images/page15img01.png',src:this.path+'pages/images/page15img01.png'},
			{id:'pages/images/page19img01.png',src:this.path+'pages/images/page19img01.png'},
			{id:'pages/images/page21img01.png',src:this.path+'pages/images/page21img01.png'},
			{id:'pages/images/page23img01.png',src:this.path+'pages/images/page23img01.png'},
			{id:'pages/images/page35img00.png',src:this.path+'pages/images/page35img00.png'},
			{id:'pages/images/page36img01.png',src:this.path+'pages/images/page36img01.png'},
			{id:'pages/images/page40img01.png',src:this.path+'pages/images/page40img01.png'},
			{id:'pages/images/page50img01.png',src:this.path+'pages/images/page50img01.png'},
			{id:'pages/images/page52img01.jpg',src:this.path+'pages/images/page52img01.jpg'}
		];

		this.pushItems("thumbm01c0","images/",".png",8);
		this.pushItems("page01img0","pages/images/",".png",4);
		this.pushItems("page11img0","pages/images/",".png",3);
		this.pushItems("page18img0","pages/images/",".png",3);
		this.pushItems("page27img0","pages/images/",".png",6);
		this.pushItems("page28img0","pages/images/",".png",10);
		this.pushItems("page28img1","pages/images/",".png",6);
		this.pushItems("page31img0","pages/images/",".png",5);
		this.pushItems("page32img0","pages/images/",".png",6);
		this.pushItems("page35circle0","pages/images/",".png",6);
		this.pushItems("page35img0","pages/images/",".png",6);
		this.pushItems("page35img0","pages/images/",".png",6);
		this.pushItems("page35img0","pages/images/",".png",6);
		this.pushItems("page","pages/",".html",56);
		this.pushItems("audio","audio/",".mp3",56);
	};

	Preload.prototype.pushItems = function(name,path,ext,count){
		for (var i = 1; i < count; i++) {
			this.items.push({id:path+name+i+ext,src:this.path+path+name+i+ext});
		};
	};
	Preload.prototype.loadManifest = function(){
		this.queue.loadManifest(this.items);
	};

	Preload.prototype.onComplete = function(event){
		 //console.log('Complete', event);
	};

	Preload.prototype.onError = function(event){
		// console.log('Error', event);
	};

	Preload.prototype.onFileLoad = function(event){
		// console.log('File Loaded', event);
	};

	Preload.prototype.onFileProgress = function(event){
		// console.log('File Progress', event.item.id);
	};

	Preload.prototype.onProgress = function(event){
		// console.log(Math.round(event.loaded * 100));
		currentProgress = event.loaded * 1.5;
		console.log(Math.round(currentProgress * 100));
		var anim = "";
			anim += "-webkit-transition: width 500ms ease-in-out;";
			anim += "-moz-transition: width 500ms ease-in-out;";
			anim += "transition: width 500ms ease-in-out;";
			anim += "width: " + Math.round(currentProgress * 100) + "%;";
		if(Math.round(currentProgress * 100) <= 100){
			document.querySelector('.preloader .progress-bar .mask').style.cssText = anim;
			document.querySelector('.preloader .progress-bar .mask').style.width = Math.round(currentProgress * 100) + "%";
			document.querySelector('.preloader .progress-bar .progress-text').innerHTML = "Initializing Content... " + Math.round(currentProgress * 100) + "%";
		}else if(Math.round(currentProgress * 100) == 101){
			if(!pageShowed){
				pageShowed = true;
				preload.showContent();
			}
		}
	};

	Preload.prototype.showContent = function(){
		setTimeout(function(){
			document.querySelector('.main-wrapper').style.top = "0";
			document.querySelector('.main-wrapper').classList.add("animationFadein");
			document.querySelector('.preloader').style.display = "none";
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'js/variables.js';
			head.appendChild(script);
		},1000)
		setTimeout(function(){
			$("nav a span").after("<div class='blocker'></div>");
		},3000)
	}

	var preload = new Preload("http://jervindizon.github.io/elearning/");
	//var preload = new Preload(""); 

	preload.setPreload();
	preload.loadManifest();

	//-- Refresh contents to extend expiration from cache
	setInterval(function(){
		preload.loadManifest();
	},150000)
})();