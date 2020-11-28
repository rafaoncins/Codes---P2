

//function Function() {
    //setTimeout(setAlert, 4000);
//}

//function setAlert() {
  // alert("Hello World!");
//}



var counter = 0;

function setup(){
    noCanvas();
    var timer = select('#timer');
    timer.html('counter')

    function timeIt(){

    }
    setInterval(timeIt, 1000)
}

