//STRINGS

//a string is traditionally a sequence of characters, either as a literal constant or as some kind of variable.

import UIKit

var str: String = "Hello, playground"

var xValue: Int = 50;

var firstName = "Jack";
var lastName = "Bauer";

var age: Int = 50;
var fullName = firstName + " " + lastName;
var fullName2 = "\(firstName) \(lastName) is \(age)" //String interpolation

fullName.append(" III");

var bookTitle = "heart of darkness";
bookTitle = bookTitle.capitalized;

bookTitle = bookTitle.lowercased();

//Curse words

var sentence = "What the f**k? You b***h";

if(sentence.contains("f**k") || sentence.contains("b***h"))
{
    sentence.replacingOccurrences(of: "f**k", with: "fish");
    sentence.replacingOccurrences(of: "b***h", with: "borito");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////



