var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;


function myFunc(){

var random_number = Math.random() * 50;
var random_number_integer = Math.floor(random_number);

target = random_number_integer + 1;

while (!finished) {
	guess_input_text = prompt ("Welcome this game! Type a number " + 
								" its have to be between 1 and 50, ok!?");

	guess_input = parseInt (guess_input_text);

	guesses += 1

	finished = check_guess();
}
}

function check_guess(){

if (isNaN(guess_input)){
	alert("Ooooops, I think we have a problem, try to type again, just remember, the number have to be between 1 and 50.")
	return false;
}

if ((guess_input < 1 ) || (guess_input > 50 )){
	alert("Goddamn it, aparently you typed a number that not its in 1 and 50, try again")
	return false;
}

if (guess_input >  target){
			alert("Oh Oh Oh, still not there, try a smaller number")
	return false;
}

if (guess_input < target){
	alert("D'oh, the number is smaller, try a bigger number");
	return false;
}

alert("Great!" + target + ". \n You won! Look, you typed  " + guesses + " times to get the right number");
return true;

}