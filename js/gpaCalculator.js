var numOfClasses = 0;
var ClassNameArray = [];
var ClassGradeArray = [];
var UserName = -1;
var UserClass = "";
var UserGrade = -1;
var UserGPA = 0;
var sum = 0;
var NumberGrade = 0;

var Calculator = function(num){
	alert("Welcome "+ UserName+ "! Are you ready to find out your GPA?");
	for(var i = 0; i < num; i++){
		UserClass = prompt("Enter the name for your class #"+(i+1),"Enter here");
		ClassNameArray.push(UserClass);
	}
	alert("Now that you have entered the class names let's begin to enter your grades")
	for(var j = 0; j < num ; j++){
		while(UserGrade === -1){
			UserGrade = prompt("Enter the grade for your "+ ClassNameArray[j] + ".", "Enter it Here" );
		}
		if(isNaN(UserGrade) ){
			switch(UserGrade){
				case "A+":
					UserGrade = 4;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "A":
					UserGrade = 4;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "A-":
					UserGrade = 3.7;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "B+":
					UserGrade = 3.5;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "B":
					UserGrade = 3.0;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "B-":
					UserGrade = 2.7;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "C+":
					UserGrade = 2.5;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "C":
					UserGrade = 2.0;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "C-":
					UserGrade = 1.7;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "D+":
					UserGrade = 1.5;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "D":
					UserGrade = 1.0;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "D-":
					UserGrade = 0.7;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				case "F":
					UserGrade = 0;
					ClassGradeArray.push(UserGrade);
					console.log(UserGrade);
					UserGrade = -1;
					break;
				default:
					UserGrade = prompt("Enter the grade for your "+ ClassNameArray[j] + ".", "Enter it Here" );
					break;
					
					
			}
		}else{
			ClassGradeArray.push(UserGrade);
			UserGrade = -1;
		}
		
	}
	console.log(ClassGradeArray);
	for(var k = 0; k < ClassGradeArray.length; k++){
		sum += parseInt(ClassGradeArray[k],10);
		console.log(parseInt(ClassGradeArray[k],10));
		
	}
	console.log(sum);
	
	UserGPA = sum/(ClassGradeArray.length);
	
}

var main = function(){
	while(!isNaN(UserName)){
		UserName = prompt("What is your name?", "Enter here");
	}
	//while(numOfClasses<0 || isNaN(numOfClasses)){
		numOfClasses = prompt("How many classes did you take this semester?", "Enter here");
	//}
	Calculator(numOfClasses);
	alert("Your GPA is: "+ UserGPA);
	
}
main();