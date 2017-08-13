console.log('Loaded!');
//change the Main Text
var element = document.getElementById('main-txt');
element.innerHTML = "New Value inserted from JS";

//make the image move on click
var img = document.getElementById('madi');
function moveRight(){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = '500px';
};
}
img.onclick = function() {
    var interval = sertInterval(moveRight, 50);
    //img.style.marginLeft ='500px';
    
};