//functions - building blocks of any program


import UIKit

var str = "Hello, playground"

//Shape 1
var length = 5;
var width = 10;

var area = length * width;

func calculateArea(length: Int, width: Int) -> Int
{
    let area: Int = length * width;
    return area;
}

let newArea = calculateArea(length: 5, width: 4);



