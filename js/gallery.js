// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
  if (index >= mImages.length) {
    mCurrentIndex = 0;
  }
  if (index < 0) {
    mCurrentIndex = mImages.length - 1
  }
	//Add code here to access the #slideShow element.
  document.getElementById("slideShow")''
	//Access the img element and replace its source
  document.getElementById('photo').src = mImages["mCurrentIndex"]
	//with a new image from your images array which is loaded
	//from the JSON string
	console.log('swap photo');
  var mLastFrameTime = 0;
  mCurrentIndex += 1;
}




// Counter for the mImages array
var mCurrentIndex = 0;




// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();




mRequest.addEventListener("readystatechange", () => {
  if (mRequest.readyState === 4 && request.status === 200) {
    const data = JSON.parse(mRequestText)
    console.log(data);
  } else if (mRequest.readyState === 4) {
    console.log("could not fetch data");
  }
});

mRequest.open("GET", "images.JSON");
mRequest.send();





// Array holding GalleryImage objects (see below).
var mImages = ["location" "description" "date"];
  mImages[0] = document.getElementsByClassName("location").innerHTML = "location: " + mImages[mCurrentIndex].location;
  mImages[1] = document.getElementsByClassName("description").innerHTML = "description: " + mImages[mCurrentIndex].description;
  mImages[2] = document.getElementsByClassName("date").innerHTML = "date: " + mImages[mCurrentIndex].date;




// Holds the retrived JSON information
var mJson;




// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'insert_url_here_to_image_json';





//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}




$(document).ready( function() {
  function fetchJSON("mJson");
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();

});




window.addEventListener('load', function() {

	console.log('window loaded');

}, false);




function iterateJSON() {
  for (let x = 0; x < mJson.length; x++) {
  ;
}
}



function GalleryImage() {
    this.location
    this.description
    this.date
    this.img
	//implement me as an object to hold the following data about an image:
	//1. location where photo was taken
	//2. description of photo
	//3. the date when the photo was taken
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}
