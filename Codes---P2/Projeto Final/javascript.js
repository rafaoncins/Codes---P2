document.addEventListener("DOMContentLoaded", function(){

var counter = 0; // variável global
var timeleft = 60000; // variável que vai ajudar a fazer o countdown
var interval = 60000; //intervalo inicial
console.log(timeleft);
function convertSeconds(s){ //função que vai pegar o numero de segundos e converter para minutos
  var min = Math.floor(s / 60); //floor é porque não queremos um numero em decimal, então com o floor vai tirar essa parte decimal
  var sec = s % 60 // quanto segundos faltam pois foi cortado do minuto
  return min + ':' + sec;
}

var ding; // som quando timer acabar
function preload(){ //função para rodar as medias como a musica
  ding = loadSound(''); //colocar o nome do arquivo da musica e tem que ser mp3
}

function setup() { // função principal, na qual set up o timer
    //noCanvas(); // livra-se dos defaults

    var timer = document.querySelector('#timer'); //acessar um elemento particular do html timer
    console.log(timer);
    timer.innerHTML = convertSeconds(timeleft - counter); //countdown

    

    function timeIt() { //essa função timeIt deve acontecer a cada 1000 milisegundos como define o setInterval
      for (counter != timeleft) {
        counter + 1000;
        timer.innerHTML = convertSeconds(timeleft-counter); // a cada segundo vai diminuir o tempo e update
      //return timer
      }
        //if (counter == timeleft) {
          //ding.play();
          //clearInterval(interval);
          //counter = 0;
        }
        
    }
//interval = setInterval(timeIt(), 1000);
}
  setup(timeIt);
  
        
    
    //setInterval(timeIt, 1000); // função do java setInterval que define o intervalo de 1000 milisegundos =  1 segundo

})
