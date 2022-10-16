var randomNumber1 = Math.floor(6 * Math.random())+1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomDiceSrc = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceSrc);




var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSrc2 = "images/"+randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);


if(randomNumber1 > randomNumber2){
    document.querySelector(".title").innerHTML = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector(".title").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "It's a tie";
}
