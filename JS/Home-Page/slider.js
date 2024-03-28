
var images = ['./Assets/Home-page/Cam-Banner-2.png', './Assets/Home-page/Cam-Banner-3.png', './Assets/Home-page/Cam-Banner-4.png','./Assets/Home-page/Cam-Banner-5.png','./Assets/Home-page/Cam-Banner-6.png','./Assets/Home-page/Cam-Banner-7.png','./Assets/Home-page/Cam-Banner-8.png',];

var x = 0;
var imgs = document.getElementById('product-img-slider');
//The setInterval() calls a function at the intervals (in milliseconds). 
setInterval(slider, 2500);

function slider() {

    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }
    imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}