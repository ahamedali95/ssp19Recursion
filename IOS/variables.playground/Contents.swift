//Variables -  are used to store information to be referenced and manipulated in a computer program.

import UIKit

var message = "Hello, playground"; //"=" assignment operator which assigns the right side value to the left side

//Unary, Binary, Ternary operators

//The above line of code is binary because it works on two targets

//Urany operator (one target)

var isEmpty = true;

isEmpty = !isEmpty;

//Ternary operator (Three targets)

//Example 1

var feelGoodAboutmYSELF = true;

feelGoodAboutmYSELF = isEmpty ? true : false

//Example 2

var bankAccountBalance = 100;

var cashResgisterMessage = bankAccountBalance >= 50 ? "Processing payment" : "Not enough balance";