/* Declare variables below to save the different sections (divs) of your story*/
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");
let button5 = document.querySelector(".option-five");
let button6 = document.querySelector(".option-six");
let title = document.querySelector(".title");
let storyopening = document.querySelector(".story-opening");
let buttonTwoScreen = document.querySelector(".option-two-screen");
let buttonOneScreen = document.querySelector(".option-one-screen");
let buttonThreeScreen = document.querySelector(".option-three-screen");
let buttonFourScreen = document.querySelector(".option-four-screen");
let buttonFiveScreen = document.querySelector(".option-five-screen");
let buttonSixScreen = document.querySelector(".option-six-screen");

button1.onclick=function(){
    buttonOneScreen.style.display="block"; 
    buttonOneScreen.scrollIntoView();
};

button2.onclick=function(){
    buttonTwoScreen.style.display="block"; 
    buttonTwoScreen.scrollIntoView();
};

button3.onclick=function(){
    buttonThreeScreen.style.display="block"; 
    buttonThreeScreen.scrollIntoView();
};

button4.onclick=function(){
    buttonFourScreen.style.display="block"; 
    buttonFourScreen.scrollIntoView();
};

button5.onclick=function(){
    buttonFiveScreen.style.display="block"; 
    buttonFiveScreen.scrollIntoView();
};

button6.onclick=function(){
    buttonSixScreen.style.display="block"; 
    buttonSixScreen.scrollIntoView();
    
};