const NUM_IMAGES = 5;
let _curImg = -1;

function initImageReel() {
	_loadImage(0);
	_advanceReel();
}

// http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
function _loadImage(num) {
	if (!(0 <= num && num < NUM_IMAGES)) return;
	let dlImage = new Image();
	dlImage.onload = function() {
		document.getElementById("img-load-area").innerHTML += "<img src=\"" + this.src + "\" />"
		_loadImage(num+1);
	};
	dlImage.src = "/images/image-reel/" + num + ".png";
}

function _advanceReel() {
	_curImg = (_curImg + 1) % NUM_IMAGES;
	document.getElementById("imagereel").style.backgroundImage = "url('/images/image-reel/" + _curImg + ".png')";
	setTimeout(_advanceReel, 4000);
}