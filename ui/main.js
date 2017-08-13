console.log('Loaded!');
//change the Main Text
var element = document.getElementById('main-txt');
element.innerHTML = "New Value inserted from JS";

//make the image move on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft ='500px';
    
};