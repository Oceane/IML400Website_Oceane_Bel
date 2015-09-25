var myArray = ["You will find love", "You will succeed at your next exam", "Today is your lucky day","You are a very smart person", "Your generosity is your greatest asset","You are the greatest hero that ever lived!", "You are gonna be able to travel far to an unknown place", "You are gonna have great success in the near future"];
var numberArray = [];
var letterArray = [];
var tata = "";
var name = "";
var UserNum = -1;
var CuddyArray = ["yes","no"];
var userColor = "";
var creationofArray = function(num){
	for(var i = 0; i < num; i++){
		numberArray.push(i +"...  ");
	}
}
var creationOfLetterArray = function(letter){
	for(var i = 0; i <letter.length; i++){
		letterArray.push(letter.substring(i,i+1)+"... ");
	}
}
var fortune = function(){
	var random = Math.floor(Math.random() * 8);
	creationofArray(random);
	document.getElementById('Welcome').innerHTML = "Welcome "+ name+"! Here is what the future has in store for you: ";
	for(var j = 0; j<numberArray.length; j++){
		tata += numberArray[j];
	}
	document.getElementById('Letter').innerHTML = " ";
	document.getElementById('blah').innerHTML = " ";
	document.getElementById('tada').innerHTML = tata;
	document.getElementById('demo').innerHTML = myArray[random];
	document.getElementById('date').innerHTML = Date();
	
}
var cuddy = function(){
	var LetterString = "";
	var NumBlah = "";
	while(!isNaN(userColor)|| !(userColor === "blue") && !(userColor === "red")&& !(userColor === "green")&& !(userColor === "yellow")){
		userColor = prompt("Choose a color between 'blue', 'red', 'green' or yellow: ", "Enter it here");
		userColor = userColor.toLowerCase();
	}
	userColor = userColor.toUpperCase();
	creationOfLetterArray(userColor);
	for(var j = 0; j<letterArray.length; j++){
		LetterString += letterArray[j];
	}
	document.getElementById('Letter').innerHTML = LetterString;
	//while(UserNum <0 || UserNum > 8){
		if(userColor === "blue" || userColor === "yellow"){
			while(!(UserNum=== "5") && !(UserNum=== "6")&& !(UserNum=== "1")&& !(UserNum=== "2")){
				UserNum = prompt("Choose between 5, 6, 1 or 2", "Enter here");
			}
		}else{
			while(!(UserNum=== "4") && !(UserNum=== "3")&& !(UserNum=== "7")&& !(UserNum=== "8")){
				UserNum = prompt("Choose between 4, 3, 7 or 8", "Enter here");
			}
		}
	//}
	//var UserQuestion = prompt("What is your question?", "Enter here");
	//var Numm = UserNum%2;
	creationofArray(UserNum);
	for(var j = 0; j<numberArray.length; j++){
		NumBlah += numberArray[j];
	}
	document.getElementById('CountUp').innerHTML = NumBlah;
	document.getElementById('Welcome').innerHTML =" ";
	document.getElementById('blah').innerHTML = " ";
	document.getElementById('tada').innerHTML =  "Welcome "+ name+"! Here is what the future has in store for you: ";
	document.getElementById('demo').innerHTML = myArray[UserNum-1];
	document.getElementById('date').innerHTML = Date();
}
var main = function(){
	name = prompt("What is your name?", "Enter your name here");
	var userChoice = prompt("Hello "+name+"! Enter 'a' for a random fortune telling or 'b' for cootie catcher", "Enter here"); 
	userChoice.toLowerCase();
	if(userChoice === "a"){
		fortune();
	}else if(userChoice === "b"){
		cuddy();
	}else{
		document.getElementById('blah').innerHTML = "I don't understand let me tell you your future then: ";
		fortune();
	}
}
main();