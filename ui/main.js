console.log('Loaded!');
/*
//Module P5
---------------------------------------------------------
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
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft ='500px';
    
};
----------------------------------------------------------
*/


//Module P6 API

var button = document.getElementById('counter');

button.onclick = function (){
        // create a req obj
        var request = new XMLHttpRequest();
        
        //capture the response and store it in a variable
        request.onreadystatechange = function () {
            if(request.readyState == XMLHttpRequest.DONE){
                //Take some action - to render the span variable count
                if (request.status == 200){
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
            
        };
        
// make the request
        request.open('GET','http://rojasreev.imad.hasura-app.io/', true);
        request.send(null);     
/*
// render the variable in the coorect span
counter = counter +1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
*/
};