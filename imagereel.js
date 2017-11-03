const NUM_IMAGES = 5;
let curImg = -1;

function advanceReel() {
	curImg = (curImg + 1) % NUM_IMAGES;
	document.getElementById("imagereel").style.backgroundImage = "url(images/image-reel/" + curImg + ".png)";
	setTimeout(advanceReel, 4000);
}