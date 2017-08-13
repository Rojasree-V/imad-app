console.log('Loaded!');
//change the Main Text
var element = document.getElementById('main-txt');
element.innerHTML = "New Value inserted from JS";

//make the image move on click
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = sertInterval(moveRight, 50);
    //img.style.marginLeft ='500px';
    
};