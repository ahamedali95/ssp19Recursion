

//LOGICAL OPERATORS

import UIKit

//logical NOT operator - unary prefix operator

//keyword "let" is a constant and cannot be changed

let allowedEntry = false;

if(!allowedEntry)
{
    print("ACCESS DENIED");
}

let enteredDoorCode = true;
let passedRetinaScan = false;
let iAmTomCruise = true;

if(enteredDoorCode && passedRetinaScan || iAmTomCruise)
{
    print("Welcome");
}

else
{
    print("ACCESS DENIED AGAIN");
    
}

let hadDoorKey = false;
let knowsOverridePassword = true;

if(hadDoorKey || knowsOverridePassword)
{
    print("Welcome!!!");
}

else
{
    print("ACCESS DENIED AGAIN!!!");
}


