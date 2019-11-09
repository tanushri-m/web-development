var userInput = document.getElementById("input");
var compValue = document.getElementById("inputs");
var counts = document.getElementById("count");
var image = document.getElementById("image");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var userTurn = document.getElementById("userChance");
var computerTurn = document.getElementById("computerChance");



for(var i = 0;i<21;i++){
   var img = new Image();
   img.src = "./images/matches.png"
   image.appendChild(img);
   
}
var numberOfMatchstick = 21;
var chances = [1,2,3,4];
var max = (numberOfMatchstick-1)/chances[chances.length-1];

one.addEventListener('click', function(){
  numberOfMatchstick= compNumber(one,numberOfMatchstick,max);
});
two.addEventListener('click', function(){
  numberOfMatchstick= compNumber(two,numberOfMatchstick,max);
});
three.addEventListener('click', function(){
  numberOfMatchstick= compNumber(three,numberOfMatchstick,max);
});
four.addEventListener('click', function(){
  numberOfMatchstick= compNumber(four,numberOfMatchstick,max);
});


function compNumber(userData, numberOfMatchstick,max) {
       
    var container = createElement(userData.textContent);
    if(numberOfMatchstick >1){ 
  
  var userValue = parseInt(userData.textContent);
  var compInput = max - userValue;     
  computerTurn.textContent = computerTurn.textContent + "Matchsticks picked by Computer " +compInput;
  numberOfMatchstick = numberOfMatchstick - (userValue+compInput);
    image.textContent = " ";
    for(var i = 0;i<numberOfMatchstick;i++){
      var img = new Image();
      img.src = "./images/matches.png"
      image.appendChild(img);
   }

  }
  
  else{
    userTurn.textContent = "User Lost"
  }

  return numberOfMatchstick;
}


function createElement(value){

  var container = document.createElement("li");
  container.textContent = "Number of matchstick picked by you "+value;
  userTurn.appendChild(container);
  return userTurn;
}




