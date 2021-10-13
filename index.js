
//fristDice
var randomNumber1=Math.floor(Math.random()*6)+1;
 
var randomImageSource1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

//second dice

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomImagrSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagrSource2);

if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML="play 1 wins!!..";

}else if(randomNumber1<randomNumber2){

    document.querySelector("h1").innerHTML="play 2 Wins!!..";

}else {
 document.querySelector("h1").innerHTML="Draw!."

}