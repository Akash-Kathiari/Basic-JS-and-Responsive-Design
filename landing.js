var i=0 ;//start point
var images=[];
var time=2800;

//image list
images[0]= "./images/cat.jpeg";
images[1]= "./images/clock.jpg";
images[2]= "./images/sterio.jpg";

//change image
function changeImg() {
    document.slide.src=images[i];

    if (i<images.length - 1){
        i++
    }else {
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload=changeImg;