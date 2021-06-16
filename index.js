
var i = 0;

while(i < document.querySelectorAll(".drum").length){
  document.querySelectorAll(".drum")[i].addEventListener("click", clickHandle);
  i = i + 1;
}

function clickHandle(){
    expression = this.innerHTML;
    check_charachter_pressed(expression);
    buttonAnimation(expression);
}



function check_charachter_pressed(char){

  switch (char) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    default:console.log(this);
  }


}

document.addEventListener("keydown", function(event){
  check_charachter_pressed(event.key);
  buttonAnimation(event.key);
})



function buttonAnimation(char_pressed){
  var activeButton = document.querySelector("." + char_pressed);
  activeButton.classList.toggle("pressed");

  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  }, 100);

}
