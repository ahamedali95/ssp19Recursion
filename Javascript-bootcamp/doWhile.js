function doWhile(){
	var text = "";
	var i = 0;

	do {
		text += "The number is " + i;
		i++;
	} while (i < 5);

	return text;
}

console.log(doWhile());

f